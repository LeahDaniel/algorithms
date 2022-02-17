# Write a function that takes in RGB color values and converts it into the
# hexadecimal color. The function should take three arguments for the R, G, and B
# values. If the R, G, or B values are outside of the 0 to 255 range they should
# be converted to the closest number in that range

# def rgb_to_hex(red, green, blue):
#     r = max(0, min(255, red))
#     g = max(0, min(255, green))
#     b = max(0, min(255, blue))

#     return '%02X%02X%02X' % (r, g, b)


# def rgb_to_hex(red, green, blue):
#     r = max(0, min(255, red))
#     g = max(0, min(255, green))
#     b = max(0, min(255, blue))

#     r_string = "{:02X}".format(r)
#     g_string = "{:02X}".format(g)
#     b_string = "{:02X}".format(b)

#     return r_string + g_string + b_string

def rgb_to_hex(red, green, blue):
    r = max(0, min(255, red))
    g = max(0, min(255, green))
    b = max(0, min(255, blue))

    return f"{r:02X}{g:02X}{b:02X}"


def test_rgb_solution():
    assert rgb_to_hex(255, 255, 255) == 'FFFFFF'
    assert rgb_to_hex(255, 255, 300) == 'FFFFFF'
    assert rgb_to_hex(0, 0, 0) == '000000'
    assert rgb_to_hex(148, 0, 211) == '9400D3'
    assert rgb_to_hex(254, 253, 252) == "FEFDFC"
    assert rgb_to_hex(220, 67, 368) == "DC43FF"
