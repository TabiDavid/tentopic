function Write(){
    var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Canvas is canvas!",10,50);
};

var myVideo = document.getElementById("japanese");

function Playvideo() { 
  if (myVideo.paused)

  myVideo.play();
  else 
    myVideo.pause();
}