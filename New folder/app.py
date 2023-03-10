import random


val= 2
while val != 3:
    choices = ["Rock", "Paper", "Scissors"]
    user_input = input("Enter your choice: ")
    choice = random.choice(choices)
    if user_input == "Rock" and choice == "Paper":
        print(f"you {user_input} wins")
        print("Would you like to continue?")
        proceed = input("Enter Yes/No")
        if proceed == "Yes":
            continue
        elif proceed == "No":
            break
    elif choice == "Scissors" and user_input == "Paper":
        print("Computer wins")
        print("Would you like to continue?")
        proceed = input("Enter Yes/No")
        if proceed == "Yes":
            continue
        elif proceed == "No":
            break
    elif user_input == "Scissors" and choice == "Rock":
        print("Computer wins")
        print("Would you like to continue?")
        proceed = input("Enter Yes/No")
        if proceed == "Yes":
            continue
        elif proceed == "No":
            break
