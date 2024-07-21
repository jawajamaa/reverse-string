def reverse_string(og_string):
    reversed = ""
    for letter in og_string:
        reversed = letter + reversed
    return reversed 


# print(reverse_string("ybabtac"))
print(reverse_string("redrum"))
