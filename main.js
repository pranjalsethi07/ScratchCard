const createScratchCard = (canvasId,color) =>
{
    let canvas=document.getElementById(canvasId);
let context=canvas.getContext("2d");
const init =()=>
{
    context.fillStyle=color;
    context.fillRect(0,0,300,100);
};
let isdragging=false;
const scratch=(x,y)=>{
    context.globalCompositeOperation="destination-out";
    context.beginPath();
    context.arc(x,y,25,0,2*Math.PI);
    context.fill();
};
canvas.addEventListener("mousedown",(events)=>{
isdragging=true;
scratch(events.offsetX,events.offsetY);

});
canvas.addEventListener("mousemove",(events)=>{
    if(isdragging){
        scratch(events.offsetX,events.offsetY);
 
    }
});
canvas.addEventListener("mouseup",()=>{
    isdragging=false;
});
canvas.addEventListener("mouseleave",()=>{
    isdragging=false;
});

init();
};
createScratchCard("scratchcard1","crimson");
createScratchCard("scratchcard2","purple");
createScratchCard("scratchcard3","green");