import xmlrpclib

proxy = xmlrpclib.ServerProxy("http://localhost:9090/anAction")
print str(proxy.anAction('Alexey'))
