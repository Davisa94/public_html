<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <h2>Information</h2>
    <table border="0.5">
      <tr bgcolor="#21deb1">
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
      </tr>
      <xsl:for-each select="directory/file">
      <tr>
        <td><xsl:value-of select="@name" /></td>
        <td><xsl:value-of select="@type" /></td>
        <td><xsl:value-of select="@size" /></td>

      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>
