import {Component, OnDestroy, OnInit} from '@angular/core'
import * as P5 from 'p5'
import 'p5/lib/addons/p5.sound'
import {P5Image, P5Sketch} from '../../../shared/interfaces'
import {CanvasService} from '../../../services/canvas-service/canvas.service'
import {P5Container} from '../../../shared/classes'
import {getML5Engine, ML5Engine} from '../../../shared/interfaces/ml5/ml5-engine'
import {ML5NeuralNetworkTask} from '../../../shared/interfaces/ml5/ml5-neural-network'
import {CaptureType} from '../../../shared/interfaces/p5/p5-sketch'
import {ML5Pose} from '../../../shared/interfaces/ml5/ml5-pose-net'
import {Runnable} from '../../../shared/types'

declare let ml5: ML5

interface ML5 {
  imageClassifier: (classifierName: string) => any
}

@Component({
  selector: 'app-ml5-sandbox',
  templateUrl: './ml5-sandbox.component.html',
  styleUrls: ['./ml5-sandbox.component.sass']
})
export class ML5SandboxComponent implements OnInit, OnDestroy {
  classifier
  img: P5Image
  canvas
  container: P5Container = P5Container.default()
  ml5: ML5Engine

  featureExtractorExampleShow = false

  knnClassificationWithPoseNetExampleShow = true

  constructor(private canvasService: CanvasService) {
    this.ml5 = getML5Engine()
    // this.canvasService.addOnePreloadFn(s => {
    //   this.classifier = ml5.imageClassifier('MobileNet')
    //   this.img = s.loadImage('assets/images/bird.png')
    // })
    //
    // this.canvasService.addOneSetupFn(s => {
    //   this.classifier.classify(this.img, this.gotResults)
    //   s.image(this.img, 0, 0)
    // })
  }

  ngOnInit(): void {
    this.container = new P5Container((s: P5Sketch) => {
      

    }, 'ml5-test')
  }

  ngOnDestroy(): void {
    this.container.tearDown()
  }



  gotResults(error, results) {
    if (error) {
      console.error(error)
    } else {
      console.log(results)
    }
  }

  neuralNetworkExample() {
    this.container = new P5Container((s: P5Sketch) => {
      let nn

      const options = {
        inputs: 1,
        outputs: 2,
        task: ML5NeuralNetworkTask.Classification,
        debug: true
      }

      s.setup = () => {
        s.createCanvas(400, 400)
        nn = this.ml5.neuralNetwork(options)

        console.log('the neural network', nn)
        createTrainingData()
        nn.normalizeData()

        const trainingOptions = {
          batchSize: 24,
          epochs: 32
        }

        nn.train(trainingOptions, () => nn.classify([300], (err, result) => console.log(result)))
      }

      const createTrainingData = () => {
        for (let i = 0; i < 400; i++) {
          if (i % 2 === 0) {
            nn.addData([s.random(0, s.width / 2)], ['left'])
          } else {
            nn.addData([s.random(s.width / 2, s.width)], ['right'])
          }
        }
      }

    }, 'ml5-test')
  }

  featureExtractorExample() {
    this.container = new P5Container((s: P5Sketch) => {
      let featureExtractor
      let regressor
      let video
      let loss
      let slider
      let samples = 0
      let positionX = 140

      s.setup = () => {
        s.createCanvas(340, 280)
        // create a video element
        video = s.createCapture('VIDEO')
        // append it to the videoContainer DOM element
        video.hide()
        // extract the features from MobileNet
        featureExtractor = this.ml5.featureExtractor('MobileNet', modelReady)
        // create a new regressor using those features and give the video we want to use
        regressor = featureExtractor.regression(video, videoReady)
        // create the ui buttons
        setupButtons()
      }

      s.draw = () => {
        s.image(video, 0, 0, 340, 280)
        s.noStroke()
        s.fill(255, 0, 0)
        s.rect(positionX, 120, 50, 50)
      }

      const modelReady = () => s.select('#modelStatus').html('Model loaded!')

      const videoReady = () => s.select('#videoStatus').html('Video ready!')

      const setupButtons = () => {
        slider = s.select('#slider')

        // when the dog button is pressed, add the current frame from the video with a label of 'dog' to the classifier
        s.select('#addSample').mousePressed(() => {
          regressor.addImage(slider.value())
          s.select('#amountOfSamples').html('' + samples++)
        })

        // train button
        s.select('#train').mousePressed(() => {
          regressor.train(lossValue => {
            if (lossValue) {
              loss = lossValue
              s.select('#loss').html('Loss: ' + lossValue)
            } else {
              s.select('#loss').html('Done Training! Final Loss: ' + loss)
            }
          })
        })

        s.select('#buttonPredict').mousePressed(predict)
      }

      const gotResults = (err, result) => {
        if (err) { console.error(err) }

        const item = result?.value

        if (item) {
          positionX = s.map(item, 0, 1, 0, s.width)
          slider.value(item)
          predict()
        }
      }

      const predict = () => regressor.predict(gotResults)

    }, 'ml5-test')
  }

  // not working
  poseNetExample() {
    this.container = new P5Container((s: P5Sketch) => {
      let video
      const knnClassifier = this.ml5.KNNClassifier()
      let poseNet
      let poses: {pose: ML5Pose, skeleton: any}[] = []

      s.setup = () => {
        s.noLoop()
        const canvas = s.createCanvas(640, 480)
        canvas.parent('#videoContainer2')
        video = s.createCapture(CaptureType.VIDEO)
        video.size(s.width, s.height)

        // create the UI buttons
        createButtons()

        // create a new poseNet method with a single detection
        poseNet = this.ml5.poseNet(video, modelReady)

        console.log('pose net', poseNet, video)

        // this sets up an event that fills the global variable "poses"
        // with an array every time new poses are detected
        poseNet.on('pose', results => {
          poses = results
        })

        // hide the video element, and just show the canvas
        video.hide()
      }

      s.draw = () => {
        s.image(video, 0, 0, s.width, s.height)

        // we can call both functions to draw all keypoints and the skeletons
        drawKeypoints()
        drawSkeleton()
      }

      // A util function to create UI buttons
      const createButtons = () => {
        const createButton = (id: string, mousePressedRunnable: Runnable) => {
          const button = s.select(id)
          button.mousePressed(mousePressedRunnable)
        }

        // when the A button is pressed, add the current frame
        // from the video with a label of "A" to the classifier
        createButton('#addClassA', () => addExample('A'))

        // when the B button is pressed, add the current frame
        // from the video with a label of "B" to the classifier
        createButton('#addClassB', () => addExample('B'))

        // reset buttons
        createButton('#resetA', () => clearLabel('A'))

        createButton('#resetB', () => clearLabel('B'))

        // predict button
        createButton('#buttonPredict2', classify)

        // clear all classes button
        createButton('#clearAll', clearAllLabels)
      }

      // FUNCTION: Add the current frame from the video to the classifier
      const addExample = label => {
        const poseArray = convertPoses()

        // add an example with a label to the classifier
        knnClassifier.addExample(poseArray, label)
      }

      // region Clear Methods
      // FUNCTION: Clear the examples in one label
      const clearLabel = classLabel => {
        knnClassifier.clearLabel(classLabel)
        updateCounts()
      }

      // FUNCTION: Clear all the examples in all labels
      const clearAllLabels = () => {
        knnClassifier.clearAllLabel()
        updateCounts()
      }

      // FUNCTION: Update the example count for each label
      const updateCounts = () => {
        const counts = knnClassifier.getCountByLabel()

        s.select('#exampleA').html(counts['A'] || 0)
        s.select('#exampleB').html(counts['B'] || 0)
      }

      // endregion Clear Methods

      // FUNCTION: Predict the current frame
      const classify = () => {
        // get the total number of labels from knnClassifier
        const numLabels = knnClassifier.getNumLabels()

        if (numLabels <= 0) {
          console.error('There is no examples in any label')
          return
        }

        const poseArray = convertPoses()

        // use knnClassifier to classify which label do these features belong to
        // you can pass in a callback function `gotResults` to knnClassifier.classify function
        knnClassifier.classify(poseArray, gotResults)
      }

      // FUNCTION: Show the results
      const gotResults = (err, result: {confidencesByLabel?: any, label?: any}) => {
        // display any error
        if (err) {
          console.error(err)
        }

        if (result.confidencesByLabel) {
          const confidences = result.confidencesByLabel
          // result.label is the label that has the highest confidence
          if (result.label) {
            s.select('#result').html(result.label)
            s.select('#confidence').html(`${confidences[result.label] * 100} %`)
          }

          s.select('#confidenceA').html(`${confidences['A'] ? confidences['A'] * 100 : 0} %`)
          s.select('#confidenceB').html(`${confidences['B'] ? confidences['B'] * 100 : 0} %`)
        }

        classify()
      }

      // FUNCTION: Convert poses results to a 2d array [[score0, x0, y0],...,[score16, x16, y16]]
      const convertPoses = () => poses[0].pose.keypoints.map(p => [p.score, p.position.x, p.position.y])

      // FUNCTION: Add video loading information
      const modelReady = () => {
        s.select('#status').html('model Loaded')
      }

      // region Draw Methods

      // FUNCTION: A function to draw ellipses over the detected keypoints
      const drawKeypoints = () => {
        // loop through all the poses detected
        poses.forEach(pose => {
          // for each pose detected, loop through all the keypoints
          pose.pose.keypoints.forEach(keypoint => {
            // a keypoint is an object describing a body part (like rightArm or leftShoulder)
            // only draw an ellipse if the pose probability is bigger than 0.2
            if (keypoint.score > 0.2) {
              s.fill(255, 0, 0)
              s.noStroke()
              s.ellipse(keypoint.position.x, keypoint.position.y, 10, 10)
            }
          })
        })
      }

      // FUNCTION: A function to draw the skeletons
      const drawSkeleton = () => {
        // loop through all the skeletons detected
        poses.forEach(pose => {
          const  skeleton = pose.skeleton

          skeleton.forEach(bone => {
            const partA = bone[0]
            const partB = bone[1]

            s.stroke(255, 0, 0)

            s.line(partA.position.x, partA.position.y, partB.position.x, partB.position.y)
          })
        })
      }

      // endregion Draw Methods

    }, 'ml5-test')
  }

  imageClassifier() {
    this.container = new P5Container((s: P5Sketch) => {
      s.preload = () => {
        console.log('preload sketch')
        this.classifier = ml5.imageClassifier('MobileNet')
        this.img = s.loadImage('assets/images/bird.png')
      }

      s.setup = () => {
        s.createCanvas(400, 400)
        this.classifier.classify(this.img, this.gotResults)
        s.image(this.img, 0, 0)

        console.groupCollapsed('setup sketch complete')
        console.log(s, this.img)
        console.groupEnd()
      }

      // s.draw = () => {
      //   console.log('draw sketch')
      //   s.background(255)
      //   s.rect(100, 100, 100, 100)
      // }
    }, 'ml5-test')
  }
}
