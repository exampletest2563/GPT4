# Chapter: Nested Loops in C#

## Introduction

In programming, loops are fundamental constructs that allow us to execute a block of code repeatedly. Nested loops, on the other hand, are loops placed inside another loop. This chapter will focus on understanding and effectively using nested loops in C#. We'll start with a basic explanation of nested loops, followed by several practical, beginner-friendly examples to solidify your understanding. 

## Understanding Nested Loops

### What Are Nested Loops?

A nested loop is a loop within another loop. The outer loop executes first, and then the inner loop executes entirely for every single iteration of the outer loop. This concept can be visualized like a clock, where the outer loop represents the hour hand and the inner loop represents the minute hand. Every time the hour hand (outer loop) moves to the next hour, the minute hand (inner loop) completes a full circle.

### Syntax of Nested Loops in C#

Here is the basic syntax for a nested loop in C#:

```csharp
for (initialization; condition; increment)
{
    // Outer loop code

    for (initialization; condition; increment)
    {
        // Inner loop code
    }
}
```

While `for` loops are commonly used for nested loops, other loops such as `while` and `do-while` can also be nested.

## Practical Examples

Let's dive into some beginner-friendly examples to understand how nested loops work.

### Example 1: Multiplication Table 🧮

**Description:** Create a multiplication table using nested loops. This example helps to illustrate how nested loops can iterate over a range of numbers to produce a grid-like structure.

**Code:**

```csharp
using System;

class Program
{
    static void Main()
    {
        for (int i = 1; i <= 10; i++)  // Outer loop for rows
        {
            for (int j = 1; j <= 10; j++)  // Inner loop for columns
            {
                Console.Write((i * j).ToString().PadLeft(4));
            }
            Console.WriteLine();  // New line after each row
        }
    }
}
```

**Output:**
```
   1   2   3   4   5   6   7   8   9  10
   2   4   6   8  10  12  14  16  18  20
   3   6   9  12  15  18  21  24  27  30
   4   8  12  16  20  24  28  32  36  40
   5  10  15  20  25  30  35  40  45  50
   6  12  18  24  30  36  42  48  54  60
   7  14  21  28  35  42  49  56  63  70
   8  16  24  32  40  48  56  64  72  80
   9  18  27  36  45  54  63  72  81  90
  10  20  30  40  50  60  70  80  90 100
```

**Explanation:**

- The outer loop (`for` loop with `i`) represents the rows of the multiplication table. It iterates from `1` to `10`, representing each row.

- The inner loop (`for` loop with `j`) represents the columns of the multiplication table. It also iterates from `1` to `10`, representing each column.

- For each iteration of the outer loop (each row), the inner loop completes all its iterations (each column), multiplying `i` and `j` to produce the value for that cell in the table.

- The `Console.Write` statement prints each product, formatted to align neatly using `PadLeft(4)`, which adds spaces to the left of the number to ensure consistent spacing. 

- The `Console.WriteLine()` statement outside of the inner loop ensures that after printing all columns for a row, a new line is started for the next row.

### Example 2: Right-Angled Triangle Pattern 🔺

**Description:** Create a right-angled triangle pattern of stars using nested loops. This example helps visualize how nested loops can control both rows and columns to produce structured patterns.

**Code:**

```csharp
using System;

class Program
{
    static void Main()
    {
        int rows = 5;

        for (int i = 1; i <= rows; i++)  // Outer loop for rows
        {
            for (int j = 1; j <= i; j++)  // Inner loop for columns
            {
                Console.Write("*");
            }
            Console.WriteLine();  // New line after each row
        }
    }
}
```

**Output:**
```
*
**
***
****
*****
```

**Explanation:**

- The outer loop (`for` loop with `i`) runs from `1` to `5`, representing the rows of the triangle.

- The inner loop (`for` loop with `j`) runs from `1` to `i`, which controls the number of stars (`*`) printed in each row.

- For the first iteration of the outer loop, `i` is `1`, so the inner loop runs once and prints one star. For the second iteration of the outer loop, `i` is `2`, so the inner loop runs twice and prints two stars. This continues until the fifth iteration, where five stars are printed.

- The `Console.WriteLine()` statement after the inner loop ensures each row of stars is printed on a new line.

### Example 3: Number Pyramid 🏔️

**Description:** Create a pyramid of numbers. This example demonstrates how nested loops can be used to build more complex structures and control spacing.

**Code:**

```csharp
using System;

class Program
{
    static void Main()
    {
        int rows = 5;

        for (int i = 1; i <= rows; i++)  // Outer loop for rows
        {
            for (int j = 1; j <= rows - i; j++)  // Inner loop for spaces
            {
                Console.Write(" ");
            }
            for (int k = 1; k <= i; k++)  // Inner loop for numbers
            {
                Console.Write(k + " ");
            }
            Console.WriteLine();  // New line after each row
        }
    }
}
```

**Output:**
```
    1 
   1 2 
  1 2 3 
 1 2 3 4 
1 2 3 4 5 
```

**Explanation:**

- The outer loop (`for` loop with `i`) controls the number of rows in the pyramid and iterates from `1` to `5`.

- The first inner loop (`for` loop with `j`) is responsible for printing spaces before the numbers. It starts at `1` and runs up to `rows - i`, which decreases as `i` increases, making the numbers shift to the left.

- The second inner loop (`for` loop with `k`) prints numbers from `1` to `i`. This means that on the first row, one number is printed; on the second row, two numbers are printed, and so on, forming a pyramid shape.

- `Console.WriteLine()` ensures that each new row starts on a new line, maintaining the pyramid shape.

### Example 4: Matrix Transposition 🧩

**Description:** Transpose a 2D matrix using nested loops. This example demonstrates how nested loops can handle multi-dimensional data structures like arrays.

**Code:**

```csharp
using System;

class Program
{
    static void Main()
    {
        int[,] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int rows = matrix.GetLength(0);
        int cols = matrix.GetLength(1);
        int[,] transposed = new int[cols, rows];

        for (int i = 0; i < rows; i++)  // Outer loop for rows
        {
            for (int j = 0; j < cols; j++)  // Inner loop for columns
            {
                transposed[j, i] = matrix[i, j];  // Transpose logic
            }
        }

        // Display the transposed matrix
        for (int i = 0; i < cols; i++)
        {
            for (int j = 0; j < rows; j++)
            {
                Console.Write(transposed[i, j] + " ");
            }
            Console.WriteLine();
        }
    }
}
```

**Output:**
```
1 4 7 
2 5 8 
3 6 9 
```

**Explanation:**

- The matrix is a 2D array with 3 rows and 3 columns.

- The outer loop (`for` loop with `i`) iterates over the rows of the matrix.

- The inner loop (`for` loop with `j`) iterates over the columns of the matrix.

- The transposition logic `transposed[j, i] = matrix[i, j];` switches rows with columns.

- Another set of nested loops is used to print the transposed matrix, showcasing how nested loops can work together to manipulate and display data structures.

### Example 5: Checking for Prime Numbers in a Range 🕵️‍♂️

**Description:** Find and print all prime numbers between 1 and 50 using nested loops. This example highlights the use of nested loops for checking conditions.

**Code:**

```csharp
using System;

class Program
{
    static void Main()
    {
        int max = 50;

        for (int num = 2; num <= max; num++)  // Outer loop for numbers
        {
            bool isPrime = true;

            for (int i = 2; i <= Math.Sqrt(num); i++)  // Inner loop for checking divisibility
            {
                if (num % i == 0)
                {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime)
            {
                Console.Write(num + " ");
            }
        }
    }
}
```

**Output:**
```
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 
```

**Explanation:**

- The outer loop (`for` loop with `num`) iterates through numbers from `2` to `50` to check each number for primality.

- The inner loop (`for` loop with `i`) checks if the current number (`num`) is divisible by any number other than `1` and itself. It iterates from `2` to the square root of `num` to minimize redundant checks.

- If `num` is divisible by `i`, it is not a prime number, so `isPrime` is set to `false`, and the loop breaks out early.

- If `isPrime` remains `true`, the number is printed as a prime.

### Example 6: Drawing a Checkerboard Pattern 🏁

**Description:** Draw a checkerboard pattern of `X` and `O` using nested loops. This example demonstrates the ability of nested loops to create alternating patterns.

**Code:**

```csharp
using System;

class Program
{
    static void Main()
    {
        int size = 8;

        for (int i = 0; i < size; i++)  // Outer loop for rows
        {
            for (int j = 0; j < size; j++)  // Inner loop for columns
            {
                if ((i + j) % 2 == 0)
                {
                    Console.Write("X ");
                }
                else
                {
                    Console.Write("O ");
                }
            }
            Console.WriteLine();  // New line after each row
        }
    }
}
```

**Output:**
```
X O X O X O X O 
O X O X O X O X 
X O X O X O X O 
O X O X O X O X 
X O X O X O X O 
O X O X O X O X 
X O X O X O X O 
O X O X O X O X 
```

**Explanation:**

- The outer loop (`for` loop with `i`) controls the rows of the checkerboard.

- The inner loop (`for` loop with `j`) controls the columns of the checkerboard.

- The condition `(i + j) % 2 == 0` is used to alternate between printing `X` and `O`. This works because the sum of `i` and `j` will alternate between even and odd as the loops iterate.

- `Console.WriteLine()` ensures that each new row starts on a new line, maintaining the checkerboard row
            {
                Console.Write(number + " ");
                number = number * (i - j) / (j + 1);  // Calculate the next number in the row
            }
            Console.WriteLine();  // New line after each row
        }
    }
}
```

**Output:**
```
        1 
      1 1 
    1 2 1 
  1 3 3 1 
1 4 6 4 1 
```

**Explanation:**

- The outer loop (`for` loop with `i`) controls the rows of Pascal's Triangle. It iterates from `0` to `rows - 1`, where `rows` is the total number of rows you want in the triangle.

- Inside the outer loop, `number` is initialized to `1` at the start of each row.

- The `new string(' ', (rows - i) * 2)` creates the required spacing before the numbers to center-align the triangle. As `i` increases, the number of spaces decreases, pushing the numbers further to the left, forming a triangle.

- The inner loop (`for` loop with `j`) prints the numbers in each row. It calculates the next number in the row using the formula `number = number * (i - j) / (j + 1);`, which leverages the binomial coefficient to generate the correct values for Pascal's Triangle.

- `Console.WriteLine()` moves to a new line after each row, forming the pyramid structure of the triangle.

### Example 8: Counting Down Numbers in a Matrix 📉

**Description:** Create a matrix where the numbers count down from a specified value using nested loops. This example shows how nested loops can handle and manipulate numerical sequences within a matrix.

**Code:**

```csharp
using System;

class Program
{
    static void Main()
    {
        int n = 3;  // Size of the matrix
        int[,] matrix = new int[n, n];
        int number = n * n;

        for (int i = 0; i < n; i++)  // Outer loop for rows
        {
            for (int j = 0; j < n; j++)  // Inner loop for columns
            {
                matrix[i, j] = number--;
            }
        }

        // Print the matrix
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                Console.Write(matrix[i, j] + "\t");
            }
            Console.WriteLine();
        }
    }
}
```

**Output:**
```
9    8    7    
6    5    4    
3    2    1    
```

**Explanation:**

- The outer loop (`for` loop with `i`) iterates over the rows of the matrix.

- The inner loop (`for` loop with `j`) iterates over the columns of the matrix.

- The matrix is populated in a descending order, starting from `n * n` (which is `9` in this example) and counting down to `1`. The variable `number` is decremented with each assignment.

- Another set of nested loops is used to print the matrix, where the numbers are separated by tabs (`\t`) to create even spacing.

### Example 9: Generating Chessboard Coordinates ♟️

**Description:** Generate all possible coordinates on a chessboard using nested loops. This example demonstrates how nested loops can be used to generate all combinations of a set of values.

**Code:**

```csharp
using System;

class Program
{
    static void Main()
    {
        char[] files = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' };
        int[] ranks = { 1, 2, 3, 4, 5, 6, 7, 8 };

        for (int i = 0; i < files.Length; i++)  // Outer loop for files (columns)
        {
            for (int j = 0; j < ranks.Length; j++)  // Inner loop for ranks (rows)
            {
                Console.Write(files[i] + "" + ranks[j] + " ");
            }
            Console.WriteLine();  // New line after each row
        }
    }
}
```

**Output:**
```
A1 A2 A3 A4 A5 A6 A7 A8 
B1 B2 B3 B4 B5 B6 B7 B8 
C1 C2 C3 C4 C5 C6 C7 C8 
D1 D2 D3 D4 D5 D6 D7 D8 
E1 E2 E3 E4 E5 E6 E7 E8 
F1 F2 F3 F4 F5 F6 F7 F8 
G1 G2 G3 G4 G5 G6 G7 G8 
H1 H2 H3 H4 H5 H6 H7 H8 
```

**Explanation:**

- The outer loop (`for` loop with `i`) iterates over the array of files (`A` to `H`), representing the columns of the chessboard.

- The inner loop (`for` loop with `j`) iterates over the array of ranks (`1` to `8`), representing the rows of the chessboard.

- For each file, the inner loop runs through all ranks, generating coordinates like `A1`, `A2`, ..., `H8`.

- The coordinates are printed in a single line for each file, and `Console.WriteLine()` ensures that a new line is started after each set of coordinates corresponding to a file.

### Example 10: Letter Pyramid 🅰️

**Description:** Create a pyramid of letters using nested loops. This example combines string manipulation with nested loops to form a pattern.

**Code:**

```csharp
using System;

class Program
{
    static void Main()
    {
        int rows = 5;
        char letter = 'A';

        for (int i = 1; i <= rows; i++)  // Outer loop for rows
        {
            for (int j = 1; j <= rows - i; j++)  // Inner loop for spaces
            {
                Console.Write(" ");
            }
            for (int k = 1; k <= i; k++)  // Inner loop for letters
            {
                Console.Write(letter + " ");
            }
            letter++;  // Move to the next letter
            Console.WriteLine();  // New line after each row
        }
    }
}
```

**Output:**
```
    A 
   B B 
  C C C 
 D D D D 
E E E E E 
```

**Explanation:**

- The outer loop (`for` loop with `i`) controls the rows of the pyramid and iterates from `1` to `5`.

- The first inner loop (`for` loop with `j`) creates the required spaces before the letters to center-align the pyramid. The number of spaces decreases as `i` increases.

- The second inner loop (`for` loop with `k`) prints the current letter `i` times in each row.

- The `letter` variable is incremented after each row to move to the next letter in the alphabet.

- The `Console.WriteLine()` ensures that each row is printed on a new line, forming the pyramid.

## Conclusion

Nested loops are a powerful concept in C# that allow for complex data manipulation and pattern creation. Whether you are generating tables, creating patterns, or working with multidimensional arrays, understanding nested loops is crucial for writing efficient and effective code.

By practicing the examples provided in this chapter, you should now have a solid understanding of how nested loops work and how to apply them in various programming scenarios. Keep experimenting with different loop combinations and patterns to further strengthen your skills in using nested loops in C#.
