const fs = require('fs');
const canvasLib = require('canvas');

const width = 1500;
const height = 1500;

const rows = 20;
const columns = 20;

const xStep = width/rows;
const yStep = height/columns;

var colors = ['#A6C534', '#B3D255', '#C0E078', '#D2EE92', '#E4FBAD', '#CAD246', '#D2DC5C', '#D8E673', '#E2F084', '#ECFA97', '#9AB8B9', '#556F90', '#1E4D6C', '#2B394B', '#2B394B'];

const canvas = canvasLib.createCanvas(width, height);
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0, 0, width, height);

function drawTriangleFalling(xIndex, yIndex) {
    context.beginPath();
    context.moveTo(xStep * xIndex, yStep * yIndex);
    context.lineTo(xStep * xIndex, yStep * (yIndex + 1));
    context.lineTo(xStep * (xIndex + 1), yStep * (yIndex + 1));
    context.closePath();

    context.fillStyle = colors[Math.floor((colors.length - 1) * Math.random())];
    context.fill();

    context.beginPath();
    context.moveTo(xStep * xIndex, yStep * yIndex);
    context.lineTo(xStep * (xIndex + 1), yStep * yIndex);
    context.lineTo(xStep * (xIndex + 1), yStep * (yIndex + 1));
    context.closePath();

    context.fillStyle = colors[Math.floor((colors.length - 1) * Math.random())];
    context.fill();
}

function drawTriangleRising(xIndex, yIndex) {
    context.beginPath();
    context.moveTo(xStep * xIndex, yStep * (yIndex + 1));
    context.lineTo(xStep * xIndex, yStep * yIndex);
    context.lineTo(xStep * (xIndex + 1), yStep * yIndex);
    context.closePath();

    context.fillStyle = colors[Math.floor((colors.length - 1) * Math.random())];
    context.fill();

    context.beginPath();
    context.moveTo(xStep * xIndex, yStep * (yIndex + 1));
    context.lineTo(xStep * (xIndex + 1), yStep * (yIndex + 1));
    context.lineTo(xStep * (xIndex + 1), yStep * yIndex);
    context.closePath();

    context.fillStyle = colors[Math.floor((colors.length - 1) * Math.random())];
    context.fill();
}

// create the triangles
for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++) {
        if (y % 2 == 0) {
            if (x % 2 == 0) {
                drawTriangleFalling(x, y);
            } else {
                drawTriangleRising(x, y);
            }
        } else {
            if (x % 2 != 0) {
                drawTriangleFalling(x, y);
            } else {
                drawTriangleRising(x, y);
            }
        }
    }
}

// create the circles
for (let i = 0; i < 0.5 * columns * rows; i++) {
    let size = Math.random() * (xStep/1.5 - xStep/10) + xStep/10;

    let color = colors[Math.floor((colors.length - 1) * Math.random())];
    var bigint = parseInt(color.substr(1), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.9)';

    context.beginPath();
    context.arc(width * Math.random(), height * Math.random(), size, 0, 2 * Math.PI);
    context.fill();
}

let vuforiaWidth = (127/1500 * width) / 1000;
console.log("Vuforia width: " + vuforiaWidth);

//context.fillStyle = '#fff'
//context.font = 'bold 30pt Menlo'
//context.fillText('flaviocopes.com', 600, 530)

const buffer = canvas.toBuffer('image/png'); //, { filters: canvas.PNG_FILTER_SUB, quality: 0.6 }
fs.writeFileSync('./images/test.png', buffer);