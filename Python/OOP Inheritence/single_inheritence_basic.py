class Employee:
  company = "ITC"
  def show(self):
    print(f"The name is {self.name} and the salary is {self.salary}")
    
class Progremmer(Employee):
  #company = "ITC Infotech"
  def showLanguage(self):
    print(f"The name is {self.name} and his programming language is {self.language}")

a = Progremmer()
print(a.company)
