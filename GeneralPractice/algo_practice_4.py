# Write a function that that takes a positive integer as a parameter.
# The function should return the sum of all the multiples of 3 and/or 5
# less than (but not equal to) the number passed in

# def sum_of_multiples(num):
#     x = range(num)
#     new_list = []

#     for number in x:
#         if number % 3 == 0 or number % 5 == 0:
#             new_list.append(number)

#     return sum(new_list)

def sum_of_multiples(num):
    new_list = [x for x in range(num) if x % 3 == 0 or x % 5 == 0]

    return sum(new_list)


def test_sum_of_multiples_solution():
    assert sum_of_multiples(10) == 23
    assert sum_of_multiples(20) == 78
    assert sum_of_multiples(0) == 0
    assert sum_of_multiples(1) == 0
    assert sum_of_multiples(200) == 9168
    assert sum_of_multiples(64) == 933
