LeftWristX=0;
LeftWristY=0;
RightWristX=0;
RightWristY=0;

function preload(){
    song=loadSound('music.mp3');
}

function setup(){
    canvas=createCanvas(600,560);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotposes);
}
function modelloaded(){
    console.log("model has been loaded")
}
function gotposes(results){
if(results.length>0){
    console.log(results)
    LeftWristX=results[0].pose.leftWrist.x;
    RightWristY=results[0].pose.rightWrist.y;
    LeftWristY=results[0].pose.leftWrist.y;
    RightWristX=results[0].pose.rightWrist.x;
    console.log("LeftWristX" + LeftWristX+"LeftWristY"+LeftWristY);
    console.log("RightWristX"+RightWristX+"RightWristX"+RightWristX)
}
}
function draw(){
    image(video,0,0,600,560);
    fill("#ff0000");
    stroke("#ff0000");
    circle(LeftWristX,LeftWristY,20);
    in_number_left_wrist_y=Number(LeftWristY);
    remove_decimals=floor(in_number_left_wrist_y);
    volume=remove_decimals/500;
    document.getElementById("Volume").innerHTML="Volume"+volume;
    song.setVolume(volume);
}
song="";
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}