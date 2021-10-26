const canvas = document.getElementById('my_canvas')
const ctx = canvas.getContext('2d')

// canvas size
window.onload = render()

//esta função cria a frame com cores ??????
function render() {

    //DRAW the shape whith random colors 
    ctx.fillStyle = getRandomColor() //create a random color for every frame 
    ctx.fillRect( 0 , 0 , 50 , 50 )
    ///////////// x , y, largura , altura   
    // keep requenting new frames
    window.requestAnimationFrame(render);

}

//helper funcion
function getRandomColor() {
    let R = Math.floor(Math.random() * 256)
    let G = Math.floor(Math.random() * 256)
    let B = Math.floor(Math.random() * 256)

    return `rgb( ${R} , ${G} , ${B})`
}

