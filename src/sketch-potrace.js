import UI from "sketch/ui"
import Document from "sketch/dom"

const potrace = require("potrace")

export default function() {
    doPotrace(potrace.trace, "traced")
}

export function onPosterize() {
    doPotrace(potrace.posterize, "posterized")
}

function replaceImageWithSVG(image, svgString) {
    const { x, y, width, height } = image.frame
    const group = Document.createLayerFromData(svgString, "svg")
    group.name = image.name
    group.parent = image.parent
    group.index = image.index + 1
    group.frame.x = x + (width - group.frame.width) / 2
    group.frame.y = y + (height - group.frame.height) / 2
    image.hidden = true
}

function doPotrace(action, verb) {
    const selection = Document.getSelectedDocument().selectedLayers

    const selectedImages = selection
        .map(layer => layer)
        .filter(layer => layer.type === "Image")

    if (selectedImages.length === 0) {
        UI.message("⚠️ Select one or more bitmaps")
    } else {
        const exportOptions = { formats: "png", output: false }
        selectedImages.forEach(image => {
            const buffer = Document.export(image, exportOptions)

            action(buffer, function(err, svgString) {
                if (err) throw err
                replaceImageWithSVG(image, svgString)
            })
        })

        const noun = (selectedImages.length === 1) ? "bitmap" : "bitmaps"
        UI.message(`${selectedImages.length} ${noun} ${verb} 🙌`)
    }
}
