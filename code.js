
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
var ans = divideAndConquerSum(x)
console.log(ans)

// we divide the array into three parts 
// we call sum on each part, and store the result in p1, p2 and p3
// then we return the sum of p1 + p2 + p3
// if the beginning index of a list is greater than than the end,
// we return 0 and move to the next third
// if the beginning index is equal to the end index, we return that index 
// and evaluate the next element in the current third

function sum(x, first, last)  
{ 
    var oneThird = first + Math.floor((last - first) / 3);
    var twoThird = first + 2 * Math.floor((last - first) / 3) + 1;
    
    if (first < last) 
    {
        var part1 = sum(x, first, oneThird);        // calculate sum up to index oneThird
        var part2 = sum(x, oneThird+1, twoThird);   // calculate sum from oneThid to twoThirds
        var part3 = sum(x, twoThird+1, last);       // calculate sum from twoThirds to the last index
    
        return part1 + part2 + part3
    }
    else // first is greater than or equal to last
    {
        if (first > last) return 0;         // 0 elements left, return 0
        if (first == last) return x[first]  // 1 element left, return element
    }
} 

function divideAndConquerSum(x)  
{ 
    return sum(x, 0, x.length - 1); 
} 
 
// RESOURCES 

    // 1. https://www.geeksforgeeks.org/3-way-merge-sort/


// STEP THROUGH

    // x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    // i = [0, 1, 2, 3, 4, 5, 6, 7, 8,  9, 10, 11, 12)

    // var part1 = sum(x, first, oneThird);       [1, 2, 3, 4, 5]

    // p1 = [1] ... p2 = [2] ... p3 = 0     = 3
    // p1 = [3] ... p2 = [4] ... p3 = 0     = 7
    // p1 = [5] ... p2 = 0   ... p3 = 0     = 5

    // p1 = 3 + 7 + 5 = 15

    // var part2 = sum(x, oneThird+1, twoThird);  [6, 7, 8, 9, 10]

    // p1 = [6] ...  p2 = [7] ... p3 = 0     = 13
    // p1 = [8] ...  p2 = [9] ... p3 = 0     = 17
    // p1 = [10] ... p2 = 0   ... p3 = 0     = 10

    // p1 = 13 + 17 + 10 = 40 

    // var part2 = sum(x, oneThird+1, twoThird);  [11, 12, 13, NaN, NaN]

    // p1 = [11] ... p2 = [12] ... p3 = [13]  = 36 
    // p1 = 0
    // p1 = 0
    // p1 = 36 + 0 + 0 

    // P1 (15) + P2 (40) + P3 (36) = 91