// background of switch
let switchBody = document.getElementById("switch-body");
// main switch
let switchChanger = document.getElementById("switch");
// switch control
let switchControl = document.getElementById("switch-control");
let moon = document.getElementById("moon");
let night = document.getElementById("night");


// use innerHTML inside the main code and not in the declarations

// animation
function Movement() {
  // switchControl.style.animation = "changeDay 4s";
  switchControl.style.transform = "translate(1, 0)";
  switchControl.style.transitionDuration = "5s";
}

function MoveNight() {
  switchControl.style.animation = "changeNight 4s";
}

// change to day
function Day() {
  night.innerHTML = "DAY";
  // night.style.color = "rgb(245, 245, 0)";
  moon.src = "\sun.svg";
  switchChanger.style.flexDirection = "row-reverse";
  switchBody.style.backgroundColor= "white";
  
  Movement();
}

// change to night
function Night() {
  night.innerHTML = "NIGHT";
  night.style.color = "rgb(94, 0, 94)";
  moon.src = "\moon.svg";
  switchChanger.style.flexDirection = "row";
  switchBody.style.backgroundColor= "black";
  switchControl.style.transform = "translate(-1, 0)";
}

// when switch is clicked change between night and day
switchControl.onclick = function () {
  if (night.innerHTML == "NIGHT") {
    // Movement();
    Day();
    console.log("its day");
  } else if (night.innerHTML == "DAY") {
    Night();
    // MoveNight();
    console.log("its night");
  }
}