
function makeBig() { 
    var Video = document.getElementById("japanese");
    Video.width = 600; 
} 

function Write(){
    var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Canvas is canvas!",10,50);
};