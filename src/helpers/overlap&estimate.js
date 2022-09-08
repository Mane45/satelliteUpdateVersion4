// import {propagate, gstime, eciToGeodetic, radiansToDegrees } from 'satellite.js';
import { getSatelliteLocation } from "../helpers/satelliteCoords";
import { twoline2satrec } from "satellite.js";
//import Graphic from "esri/Graphic";
import Graphic from "@arcgis/core/Graphic";
import { intersects } from "@arcgis/core/geometry/geometryEngine"
let satelliteData = require("../configs/config.json")
//let layer = props.map.layers.items[0];



function overlap(text, layer) {
    document.getElementById("text").style.display = "block";
    let isIntersecting;
    setInterval(() => {
        let names = [];
        function namesArr(name) {
            names.push(name);
        }
        layer.queryFeatures().then(result => {
            let geometry0 = result.features[0].geometry;
            satelliteData.forEach(item => {
                //console.log(geometry0);
                let loc = getSatelliteLocation(twoline2satrec(item.lines.line1, item.lines.line2), new Date())
                //console.log(loc);
                let x1, x2, y1, y2;
                if (loc.x < 0) {
                    x1 = loc.x + +item.area.width;
                    x2 = loc.x - +item.area.width;
                } else {
                    x1 = loc.x - +item.area.width;
                    x2 = loc.x + +item.area.width;
                }
                if (loc.y < 0) {
                    y1 = loc.y - +item.area.height;
                    y2 = loc.y + +item.area.height;
                } else {
                    y1 = loc.y + +item.area.height;
                    y2 = loc.y - +item.area.height;
                }
                let polygon = new Graphic({
                    geometry: {
                        type: "polygon",
                        rings: [
                            [x1, y2],
                            [x1, y1],
                            [x2, y1],
                            [x2, y2]
                        ]
                    },
                    symbol: {
                        type: "simple-fill",
                        color: [227, 139, 79, 0],
                        outline: {
                            //color: props.graphicProperties.color,
                            color: [176, 252, 56],
                            //color: [Math.floor(Math.random() * 250), Math.floor(Math.random() * 250), Math.floor(Math.random() * 250), 0.7],
                            width: 2
                        }
                    }
                });
                let geometry1 = polygon.geometry;
                isIntersecting = intersects(geometry0, geometry1);
                isIntersecting ? namesArr(item.lines.name) : document.getElementById("putText1").innerHTML = "";
            });
            console.log(names.toString().replace(/,/g, ", "))
            document.getElementById("putText1").innerHTML = `${names.toString().replace(/,/g, ", ")} satellites aren't overlapping you boundary`;

        })

    }, 500)

}

function estimate(text) {
    console.log(text)
}

const handlePoint = (e) => {
 console.log(455)
}

export { overlap, estimate }