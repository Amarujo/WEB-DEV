var drawing = false;
function setup() {
    createCanvas(600,600);
    print("Setup function");
    background(255,0,155);
}

function draw() {
    if(!drawing){
        background(255,0,155,[5]);
    }
    fill(255,255,0);
    ellipse(mouseX,mouseY,50,50,[2]);
    // stroke(255,255,0);
    // fill(0,255,0);
    // rect(50,50,150,75);
    // line(385,376,40,180);
    // arc(300,300,200,90,360,true);
}

function mousePressed() {
    drawing = true;
    ellipse(mouseX,mouseY,50,50,[10]);
    // background(255,0,155);
}
function mouseReleased() {
    drawing = false;
}