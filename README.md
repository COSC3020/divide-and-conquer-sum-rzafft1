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

NOTE : I need to return each recursive call, and I have three recursive calls, therefore I need to return 3 rather than n/3 or 3n because that would infer that I am returning 3n times, or 3/n times per recursive call, however, every recursive all, no matter what, I return a constant 3 times. 

Recurrence Relation : 

T(n) = 0 if n < 1 || 3 T(n/3) + 3 if n => 1

- T(n) = 3 T(n/3) + 3
- T(n) = 3 ( 3T((n/3)/3) + 3 ) + 3
- T(n) = 9 T(n/9) + 9 + 3
- T(n) = 9 T(n/9) + 12
- ... 
- T(n) = 3^i (T(n/(3^i)) + 3i
- ...
- now since we are using divide and conquer, and we are dividing into three lists lets let i = log<sub>3</sub>(n)
- ...
- 3<sup>log<sub>3</sub>(n)</sup> (T(n/3<sup>log<sub>3</sub>(n)</sup>)) + 3(log<sub>3</sub>(n))
  - T(n/3<sup>log<sub>3</sub>(n)</sup>) = 1 (this is our base case, we stop when n < 1)
- 3<sup>log<sub>3</sub>(n)</sup> + 1 + 3(log<sub>3</sub>(n))
- n + 1 + 3log<sub>3</sub>(n) (we can remove constants, 3 from 3(log<sub>3</sub>(n)) along with +n and +1)
- this leaves us with log<sub>3</sub>(n)

$\theta$ = log<sub>3</sub>(n)

Therefore, the total time complexity of our algorithm is log<sub>3</sub>n where n is the number of sub arrays that we are dividing into. This is similar to a binary tree that divides an input by two, except here we divide the input by three. Therefore, we also must note, that since we are dividing by three instead of two, we have complexity log (base 3) NOTE log (base 2)

Explanation ... 

- T(n) shows the time complexity as the input size, n increases
- 3 * T(n/3) + 3 represents the recursive call that we make when we divide the input array by 3. 
- multiplying our recurrence relation by 3 represents a recursive call made. This results in T(n/3) changing to T(n/9) which shows that we need to divide the intial third of the input array by three so that we can return each each element from the initial input third of the array into the total sum of the current third of the array
- We use n/3 from T(n/3) because we have three recusive calls and each recursive call returns a third of the initial third of the input size
- The +3 that is added at the end of the recurrence relation shows that we are returning three results from a recursive call
- So when we simplify T(n) to 9 T(n/9) + 12, the 12 represents the depth of our recursion 'tree', or the number of recursive calls. 
  
- After evaluating our recurrence relation we show how the recurrence relation grows as input size changes
- we show T(n) growing with the input size i ...
- 3^i represents the number of subarrays that we need to divide the input array into
- (n/(3^i)) represent the number of subarrays that we divide the input third of the array into
- (i*3) represents the number of calls that we return from each recursive call

Resources : 

Geeks for Geeks 
- https://www.geeksforgeeks.org/maximum-subarray-sum-using-divide-and-conquer-algorithm/
Stack Overflow 
- https://stackoverflow.com/questions/29927439/algorithms-how-do-divide-and-conquer-and-time-complexity-onlogn-relate

