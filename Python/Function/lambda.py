double = lambda x: x*2
cube = lambda x: x**3
avg = lambda x,y: (x+y)/2
print(double(5))
print("Cube: ",cube(6))
print("Avarage: ", avg(4,6))
#when you make lambda func..Then you will be not use func..its a annomus func

#Double Number Function
def myFunc(n):
  return lambda a: a*n

result = myFunc(8)
print(result(5)) 