class Employee:
  name="Farhan"     #Attribute
  language="Python" #Attribute
  salary=120000     #Attribute
  def getInfo(self):          #When you wanted to access attribute then you must  be wanted (self)=>perameter
    print(f"Name: {self.name}\nSalary: {self.salary} TK\nLanguage: {self.language}") 
  @staticmethod
  def greet():
    print("Good Morning")
farhan= Employee() #farhan is object

farhan.getInfo()
farhan.greet()