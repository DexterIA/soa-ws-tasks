from lxml import etree

xml = etree.parse(open('testFiles/form.xml', 'r'))
xslt = etree.parse(open('testFiles/schema.xsl', 'r'))
transform = etree.XSLT(xslt)
prettyXML = transform(xml)
print(etree.tostring(prettyXML, pretty_print=True))
