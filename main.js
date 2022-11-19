
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

    var width=screen.width;
    newwidth=screen.width-70;
    newheight=screen.height-300;
    if(width<992){
        document.getElementById("myCanvas").width=newwidth;
        document.getElementById("myCanvas").height=newheight;
    }

    canvas.addEventListener("touchstart",mytouchstart);
    
    function mytouchstart(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional
lastPositionOfX=e.touches[0].clientX-canvas.offsetLeft;
lastPositionOfY=e.touches[0].clientY-canvas.offsetTop;
    
    }

  

    canvas.addEventListener("touchmove", mytouchmove);
    function mytouchmove(e)
    {

         currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
         currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
        ctx.stroke();
        

        lastPositionOfX = currentPositionOfTouchX; 
        lastPositionOfY = currentPositionOfTouchY;
    }
function limpar(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
