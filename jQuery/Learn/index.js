// $(document).ready(function () {
//   // check jQuery exist . for script jQuery in head of HTML file
//   $("h1").css("color", "red");
// });
$("h1").addClass("leduc mg-50");
// $("h1").removeClass("leduc mg-50");
$("h1").hasClass("leduc mg-50");
$("h1").text("Bye");
$("h1").html("<em>Duc</em>");
console.log($("a").attr("href")); //get href from a tag
$("a").attr("href", "http://www.yahoo.com");
$("h1").click(function () {
  $("h1").css("color", "violet");
});
// $(document).keypress(function (event) {
//   $("h1").text(event.key);
// });
$("h1").on("mouseover", function () {
  $("h1").css("color", "yellow");
});
// $("h1").before("<button>New</button>"); // same for after, prepend, append but affter , before will add tag before tag(h1), prepend and append will add conntent(h1) (button+content of h1)
// $("h1").hide();
// $("h1").show();
// $("h1").fadeOut();
// $("h1").fadeIn();
// $("h1").fadeToogle();
// $("h1").slideUp();
// $("h1").slideDown();
// $("h1").slideToogle();
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
