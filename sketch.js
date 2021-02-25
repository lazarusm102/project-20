var groundImage;


function preload() {
    //load the images here
    groundImage = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    ground=createSprite(500,400);
    ground.addImage("ground",groundImage);
    ground.scale=2.0;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
