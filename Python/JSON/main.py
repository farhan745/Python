import json

x = '{"name": "John","age": 30,"city": "New York"}'
print(type(x))

y = json.loads(x)
print(y["age"]) 
y={
  "name": "John",
  "age": 30,
  "city": "New York",
  "passion":{
    "hobby": "Reading",
    "interest": "Cooking"
  }
}
print(json.dumps(y,indent=4))
print(json.dumps(y,indent=4,sort_keys=True)) 