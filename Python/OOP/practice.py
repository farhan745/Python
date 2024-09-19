#Problem 1
'''class programmer:
  company = "Microsoft"
  def __init__(self,name,salary,pin):
    self.name = name
    self.salary = salary
    self.pin = pin
  
p=programmer("John",100000,2432)
print(p.company,p.name,p.salary,p.pin)'''

#problem 2
class Calculator:
  def __init__(self,a):
    self.a = a
  def square(self):
    print(f"The square value is: {self.a**2}")
  def cube(self):
    print(f"The cube value is: {self.a**3}")
  def root(self):
    print(f"The squareroot value is: {self.a//2}")
    
a1=int(input())
sq=Calculator(a1)
sq.square()
sq.cube()
sq.root()
    