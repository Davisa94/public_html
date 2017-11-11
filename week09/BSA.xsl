<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
   <html>
      <head>
         <title>Boy Scouts Information</title>
      </head>
      <body>
         --begin for each
         <!-- Begin Scout Table -->
         <table border="2">
            <tr bgcolor="#85a6f0">
               <th>First Name</th>
               <th>Last Name</th>
               <th>Phone Number</th>
               <th>Address</th>
               <th>Rank</th>
            </tr>
            <xsl:for-each select="bsa/council/troop/scout">
               <tr>
                  <td><xsl:value-of select="firstname"/></td>
                  <td><xsl:value-of select="lastname"/></td>
                  <td><xsl:value-of select="phone"/></td>
                  <td><xsl:value-of select="address/street"/> &#160; <xsl:value-of select="address/city"/>, <xsl:value-of select="address/state"/> </td>
                  <td></td>
               </tr>
            </xsl:for-each>
         </table>
      </body>
   </html>
</xsl:template>
</xsl:stylesheet>
