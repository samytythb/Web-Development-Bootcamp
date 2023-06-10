var sound = ["tom-1", "tom-2", "tom-3", "tom-4", "crash", "kick-bass", "snare"];
var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
  buttons[i].dataset.sound = "sounds/" + sound[i] + ".mp3";
}

function handleClick() {
  this.style.color = "white";
  var audio = new Audio(this.dataset.sound);
  audio.play();
}
