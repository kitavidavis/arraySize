# arraySize
A basic script that estimates the size of an array were it to be stored on a file.

# Algorithm
Algorithm ComputeArraySize(array):
    1. Initialize totalSize = 0
    
    2. For each element in array:
        2.1 If element is a primitive data type (e.g., int, float, char):
            2.1.1 Determine the size of the data type (in bytes)
            2.1.2 Add the size of the data type to totalSize
        2.2 If element is an object:
            2.2.1 Recursively call ComputeObjectSize(element) to calculate its size
            2.2.2 Add the computed size to totalSize
    
    3. Add any additional overhead (e.g., array size information, delimiters, headers)
    
    4. Return totalSize

Algorithm ComputeObjectSize(object):
    1. Initialize objectSize = 0
    
    2. For each property in object:
        2.1 If property is a primitive data type:
            2.1.1 Determine the size of the data type (in bytes)
            2.1.2 Add the size of the data type to objectSize
        2.2 If property is an object:
            2.2.1 Recursively call ComputeObjectSize(property) to calculate its size
            2.2.2 Add the computed size to objectSize
    
    3. Add any additional overhead (e.g., object size information, delimiters)
    
    4. Return objectSize
