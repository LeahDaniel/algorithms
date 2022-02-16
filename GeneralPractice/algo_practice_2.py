# def highest_and_lowest(string_o_numbers):
#     str_list = string_o_numbers.split(" ")
#     num_map = map(int, str_list)
#     num_list = list(num_map)

#     return {
#         'highest': max(num_list),
#         'lowest': min(num_list)
#     }


def highest_and_lowest(string_o_numbers):
    str_list = string_o_numbers.split(" ")
    num_map = map(int, str_list)
    num_list = list(num_map)

    highest = None
    lowest = None

    for num in num_list:
        if highest == None or highest < num:
            highest = num
        if lowest == None or lowest > num:
            lowest = num

    return {
        'highest': highest,
        'lowest': lowest
    }


def test_highest_and_lowest_solution():
    assert highest_and_lowest('5 4 3 9 7 23') == {'highest': 23, 'lowest': 3}
    assert highest_and_lowest(
        '4 5 29 54 4 0 -214 542 -64 1 -3 6 -6') == {'highest': 542, 'lowest': -214}
    assert highest_and_lowest('1 -1') == {'highest': 1, 'lowest': -1}
    assert highest_and_lowest('42') == {'highest': 42, 'lowest': 42}
    assert highest_and_lowest('2189 3105 476 2849 1619 1816 1785 1037 3266 187 446 3032 1743 2940 535 1677 2176 968 176 2078 2404 2867') == {
        'highest': 3266, 'lowest': 176}
