$(document).ready(function(){
  $("#sidebar").addClass(theme);
  $("#top-selector").addClass(theme);
  $("body").addClass(theme);
  $("#top-selector").css("border-bottom","1px solid "+$(".ace_gutter").css("color"));
  $(".header").css("border-bottom","1px solid "+$(".ace_gutter").css("color"));
  $("#sidebar").css("border-right","1px solid "+$(".ace_gutter").css("color"));
  var n = $("#top-selector div").length;
  var w = (100/n);
  $("#top-selector div").width(w+'%');
  $(".ace_gutter").ready(function(){
  $("#top-selector").css("color",$(".ace_gutter").css("color"));});


  $("#top-selector div").hover(function(){

    $(this).find("i").fadeIn(125);

  }, function(){

    $(this).find("i").fadeOut(125);

  });

  $(".tab").click(function(){

    $(this).siblings().find("span").removeClass('active');
    $(this).siblings().removeClass('activeTab');
    $(this).find('span').addClass("active");
    $(this).addClass('activeTab');

  });

  $("#top-selector i").click(function(){

    $(this).parent().animate({
      "width":"0px"
    }, 75, function(){$(this).remove()});


  });
});
