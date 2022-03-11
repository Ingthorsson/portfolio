// 
// enable draggi
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

//
// 
//
const dropTarget = document.querySelector('.drop-target');
const pulseRing = document.getElementById("pulseRing");
const target = {
    targetRect: dropTarget.getBoundingClientRect(),
    rectCenterX: dropTarget.getBoundingClientRect().height / 2  + 15,
    rectCenterY: dropTarget.getBoundingClientRect().width / 2 + 15
};
const dragItem = {
    box: document.getElementById("box"),
    toggle: false,
    dragging: false,
    onTrigger: false,
    homeX: 0,
    homeY: 0
}

// 
// Set location
//
setPulseLocation();
window.addEventListener("resize", function(e) {
    target.targetRect = dropTarget.getBoundingClientRect();
    setPulseLocation();
});

function setPulseLocation() {
    pulseRing.style.left = (target.targetRect.x - target.rectCenterX).toString() + "px";
    pulseRing.style.top = (target.targetRect.y - target.rectCenterY).toString() + "px";
}

const dropPulse = document.querySelector('.drop-detected');

//
// Toggle the drop detected animation on and off based on the drag selection being over the target 
//
const dropDetected = (toggleSwitch) => {
    if (!dragItem.toggle && toggleSwitch) {
        dragItem.onTrigger = true;
        dragItem.toggle = true;
        pulse.play(0);
    }

    if (dragItem.toggle && !toggleSwitch) {
        dragItem.onTrigger = false;
        dragItem.toggle = false;
        pulse.pause(0);
    }
};

//
// Over the drop target animation 
//
const pulse = gsap.timeline({ paused: true})
.to(".drop-detected", {
    opacity: 0.7,
    scale:1.2, 
    duration:0.45, 
    repeat:-1, 
    yoyo:true
});

const home = gsap.timeline({ paused: true})
.to("#box", {
    left: 0,
    top: 300, 
    duration:0.45
});

function backHome(box) {
    console.log('eeek')
    home.play();
}


