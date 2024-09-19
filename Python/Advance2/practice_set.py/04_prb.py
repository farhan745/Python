def divisible5(n):
  if n % 5 == 0:
    return True
  else:
    return False
l=[1,2,10,12,335,880,764,765]
fil=filter(divisible5,l)
print(list(fil))