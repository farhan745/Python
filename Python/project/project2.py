import random
n = random.randint(1,10)
a=-1
guesses=0
while a!=n:
  guesses+=1
  a = int(input("Guess the Number: "))
  if(a>n):
    print("Lower number please")
  else:
    print("Higher number please")
print(f"You have guessed the number {n} correctly in {guesses} attemd")