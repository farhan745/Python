class number:
  def __init__(self,i,j,k):
    self.i=i
    self.j=j
    self.k=k
  def __add__(self,num):
    return number(self.i+num.i,self.j+num.j,self.k+num.k)
  def __sub__(self,num):
    return number(self.i-num.i,self.j-num.j,self.k-num.k)
  def __mul__(self,num):
    return number(self.i*num.i,self.j*num.j,self.k*num.k)
  def __truediv__(self,num):
    return number(self.i/num.i,self.j/num.j,self.k/num.k)
  def __gt__(self,num):
    return self.i>num.i and self.j>num.j and self.k>num.k
  def __str__(self):
    return(f"[{self.i} , {self.j} , {self.k}]")
a=number(10,15,20)
a1=number(10,15,20)
b=number(15,20,25)
c=number(15,20,25)
sum=a+c+b
sub=b-a
x=number(2,3,4)
y=number(5,4,3)
mul=x*y
print("Sum:",sum)
print("Sub",sub)
print("Multiply: ",mul)
div=a/x
print("Divide",div)
getterThen=b>a
print(getterThen)
