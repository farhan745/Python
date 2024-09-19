import datetime as date

x = date.datetime.now()
print(x)
print("Year: ",x.year)
print(x.strftime("%A"))
print(x.strftime("%w"))
print(x.strftime("%y"))

y = date.datetime(2020,10,23)
print(y)
