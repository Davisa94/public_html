var jsonObject;
function loadFile(value, loadArea, parse){
   var filename = value.toString();
   var xhttp = new XMLHttpRequest();
   var response;
   console.log(loadArea);
   xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != null){
         response = this.responseText;
         if(parse == 'true')
         {
            console.log(response);
            response = JSON.parse(response);
            parseFile(response, loadArea);
            jsonObject = response;
            console.log(jsonObject);
          }
          else
          {
             document.getElementById(parse).style.visibility = "visible";
             document.getElementById(loadArea).innerHTML = response;
          }
    }
    }
  }
  xhttp.open("GET", filename, true);
  xhttp.send();
}

function parseFile(json, display){
   //TODO: set the table to be visible
   var name;
   var address;
   document.getElementById(display).innerHTML = "";
   var table = document.getElementById(display);
   var tr = document.createElement("tr");
   var th1 = document.createElement("th");
   var th2 = document.createElement("th");
   var th3 = document.createElement("th");
   var th4 = document.createElement("th");
   th1.appendChild(document.createTextNode("Name"));
   th2.appendChild(document.createTextNode("Address"));
   th3.appendChild(document.createTextNode("GPA"));
   th4.appendChild(document.createTextNode("Major"));
   tr.appendChild(th1);
   tr.appendChild(th2);
   tr.appendChild(th3);
   tr.appendChild(th4);
   table.appendChild(tr);
   document.getElementById(display.toString()).style.visibility = "visible";
   for(i = 0; i < json.students.length; i++){
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      name = json.students[i].first;
      name += " " + json.students[i].last;
      address = json.students[i].address.city + " ";
      address += json.students[i].address.state + ", ";
      address += json.students[i].address.zip;
      td.appendChild(document.createTextNode(name));
      td1.appendChild(document.createTextNode(address));
      td2.appendChild(document.createTextNode(json.students[i].gpa));
      td3.appendChild(document.createTextNode(json.students[i].major));
      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      table.appendChild(tr);
      console.log(name);
   }
}
