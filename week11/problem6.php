
<?php
$input = $_POST["input6"];
$list = explode(", ", $input);
echo "<!DOCTYPE html>
<html lang = \"en\">
<meta charset = \"utf-8\" />
<title>Week 11 : Problem 5</title>
<body> <p>";
echo "<table>
<tr>
   <th>Words</th>
</tr>";
for ($i = 0; $i <= sizeof($list); $i++) {
   $temp = $list[$i];
   echo "<tr>";
   echo "<td>$temp</td>";
   echo "</tr>";
}
echo "   </table>";
 echo "</p> </body></html>";
?>
