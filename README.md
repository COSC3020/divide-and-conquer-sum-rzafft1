[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11754494&assignment_repo_type=AssignmentRepo)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Recurrence Relation : 

T(n) = 0 if n <= 1 || 3 T(n/3) + n/3 if n > 1

T(n) = 3 T(n/3) + n/3
     = 3 ( 3T((n/3)/3) + n/3 ) + n/3
     = 9 T(n/9) + 3n/3 + n/3
     = 9 T(n/9) + 4n/3
     ... 
T(n) = 3^i (T(n/(9^i)) + i (n/3)

nT(0) + n log n  = n log n exist is O(n log n)

Explanation ... 

- T(n) shows the time complexity as the input size, n increases
- 3 * T(n/3) + n/3 represents the recursive call that we make when we divide the input array by 3. 
- multiplying our recurrence relation by 3 represents a recursive call made. This results in T(n/3) changing to T(n/9) which shows that we need to divide the intial third of the input array by three so that we can return each each element from the initial input third of the array into the total sum of the current third of the array
- We use n/3 from T(n/3) because we have three recusive calls and each recursive call returns a third of the initial third of the input size
- The n/3 that is added at the end of the recurrence relation shows that we are returning a third of the third of the recursive call
- So when we simplify T(n) to 9 T(n/9) + 4n/3, the 4n/3 represents the size of the list that we return after the first recursive call 
  
- After evaluating our recurrence relation we show how the recurrence relation grows as input size changes
- we show T(n) growing with the input size i ...
- 3^i represents the number of subarrays that we need to divide the input array into
- (n/(3^i)) represent the number of subarrays that we divide the input third of the array into
- i*(n/3) represents the number of elements that we return from each recursive call of a third of the array 

