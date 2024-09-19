def avg(a,b,c):
   return (a+b+c)/3
 
avarage = avg(1,2,3)
print(f"Avarage: {avarage}")

print("Avarage: ",int(avg(3,4,5)))

#recursion
def fac(n):
  if(n==1):
    return 1
  else:
    return n * fac(n-1)
  
print("Factorial: ", fac(5))

#Recursion Increase
def p(n):
  if(n==0):
    return
  else:
    print(n)
    p(n-1)
    return
  
p(5)