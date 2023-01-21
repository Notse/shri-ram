// @author Nikhil Notse
const Checkbox = document.querySelector(".checkbox");
const hanumanArm = document.querySelector(".hanuman-arm");
const hand = document.querySelector(".fist");
const Hanuman = document.querySelector(".hanuman");
const Audio = document.querySelector("#audio");
const switchAudio = document.querySelector("#audio-switch");
const Wrapper = document.querySelector(".wrapper");
const lyricsContainer = document.getElementById("lyrics-1");

let count = 0;
let sec = 2000;

Checkbox.addEventListener("click", Checked);
document.addEventListener("DOMContentLoaded", () => {
  swal(
    "Try to stop the audio 😁",
    "I challenge you to stop the audio by switching off checkbox , Let see if you can do it.",
    {
      buttons: {
        Play: "Let's Play",
      },
    }
  ).then((value) => {
    switch (value) {
      default:
        Audio.play();
        lyricsContainer.style.display = "block";
    }
  });
});

function Checked() {
  switchAudio.play();
  if (Checkbox.checked === true) {
    Audio.play();
    setTimeout(function () {
      console.log("1");
      hand.style.display = "none";
      hanumanArm.style.opacity = "1";
      hanumanArm.classList.remove("arm-move");
    }, 1000);
  } else {
    if (count >= 0) {
      Hanuman.style.transform = "translate(0, -30px) rotate(-5deg) scaleX(-1)";
      sec = 2100;
      setTimeout(function () {
        Hanuman.style.transform =
          "translate(0, 300px) rotate(-5deg) scaleX(-1)";
        Wrapper.style.display = "none";
      }, 4400);
      hanumanArm.style.transition = "transform 1s ease-in";
    }
    Wrapper.style.display = "block";
    count = count + 1;
    hanumanArm.classList.add("arm-move");
    hanumanArm.style.transition = "transform 1.5s ease-in";
    Audio.pause();
    setTimeout(function () {
      console.log("2");
      hanumanArm.style.opacity = "0";
      hand.style.display = "block";

      Checkbox.click();
    }, sec);
  }
}
