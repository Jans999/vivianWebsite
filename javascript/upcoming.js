// Hide elements and make first h2 opacity change

$(".get_involved").hide();
$(".performances").hide();
$(".classes").hide();

// $("h2").eq(0).css("opacity", "0.7");

// Hides other divs, fades in div that has the same id clicked as the img

$("div").on("click", function() {
  if ($(this).attr("id") == "classes") {
    $(".classes").fadeIn(400);
    $(".first_box").hide();
  } else if ($(this).attr("id") == "performances") {
    $(".performances").fadeIn(400);
    $(".first_box").hide();
  } else if ($(this).attr("id") == "getInvolved") {
    $(".get_involved").fadeIn(400);
    $(".first_box").hide();
  }
})

$(".back").on("click", function() {
    $(".get_involved").hide();
    $(".performances").hide();
    $(".classes").hide();
    $(".first_box").fadeIn(400);
})