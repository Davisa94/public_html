function loadFile(value, loadArea){
   var filename = value.toString();
   var xhttp = new XMLHttpRequest();
   document.getElementById(loadArea).innerHTML = "winning";
   xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != null){
         document.getElementById(loadArea).innerHTML = this.responseText;
          }
    }
  };
  xhttp.open("GET", filename, true);
  xhttp.send();
}
