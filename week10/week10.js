function eventListener(elementId){
   elementId.addEventListener
}

function loadFile(value, loadArea){
   var filename = value.toString();
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != NULL){
         document.getElementById(loadArea).innerHTML = this.responseText;
          }
    }
  };
  xhttp.open("GET", filename, true);
  xhttp.send();
}
