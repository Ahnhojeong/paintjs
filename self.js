const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const canvasSize = 700;

canvas.width = canvasSize;
canvas.height = canvasSize;

// painting 상태값 지정
let painting = false;

// painting을 멈출때
function stopPainting(){
    painting = false;
}

// painting을 시작할때
function startPainting(){
    painting = true;
}

// painting을 그릴 때
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

// canvas 안에서만 painting
if(canvas){
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mousedown',startPainting);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave',stopPainting);
};


// brush 컬러 가져오기
const colors = document.getElementsByClassName("jsColor");
const INITIAL_COLOR = "#2c2c2c";

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

function changeColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

Array.from(colors.forEach( color=>
    color.addEventListener('click',changeColor) )
    );