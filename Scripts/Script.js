// [+] For High Performance
const $ = document;

// [+] Variables
let container             = $.querySelector(".container");
let startText             = $.querySelector(".starter-text");
let titlePageValue        = $.querySelector(".page-title__value");
let topAreaValue          = $.querySelector(".top-area_keycode");
let eventKeyValue         = $.querySelector(".eventKeyValue");
let eventKeyLocationValue = $.querySelector(".eventKeyLocationValue");
let eventKeyCodeValue     = $.querySelector(".eventKeyCodeValue");
let eventKeyWhichValue    = $.querySelector(".eventKeyWhichValue");

// [+] Functions
function keyGenerator(event){
    event.preventDefault();

    container.style.display = "flex";
    startText.style.display = "none";

    titlePageValue.innerText = event.which;
    topAreaValue.innerText = event.which;
    eventKeyValue.innerText = event.key;
    eventKeyCodeValue.innerHTML = event.code;
    eventKeyWhichValue.innerHTML = event.keyCode;

    if(event.location === 0){
        eventKeyLocationValue.innerText = "General keys";
    }else if(event.location === 1){
        eventKeyLocationValue.innerText = "Left-side modifier keys";
    }else if(event.location === 2){
        eventKeyLocationValue.innerText = "Right-side modifier keys";
    }
}

// [+] Responsive website . .
function responsiveAble(){
    if(window.innerWidth <= 565){
        container.style.display = "none";
        startText.style.display = "block";
        $.body.style.backgroundColor = "#63b4ff";
        startText.innerHTML = "This website does not work for mobile devices!";
    }else{ 
        container.style.display = "flex";
        startText.style.display = "none";
        $.body.style.backgroundColor = "#F3F4F6";
        startText.innerHTML = `Press any key to get the JavaScript event keycode . . `;
    }
}

// [+] Events
$.body.addEventListener("keydown", keyGenerator);
window.addEventListener("resize", responsiveAble);
