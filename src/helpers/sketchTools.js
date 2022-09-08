
// import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
// import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"

// const sketchLayer = new GraphicsLayer();
// const sketchViewModel = new SketchViewModel({
//     layer: sketchLayer,
//     view: view,
//     pointSymbol: {
//         type: "simple-marker",
//         style: "circle",
//         size: 10,
//         color: [255, 255, 255, 0.8],
//         outline: {
//             color: [211, 132, 80, 0.7],
//             size: 10
//         }
//     },
//     polylineSymbol: {
//         type: "simple-line",
//         color: [211, 132, 80, 0.7],
//         width: 6
//     },
//     polygonSymbol: {
//         type: "polygon-3d",
//         symbolLayers: [
//             {
//                 type: "fill",
//                 material: {
//                     color: [255, 255, 255, 0.8]
//                 },
//                 outline: {
//                     color: [211, 132, 80, 0.7],
//                     size: "10px"
//                 }
//             }
//         ]
//     },
//     defaultCreateOptions: { hasZ: false }
// });

function geometryButtonsClickHandler(event) {
    const geometryType = event.target.value;
    console.log(geometryType);
    //sketchViewModel.create(geometryType);
}

function drawPoint(event) {
    geometryButtonsClickHandler(event);
}

function drawPolyline(event) {
    geometryButtonsClickHandler(event);
}

function drawPolygon(event) {
    geometryButtonsClickHandler(event);
}

export { drawPoint, drawPolyline, drawPolygon }