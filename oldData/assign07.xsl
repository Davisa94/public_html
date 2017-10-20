<?xml version="1.0" encoding = "ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
   <xsl:template match="bsa/council">
   <html>
      <body>
         <xsl:for-each select="troop">
            <xsl:value-of select="name"/><br/>
            <xsl:value-of select="number"/><br/>

            <xsl:for-each select="scout">
               <xsl:sort select="firstname"/>
               <xsl:value-of select="firstname"/><br/>
               <xsl:value-of select="lastname"/><br/>
               <xsl:value-of select="phone"/><br/>
               <xsl:value-of select="address"/><br/>
               <xsl:value-of select="rank"/><br/>
               <xsl:for-each select="rank">
                  <xsl:value-of select="@date-earned"/><br/>
               </xsl:for-each>
               <xsl:value-of select="meritbadge"/><br/>
               <xsl:for-each select="meritbadge">
                  <xsl:value-of select="@date-earned"/><br/>
               </xsl:for-each>
            </xsl:for-each>
         </xsl:for-each>
      </body>
   </html>
</xsl:template>
</xsl:stylesheet>
