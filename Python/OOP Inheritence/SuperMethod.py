class Employee:
  def __init__(self):
    print("Constructor of Employee")
    
class Progremmer():
  def __init__(self):
    
    print("Constructor of Programmer")
  
class Manager(Employee,Progremmer):
  def __init__(self):
    super().__init__()
    print("Constructor of Manager")
    
    
a = Manager()



