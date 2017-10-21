var userName;
function setUserFirst(value)
{
   userName = value;
}
function setUserLast(value)
{
   userName += " " + value;
}
function resetForm()
{
   document.getElementById("form1").reset();
}
function total()
{
   // var premiumtaxrate = document.getElementById(premiumtaxrate).value;
   // var premiumtaxamt = document.getElementById(premiumtaxamt).value;
   // var basictaxrate = document.getElementById(basictaxrate).value;
   // var basictaxamt = document.getElementById(); premacctrate; premacctamt; basicacctrate; basicacctamt;
   // document.getElementById(premiumtaxrate).value
}
function checkField(elCheck)
{
   if(elCheck.name == "name")
   {
      if(elCheck.value.match(/\D[A-Za-z]/))
      {
         console.log("Match");
         document.getElementById("nameERR").innerHTML = "";
      }
      else
      {
         console.log("No Match");
         document.getElementById("nameERR").innerHTML = "INVALID NAME</br>";
         }
   }
   if(elCheck.name == "phoneNum")
   {
      valToCheck = elCheck.value.replace('-', '');
      if(valToCheck.match(''))
      {
         console.log("Empty");
         document.getElementById("phoneERR").innerHTML = "Please Enter A Phone Number</br>";
         document.getElementById("phoneNum").focus();
      }
      else
      {
         if(valToCheck.match(/\d(10)[^A-Za-z]/))
         {
           console.log("Match");
           document.getElementById("phoneERR").innerHTML = "";
         }
         else
         {
           console.log("No Match");
           document.getElementById("phoneERR").innerHTML = "INVALID PHONE NUMBER</br>";
           document.getElementById("phoneNum").focus();
           }
      }

   }

   if(elCheck.name == "cardNum")
   {
      valToCheck = elCheck.value.replace('-', '');
      if(valToCheck == "")
      {
         console.log("Empty");
         document.getElementById("cardERR").innerHTML = "Please Enter A Card Number</br>";
         document.getElementById("cardNum").focus();
      }
      else
      {
         document.getElementById("cardERR").innerHTML = "";
         if((valToCheck.match(/\d[^A-Za-z]/)) && valToCheck.length == 16)
         {
           console.log("Match");
           document.getElementById("cardERR").innerHTML = "";
         }
         else
         {
           console.log("No Match");
           document.getElementById("cardERR").innerHTML = "INVALID CARD NUMBER</br>";
           document.getElementById("cardNum").focus;
         }
      }

   }
   /*   var condition = /\D[A-Za-z]/;
   for(i = 0; i < elCheck.value.length; i++)
   {
      if(elCheck.value[i] == condition)
   }
      if(elCheck.value.match(condition))
      {

      }
      else
      {
         document.getElementById("firstname").innerHTML = "PLEASE ENTER A VALID NAME";
         document.getElementById("firstname").placholder = 'PLEASE ENTER A VALID NAME';
         elCheck.focus();
      }
   }
   if(elCheck.name == "idnum")
   {
      var condition = /\d[^A-Za-z]/;
      if(elCheck.value.match(condition))
      {

      }
      else
      {
         elCheck.placholder = 'PLEASE ENTER A VALID NUMBER';
         elCheck.focus();
      }
   }
   if(elCheck.name == "date")
   {
      for(i = 1; i < elCheck.date.value.size(); i++)
      {
         if(i <= 2)
         {

         }
         else
         {

         }
      }
      if(elCheck.value.match(condition))
      {

      }
      else
      {
         elCheck.focus();
      }
   } */
}
function checkForm(form)
{

}
function setfocus()
{
   document.getElementById("firstname").focus();
}
function thanks()
{

}
