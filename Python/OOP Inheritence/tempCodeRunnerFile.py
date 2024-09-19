  def __mul__(self,num):
    return number(self.i*num.i,self.j*num.j,self.k*num.k)
  def __truediv__(self,num):
    return number(self.i/num.i,self.j/num.j,self.k/num.k)
  def __gt__(self,num):
    return self.i>num.i and self.j>num.j and self.k>num.k