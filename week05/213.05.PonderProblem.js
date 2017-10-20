/******************************************************
* Ponder 05 JavaScript
* Author: Austin Davis AKA Austin Benitez
*
* Description: The purpose of this program is to pair
* with the accompanying html document and to attach to
* its various calls and serves to add functionality to
* the various buttons.
* ****************************************************/

/******************************************************
* Function problem1()
* Prints 'Hello World' to the console
* ****************************************************/
function problem1(){
   console.log("Hello World");
}

/******************************************************
* Function problem2()
* Replaces all instances of RICH_GUY with the user
* specified name.
* ****************************************************/
function problem2(userString, paragraph){
//step one: replace all instances of RICH_GUY with users string
   console.log("Initial text: " + paragraph);
   paragraph = paragraph.replace(/RICH_GUY/g, userString);
//step two: replace the text2 contents with paragraph.
   console.log("Text after change: " + paragraph);
   document.getElementById('text2').innerHTML = paragraph;
}

/******************************************************
* Function problem3()
* Outputs the Celsius equivalent to the input
* Fahrenheit.
* ****************************************************/
function problem3(fahrenheit){
   //step one: Convert the given fahrenheit to celsius and store it.
   celsius = (fahrenheit - 32) / 1.8;
   //step two: write the result to the console.
   console.log(celsius.toFixed(1) + ' degrees');
}

/******************************************************
* Function problem4()
* Will give the user a rate based upon a given weight
* Includes basic validation.
* ****************************************************/
function problem4(weight){
   var rate = '';
   console.log(weight);
   //step one switch it up... idk
   switch (weight) {
      case "1":
         rate = '$0.98';
         break;
      case "2":
         rate = '$1.19';
         break;
      case "3":
         rate = '$1.40';
         break;
      case "4":
         rate = '$1.61';
         break;
      case "5":
         rate = '$1.82';
         break;
      default:
         rate = 'Invalid weight';
         break;
   }
    console.log(rate);
}

/******************************************************
* Function problem5
* Outputs the interest given several inputs:
* APR
* Term
* Principal
* ****************************************************/
function problem5(apr, term, principal){
   apr = Number(apr);
   apr = apr/100; //converts apr from percent to decimal form
   term = Number(term);
   principal = Number(principal);

   for (var i = 0; i < term; i++) {
      principal += (apr * principal);
   }
   console.log('$' + principal.toFixed(2));
}
