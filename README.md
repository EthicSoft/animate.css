# animate.js

## Requirements

jQuery

## Basic Usage
1. Include in your document's `<head>`

  ```html
  <head>
    <link rel="stylesheet" href="animate.min.css">
    <script src="animate.js"></script>
  </head>
  ```

2. call `$(...).animateCss(EFFECT_NAME)` to the element you want to animate.

   You may also add the word `infinite` after EFFECT_NAME for an infinite loop.
 
   Use optional "in" or "out" parameters to apply the effect while showing or hiding.

3. These are the availables effect names:

  * `bounce`
  * `bounceIn`
  * `bounceInDown`
  * `bounceInLeft`
  * `bounceInRight`
  * `bounceInUp`
  * `bounceOut`
  * `bounceOutDown`
  * `bounceOutLeft`
  * `bounceOutRight`
  * `bounceOutUp`
  * `fadeIn`
  * `fadeInDown`
  * `fadeInDownBig`
  * `fadeInLeft`
  * `fadeInLeftBig`
  * `fadeInRight`
  * `fadeInRightBig`
  * `fadeInUp`
  * `fadeInUpBig`
  * `fadeOut`
  * `fadeOutDown`
  * `fadeOutDownBig`
  * `fadeOutLeft`
  * `fadeOutLeftBig`
  * `fadeOutRight`
  * `fadeOutRightBig`
  * `fadeOutUp`
  * `fadeOutUpBig`
  * `flash`
  * `flipInX`
  * `flipInY`
  * `flipOutX`
  * `flipOutY`
  * `headShake`
  * `hinge`
  * `jackInTheBox`
  * `jello`
  * `lightSpeedIn`
  * `lightSpeedOut`
  * `pulse`
  * `rotateIn`
  * `rotateInDownLeft`
  * `rotateInDownRight`
  * `rotateInUpLeft`
  * `rotateInUpRight`
  * `rotateOut`
  * `rotateOutDownLeft`
  * `rotateOutDownRight`
  * `rotateOutUpLeft`
  * `rotateOutUpRight`
  * `rollIn`
  * `rollOut`
  * `rubberBand`
  * `shake`
  * `slideInDown`
  * `slideInLeft`
  * `slideInRight`
  * `slideInUp`
  * `slideOutDown`
  * `slideOutLeft`
  * `slideOutRight`
  * `slideOutUp`
  * `swing`
  * `tada`
  * `wobble`
  * `zoomIn`
  * `zoomInDown`
  * `zoomInLeft`
  * `zoomInRight`
  * `zoomInUp`
  * `zoomOut`
  * `zoomOutDown`
  * `zoomOutLeft`
  * `zoomOutRight`
  * `zoomOutUp`

Full example:
```html
<h1 id="title">Example</h1>
```
`$("#title").animateCss("bounce");//Bounce one`

Loop:
`$("#title").animateCss("bounce infinite");//Bounce loop`

Show:
`$("#title").animateCss("bounceIn","in");//Bounce show`


Hide:
`$("#title").animateCss("bounceOut","out");//Bounce hide`

## By
Luca Colombi from (http://ethicsoft.it)

## License
Animate.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)

