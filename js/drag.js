// 
// enable dragging
//
$(document).ready(function () {

  $(".draggable").draggableTouch();

  $(".draggable").bind("dragstart", function (e, pos) {

      console.log("dragstart:", this, pos.left + "," + pos.top);
  }).bind("dragend", function (e, pos) {
      console.log("dragend:", this, pos.left + "," + pos.top);
  });
  
});

// if this is a touch device, we assume we don't have a visible console and use
// a crappy homemade one :)
if ("ontouchstart" in document.documentElement) {
  window.console = {
      log: function (a, b, c) {
          if (a && b && c)
              $("<div>" + a + " " + b + " " + c + "</div>").appendTo($("#console"));
          else if (a && b)
              $("<div>" + a + " " + b + "</div>").appendTo($("#console"));
          else if (a)
              $("<div>" + a + "</div>").appendTo($("#console"));
      }
  };
}

const dropTarget = document.querySelector('.drop-target');
const pulseRing = document.getElementById("pulseRing");
let targetRect = dropTarget.getBoundingClientRect();
const rectCenterX = targetRect.height / 2  + 15;
const rectCenterY = targetRect.width / 2 + 15;
setPulseLocation();

//dropTarget.style.top = targetRect.x;

window.addEventListener("resize", function(e) {
    targetRect = dropTarget.getBoundingClientRect();
    setPulseLocation();
});

function setPulseLocation() {
    pulseRing.style.left = (targetRect.x - rectCenterX).toString() + "px";
    pulseRing.style.top = (targetRect.y - rectCenterY).toString() + "px";
}

const dropPulse = document.querySelector('.drop-detected');
console.log("prop= ", dropPulse, targetRect);

//
// Toggle the drop detected animation on and off based on the drag selection being over the target 
//
let toggle = false;

const dropDetected = (toggleSwitch) => {
    if (!toggle && toggleSwitch) {
        console.log('ON');
        toggle = true;
        pulse.play(0);
    }

    if (toggle && !toggleSwitch) {
        console.log('OFF');
        toggle = false;
        pulse.pause(0);
    }
};

//
// Over the drop target animation 
//
const pulse = gsap.timeline({ paused: true})
.to(".drop-detected", {
    opacity: 1,
    scale:1.5, 
    duration:0.5, 
    repeat:-1, 
    yoyo:true
});


