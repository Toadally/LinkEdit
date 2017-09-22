$(document).ready(function(){
  var theme = "ace-cobalt";
  $("#sidebar").addClass(theme);
  $("#top-selector").addClass(theme);
  $("body").addClass(theme);
  $("#top-selector").css("border-bottom","1px solid "+$(".ace_gutter").css("color"));
  $("#editor").css("border-left","1px solid "+$(".ace_gutter").css("color"));
  $("#top-selector").css("color",$(".ace_gutter").css("color"));
  $("#top-selector .active").css({
    "color":"white",
    "text-decoration":"underline"
  });
  var n = $("#top-selector div").length;
  var w = (100/n);
  $("#top-selector div").width(w+'%');
});
