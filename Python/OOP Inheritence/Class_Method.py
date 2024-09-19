class Employee():
  a=1
  @classmethod
  def show(cls):
    print(f"The class Value: {cls.a}")
p1=Employee()
p1.a=45
p1.show() 