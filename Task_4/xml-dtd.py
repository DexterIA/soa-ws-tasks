from lxml import etree

xml = etree.parse(open('testFiles/form.xml', 'r'))
dtd = etree.DTD(open('testFiles/schema.dtd', 'r'))
print "Valid: ", dtd.validate(xml)
