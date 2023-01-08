objects="";
function preload(){
}

function setup(){
    canvas=createCanvas(380,380);
    video = createCapture(VIDEO);
    video.hide();
    video.size(450,380); 
    video.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}
function modelLoaded(){
    console.log("Model Loaded");
}
function draw(){
    image(video,0,0,380,380);
    objectDetector.detect(video, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
        console.log(objects);
    }
}
