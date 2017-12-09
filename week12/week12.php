<?php
   //User Information
   $name = $_POST['fname'];
   $name .= " ";
   $name .= $_POST['lname'];
   $address = $_POST['address'];
   $social = $_POST['social'];
   $phone = $_POST['phoneNum'];
   $card = $_POST['cardNum'];
   $cardDate = $_POST['date'];
   //Services Requested.
   $premiumTaxHours = $_POST['premiumtaxamt'];
   $basicTaxHours = $_POST['basictaxamt'];
   $premiumAcctHours = $_POST['premacctamt'];
   $basicAcctHours = $_POST['basicacctamt'];
   //Prices:
   $premiumTaxPrice = $_POST['premiumtaxrate'];
   $basicTaxPrice = $_POST['basictaxrate'];
   $premiumAcctPrice = $_POST['premacctrate'];
   $basicAcctPrice = $_POST['basicacctrate'];
   //Sub-Totals:
   $premiumTaxTotal = $_POST['premiumtaxtotal'];
   $basicTaxTotal = $_POST['basictaxtotal'];
   $premiumAcctTotal = $_POST['premaccttotal'];
   $basicAcctTotal = $_POST['basicaccttotal'];
   //Total:
   $total = $_POST['totalWtax'];

    echo "<!DOCTYPE html>
          <html lang = \"en\" >
   	      <head>
   		<meta charset = \"utf-8\" />
   		<link rel=\"stylesheet\" type=\"text/css\" href=\"../styles.css\"/>
   		<title> Please confirm this Information is correct</title>
   	</head>
   	<body style = \"text-align: center;\">
      <h1 class=\"heading\" style=\"font-size:500%;\">Please Confirm Your Info:</h1>
         <div id=\"main\" class=\"container-center\">
            <div class=\"box blue-gradient\">
            		<h1> Your info </h1>
                  <div class=\"box steel\">
                     <h3>Name: $name</h3>
                     <h3>Address: <pre>$address</pre></h3>
                     <h3>Social Security Number: $social</h3>
                     <h3>Cell Phone Number: $phone</h3>
                     <h3>Credit Card Number: $card</h3>
                     <h3>Card Expiration: $cardDate</h3>
                  </div>
            </div>
            <div class=\"box blue-gradient\">
            <h1>Purchase info: </h1>
               <div class=\"box steel\">
               <table>
                  <tr>
                     <th>Service Name</th>
                     <th>Hours Requested</th>
                     <th>Price/Hour</th>
                     <th>Sub Total</th>
                  </tr>
                  <tr>
                     <td>Premium Tax Service</td>
                     <td>$premiumTaxHours</td>
                     <td>$premiumTaxPrice</td>
                     <td>$premiumTaxTotal</td>
                  </tr>
                  <tr>
                     <td>Basic Tax Service</td>
                     <td>$basicTaxHours</td>
                     <td>$basicTaxPrice</td>
                     <td>$basicTaxTotal</td>
                  </tr>
                  <tr>
                     <td>Premium Accounting Service</td>
                     <td>$premiumAcctHours</td>
                     <td>$premiumAcctPrice</td>
                     <td>$premiumAcctTotal</td>
                  </tr>
                  <tr>
                     <td>Basic Accounting Service</td>
                     <td>$basicAcctHours</td>
                     <td>$basicAcctPrice</td>
                     <td>$basicAcctTotal</td>
                  </tr>
               </table>
               <h3>Total Cost: $total</h3>
               </div>
            </div>
         </div>
   	</body>
   </html>";
?>
