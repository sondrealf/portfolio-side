




import re


def find_maximum(array):
    left = 0;
    right = len(array) - 1
    while left < right:
        midPosition = (left + right) // 2;
        if array[midPosition] > array[midPosition+1]:
            right = midPosition;
        else:
            left = midPosition + 1;
    return array[left];
    

A = [11, 10, 9, 8, 12]
l = find_maximum(A)

print(l)


