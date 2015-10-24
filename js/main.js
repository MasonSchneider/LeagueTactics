$(function() {
  var height = $("#container").height();
  var width = $("#container").width();
  $("#sketchCanvas").height(height);
  $("#sketchCanvas").width(width);
  $("#toolbar").width($(window).width() - width);
  Sketch.init();
});

$(window).resize(function() {
  var height = $("#container").height();
  var width = $("#container").width();
  $("#sketchCanvas").height(height);
  $("#sketchCanvas").width(width);
  $("#toolbar").width($(window).width() - width);
  Sketch.init();
});

$(function() {
  
  $(".color").click(function(event) {
    Sketch.color = $(this).attr("id");
  });

  $(".size").click(function(event) {
    Sketch.width = $(this).attr("id");
  });

  $(".icon").click(function(event) {
    Sketch.imgUrl = $(this).attr("id");
    Sketch.isPuttingIcon = true;
  });

  $("#clear").click(function(event) {
    var canvas = document.getElementById("sketchCanvas");
    Sketch.context.clearRect(0, 0, canvas.width, canvas.height);
  });

})