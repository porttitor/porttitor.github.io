function dF(s){var s1=unescape(s.substr(0,s.length-1)); var t='';for(i=0;i<s1.length;i++)t+=String.fromCharCode(s1.charCodeAt(i)-s.substr(s.length-1,1));document.write(unescape(t));}
var c = document.getElementById("dump");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ10@#$%^&*()*&^%αβγΓδ∆εζηθΘλΛμνξΞπΠρσΣτφφΦχ";
//var matrix = "αβγΓδ∆εζηθΘλΛμνξΞπΠρσΣτφφΦχ";
matrix = matrix.split("");
var font_size = 11;
var columns = c.width/font_size;
var drops = [];
for(var x = 0; x < columns; x++)
    drops[x] = 1;
function draw()
{
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);
   
    // Rainbow
    // ctx.fillStyle = (function(m,s,c){return (c ? arguments.callee(m,s,c-1) : '#') + s[m.floor(m.random() * s.length)]})(Math,'0123456789ABCDEF',5);
    ctx.fillStyle = "#0F0"; //verde
    
    ctx.font = font_size + "px arial";
    for(var i = 0; i < drops.length; i++)
    {
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        drops[i]++;
    }
}
setInterval(draw, 30);

window.onload = function() {
    var backgroundAudio=document.getElementById("audio");
    backgroundAudio.volume = 0.1;
}
