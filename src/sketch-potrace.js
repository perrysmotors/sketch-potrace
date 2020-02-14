import UI from "sketch/ui"
import Document from "sketch/dom"

const potrace = require("potrace")

export default function() {
    doPotrace()
}

export function onPosterize() {
    doPotrace(true)
}

function replaceImageWithSVG(image, svgString) {
    const group = Document.createLayerFromData(svgString, "svg")
    group.name = image.name
    group.parent = image.parent
    group.index = image.index + 1
    group.frame.x = image.frame.x
    group.frame.y = image.frame.y
    image.hidden = true
}

function doPotrace(posterize = false) {
    const action = posterize ? "posterized" : "traced"

    const selection = Document.getSelectedDocument().selectedLayers
    const exportOptions = { formats: "png", output: false }
    const selectedImages = selection
        .map(layer => layer)
        .filter(layer => layer.type === "Image")

    if (selectedImages.length === 0) {
        UI.message("⚠️ Select one or more bitmaps")
    } else {
        selectedImages.forEach(image => {
            const buffer = Document.export(image, exportOptions)

            if (posterize) {
                potrace.posterize(buffer, function(err, svgString) {
                    if (err) throw err
                    replaceImageWithSVG(image, svgString)
                })
            } else {
                potrace.trace(buffer, function(err, svgString) {
                    if (err) throw err
                    replaceImageWithSVG(image, svgString)
                })
            }
        })

        if (selectedImages.length === 1) {
            UI.message(`1 bitmap ${action} 🙌`)
        } else {
            UI.message(`${selectedImages.length} bitmaps ${action} 🙌`)
        }
    }
}
