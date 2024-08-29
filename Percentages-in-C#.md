# Module: Maths & Calculations
## Lecture: Percentages and Calculations with Percentages

Welcome to the lecture on Percentages and Calculations with Percentages in our C# course! 🎉 In this session, we'll cover the basics of percentages, how to calculate them, and how to use them in C# programming with practical examples.

### 1. Understanding Percentages

A percentage is a way to express a number as a fraction of 100. The symbol for percent is `%`. For example, 25% means 25 out of 100, or 0.25 in decimal form.

### 2. Converting Between Percentages and Decimals

To convert a percentage to a decimal:
- Divide the percentage by 100.
- Example: 50% = 50 / 100 = 0.5

To convert a decimal to a percentage:
- Multiply the decimal by 100.
- Example: 0.75 = 0.75 * 100 = 75%

### 3. Basic Percentage Calculations

#### Finding the Percentage of a Number

To find the percentage of a number, multiply the number by the percentage (expressed as a decimal).

**Formula:**
\[ \text{Percentage of a Number} = \text{Number} \times \left( \frac{\text{Percentage}}{100} \right) \]

**Example:**
```csharp
double number = 200;
double percent = 15;
double result = number * (percent / 100);
Console.WriteLine($"15% of 200 is {result}"); // Output: 15% of 200 is 30
```

#### Finding the Total from a Percentage

If you know a percentage of a total and want to find the total, divide the known value by the percentage (expressed as a decimal).

**Formula:**
\[ \text{Total} = \frac{\text{Known Value}}{\left( \frac{\text{Percentage}}{100} \right)} \]

**Example:**
```csharp
double knownValue = 50;
double percent = 25;
double total = knownValue / (percent / 100);
Console.WriteLine($"If 50 is 25%, the total is {total}"); // Output: If 50 is 25%, the total is 200
```

#### Increasing/Decreasing a Number by a Percentage

To increase a number by a percentage, add the percentage of the number to the original number.

**Formula to Increase:**
\[ \text{Increased Value} = \text{Number} \times \left( 1 + \frac{\text{Percentage}}{100} \right) \]

**Example:**
```csharp
double originalPrice = 100;
double increasePercent = 20;
double newPrice = originalPrice * (1 + (increasePercent / 100));
Console.WriteLine($"Increasing 100 by 20% gives {newPrice}"); // Output: Increasing 100 by 20% gives 120
```

To decrease a number by a percentage, subtract the percentage of the number from the original number.

**Formula to Decrease:**
\[ \text{Decreased Value} = \text{Number} \times \left( 1 - \frac{\text{Percentage}}{100} \right) \]

**Example:**
```csharp
double originalPrice = 100;
double decreasePercent = 20;
double newPrice = originalPrice * (1 - (decreasePercent / 100));
Console.WriteLine($"Decreasing 100 by 20% gives {newPrice}"); // Output: Decreasing 100 by 20% gives 80
```

### 4. Practical Examples in C#

Let's see some more practical examples of percentage calculations in C#.

#### Example 1: Calculating Discounted Price

```csharp
double originalPrice = 150;
double discountPercent = 10;
double discountAmount = originalPrice * (discountPercent / 100);
double discountedPrice = originalPrice - discountAmount;
Console.WriteLine($"Original Price: {originalPrice}, Discount: {discountAmount}, Discounted Price: {discountedPrice}");
// Output: Original Price: 150, Discount: 15, Discounted Price: 135
```

#### Example 2: Calculating Interest Earned

```csharp
double principalAmount = 1000;
double interestRate = 5; // Annual interest rate in percent
double interestEarned = principalAmount * (interestRate / 100);
Console.WriteLine($"Interest earned on {principalAmount} at {interestRate}% is {interestEarned}");
// Output: Interest earned on 1000 at 5% is 50
```

#### Example 3: Finding the Percentage Increase

```csharp
double oldValue = 80;
double newValue = 100;
double percentageIncrease = ((newValue - oldValue) / oldValue) * 100;
Console.WriteLine($"The percentage increase from {oldValue} to {newValue} is {percentageIncrease}%");
// Output: The percentage increase from 80 to 100 is 25%
```

### 5. Conclusion

Percentages are a fundamental part of many calculations in both everyday life and programming. Understanding how to work with percentages and convert between decimals and percentages is essential for developing robust C# applications. Use these examples as a foundation for more complex calculations in your projects. Happy coding! 👨‍💻👩‍💻

The `Math` class in C# is a static class provided by the .NET framework that contains a collection of methods and constants useful for performing mathematical operations. It is located in the `System` namespace.

### Key Features of the Math Class

1. **Constants**: The `Math` class includes important mathematical constants, such as:
   - `Math.PI`: Represents the value of π (pi).
   - `Math.E`: Represents the value of e (the base of natural logarithms).

2. **Methods**: The class provides a wide range of methods for mathematical computations, including:
   - `Math.Abs(value)`: Returns the absolute value of a number.
   - `Math.Sqrt(value)`: Returns the square root of a number.
   - `Math.Pow(base, exponent)`: Returns a number raised to the specified power.
   - `Math.Max(value1, value2)`: Returns the larger of two numbers.
   - `Math.Min(value1, value2)`: Returns the smaller of two numbers.
   - `Math.Round(value)`: Rounds a number to the nearest integer.
   - `Math.Floor(value)`: Rounds a number down to the nearest integer.
   - `Math.Ceiling(value)`: Rounds a number up to the nearest integer.
   - `Math.Sin(value)`, `Math.Cos(value)`, `Math.Tan(value)`: Trigonometric functions.
   - `Math.Log(value)`: Returns the natural logarithm (base e) of a number.

### Why Use the Math Class?

🚀 **Efficiency**: Methods in the `Math` class are optimized for performance and accuracy, often more so than what you could achieve with custom code using loops and conditional statements.

👍 **Readability**: Using the `Math` class makes your code more readable and expressive. Instead of writing complex logic, you can call a simple method that clearly states its purpose.

🔒 **Reliability**: The methods in the `Math` class are thoroughly tested and reliable, reducing the likelihood of bugs in your mathematical calculations.

### Good Practices and Benefits

- **Use Built-in Methods**: Whenever possible, use methods from the `Math` class instead of writing custom code.
- **Avoid Redundant Calculations**: Using `Math` methods can prevent unnecessary iterations and conditions.
- **Code Clarity**: Makes the code easier to understand for others and for future maintenance.
- **Performance**: Optimized for speed and efficiency, which is especially beneficial in performance-critical applications.

### Practical Examples

1. **Absolute Value**:
   ```csharp
   int number = -5;
   int absoluteValue = Math.Abs(number);  // absoluteValue is 5
   ```

2. **Square Root**:
   ```csharp
   double value = 16.0;
   double squareRoot = Math.Sqrt(value);  // squareRoot is 4.0
   ```

3. **Power**:
   ```csharp
   double baseValue = 2.0;
   double exponent = 3.0;
   double result = Math.Pow(baseValue, exponent);  // result is 8.0
   ```

4. **Maximum and Minimum**:
   ```csharp
   int a = 5;
   int b = 10;
   int max = Math.Max(a, b);  // max is 10
   int min = Math.Min(a, b);  // min is 5
   ```

5. **Rounding**:
   ```csharp
   double number = 3.7;
   double rounded = Math.Round(number);  // rounded is 4.0
   ```

6. **Trigonometric Functions**:
   ```csharp
   double angle = Math.PI / 2;  // 90 degrees in radians
   double sinValue = Math.Sin(angle);  // sinValue is 1.0
   ```

By leveraging the `Math` class, you can write concise, efficient, and readable code for mathematical operations, improving the overall quality and maintainability of your programs.

### Basics of the Math.Max Method in C#

The `Math.Max` method in C# is a static method provided by the `Math` class in the `System` namespace. It is used to return the larger of two numbers.

### Usage

The method has multiple overloads to handle different data types such as:
- `Math.Max(int x, int y)`
- `Math.Max(double x, double y)`
- `Math.Max(float x, float y)`
- `Math.Max(decimal x, decimal y)`

### Syntax

```csharp
public static int Max(int val1, int val2);
public static double Max(double val1, double val2);
// And other overloads for different data types
```

### Why Use Math.Max?

🚀 **Efficiency**: The `Math.Max` method is optimized for performance. It is more efficient than writing custom logic using conditional statements or loops.

👍 **Readability**: Using `Math.Max` makes your code more readable and expressive. It clearly indicates the intent of comparing two values to find the maximum.

🔒 **Reliability**: The method is thoroughly tested and reliable, reducing the risk of errors in your comparisons.

### Good Practices and Benefits

- **Use Built-in Methods**: Always prefer using `Math.Max` for comparing two values instead of custom comparison logic.
- **Code Clarity**: Makes the code easier to understand and maintain.
- **Avoid Redundant Code**: Simplifies your code by removing the need for repetitive conditional statements.

### Practical Examples

1. **Finding the Maximum of Two Integers**:
   ```csharp
   int a = 5;
   int b = 10;
   int max = Math.Max(a, b);  // max is 10
   ```

2. **Finding the Maximum of Two Doubles**:
   ```csharp
   double x = 3.7;
   double y = 2.5;
   double max = Math.Max(x, y);  // max is 3.7
   ```

3. **Using Math.Max in Conditional Logic**:
   ```csharp
   int score1 = 85;
   int score2 = 92;
   int highestScore = Math.Max(score1, score2);  // highestScore is 92
   ```

4. **Using Math.Max in an Array**:
   ```csharp
   int[] numbers = { 1, 5, 3, 9, 2 };
   int max = numbers[0];
   foreach (int num in numbers)
   {
       max = Math.Max(max, num);  // max will be 9 after the loop
   }
   ```

### Benefits of Using Math.Max

1. **Simplicity**: Reduces the complexity of the code by replacing conditional statements.
   ```csharp
   // Without Math.Max
   int max;
   if (a > b)
   {
       max = a;
   }
   else
   {
       max = b;
   }

   // With Math.Max
   int max = Math.Max(a, b);
   ```

2. **Performance**: The method is optimized and faster than custom comparison logic, especially in performance-critical applications.

3. **Maintenance**: Easier to maintain and debug, as the intent is clear and the method is well-documented.

By using `Math.Max`, you can write more concise, readable, and efficient code for comparing two values, improving the overall quality and maintainability of your programs.
### Finding the Biggest Number Out of Two Numbers in C#

Below are several solutions to find the largest number out of two numbers using different approaches. Each example is formatted for educational use, including explanations and code listings.

#### 1. Using Math.Max

The simplest and most recommended way to find the maximum of two numbers in C# is by using the `Math.Max` method.

```csharp
using System;

class Program
{
    static void Main()
    {
        int a = 5;
        int b = 10;
        int max = Math.Max(a, b);
        Console.WriteLine("The maximum value is: " + max);
    }
}
```

🚀 **Explanation**: This approach leverages the built-in `Math.Max` method, which is efficient, readable, and reliable. It's a single line of code that clearly indicates the intent.

#### 2. Using Conditional Statements

Another way to find the maximum value is by using conditional statements (`if-else`).

```csharp
using System;

class Program
{
    static void Main()
    {
        int a = 5;
        int b = 10;
        int max;
        
        if (a > b)
        {
            max = a;
        }
        else
        {
            max = b;
        }

        Console.WriteLine("The maximum value is: " + max);
    }
}
```

🔍 **Explanation**: This approach uses an `if-else` statement to compare the two numbers. While it's clear and straightforward, it is more verbose than using `Math.Max`.

#### 3. Using the Ternary Operator

The ternary operator provides a more concise alternative to the conditional statement.

```csharp
using System;

class Program
{
    static void Main()
    {
        int a = 5;
        int b = 10;
        int max = (a > b) ? a : b;
        Console.WriteLine("The maximum value is: " + max);
    }
}
```

✨ **Explanation**: The ternary operator `(condition) ? trueExpression : falseExpression` allows for a compact comparison. It's less verbose than an `if-else` but can be less readable for those unfamiliar with the operator.

#### Comparison of Approaches

1. **Using Math.Max**: 
   - **Pros**: Simplest, most readable, and most efficient. 
   - **Cons**: None significant.
   
2. **Using Conditional Statements**:
   - **Pros**: Explicit and easy to understand for beginners.
   - **Cons**: More verbose, potential for human error.

3. **Using Ternary Operator**:
   - **Pros**: Concise and compact.
   - **Cons**: Can be less readable for those unfamiliar with the ternary operator.

### Conclusion

While all three methods are valid, using `Math.Max` is generally preferred for its simplicity and readability. It leverages the power of the .NET framework, ensuring optimized performance and clear intent.

By understanding these different approaches, you can choose the most appropriate method for your specific use case, balancing readability, performance, and simplicity.


