var Sketch = Sketch || {};

Sketch.color = "black";
Sketch.width = 2;
Sketch.isDrawing = false;
Sketch.currX = 0;
Sketch.currY = 0;
Sketch.prevX = 0;
Sketch.prevY = 0;
Sketch.context = null;

Sketch.init = function() {
  var canvas = document.getElementById("sketchCanvas");
  Sketch.context = canvas.getContext("2d");
  Sketch.canvasW = canvas.width;
  Sketch.canvasH = canvas.height;
  
  $("#sketchCanvas").mousedown(function(event) {
    Sketch.isDrawing = true;
    var rect = canvas.getBoundingClientRect();
    Sketch.currX = event.clientX/(rect.right-rect.left)*canvas.width;
    Sketch.currY = event.clientY/(rect.bottom-rect.top)*canvas.height;
    Sketch.prevX = Sketch.currX;
    Sketch.prevY = Sketch.currY;
  });

  $("#sketchCanvas").mousemove(function(event) {
    if (Sketch.isDrawing) {
      Sketch.prevX = Sketch.currX;
      Sketch.prevY = Sketch.currY;
      var rect = canvas.getBoundingClientRect();
      Sketch.currX = event.clientX/(rect.right-rect.left)*canvas.width;
      Sketch.currY = event.clientY/(rect.bottom-rect.top)*canvas.height;
      Sketch.draw();
    }
  });

  $("#sketchCanvas").mouseup(function(event) {
    Sketch.isDrawing = false;
  });

  $("#sketchCanvas").mouseout(function(event) {
    Sketch.isDrawing = false;
  });
};

Sketch.draw = function() {
    Sketch.context.beginPath();
    Sketch.context.moveTo(Sketch.prevX, Sketch.prevY);
    Sketch.context.lineTo(Sketch.currX, Sketch.currY);
    Sketch.context.strokeStyle = Sketch.color;
    Sketch.context.lineWidth = Sketch.width;
    Sketch.context.stroke();
    Sketch.context.closePath();
};