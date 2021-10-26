const canvas = document.getElementById('my_canvas')
const ctx = canvas.getContext('2d')
//
const w = canvas.width , h = canvas.height

//
let running = false 

function ex1() {
    running = false //end animation (if only)
    ctx.lineWidht = 1
    
    // apagar o canvas 
    ctx.clearRect(0 , 0 , w , h)

    
    /*CREAT THE BLUE FULL RECTANGLE*/
    ctx.fillStyle = 'blue'
    
    //cria um path , ou apaga o existente 
    ctx.beginPath()
    //Begins a path, or resets the current path
    
    // move o patht(desenho) para um sitio expecifico no cavas , sem criar uma linha ??? 
    ctx.moveTo(80 , 20 ) //1st point
    //Moves the path to the specified point in the canvas, without creating a line
    
    // adiciona um novo ponto e cria uma linha que entre o novo ponto e o ultimo ponto adicionado ao canvas 
    ctx.lineTo(280, 20)
    ctx.lineTo(280, 120)
    ctx.lineTo(80, 120)
    //	Adds a new point and creates a line to that point from the last specified point in the canvas
    ctx.fill()//Fills the current drawing (path)

    /* AQUA RECTANGLE*/
    ctx.strokeStyle = 'aqua'
    ctx.beginPath()
    //////////( x  ,  y)
    ctx.moveTo(100 , 40) //1st point
    ctx.lineTo(300 , 40)
    ctx.lineTo(300 , 140)
    ctx.lineTo(100 , 140)

    ctx.closePath() // if no lin is draw to the firt point
    ctx.stroke()//Actually draws the path you have defined

}

function ex2() {
    running = false
    ctx.clearRect(0 , 0 , w , h)
    
    ctx.lineWidht = 1

    ctx.strokeStyle = 'red'
    ctx.beginPath()
    ctx.moveTo(100 , 150)
    ctx.lineTo(100 ,  50)
    ctx.lineTo(150 , 150)
    ctx.lineTo(200 , 50)
    ctx.lineTo(250 , 150)
    ctx.lineTo(250 , 150)
    
    ctx.stroke()
    //ctx.fill()
}

function ex3() {
    running = false
    ctx.clearRect(0 , 0 , w , h)
    
    ctx.lineWidht = 3

    ctx.strokeStyle = 'black'
}

function ex4() {

    running = true
    ctx.clearRect(0 , 0 , w , h)
    
    ctx.lineWidht = 1

    
    render()
}

function render() {
    
    ctx.strokeStyle = getRandomColor()
}

//helper funcion
function getRandomColor() {
    let R = Math.floor(Math.random() * 256)
    let G = Math.floor(Math.random() * 256)
    let B = Math.floor(Math.random() * 256)

    return `rgb( ${R} , ${G} , ${B})`
}