s=set()#empty set
print(type(s))
s={1,5,32,54,5,"Rohan"}
print(s)
#length
length=len(s)
print("Length of Set:",length)

#Union
s1={1,5,45}
s2={7,8,1,78}
print("Union Set: ",s2.union(s1))#you can use (|)
#intersection
print("Intersection Set: ",s1.intersection(s2))#you can use &
#difference
print("Difference Set: ",s1.difference(s2))#you can use(-)
#symmetric_difference()/(^)
print("Symmetric Difference Set: ",s1.symmetric_difference(s2))#you can use(^)