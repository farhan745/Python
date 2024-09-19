try:
  a=int(input("Enter a number: "))
  print(a)
except Exception as e:
  print("Heyy")
finally:
  print("This is the end")