
window.onload = function() {
  // find the element that you want to drag.
  var box = document.getElementById('box');
  
  /* listen to the touchMove event, every time it fires, grab the location of touch and assign it to box */
  box.addEventListener('touchmove', function(e) {
    // grab the location of touch
    var touchLocation = e.targetTouches[0];
    
    // assign box new coordinates based on the touch.
    box.style.left = touchLocation.pageX - 130 + 'px';
    box.style.top = touchLocation.pageY - 130 + 'px';
  })
  
  /* record the position of the touch when released using touchend event. This will be the drop position. */
  box.addEventListener('touchend', function(e) {
    // current box position.
    var x = parseInt(box.style.left);
    var y = parseInt(box.style.top);
  })
  
}


// view-source:https://heyman.github.io/jquery-draggable-touch/example.html
// https://github.com/bevacqua/dragula/issues/487



// // Make the DIV element draggable:
// dragElement(document.getElementById("box"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   // if present, the header is where you move the DIV from:
//   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

//   function dragMouseDown(e) {
//     e.target.parentElement.style.opacity = .3;
//     e = e || window.event;
    
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement(e) {
//     e.target.parentElement.style.opacity = 1;
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }