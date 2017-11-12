<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
   <html>
      <head>
         	<link rel="stylesheet" type="text/css" href="../styles.css"/>
         <title>Boy Scouts Information</title>
      </head>
      <body>
         <xsl:for-each select="bsa/council">
            <h1 class="heading-left"><xsl:value-of select="@name"/></h1>
         <!-- Begin Scout Table -->
         <xsl:for-each select="troop">
            <div class="fill">
            <h3 class="heading-left-small">Troop: <xsl:value-of select="@name"/><br/></h3>
         <!-- Begin Scout Table -->
         <table border="2">
            <tr bgcolor="#85a6f0">
               <th>First Name</th>
               <th>Last Name</th>
               <th>Phone Number</th>
               <th>Address</th>
               <th>Rank/Date Earned</th>
               <th>Merit Badge/Date Earned</th>
            </tr>
            <xsl:for-each select="scout">
               <tr>
                  <td><xsl:value-of select="firstname"/></td>
                  <td><xsl:value-of select="lastname"/></td>
                  <td><xsl:value-of select="phone"/></td>
                  <td><xsl:value-of select="address/street"/>&#xA0;<xsl:value-of select="address/city"/>, <xsl:value-of select="address/state"/> </td>
                  <td>
                     <select>
                        <xsl:for-each select="rank">
                        <option><xsl:value-of select="."/>, &#160; <xsl:value-of select="@date-earned"/></option>
                     </xsl:for-each>
                     </select>
                   </td>
                   <td>
                     <select>
                        <xsl:for-each select="meritbadge">
                        <option><xsl:value-of select="."/>, &#160; <xsl:value-of select="@date-earned"/></option>
                     </xsl:for-each>
                     </select>
                   </td>
               </tr>
            </xsl:for-each>
         </table>
      </div>
      </xsl:for-each>
   </xsl:for-each>
      </body>
   </html>
</xsl:template>
</xsl:stylesheet>
