const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

//CANVAS SIZE
const W = canvas.width, H = canvas.height;
let timer

//blue arcs
function ex1() {
    
    //stop animation (if only)
    clearInterval(timer)
    timer = undefined
    
    ctx.clearRect(0, 0, W, H); //erase Canvas
    
    ctx.fillStyle = "blue";
    //1st arc
    ctx.beginPath(); //creat path
    ctx.arc(50, 100, 40, 0, 2 * Math.PI) //draw the arc
    ctx.fill()
    //2end arc
    ctx.beginPath()
    ctx.arc(150, 100, 40, 0,  Math.PI)
    ctx.fill()
    //3erd arc
    ctx.beginPath()
    ctx.arc(250, 100, 40, 0, Math.PI, true)//???
    ctx.fill()
    //4st arc
    ctx.beginPath()
    ctx.arc(350, 100, 40, 3 * Math.PI / 5, 9 * Math.PI / 5)
    ctx.fill()
    //5th arc: similar to the previous, except drawn in anti-clockwise direction
    ctx.beginPath()//         ??????????????????????????????????
    ctx.arc(450, 100, 40, 3 * Math.PI / 5, 9 * Math.PI / 5, true)
    ctx.fill()
    
}

function ex2() {
    clearInterval(timer)
    timer = undefined

    ctx.clearRect(0, 0, W, H) //erase Canvas
    
    //blue cercle
    ctx.lineWidth = 10;
    let r = 40;
    //blue
    ctx.strokeStyle = "blue"
    ctx.beginPath()
    ctx.arc(50, 50, r, 0, 2 * Math.PI)
    ctx.stroke()
    //yellow
    ctx.strokeStyle = "yellow"
    ctx.beginPath()
    ctx.arc(100, 80, r, 0, 2 * Math.PI)
    ctx.stroke()
    //black
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.arc(150, 50, r, 0, 2 * Math.PI)
    ctx.stroke()
    //green
    ctx.strokeStyle = 'green'
    ctx.beginPath()
    ctx.arc(200, 80, r, 0, 2 * Math.PI)
    ctx.stroke()
    //red
    ctx.strokeStyle = 'red'
    ctx.beginPath()
    ctx.arc(250, 50, r, 0, 2 * Math.PI)
    ctx.stroke()

}

function ex3() {
  ctx.clearRect(0, 0, W, H); //erase Canvas


}

//smile face
function ex4() {
  //ctx.clearRect(0, 0, W, H); erase Canvas

  ctx.lineWidth = 20;
  ctx.fillStyle = "lightgrey";
  ctx.strokeStyle = "black";
  
  // mouth motion parameters
  let velY = 1;     //motion velocity (Y displacement between frames)
  let posYpc = 400; //control point (Y coordinate)
  let posY = 250;   //initial and final points (Y coordinate)
  
  if (timer == undefined) {
    timer = window.setInterval(render, 1000 / 30)
    //start animation
  }
  
  
  //draw the face and do the animation
  function render() {
    ctx.clearRect(0, 0, W, H); //erase Canvas
    
    //draw
  
    
    //face 
    ctx.beginPath()
    ctx.arc(200 , 233 , 150 , 0 , 2*Math )
    ctx.stroke()
    ctx.fill()
    ctx.fillStyle = 'lightgrey'
    //eyes
    ctx.beginPath();
    ctx.moveTo(170, 130);
    ctx.lineTo(160, 200);
    ctx.moveTo(230, 130);
    ctx.lineTo(240, 200);
    ctx.stroke();
  
    //mouth
    ctx.beginPath();
    ctx.moveTo(100, posY);
    ctx.quadraticCurveTo(200, posYpc, 300, posY);
    ctx.stroke();
  
    //Animation
  
    //UPDATES
    posY += velY;
    posYpc -= 4 * velY; //the control point moves 4x faster than the others (mouth extremities)
  
    if (posY > 300 || posY < 250) {
      velY *= -1; //invert the motion direction
    }
  
  
  }
  
}
