class Employee:
  company = "ITC"
  def show(self):
    print(f"The name is {self.company} and the salary is {self.salary}")
class Coder:
  language="Python"
  salary=120000
  def printLanguage(self):
    print(f"Out of all the languages here is yor language: {self.language}")    
class Progremmer(Employee,Coder):
  #company = "ITC Infotech"
  def showLanguage(self):
    print(f"The name is {self.company} and his programming language is {self.language}")

a = Progremmer()
a.show()
a.printLanguage()
a.showLanguage()
