try:
  a=int(input("Enter a num: "))
  b=int(input("Enter a num: "))
  print(a/b)
except ZeroDivisionError as v:
  print("Infinite!")