class twoDvec:
   def __init__(self,i=0,j=0):
     self.i=i
     self.j=j
   def show(self):
      print(f"{self.i}i+{self.j}j")
class threeDvec(twoDvec):
   def __init__(self,i=0,j=0,k=0):
     super().__init__(i,j)
     self.k=k
   def show(self):
      print(f"{self.i}i+{self.j}j+{self.k}k")
a = twoDvec(1,2)
b = threeDvec(1,2,3)
b.show()