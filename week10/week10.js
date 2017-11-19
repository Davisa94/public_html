function loadFile(value, loadArea){
   var filename = value.toString();
   var xhttp = new XMLHttpRequest();
   var response;
   document.getElementById(loadArea).innerHTML = "winning";
   xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != null){
         response = this.responseText;
         console.log(response);
         document.getElementById(loadArea).innerHTML = response;
          }
    }
  };
  xhttp.open("GET", filename, true);
  xhttp.send();
}
