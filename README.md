# ML5 Tutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

The NPM packages are available for ML5 and P5 but aren't setup for angular. This will have some common functions and objects for use in Typescript.

`/shared` contains files for these libraries

## Navigation

The landing page currently doesn't have much. You have 2 options above.

### P5 Dashboard

P5 Dashboard will bring you to an area the has a sub nav of dashboard or examples.

Clicking on examples will bring you to the example page and the left contains different examples.

### ML5 Dashboard

ML5 Dashboard will bring you to an area the has a sub nav of dashboard or sandbox.

Sandbox will have some examples - but is mainly for experimenting

## P5 Library

The `p5` library mainly lives in the `/shared` directory.

### /classes

#### `P5Container` 

Acts as your main access to the `p5` javascript library. It requires a sketch function
on creation since it uses that sketch to make the canvas and the display. It also can take in an
element id - otherwise it puts the canvas anywhere on the screen. A `default` is provided for
quick instantiation. My need to use `tearDown` when switching between to remove the old canvas.

#### `P5Liquid`

A class made for the example but could prove useful later - sets up the parameters for a liquid.
Allows you to check if it contains an item, calculates the drag on an item and will display itself.

#### `P5Mover`

A class made for the example but could prove useful later - sets up parameters for an object that
moves and requires forces to act on it. Creates vectors for position, velocity, and acceleration.
It will change acceleration, update itself, display as a cirlce based on mass, and checks when it hits an edge. 


### /constants

Basic constants used in processing - non-infinite numbers such as `π`, `2π` | `τ`, `π/2`, `π/4`


#### /interfaces

#### `P5Camera`

#### `P5Color`

#### `P5Element`

Parent class to many items in this library

#### `P5File`

#### `P5Font`

#### `P5Geometry`

Used for geometric graphics

#### `P5Image`

Used to display images

#### `P5MediaElement`

Used for video and not image display items

#### `P5NumberDict`

Basically just a number map

#### `P5PrintWriter`

#### `P5Renderer`

Another top level class like `P5Element`

#### `P5Shader`

#### `P5Sketch`

The meat of the canvas. This is the largest file and defines all the process that you want to do.

#### `P5StringDict`

Basically just a string map

#### `P5Table`

#### `P5TypedDict`

A map that has a specified type

#### `P5Vector`

#### `P5XML`




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Dependencies & References

### [p5](https://www.npmjs.com/package/p5)

* [additional canvas context](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
* [how to use p5 in angular](https://stackoverflow.com/questions/49472433/how-to-use-p5-js-in-angular-5-application)

### [ml5](https://www.npmjs.com/package/ml5)

### Graphs

* [Types of Graphs](https://visme.co/blog/types-of-graphs/)
