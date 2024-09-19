from functools import reduce
#map

numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x**2, numbers))
print(squares) 

#filter
def even(n):
  if n%2 ==0:
    return True
  return False
onlyEven = filter(even,numbers) 
print(list(onlyEven))

#Reduce
def sum(a,b):
  return a+b
print("Sum: ",reduce(sum,numbers))

mul = lambda x,y: x*y

print("Multiply: ", reduce(mul,numbers))