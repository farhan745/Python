class Employee:
  def __init__(self,name,salary,language):     #Constructor
    print("I'm Constructor")
    self.name=name
    self.salary=salary
    self.language=language     
  def getInfo(self):
    print(f"Name: {self.name}\nSalary: {self.salary} TK\nLanguage: {self.language}")  
farhan= Employee("Farhan",120000,"Python") #farhan is object
farhan.getInfo()
