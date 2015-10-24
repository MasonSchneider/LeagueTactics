$(function() {
  var height = $("#container").height();
  var width = $("#container").width();
  $("#sketchCanvas").height(height);
  $("#sketchCanvas").width(width);
  Sketch.init();
});

$(window).resize(function() {
  var height = $("#container").height();
  var width = $("#container").width();
  $("#sketchCanvas").height(height);
  $("#sketchCanvas").width(width);
  Sketch.init();
});