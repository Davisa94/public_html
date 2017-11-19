function eventListener(elementId){
   elementId.addEventListener
}

function loadFile(value, loadArea){
   var filename = value;
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById(loadArea).innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", filename, true);
  xhttp.send();
}
}
