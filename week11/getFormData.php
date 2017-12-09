<?php

   //  This function reads the form "query string"
   //  
   // This function handles both an http "get".
   $field1 = $_GET['apr']; 
   $field2 = $_GET['term'];
   $field3 = $_GET['amount'];
?>

<!DOCTYPE html>
<html lang = "en">
  <meta charset = "utf-8" />
  <title>Read Form!</title>
  <body>
    <h3>The values of the form elements are: <br />
      <?php
         print "APR: $field1<br />";
         print "Term: $field2<br />";
         print "Amount: $field3<br />";
      ?>  
   </h3>

   <h3>Prints query string for-each</h3>

  <?php
    $keys = array_keys($_GET);  # returns a array of the key values of $_GET array

    # print each key and value
    foreach ($keys as $key)
    {
      print "$key = $_GET[$key] <br />";
    }

    echo "<br />";

    # another way of getting the key and value from the $_GET array
    foreach ($_GET as $key => $value)
    {
      print "$key = $value <br />";
    }

  ?>

 
</body>
</html>

