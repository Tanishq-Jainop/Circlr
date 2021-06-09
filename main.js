var mouse_event="empty";
var last_x;
var last_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="black";
width_line=1;
width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").width=new_height;
document.body.style.overflow="hidden";}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousedown(e){
color=document.getElementById("input").value;
width_line=document.getElementById("width").value;
mouse_event="mousemove";
}
canvas.addEventListener("mousemove",my_mousemove);
 function my_mousemove(e){
     current_x=e.mouse[0].clientX-canvas.offsetLeft;
     current_y=e.mouse[0].clientY-canvas.offsetTop;
     if(mouse_event=="touchstart"){
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=width_line;
     
        console.log("last position of X and Y");
        console.log("X="+last_x+"Y="+last_y);
        ctx.moveTo(last_x,last_y);
        
        console.log("current position of X and Y");
        console.log("X="+current_x+"Y="+current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();}
        last_x=current_x;
        last_y=current_y;
 }
 canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){

mouse_event="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){

mouse_event="mouseLeave";
}

function clearArea(){
    ctx.cleararc(current_x,current_y,ctx.canvas.width,ctx.canvas.height,2 *Math.PI);
}