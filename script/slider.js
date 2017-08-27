// function dinamicWidth slider img
function dinamicWidth() {
    let textOurProjec = document.getElementById("TextOurProject").offsetWidth;
    let slr = document.getElementsByClassName("slr");
    for (let i = 0; i < slr.length; i++) {
        slr[i].style.width = textOurProjec + "px";

    }
}

let trust = 0;
let shift = 0;
let i = 1;
let interval = setInterval( () => {
    dinamicWidth();
    let container = document.getElementById("container");
    let slider = document.getElementsByClassName("slider");
    let sliderWidth = slider[0].offsetWidth;
    let sliderLength = slider.length;
    container.style.width = sliderWidth * sliderLength + sliderLength * 4 + "px";

    slider[i].style.marginLeft = -sliderWidth - 4 + shift + "px";
    if (trust >= 0) {
        i++;
    } else {
        i--;
    }
    if (i > sliderLength - 1) {
        trust--;
        shift = sliderWidth + sliderWidth;
        i--;
    }
    if (i <= 0) {
        trust++;
        i = 1;
        shift = 0;
    }
}, 2500);
