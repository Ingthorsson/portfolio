// Make the DIV element draggable:
dragElement(document.getElementById("box"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  // if present, the header is where you move the DIV from:
  document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.target.parentElement.style.opacity = .3;
    e = e || window.event;
    
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement(e) {
    e.target.parentElement.style.opacity = 1;
    document.onmouseup = null;
    document.onmousemove = null;
  }
}