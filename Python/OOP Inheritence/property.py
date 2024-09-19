class person:
  def __init__(self,fname,lname):
    self.firstname=fname
    self.lastname=lname
  
    
    
class student(person):
  def __init__(self,fname,lname,year):
    super().__init__(fname,lname)
    self.year=year
  def print(self):
    print(f"Name: {self.firstname} {self.lastname}, Year: {self.year}")
    
    
x=student("John","Doe",2024)
x.print()