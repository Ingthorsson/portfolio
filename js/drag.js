// 
// enable dragging

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
let rect = dropTarget.getBoundingClientRect()

let toggle = false;

function dropDetected(toggleSwitch) {
    
    if (!toggle && toggleSwitch) {
        console.log('BANG');
        toggle = true;
        runDetected(1);
    }

    if (toggle && !toggleSwitch) {
        console.log('OUT');
        toggle = false;
        runDetected(0);
    }
}

function runDetected(onOff) {
    const pulse = gsap.timeline({ paused: true})
    .to(".drop-detected", {
        opacity: 1,
        scale:1.5, 
        duration:0.5, 
        repeat:-1, 
        yoyo:true
    });
    if (onOff === 1) {
        pulse.play(0);
        console.log('start stsrt start', pulse)  
    } else {
        pulse.kill();
        console.log('stp stop stop', pulse)  
    }
 }