x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x) #first print bcz func call then print


myfunc()
print("Python is " + x)

#2nd term
x = "awesome"

def myfunc():
  global x #because fantastis global  is glabal
  x = "fantastic"

myfunc()

print("Python is " + x)