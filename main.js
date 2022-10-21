status="";
object="";

function preload(){

}

function setup(){
   canvas= createCanvas(400,400);
   canvas.position(500,180);
   video= createCapture(VIDEO);
   video.hide();
   
   
}

function draw(){
   image(video,0,0,400,400);
}

function start(){
   object_detecter = ml5.objectDetector('cocossd', model_loaded);
   document.getElementById("accuracy").innerHTML = "Status = Object Detecting";
   object = document.getElementById("value").value;
}

function model_loaded(){
   console.log("model has loaded");
   status = true;
} 