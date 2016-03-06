function draw0 (){
    var data = [ 15, 70, 20, 30, 55 ];

    var canvas = document.getElementById('canvas0'); 
    var c = canvas.getContext('2d'); 

    c.textBaseline = "middle";
    for(var i=0; i<9; i++) { 
        c.fillText(i*10, 4, 460-50*i); 

        if (i === 0) { continue; }
        c.beginPath();
        c.moveTo(30, 460-i*50); 
        c.lineTo(25, 460-i*50); 
        c.stroke(); 
    } 

    c.strokeStyle = "#eee"
    for(var i=0; i<17; i++) { 
        if (i === 0) { continue; }
        c.beginPath();
        c.moveTo(31, 460-i*25); 
        c.lineTo(440, 460-i*25); 
        c.stroke(); 
    } 

    c.textBaseline = "alphabetic";
    var labels = ["JAN","FEB","MAR","APR","MAY"]; //draw horiz text
    for(var i=0; i<5; i++) {
        c.fillText(labels[i], 64+ i*75, 475);
    }  

    c.fillStyle = "blue"; 
    for(var i in data) { 
        var dataPoint = data[i]; 
        c.fillRect(50 + i*75, canvas.height-40, 50, -dataPoint*5); 
    }

    c.strokeStyle = "black"; 
    c.lineWidth = 2.0; 
    c.beginPath(); 
    c.moveTo(30,40); 
    c.lineTo(30,460); 
    c.lineTo(440,460); 
    c.stroke();

    c.fillStyle = "black"; 
    c.font = "20px sans-serif"; 
    var text = "Sales Data from 2025"; 
    var metrics = c.measureText(text); 
    c.fillText(text, 225-(metrics.width/2), 35 )
}

function draw1 (){
    var canvas = document.getElementById('canvas1'); 
    var c = canvas.getContext('2d'); 

    var data = [ 15, 70, 20, 30, 55 ];

    var center = 200;

    //a list of colors 
    var colors = [ "red", "orange", "yellow", "green", "blue"]; 

    //calculate total of all data 
    var total = data.reduce(function(i, sum){return sum+i},0)

    //draw pie data 
    var prevAngle = 0; 
    for(var i in data) { 
        //fraction that this pieslice represents 
        var fraction = data[i]/total; 
        //calc starting angle 
        var angle = prevAngle + fraction*Math.PI*2; 

        //create a path 
        c.beginPath(); 
        c.moveTo(center,center); 
        c.arc(center, center, 100, prevAngle, angle); 
        c.lineTo(center, center); 

        //fill it 
        c.fillStyle = colors[i]; 
        var grad = c.createRadialGradient( center, center, 10, center, center, 100); 
        grad.addColorStop(0,"white"); 
        grad.addColorStop(1,colors[i]); 
        c.fillStyle = grad; 
        c.fill(); 

        //stroke it 
        c.strokeStyle = "black"; 
        c.stroke(); 

        //update for next time through the loop 
        prevAngle = angle; 
    } 

    //draw centered text 
    c.fillStyle = "black"; 
    c.font = "20px sans-serif"; 
    var text = "Sales Data from 2025"; 
    var metrics = c.measureText(text); 
    c.fillText(text, center-(metrics.width/2), canvas.width*.87 )
}

draw0()
draw1()