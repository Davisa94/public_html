<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
     <head>
     <title>Teach 09 : Problem 1</title>
     </head>
  <body>
      <xsl:for-each select="classes/class">
        <a><xsl:value-of select="."/></a><br/>
      </xsl:for-each>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>
