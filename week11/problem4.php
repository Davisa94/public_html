<?php
$number = $_POST["input4"];
$spanishnum = "test";
$dictionary = array("one"=>"uno","two"=>"dos","three"=>"tres","four"=>"quatro",
"five"=>"cinco","six"=>"seis","seven"=>"siete","eight"=>"ocho","nine"=>"nuevo",
"ten"=>"diez","eleven"=>"once","twelve"=>"doce","thirteen"=>"trece",
"fourteen"=>"catorce","fifteen"=>"quince","sixteen"=>"dieciséis",
"seventeen"=>"diecisiete", "eighteen"=>"dieciocho","nineteen"=>"diecinueve",
"twenty"=>"veinte");
if (array_key_exists($number , $dictionary )){
   $spanishnum = $dictionary[$number];

}

echo "<!DOCTYPE html>
<html lang = \"en\">
<meta charset = \"utf-8\" />
<title>Week 11 : Problem 4</title>
<body> <p>";
echo  $spanishnum;
 echo "</p> </body></html>";
?>
