a = ["Apple","Orange",123,False,"Rohan"]
print(a[2])

a[2] = 456 #change
print(a[2])

a.append("Grapes") #add
print(a)
print(a[1:3])

#remove
a.remove("Rohan") #remove by value
print("Remove: ",a)

#insert
a.insert(2,"Mango") #insert at position
print("Insert: ",a)

#pop
a.pop(2) #pop at position
print("Pop: ",a)

#delete
del a[2] 
print("Delete: ",a)

#sort
num=[7,6,5,4,3,2,1]
num.sort()
print("Sort: ",a)
#reverse
num.reverse()
print("Reverse: ",num)