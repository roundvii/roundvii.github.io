let hoverElements = document.querySelectorAll(".onHover");
let audio = document.createElement("audio");
audio.src = "/sounds/select.wav"; // Yes?
audio.loop = true; // ez fix

document.body.appendChild(audio);

hoverElements.forEach((hoverElement) => {
    hoverElement.onmouseover = () => { // hover
        audio.play();
    }

    hoverElement.onmouseout = () => { // exit
        audio.pause();
        audio.currentTime = 0;
    }    
});

//pojfkmvouseljd,fmboujsdvuj