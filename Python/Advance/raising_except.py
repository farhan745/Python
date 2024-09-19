a=int(input("First :"))
b=int(input("Second :"))

if(b==0):
  raise ZeroDivisionError("Hey")
else:
  print("Division: ",a/b)