shoeStatus = "";
shoeImage = "";

function back() {window.location = "index.html";}

function preload() {
    shoeImage = loadImage("shoes.jpg");
}

function setup() {
    canvas = createCanvas(450, 300);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("shoesStatus").innerHTML = "Status: Detecting Objects...";
}

function modelLoaded() {
    shoeStatus = true;
    objectDetector.detect(shoeImage, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}