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

console.log("x: "+ rect.x);
console.log("y: "+ rect.y);
console.log(dropTarget[0])
dropTarget.addEventListener("mouseover", function( e ) 
{
    console.log('OOVVER', e)
    // highlight the mouseover target
    //event.target.style.color = "orange";
  
    // reset the color after a short delay
    // setTimeout(function() {
    //   event.target.style.color = "";
    // }, 500);
  }, false);


