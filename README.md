# Potrace Plugin for Sketch

Potrace for Sketch is a bitmap tracing plugin. It converts bitmap images into monochrome vector graphics. 

## Installation

* [Download](../../releases/latest/download/potrace.sketchplugin.zip) the latest release of the plugin
* Un-zip
* Double-click on `potrace.sketchplugin`

or...

[![Install Potrace with Sketchpacks](http://sketchpacks-com.s3.amazonaws.com/assets/badges/sketchpacks-badge-install.png "Install Potrace with Sketchpacks")](https://sketchpacks.com/perrysmotors/sketch-potrace/install)

## Features
- Trace
- Posterize

## How it works

- Select one or more bitmap images and run the plugin. 
- Potrace places a new vector graphic on top of each bitmap, and hides the orginal. 
- Potrace only processes bitmaps. If you want to process layer with an image fill, use `Layer > Flatten Selection to Bitmap` first.

## Example

| **Original image**        | **Potrace output**           | **Posterized output**                   |
|---------------------------|------------------------------|-----------------------------------------|
| ![](https://github.com/Iwasawafag/node-potrace/blob/master/test/sources/yao.jpg) | ![](https://cdn.rawgit.com/tooolbox/node-potrace/9ee822d/test/example-output.svg) | ![](https://cdn.rawgit.com/tooolbox/node-potrace/9ee822d/test/example-output-posterized.svg) |

(Example image inherited from [online demo of the browser version][potrace-js-demo])

---

**If you are using this plugin, please 'star' the project**. It's a simple way to help me see how many people are using it.

If you ***love*** this plugin, why not shout me a coffee ☕️ via [PayPal](https://www.paypal.me/perrysmotors/2) to share the love!

<a href="https://www.paypal.me/perrysmotors/2">
  <img width="160" height="41" src="https://user-images.githubusercontent.com/12557727/39295119-7e115bca-4935-11e8-9fe9-802d667ac22c.png">
</a>

---

## Thanks to

- @Iwasawafag for the [NodeJS-compatible fork of Potrace in Javascript][node-potrace]
- Peter Selinger for the [original Potrace tool and algorithm][potrace]
- @kilobtye for the original [javascript port][potrace-by-kilobtye]

## License

The GNU General Public License version 2 (GPLv2). Please see [License File](LICENSE) for more information.

[node-potrace]: https://github.com/Iwasawafag/node-potrace
[potrace]: http://potrace.sourceforge.net/
[potrace-by-kilobtye]: https://github.com/kilobtye/potrace
[potrace-js-demo]: http://kilobtye.github.io/potrace/