let pi=22/7;
let c;
let radius;
let sidea;
let sideb; 
let sidec;
document.getElementById("mybutton").onclick=function()
{
radius=document.getElementById("mytext").value;
    c=2*radius*pi;
    document.getElementById("c1").innerHTML= "circumference="
+ c;
}
document.getElementById("hc").onclick=function(){
sidea=document.getElementById("sidea").value;
sideb=document.getElementById("sideb").value;
sidec=Math.sqrt(sidea*sidea+sideb*sideb);
console.log(sidec);
document.getElementById("sidec").innerHTML="Side c=" + sidec;
}











































































































































































