#!D:\Program Files\Python35-32\python

# Import modules for CGI handling 
import cgi, cgitb 
import json

# Create instance of FieldStorage 
input = cgi.FieldStorage() 
text = input.getvalue('data')
print("Content-type:application/json\r\n\r\n")
print(json.dumps({'reply': text}))