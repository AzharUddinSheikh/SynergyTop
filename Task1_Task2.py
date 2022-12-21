# Task 1
import math
given_data = [3, 6, 9, 12, 18, 21, 24, 27]


def tableOfThree(data: list) -> list:
    return [num * 3 for num in range(1, 11) if num % 5 != 0]
# print(tableOfThree(given_data))


# Task 2
def absoluteIndex(data: list) -> list:
    # list should not empty
    if not data:
        return -1

    # Please look into Note Section point 2
    data_with_index = {}

    # Please look into Note Section point 3
    max_value = -math.inf
    min_value = math.inf
    length = 0

    for number in data:
        max_value = number if number > max_value else max_value
        min_value = number if number < min_value else min_value
        data_with_index[number] = length
        length += 1

    result = data_with_index[max_value] - data_with_index[min_value]
    return (result
            if data_with_index[max_value] > data_with_index[min_value]
            else result * -1
            )


'''
Note: absoluteIndex (without using any predefined function)
1 - > function might produce unexpected result for few test case for example 
[5,6,6,6,10,9,8,5] result will be 3 (4 also be a expected answer)

2 -> not space efficient
for space efficient solution we can assign two more variable (min_index_value, max_index_value)
to store the index value for max_value and min_value 

3 -> getting min and max save values with math module
can also provide some hardcore value which is not a good idea
'''

# print(absoluteIndex([5,2,7,9,13,3,8,1]))
