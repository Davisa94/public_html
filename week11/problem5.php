
<?php
$x = $_POST["x"];
$n = $_POST["n"];

echo "<!DOCTYPE html>
<html lang = \"en\">
<meta charset = \"utf-8\" />
<title>Week 11 : Problem 5</title>
<body> <p>";
echo "<table>
<tr>
   <th>n</th>
   <th>X<sup>n</sup></th>
</tr>";
for ($i = 1; $i <= $n; $i++) {
   $temp = (pow($x, $i));
   echo "<tr>";
   echo "<td>$i</td>";
   echo "<td>$temp</td>";
   echo "</tr>";
}
echo "   </table>";
 echo "</p> </body></html>";
?>
