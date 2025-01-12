num1 = input()
num2 = input()
num3 = input()

if num1>num2 and num3>num2:
  print(num2)
elif num2>num1 and num3>num1:
  print(num1)
else:
  print(num3)