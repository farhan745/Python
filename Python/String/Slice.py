#Slicing of String
name="Jackfruit"
sliced_name = name[-3:-1]
print("Negative Sliced String:", sliced_name)

sliced_name = name[1:3]
print("Positive Sliced String:", sliced_name)

sliced_name = name[:3]
print("Sliced String from Start:", sliced_name)

sliced_name = name[3:]
print("Sliced String from End:", sliced_name)
#Triple Slice
name1="0123456789"
slice_name = name1[1:7:2]#135
print("Triple Sliced String (Every Second Character):", slice_name)
#Reversed String
sliced_name = name1[::-1]
print("Reversed String:", sliced_name)