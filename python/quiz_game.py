print("welcome to my computer quiz!")

playing = input("do you want to play? ")

if playing != "yes":
    quit()

print("Okey! Let's play :)")

answer = input("what does CPU stand for?  ")
if answer == "central processing unit":
    print("Correct!")
else:
    print("Incorrect!")