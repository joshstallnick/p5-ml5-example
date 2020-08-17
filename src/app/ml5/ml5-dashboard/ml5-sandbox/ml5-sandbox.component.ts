import {Component, OnDestroy, OnInit} from '@angular/core'
import * as P5 from 'p5'
import 'p5/lib/addons/p5.sound'
import {P5Image, P5Sketch} from '../../../shared/interfaces'
import {CanvasService} from '../../../services/canvas-service/canvas.service'
import {P5Container} from '../../../shared/classes'
import {getML5Engine, ML5Engine} from '../../../shared/interfaces/ml5/ml5-engine'
import {ML5NeuralNetworkTask} from '../../../shared/interfaces/ml5/ml5-neural-network'
import {CaptureType} from '../../../shared/interfaces/p5/p5-sketch'

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
