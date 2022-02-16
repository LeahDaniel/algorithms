# Write a function that takes a single string argument. 
# The function should return the shortest possible palindrome of the string. 
# Letters should be added to the end of the string not removed.

def make_palindrome(string):
    # make backwards string using for loop (range backwards?)
    # start 
    pass

def test_make_palindrome_solution():
    assert make_palindrome('abcdc') == 'abcdcba'
    assert make_palindrome('ababab') == 'abababa'
    assert make_palindrome('bccaaac') == 'bccaaaccb'
