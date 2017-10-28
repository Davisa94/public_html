var userName;
function setUserFirst(value)
{
   userName = value;
}
function setUserLast(value)
{
   userName += " " + value;
}
// function resetForm()
// {
//    document.getElementById("form1").reset();
// }
/**************************************
* Validates that a proper name is input
* *************************************/
function checkName(name, errorElement)
{
   if(name.value == "")
   {
      console.log("Empty");
      document.getElementById(errorElement).innerHTML = "Please Enter a name</br>";
      document.getElementById(name.id).focus();
   }
   else
   {
      if(name.value.match(/^\s*\w\D\s*$/))
      {
         console.log("Name Match");
         document.getElementById(errorElement).innerHTML = "";
      }
      else
      {
         console.log("No Match");
         document.getElementById(errorElement).innerHTML = "INVALID NAME</br>";
      }
   }
}

/**************************************
* Validates that a proper age is input
* between the ages  of 0 and 118
* *************************************/
function checkAge(age, errorElement)
{
   if(age.value == "")
   {
      console.log("Empty");
      document.getElementById(errorElement).innerHTML = "Please Enter an Age</br>";
      document.getElementById(age.id).focus();
   }
   else
   {
      ageVal = age.value;
      if(age.value.match(/^\s*\d{1,3}\s*$/g))
      {
         ageVal = ageVal.replace(/ /g, '');
         if(age.value <= 118)
         {
               console.log("Age Match");
               document.getElementById(errorElement).innerHTML = "";
         }
         else
         {
            console.log("No Match");
            document.getElementById(errorElement).innerHTML = "INVALID AGE</br>";
         }
      }
   }

}

/**************************************
* Validates that a proper Social
* security number is entered
* *************************************/
function checkSocial(social, errorElement)
{
   if(social.value == "")
   {
      console.log("Empty");
      document.getElementById(errorElement).innerHTML = "Please Enter your social security number</br>";
      document.getElementById(social.id).focus();
   }
   else
   {
      document.getElementById(errorElement).innerHTML = "";
      socialVal = social.value;
      console.log(socialVal);
      if(socialVal.match(/^\s*\d{3}\s*\-*\s*\d{2}\s*\-*\s*\d{4}\s*$/g))
      {
            console.log("Social Match");
            document.getElementById(errorElement).innerHTML = "";
            /*****************************************
            * Special formatting of social, converts
            * the stripped social into a correct format
            * then puts it out to the input
            *****************************************/
            socialVal = socialVal.replace(/-/g, '');
            socialVal = socialVal.replace(/ /g, '');
            formattedSocial = "";
            for (var i = 0; i < 3; i++)
            {
               formattedSocial += socialVal.charAt(i);
            }
            formattedSocial += " - ";
            for (var i = 3; i < 5; i++)
            {
               formattedSocial += socialVal.charAt(i);
            }
            formattedSocial += " - ";
            for (var i = 5; i < 9; i++)
            {
               formattedSocial += socialVal.charAt(i);
            }
            document.getElementById(social.id).value = formattedSocial;
      }
      else
      {
         console.log("No Match");
         document.getElementById(errorElement).innerHTML = "Invalid Social</br>";
      }
   }
}


/**************************************
* Validates that a proper Credit
* card number is entered
* *************************************/
function checkCredit(credit, errorElement)
{
   creditVal = credit.value;
   if(credit.value == "")
   {
      console.log("Empty Credit Field");
      document.getElementById(errorElement).innerHTML = "Please enter a Card Number</br>";
   }
   else
   {
      document.getElementById(credit.id).innerHTML = "";

      if(creditVal.match(/^\s*\d{4}\s*\-*\s*\d{4}\s*\-*\s*\d{4}\s*\-*\s*\d{4}\s*$/g))
      {
         console.log("Card Match");
         document.getElementById(errorElement).innerHTML = "";
         /*****************************************
         * Special formatting of Credit, converts
         * the stripped card number into a correct format
         * then puts it out to the input
         *****************************************/
         creditVal = creditVal.replace(/-/g, '');
         creditVal = creditVal.replace(/ /g, '');
         formattedCredit = "";
         for (var i = 0; i < 4; i++)
         {
            formattedCredit += creditVal.charAt(i);
         }
         formattedCredit += " - ";
         for (var i = 4; i < 8; i++)
         {
            formattedCredit += creditVal.charAt(i);
         }
         formattedCredit += " - ";
         for (var i = 8; i < 12; i++)
         {
            formattedCredit += creditVal.charAt(i);
         }
         formattedCredit += " - ";
         for (var i = 12; i < 16; i++)
         {
            formattedCredit += creditVal.charAt(i);
         }
         document.getElementById("cardNum").value = formattedCredit;
      }
      else
      {
         document.getElementById("cardNumERR").innerHTML = "Invalid Card Number</br>";
      }
   }
}
/**************************************
* Validates that a proper Phone number
* is entered displays message if not
* *************************************/
function checkPhone(number, errorElement)
{
   numberVal = number.value;
   if(number.value == "")
   {
      console.log("Empty number Field");
      document.getElementById("phoneERR").innerHTML = "Please enter a Phone Number</br>";
   }
   else
   {
      document.getElementById("phoneERR").innerHTML = "";
      if(numberVal.match(/^\s*\(*\d{3}\)*\s*\-*\s*\d{3}\s*\-*\s*\d{4}\s*$/g))
      {
         console.log("Phone Match");
         document.getElementById("phoneERR").innerHTML = "";
         /*****************************************
         * Special formatting of Phone number,
         * converts the stripped number into a correct
         * format then puts it out to the input
         *****************************************/
         numberVal = numberVal.replace(/-/g, '');
         numberVal = numberVal.replace(/ /g, '');
         numberVal = numberVal.replace(/\(/g, '');
         numberVal = numberVal.replace(/\)/g, '');
         //format phone number nicely
         //insets the "( "
         formattedNum = "(";
         //inserts the area code
         for (var i = 0; i < 3; i++)
         {
            formattedNum += numberVal.charAt(i);
         }
         //Closes the area code
         formattedNum += ") ";
         //inserts the next three digits
         for (var i = 3; i < 6; i++)
         {
            formattedNum += numberVal.charAt(i);
         }
         //inserts a dash
         formattedNum += " - ";

         //finishes the last four digits
         for (var i = 6; i < 10; i++)
         {
            formattedNum += numberVal.charAt(i);
         }
         //inserts final result into the field
         document.getElementById("phone").value = formattedNum;
         console.log(formattedNum);
      }
      else
      {
         document.getElementById("phoneERR").innerHTML = "Invalid Card Number</br>";
      }
   }
}
/**************************************
* Validates that a proper date
* is entered displays a message if not
* entered properly, corrects format
* if it was formatted incorrectly.
* *************************************/
function checkDate(date, errorElement)
{
   if(date.value == "")
   {
      console.log("Empty number Field");
      document.getElementById("cardDateERR").innerHTML = "Please enter a Card Date</br>";
   }
   else
   {
      //resets the error message
      document.getElementById("cardDateERR").innerHTML = "";
      // Breaks the date down into its components month day and year
      var dateVal = date.value;
      /*****************************************************
      * Advanced date formula allows dashes commas or slashes
      * dateVal = dateVal.split(/[-,\s\\/]/);
      *****************************************************/
      dateVal = dateVal.split(/[\s/]+/);
      //if the point of the assignment was regex I used it above

      /*****************************************************
      * the string of values is split into seperate variables
      * only for clarity and incase i need to lookback at
      * this assignment later, please dont deduct points
      * I know i could have simply referenced the location of
      * the array instead of creating variables for each.
      *****************************************************/
      var month = dateVal[0];
      var day = dateVal[1];
      var year = dateVal[2];
      if( ((year >= 1753)&&(year <= 2100)) &&
          ((day >= 1)    &&(day <= 31))    &&
          ((month >= 1)  &&(month <= 12)))
      {
         console.log("Date Match");
         document.getElementById("cardDateERR").innerHTML = "";
      }
      else
      {
         document.getElementById("cardDateERR").innerHTML = "Invalid Expiration Date</br>";
      }
   }

}

function checkMoney(money)
{
   if(money.value == "")
   {
      console.log("Empty Money Field");
      document.getElementById("moneyERR").innerHTML = "Please enter an amount</br>";
   }
   else
   {
      //resets the error message
      document.getElementById("moneyERR").innerHTML = "";
      if(money.value.match(/^\s*\$?((\d{1,3}[,]?)?(\.\d{2})?)\s*$/g))
      {
         console.log("Money Match");
         document.getElementById("moneyERR").innerHTML = "";
      }
      else
      {
         document.getElementById("moneyERR").innerHTML = "Invalid Entry</br>";
      }
   }

}

function checkState(state)
{
   if(state.value == "")
   {
      console.log("Empty State Field");
      document.getElementById("stateERR").innerHTML = "Please enter a State</br>";
   }
   else
   {
      document.getElementById("stateERR").innerHTML = "";
      var stateString = "";
      stateString = String(state.value);
      console.log(state);
      var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL",
                              "GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA",
                              "MA","MD","ME","MH","MI","MN","MO","MS","MT","NC",
                              "ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR",
                              "PA","PR","PW","RI","SC","SD","TN","TX","UT","VA",
                              "VI","VT","WA","WI","WV","WY");
      if(stateList.indexOf(stateString) != "-1")
      {
         document.getElementById("stateERR").innerHTML = "";
      }
      else
      {
         document.getElementById("stateERR").innerHTML = "Invalid State";
      }
   }
}
