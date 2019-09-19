// Hide elements and make first h2 opacity change

$(".childrensClasses").hide();
$(".movementWaves").hide();
$("h2").eq(0).css("opacity", "0.7");

// Hides other divs, fades in div that has the same name clicked on in the h2

$("h2").on("click", function() {
  if ($(this).text().toLowerCase() == "energy and flow") {
    $("h2").eq(0).css("opacity", "0.7");
    $("h2").eq(1).css("opacity", "1");
    $("h2").eq(2).css("opacity", "1");
    $(".energyAndFlow").fadeIn(400);
    $(".movementWaves").hide();
    $(".childrensClasses").hide();
  } else if ($(this).text().toLowerCase() == "movement waves") {
    $("h2").eq(0).css("opacity", "1");
    $("h2").eq(1).css("opacity", "0.7");
    $("h2").eq(2).css("opacity", "1");
    $(".energyAndFlow").hide();
    $(".movementWaves").fadeIn(400);
    $(".childrensClasses").hide();
  } else if ($(this).text().toLowerCase() == "childrens classes") {
    $("h2").eq(0).css("opacity", "1");
    $("h2").eq(1).css("opacity", "1");
    $("h2").eq(2).css("opacity", "0.7");
    $(".energyAndFlow").hide();
    $(".movementWaves").hide();
    $(".childrensClasses").fadeIn(400);
  }
})
