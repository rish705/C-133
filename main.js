objects = []

function preload() {
    img = loadImage("")
}

function setup() {
    canvas = createCanvas(600, 400)
    canvas.center()
}

function draw() {
    image(img, 0, 0, 600, 400)
    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "status:Object Detected"
            fill("#FF0000")
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y + 15)
            stroke("#FF0000")
            noFill()
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height - 50)
        }
    }
}