let specific = document.querySelectorAll(".onHover");
let audio = document.createElement("audio");
audio.src = "https://viienterprises.oops.wtf/select.wav";
document.body.appendChild(audio);

specific.onmouseover = () => {
  audio.play();
}
specific.onmouseout = () => {
    audio.pause();
    audio.currentTime = 0;
}