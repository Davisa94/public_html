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
/**************************************
* Validates that a proper name is input
* *************************************/
function checkName(name)
{
   if(age.value == "")
   {
      console.log("Empty");
      document.getElementById("nameERR").innerHTML = "Please Enter a name</br>";
      document.getElementById("name").focus();
   }
   else
   {
      if(name.value.match(/\w\D/))
      {
         console.log("Name Match");
         document.getElementById("nameERR").innerHTML = "";
      }
      else
      {
         console.log("No Match");
         document.getElementById("nameERR").innerHTML = "INVALID NAME</br>";
      }
   }
}

/**************************************
* Validates that a proper age is input
* between the ages  of 0 and 118
* *************************************/
function checkAge(age)
{
   if(age.value == "")
   {
      console.log("Empty");
      document.getElementById("ageERR").innerHTML = "Please Enter an Age</br>";
      document.getElementById("age").focus();
   }
   else
   {
      if(age.value.match(/\d{0,2}/) && age.value <= 118)
      {
            console.log("Age Match");
            document.getElementById("ageERR").innerHTML = "";
      }
      else
      {
         console.log("No Match");
         document.getElementById("ageERR").innerHTML = "INVALID AGE</br>";
      }
   }

}

/**************************************
* Validates that a proper Social
* security number is entered
* *************************************/
function checkSocial(social)
{
   if(social.value == "")
   {
      console.log("Empty");
      document.getElementById("socialERR").innerHTML = "Please Enter your social security number</br>";
      document.getElementById("social").focus();
   }
   else
   {
      document.getElementById("socialERR").innerHTML = "";
      socialVal = social.value;
      socialVal = socialVal.replace(/-/g, '');
      socialVal = socialVal.replace(" ", '');
      console.log(socialVal);
      if(socialVal.match(/\b\d{9}\b/g))
      {
            console.log("Social Match");
            document.getElementById("socialERR").innerHTML = "";
      }
      else
      {
         console.log("No Match");
         document.getElementById("socialERR").innerHTML = "Invalid Social</br>";
      }
   }
}


/**************************************
* Validates that a proper Social
* security number is entered
* *************************************/
function checkCredit(credit)
{
   if(credit.value == "")
   {
      console.log("Empty Credit Field");
      document.getElementById("cardNumERR").innerHTML = "Please enter a Card Number";
   }
   else
   {
      document.getElementById("cardNumERR").innerHTML = "";
      creditVal = credit.value;
      creditVal = creditVal.replace(/-/g, '');
      creditVal = creditVal.replace(/ /g, '');
      if(creditVal.match(/\b\d{16}\b/g))
      {
         console.log("Card Match");
         document.getElementById("cardNumERR").innerHTML = "";
      }
   }
}
function checkField(elCheck)
{
   // if(elCheck.value == "")
   // {
   //    document.getElementById(elCheck).innerHTML = "Please enter an" + elCheck;
   // }
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
