# Chapter: Mastering Conditional Statements and the Math Class in C#

Welcome to this comprehensive chapter on C# Conditional Statements, with a special focus on the `Math` class and working with percentages. This chapter is designed to equip you with everything you need to understand and implement conditional logic in C#, utilizing the power of the `Math` class to handle mathematical operations and work with percentages.

## Table of Contents

1. Introduction to Conditional Statements
    - What Are Conditional Statements?
    - Why Use Conditional Statements?
2. The If Statement
    - Basic Syntax
    - Practical Examples
3. The Else Statement
    - Adding Alternative Paths
    - Practical Examples
4. The Else If Ladder
    - Multiple Conditions
    - Practical Examples
5. The Switch Statement
    - When to Use a Switch Statement
    - Basic Syntax
    - Practical Examples
6. The Ternary Operator
    - Inline Conditional Logic
    - Syntax and Usage
    - Practical Examples
7. The Math Class
    - Overview of the Math Class
    - Common Methods in the Math Class
    - Working with Percentages
    - Combining Math Class with Conditional Statements
8. Real-World Examples
    - Building a Simple Grade Calculator
    - Creating a Discount System
    - Developing a Basic Loan Eligibility Checker
9. Best Practices
    - Writing Clean and Readable Conditional Logic
    - Optimizing Performance with Math Class

## 1. Introduction to Conditional Statements

### What Are Conditional Statements? 🤔

Conditional statements in C# allow you to execute specific blocks of code based on certain conditions. These conditions are typically expressed as boolean expressions that evaluate to either `true` or `false`. Conditional statements are a fundamental building block of any programming language, enabling you to make decisions within your code.

### Why Use Conditional Statements? 🛠️

- **Decision Making:** Control the flow of your program by executing different blocks of code based on varying conditions.
- **Error Handling:** Manage potential errors and edge cases by checking for conditions that may cause issues.
- **Optimized Code:** Conditional logic helps in writing efficient and dynamic code, reducing redundancy.

## 2. The If Statement

### Basic Syntax 📜

The `if` statement is the simplest form of a conditional statement in C#. It allows you to execute a block of code only if a specified condition is true.

```csharp
if (condition)
{
    // Code to execute if the condition is true
}
```

### Example 1: Checking for Positive Numbers

```csharp
int number = 10;

if (number > 0)
{
    Console.WriteLine("The number is positive.");
}
```

**Explanation:**  
Here, the condition `number > 0` is checked. Since 10 is greater than 0, the message "The number is positive." is printed to the console.

### Example 2: Validating User Input

```csharp
Console.WriteLine("Enter your age:");
int age = int.Parse(Console.ReadLine());

if (age >= 18)
{
    Console.WriteLine("You are eligible to vote.");
}
```

**Explanation:**  
In this example, the user's age is checked to determine if they are eligible to vote. If the age is 18 or greater, a message is printed indicating eligibility.

## 3. The Else Statement

### Adding Alternative Paths 🛣️

The `else` statement provides an alternative block of code that will execute if the condition in the `if` statement is false.

### Basic Syntax

```csharp
if (condition)
{
    // Code to execute if the condition is true
}
else
{
    // Code to execute if the condition is false
}
```

### Example 1: Checking for Even or Odd Numbers

```csharp
int number = 7;

if (number % 2 == 0)
{
    Console.WriteLine("The number is even.");
}
else
{
    Console.WriteLine("The number is odd.");
}
```

**Explanation:**  
The modulo operator `%` checks if the number is divisible by 2. If it is, the number is even; otherwise, it's odd.

### Example 2: Pass or Fail Grade Check

```csharp
int score = 45;

if (score >= 50)
{
    Console.WriteLine("You passed the exam.");
}
else
{
    Console.WriteLine("You failed the exam.");
}
```

**Explanation:**  
This code checks whether a student's score is above or equal to 50. If true, they pass; otherwise, they fail.

## 4. The Else If Ladder

### Multiple Conditions ⛓️

When you need to check multiple conditions, you can use an `else if` ladder. This structure allows for checking multiple conditions sequentially.

### Basic Syntax

```csharp
if (condition1)
{
    // Code to execute if condition1 is true
}
else if (condition2)
{
    // Code to execute if condition2 is true
}
else if (condition3)
{
    // Code to execute if condition3 is true
}
else
{
    // Code to execute if all conditions are false
}
```

### Example 1: Grade Assignment

```csharp
int score = 85;

if (score >= 90)
{
    Console.WriteLine("Grade: A");
}
else if (score >= 80)
{
    Console.WriteLine("Grade: B");
}
else if (score >= 70)
{
    Console.WriteLine("Grade: C");
}
else if (score >= 60)
{
    Console.WriteLine("Grade: D");
}
else
{
    Console.WriteLine("Grade: F");
}
```

**Explanation:**  
This example checks a score against several thresholds to assign a grade.

### Example 2: Weather Suggestion

```csharp
Console.WriteLine("Enter the current temperature:");
int temperature = int.Parse(Console.ReadLine());

if (temperature >= 30)
{
    Console.WriteLine("It's hot outside. Stay hydrated!");
}
else if (temperature >= 20)
{
    Console.WriteLine("The weather is warm. Enjoy your day!");
}
else if (temperature >= 10)
{
    Console.WriteLine("It's getting chilly. Wear a jacket.");
}
else
{
    Console.WriteLine("It's cold. Stay warm!");
}
```

**Explanation:**  
This code provides clothing or activity suggestions based on the current temperature.

## 5. The Switch Statement

### When to Use a Switch Statement? 🔄

A `switch` statement is useful when you have a variable that can take on a discrete number of values and you want to execute different code for each value. It's often more readable than an `else if` ladder when dealing with multiple discrete values.

### Basic Syntax

```csharp
switch (expression)
{
    case value1:
        // Code to execute if expression == value1
        break;
    case value2:
        // Code to execute if expression == value2
        break;
    // Add more cases as needed
    default:
        // Code to execute if none of the above cases are met
        break;
}
```

### Example 1: Days of the Week

```csharp
Console.WriteLine("Enter a number (1-7) to represent the day of the week:");
int day = int.Parse(Console.ReadLine());

switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    case 4:
        Console.WriteLine("Thursday");
        break;
    case 5:
        Console.WriteLine("Friday");
        break;
    case 6:
        Console.WriteLine("Saturday");
        break;
    case 7:
        Console.WriteLine("Sunday");
        break;
    default:
        Console.WriteLine("Invalid input! Please enter a number between 1 and 7.");
        break;
}
```

**Explanation:**  
This code snippet maps a number to the corresponding day of the week.

### Example 2: Simple Calculator

```csharp
Console.WriteLine("Enter the first number:");
double num1 = double.Parse(Console.ReadLine());

Console.WriteLine("Enter the second number:");
double num2 = double.Parse(Console.ReadLine());

Console.WriteLine("Enter an operator (+, -, *, /):");
char op = Console.ReadKey().KeyChar;
Console.WriteLine();

switch (op)
{
    case '+':
        Console.WriteLine($"Result: {num1 + num2}");
        break;
    case '-':
        Console.WriteLine($"Result: {num1 - num2}");
        break;
    case '*':
        Console.WriteLine($"Result: {num1 * num2}");
        break;
    case '/':
        if (num2 != 0)
        {
            Console.WriteLine($"Result: {num1 / num2}");
        }
        else
        {
            Console.WriteLine("Error: Cannot divide by zero.");
        }
        break;
    default:
        Console.WriteLine("Invalid operator.");
        break;
}
```

**Explanation:**  
This code acts as a simple calculator, performing the operation selected by the user.

## 6. The Ternary Operator

### Inline Conditional Logic ✨

The ternary operator is a concise way to write simple conditional statements. It is especially useful for assignments or short expressions.

### Syntax and Usage

```csharp
condition ? expression_if_true : expression_if_false;
```

### Example 1: Checking for Even or Odd (Ternary Style)

```csharp
int number = 9;
string result = (number % 2 == 0) ? "Even" : "Odd";
Console.WriteLine($"The number is {result}.");
```

**Explanation:**  
This single line of code checks if a number is even or odd and assigns the result to a string variable.

### Example 2: Age Validation

```csharp
int age = 17;
string eligibility = (age >= 18) ? "eligible to vote" : "not eligible to vote";
Console.WriteLine($"You are {eligibility}.");
```

**Explanation:**  
Here, the ternary operator is used to determine voting eligibility based on the age provided.

## 7. The Math Class

### Overview of the Math Class 🔢

The `Math` class in C# is a static class that provides a wide range of mathematical functions and constants. It's part of the `System` namespace, so you don't need to import anything extra to use it.

### Common Methods in the Math Class

1. **`Math.Abs(x)`**: Returns the absolute value of `x`.
2. **`Math.Pow(x, y)`**: Returns `x` raised to the power `y`.
3. **`Math.Sqrt(x)`**: Returns the square root of `x`.
4. **`Math.Round(x)`**: Rounds `x` to the nearest integer.
5. **`Math.Max(x, y)`**: Returns the larger of the two numbers `x` and `y`.
6. **`Math.Min(x, y)`**: Returns the smaller of the two numbers `x` and `y`.
7. **`Math.Ceiling(x)`**: Rounds `x` up to the nearest integer.
8. **`Math.Floor(x)`**: Rounds `x` down to the nearest integer.
9. **`Math.Sin(x)`**: Returns the sine of `x` (in radians).
10. **`Math.Cos(x)`**: Returns the cosine of `x` (in radians).

### Example 1: Calculating the Hypotenuse Using Pythagoras' Theorem

```csharp
double a = 3.0;
double b = 4.0;
double c = Math.Sqrt(Math.Pow(a, 2) + Math.Pow(b, 2));

Console.WriteLine($"The hypotenuse is {c}");
```

**Explanation:**  
This example uses the `Math.Pow` and `Math.Sqrt` methods to calculate the length of the hypotenuse of a right-angled triangle.

###

### Example 2: Optimizing Weather Suggestions with the Math Class

Let's revisit the weather example and discuss how we can optimize it by combining conditional statements with methods from the `Math` class. Here’s the original code for reference:

```csharp
Console.WriteLine("Enter the current temperature:");
int temperature = int.Parse(Console.ReadLine());

if (temperature >= 30)
{
    Console.WriteLine("It's hot outside. Stay hydrated!");
}
else if (temperature >= 20)
{
    Console.WriteLine("The weather is warm. Enjoy your day!");
}
else if (temperature >= 10)
{
    Console.WriteLine("It's getting chilly. Wear a jacket.");
}
else
{
    Console.WriteLine("It's cold. Stay warm!");
}
```

### Optimization Strategies

1. **Avoid Repeated Calculations:**  
   Instead of comparing the temperature multiple times, we can use a single call to `Math.Min` or `Math.Max` to clamp the temperature within a certain range before checking the conditions. This reduces the number of comparisons and simplifies the logic.

2. **Utilize Ternary Operator:**  
   For concise code, we can use the ternary operator in place of `else if` statements where applicable, making the code easier to read.

3. **Range Clamping:**  
   We can optimize the handling of the temperature input by clamping it into discrete ranges using `Math.Max` and `Math.Min`. This way, we ensure that the temperature falls within a specific range before we perform any further checks.

### Optimized Code Using `Math.Max` and `Math.Min`

```csharp
Console.WriteLine("Enter the current temperature:");
int temperature = int.Parse(Console.ReadLine());

// Clamping temperature to ensure it's within the expected range
temperature = Math.Max(-10, Math.Min(temperature, 50));

if (temperature >= 30)
{
    Console.WriteLine("It's hot outside. Stay hydrated!");
}
else if (temperature >= 20)
{
    Console.WriteLine("The weather is warm. Enjoy your day!");
}
else if (temperature >= 10)
{
    Console.WriteLine("It's getting chilly. Wear a jacket.");
}
else
{
    Console.WriteLine("It's cold. Stay warm!");
}
```

### Explanation of the Optimized Code

1. **Clamping the Temperature:**  
   The temperature is first clamped between `-10` and `50` using a combination of `Math.Max` and `Math.Min`. This ensures that any extreme values (like 100 or -50) are brought within a more reasonable range, which can help when the data is noisy or unexpected values are entered.

   ```csharp
   temperature = Math.Max(-10, Math.Min(temperature, 50));
   ```

   - **`Math.Min(temperature, 50)`** ensures the temperature doesn't exceed 50.
   - **`Math.Max(-10, ...)`** ensures the temperature doesn't go below -10.

   By doing this, we limit the range of possible inputs, potentially avoiding outlier cases that don't need detailed checks.

2. **Streamlining the Conditional Logic:**  
   After clamping the temperature, we proceed with the `if-else if` statements as before. The logic is straightforward and ensures that only the relevant conditions are checked.

### Benefits of the Optimization

- **Performance Improvement:** While the performance gains might be negligible for a small program, in more extensive systems where temperature

### Performance Improvement in Conditional Statements

While optimizing a small code snippet like our weather example may not lead to significant performance gains in isolation, understanding how to refine conditional statements can be crucial in larger applications. Let's continue to explore how we can further optimize and make the best use of conditional statements in different scenarios.

## 8. Real-World Examples of Conditional Statements and Math Class

### Example 1: Building a Simple Grade Calculator

Let's create a grade calculator that assigns a letter grade (A, B, C, D, F) based on a numeric score. This example will combine `if-else` statements, the `Math` class for rounding, and percentages.

```csharp
Console.WriteLine("Enter the student's score (0-100):");
double score = double.Parse(Console.ReadLine());

// Round the score to the nearest whole number
score = Math.Round(score);

if (score >= 90)
{
    Console.WriteLine("Grade: A");
}
else if (score >= 80)
{
    Console.WriteLine("Grade: B");
}
else if (score >= 70)
{
    Console.WriteLine("Grade: C");
}
else if (score >= 60)
{
    Console.WriteLine("Grade: D");
}
else
{
    Console.WriteLine("Grade: F");
}
```

**Explanation:**
- **`Math.Round(score)`**: We use `Math.Round` to ensure that the score is rounded to the nearest whole number before making any decisions.
- The conditional checks (`if-else if`) assign a letter grade based on the score.

### Example 2: Creating a Discount System

In this example, we'll use conditional statements to determine the discount rate a customer should receive based on their purchase amount.

```csharp
Console.WriteLine("Enter the purchase amount:");
double purchaseAmount = double.Parse(Console.ReadLine());

double discountRate;
if (purchaseAmount >= 1000)
{
    discountRate = 0.20; // 20% discount
}
else if (purchaseAmount >= 500)
{
    discountRate = 0.10; // 10% discount
}
else if (purchaseAmount >= 200)
{
    discountRate = 0.05; // 5% discount
}
else
{
    discountRate = 0.0;  // No discount
}

double discount = purchaseAmount * discountRate;
double finalAmount = purchaseAmount - discount;

Console.WriteLine($"Discount: {discount:C}");
Console.WriteLine($"Final Amount to Pay: {finalAmount:C}");
```

**Explanation:**
- **`purchaseAmount * discountRate`**: We calculate the discount by multiplying the purchase amount by the discount rate.
- The use of `if-else` statements determines which discount rate to apply based on the purchase amount.

### Example 3: Developing a Basic Loan Eligibility Checker

In this example, we'll create a simple loan eligibility checker that uses conditional statements to determine whether a person qualifies for a loan based on their income and credit score.

```csharp
Console.WriteLine("Enter your monthly income:");
double income = double.Parse(Console.ReadLine());

Console.WriteLine("Enter your credit score (300-850):");
int creditScore = int.Parse(Console.ReadLine());

if (income >= 4000 && creditScore >= 700)
{
    Console.WriteLine("You are eligible for the loan.");
}
else if (income >= 3000 && creditScore >= 650)
{
    Console.WriteLine("You may qualify for the loan with additional conditions.");
}
else
{
    Console.WriteLine("Unfortunately, you do not qualify for the loan.");
}
```

**Explanation:**
- The code checks for two conditions using the `&&` operator:
  - **Income**: Ensures the applicant's income meets the minimum requirement.
  - **Credit Score**: Ensures the applicant's credit score is within an acceptable range.
- Depending on the conditions met, the program provides different eligibility outcomes.

## 9. Best Practices

### Writing Clean and Readable Conditional Logic

1. **Use Meaningful Variable Names:**
   - Always use clear and descriptive names for variables to make the conditions self-explanatory.
   - Example: Instead of `int x`, use `int temperature` or `int age`.

2. **Limit Nested Conditions:**
   - Excessive nesting of `if-else` blocks can make your code hard to read and maintain. Consider refactoring or using a `switch` statement if it becomes too complex.

3. **Use Early Returns to Simplify Logic:**
   - If a condition is met and you can exit a function early, do so. This reduces the need for additional `else` blocks.
   - Example:
     ```csharp
     if (income < 3000)
     {
         Console.WriteLine("You do not qualify.");
         return;
     }
     ```

4. **Leverage the Ternary Operator for Simple Conditions:**
   - The ternary operator is great for concise, single-line conditions.
   - Example:
     ```csharp
     string message = (score >= 50) ? "Pass" : "Fail";
     ```

### Optimizing Performance with the Math Class

1. **Avoid Repeated Calculations:**
   - If a calculation is used multiple times in a conditional statement, compute it once and store the result in a variable.

   ```csharp
   double sqrtValue = Math.Sqrt(x);
   if (sqrtValue > 10 || sqrtValue < 5)
   {
       // Use sqrtValue directly
   }
   ```

2. **Prefer Built-in Methods Over Manual Calculations:**
   - Use `Math` class methods instead of writing custom logic for common calculations.
   - Example: Use `Math.Abs()` instead of manually checking and converting a negative value to positive.

3. **Use Constants for Fixed Values:**
   - If you're comparing against a constant value (like a maximum temperature), declare it as a constant.
   - Example:
     ```csharp
     const int MaxTemp = 50;
     temperature = Math.Min(temperature, MaxTemp);
     ```

By following these best practices and understanding how to effectively use conditional statements and the `Math` class, you can write more efficient, readable, and maintainable C# code.

---

This chapter has provided a deep dive into conditional statements, optimization techniques, and practical examples to illustrate how these concepts are applied in real-world scenarios. The careful use of conditional logic, combined with the power of the `Math` class, allows you to write robust programs capable of handling a wide range of tasks with precision and efficiency.

### Best Practices for Conditional Statements

Conditional statements are a cornerstone of programming logic. Writing them effectively can significantly impact the readability, maintainability, and performance of your code. Below are some best practices to consider when working with conditional statements in C#.

#### 1. **Keep Conditions Simple and Clear**

- **Break Down Complex Conditions:** If you find yourself writing a complex condition with multiple logical operators (`&&`, `||`, etc.), consider breaking it down into smaller, simpler conditions. This can improve readability and make debugging easier.

  **Example:**
  ```csharp
  // Complex condition
  if (age > 18 && hasLicense && hasInsurance && carIsOperational)
  {
      // Allow driving
  }

  // Simplified with intermediate variables
  bool isAdult = age > 18;
  bool isEligibleDriver = hasLicense && hasInsurance && carIsOperational;

  if (isAdult && isEligibleDriver)
  {
      // Allow driving
  }
  ```

- **Use Meaningful Expressions:** Always strive to write conditions that are easy to understand at a glance. This might involve using descriptive variable names, or breaking the condition into multiple steps.

  **Example:**
  ```csharp
  // Less clear
  if (x < 0 || x > 100) 
  {
      // Handle out-of-range x
  }

  // More clear
  bool isOutOfRange = x < 0 || x > 100;
  if (isOutOfRange)
  {
      // Handle out-of-range x
  }
  ```

#### 2. **Avoid Deep Nesting**

- **Refactor Nested Conditions:** Deeply nested `if` statements can make code difficult to read and maintain. Whenever possible, refactor your code to reduce the depth of nested conditions.

  **Example:**
  ```csharp
  // Deeply nested condition
  if (a > 0)
  {
      if (b > 0)
      {
          if (c > 0)
          {
              // Do something
          }
      }
  }

  // Refactored for clarity
  if (a > 0 && b > 0 && c > 0)
  {
      // Do something
  }
  ```

- **Use Guard Clauses:** Instead of nesting conditions, consider using guard clauses (early returns) to exit a method or skip further checks if a condition is not met.

  **Example:**
  ```csharp
  // Nested condition
  if (user != null)
  {
      if (user.IsActive)
      {
          // Process active user
      }
  }

  // Guard clause
  if (user == null) return;
  if (!user.IsActive) return;

  // Process active user
  ```

#### 3. **Leverage the `else` and `else if` Statements Wisely**

- **Avoid Redundant Checks:** Once a condition has been met, there's no need to check related conditions in an `else if` or `else` block.

  **Example:**
  ```csharp
  // Less efficient
  if (score >= 90)
  {
      Console.WriteLine("Grade A");
  }
  else if (score >= 80 && score < 90) // `score < 90` is redundant
  {
      Console.WriteLine("Grade B");
  }

  // More efficient
  if (score >= 90)
  {
      Console.WriteLine("Grade A");
  }
  else if (score >= 80) // No need to check `score < 90`
  {
      Console.WriteLine("Grade B");
  }
  ```

- **Consider `else` as a Fallback:** Use the `else` block as a fallback or default case when all other conditions have failed. This ensures that your code handles unexpected inputs gracefully.

  **Example:**
  ```csharp
  if (input == "yes")
  {
      // Handle yes
  }
  else if (input == "no")
  {
      // Handle no
  }
  else
  {
      // Handle unexpected input
      Console.WriteLine("Invalid input.");
  }
  ```

#### 4. **Use `switch` Statements for Multiple Discrete Cases**

- **When to Use `switch`:** If you find yourself writing multiple `else if` statements that compare the same variable against different values, consider using a `switch` statement instead. `switch` statements are often more readable and can be more efficient than a long `else if` chain.

  **Example:**
  ```csharp
  // Using if-else for multiple discrete values
  if (day == 1)
  {
      Console.WriteLine("Monday");
  }
  else if (day == 2)
  {
      Console.WriteLine("Tuesday");
  }
  else if (day == 3)
  {
      Console.WriteLine("Wednesday");
  }
  // ... other days

  // Using switch statement
  switch (day)
  {
      case 1:
          Console.WriteLine("Monday");
          break;
      case 2:
          Console.WriteLine("Tuesday");
          break;
      case 3:
          Console.WriteLine("Wednesday");
          break;
      // ... other days
      default:
          Console.WriteLine("Invalid day");
          break;
  }
  ```

- **Use `default` Case:** Always include a `default` case in your `switch` statements to handle unexpected or unhandled values.

  **Example:**
  ```csharp
  switch (operation)
  {
      case '+':
          Console.WriteLine("Addition");
          break;
      case '-':
          Console.WriteLine("Subtraction");
          break;
      default:
          Console.WriteLine("Unknown operation");
          break;
  }
  ```

#### 5. **Optimize Performance with Short-Circuiting**

- **Short-Circuit Evaluation:** In logical operations, C# uses short-circuit evaluation. This means that in expressions using `&&` (AND) or `||` (OR), the evaluation stops as soon as the result is determined.

  **Example:**
  ```csharp
  // Short-circuiting avoids calling IsValid() if isActive is false
  if (isActive && IsValid(user))
  {
      // Perform action
  }

  // Similarly, this avoids calling IsExpired() if hasExpired is true
  if (hasExpired || IsExpired(token))
  {
      // Perform action
  }
  ```

- **Order Conditions Carefully:** When using logical operators, place the conditions that are less computationally expensive or more likely to be false (in an `&&` condition) or true (in an `||` condition) earlier. This can reduce unnecessary evaluations.

  **Example:**
  ```csharp
  // More efficient: isActive is likely to be false more often
  if (isActive && IsExpensiveCheck())
  {
      // Perform action
  }

  // Less efficient: IsExpensiveCheck() runs even when isActive is false
  if (IsExpensiveCheck() && isActive)
  {
      // Perform action
  }
  ```

#### 6. **Avoid Hard-Coding Values**

- **Use Constants:** Replace magic numbers or hard-coded values with named constants or enumerations. This not only makes the code more readable but also easier to maintain.

  **Example:**
  ```csharp
  const int MaxAttempts = 3;

  if (attempts >= MaxAttempts)
  {
      Console.WriteLine("Too many attempts.");
  }
  ```

- **Enum Usage:** When dealing with a set of related constant values, consider using an enum.

  **Example:**
  ```csharp
  enum UserRole { Admin, User, Guest }

  UserRole role = UserRole.Admin;

  if (role == UserRole.Admin)
  {
      // Admin-specific code
  }
  ```

#### 7. **Consistent Formatting and Style**

- **Indentation and Braces:** Maintain consistent indentation and always use braces `{}` even for single-line statements. This prevents subtle bugs and improves readability.

  **Example:**
  ```csharp
  // Consistent use of braces and indentation
  if (isValid)
  {
      ProcessData();
  }
  else
  {
      LogError();
  }
  ```

- **One Condition Per Line:** For complex conditions, placing each condition on a new line can enhance clarity.

  **Example:**
  ```csharp
  // Each condition on a new line
  if (isActive &&
      hasPermission &&
      !isSuspended)
  {
      // Perform action
  }
  ```

#### 8. **Consider Future Maintenance**

- **Anticipate Changes:** When writing conditional logic, consider how the code might need to evolve. Use patterns and structures that are easy to extend or modify.

  **Example:**
  ```csharp
  // Future-proof by using a method
  if (IsEligibleForDiscount(purchaseAmount))
  {
      // Apply discount
  }

  // Easy to modify logic in the IsEligibleForDiscount method later
  ```

- **Document Complex Conditions:** If a condition is complex or not immediately obvious, use comments to explain the logic. This will help future maintainers (or your future self) understand the code more quickly.

  **Example:**
  ```csharp
  // Check if the user is active, not suspended, and has at least one role
  if (isActive && !isSuspended && userRoles.Count > 0)
  {
      // Perform action
  }
  ```

By adhering to these best practices, you can ensure that your conditional statements are not only correct but also clear, efficient, and easy to maintain. This ensures that your codebase remains manageable as it grows and evolves over time. Let’s delve into more advanced and practical aspects of working with conditional statements in C#, including handling edge cases, using pattern matching, and making decisions based on more complex data structures.

### 9. **Handling Edge Cases in Conditional Statements**

Edge cases can lead to unexpected behavior if not handled properly. They occur when inputs or conditions fall outside the typical scenarios that the code was designed to handle. It’s crucial to anticipate and manage these situations to build robust software.

#### Example 1: Handling Division by Zero

When performing arithmetic operations, especially division, you must account for the possibility of a zero divisor.

```csharp
Console.WriteLine("Enter the numerator:");
int numerator = int.Parse(Console.ReadLine());

Console.WriteLine("Enter the denominator:");
int denominator = int.Parse(Console.ReadLine());

if (denominator != 0)
{
    double result = (double)numerator / denominator;
    Console.WriteLine($"Result: {result}");
}
else
{
    Console.WriteLine("Error: Cannot divide by zero.");
}
```

**Explanation:**
- **Edge Case Check:** The condition `if (denominator != 0)` ensures that the division operation only occurs when the denominator is non-zero, preventing a runtime error.

#### Example 2: Preventing Overflow

In some cases, particularly with integer arithmetic, you may need to handle potential overflow scenarios.

```csharp
Console.WriteLine("Enter a large integer:");
int largeNumber = int.Parse(Console.ReadLine());

try
{
    int doubledValue = checked(largeNumber * 2);
    Console.WriteLine($"Doubled Value: {doubledValue}");
}
catch (OverflowException)
{
    Console.WriteLine("Error: Integer overflow occurred.");
}
```

**Explanation:**
- **Checked Context:** The `checked` keyword is used to enable overflow checking for integral-type arithmetic operations and conversions. If an overflow occurs, it throws an `OverflowException`.

### 10. **Using Pattern Matching with `switch` and `if`**

C# provides advanced pattern matching features that allow you to write more expressive and concise code. This is particularly useful when working with complex data types or when you want to perform type checks in a safe and streamlined manner.

#### Example 1: Pattern Matching with `switch`

Let’s consider an example where you handle different types of inputs in a single `switch` statement.

```csharp
object data = GetDataFromSomewhere();

switch (data)
{
    case int number when number > 0:
        Console.WriteLine($"Positive integer: {number}");
        break;
    case string text when !string.IsNullOrEmpty(text):
        Console.WriteLine($"Text: {text}");
        break;
    case null:
        Console.WriteLine("Data is null.");
        break;
    default:
        Console.WriteLine("Unknown data type.");
        break;
}
```

**Explanation:**
- **Type Patterns:** The `switch` statement is enhanced with type patterns, allowing you to match the type of the `data` variable and apply additional conditions, such as `when number > 0`.
- **Default Case:** The `default` case handles any input that doesn’t match the previous patterns, ensuring all possible cases are covered.

#### Example 2: Pattern Matching in `if` Statements

Pattern matching can also be used directly in `if` statements to simplify type-checking logic.

```csharp
object input = GetInput();

if (input is int number && number > 100)
{
    Console.WriteLine($"Large integer: {number}");
}
else if (input is string text && text.Contains("hello"))
{
    Console.WriteLine($"Greeting found: {text}");
}
else
{
    Console.WriteLine("Unrecognized input.");
}
```

**Explanation:**
- **Type Checking:** The `is` keyword combined with pattern matching allows you to check the type of `input` and simultaneously cast it to the appropriate type if the condition is met.

### 11. **Making Decisions Based on Complex Data Structures**

When working with collections or more complex data structures, your conditional logic may need to inspect these structures' properties or contents.

#### Example 1: Checking a List for Specific Conditions

Suppose you have a list of integers and want to determine if it meets certain criteria.

```csharp
List<int> numbers = new List<int> { 10, 20, 30, 40, 50 };

if (numbers.Any(n => n > 25))
{
    Console.WriteLine("List contains numbers greater than 25.");
}

if (numbers.All(n => n > 0))
{
    Console.WriteLine("All numbers are positive.");
}

if (numbers.Contains(30))
{
    Console.WriteLine("List contains the number 30.");
}
```

**Explanation:**
- **`Any` Method:** Checks if any element in the list satisfies the given condition (`n > 25`).
- **`All` Method:** Verifies that all elements in the list satisfy the condition (`n > 0`).
- **`Contains` Method:** Determines whether the list contains a specific value (`30`).

#### Example 2: Complex Conditionals with Dictionaries

When working with dictionaries, you might need to check for the existence of specific keys or values.

```csharp
Dictionary<string, int> inventory = new Dictionary<string, int>
{
    { "apples", 5 },
    { "oranges", 10 },
    { "bananas", 0 }
};

if (inventory.TryGetValue("apples", out int appleCount) && appleCount > 0)
{
    Console.WriteLine($"There are {appleCount} apples in stock.");
}
else
{
    Console.WriteLine("No apples available.");
}

if (inventory.ContainsKey("bananas") && inventory["bananas"] == 0)
{
    Console.WriteLine("Bananas are out of stock.");
}
```

**Explanation:**
- **`TryGetValue` Method:** Safely attempts to get the value associated with a key, and returns a boolean indicating success or failure.
- **Key Existence Check:** The `ContainsKey` method is used to check if a specific key exists in the dictionary.

### 12. **Conditional Logic in Object-Oriented Design**

In object-oriented programming (OOP), conditional logic often intersects with concepts like polymorphism, encapsulation, and design patterns. Let’s explore how to use conditional statements effectively within an OOP context.

#### Example 1: Replacing Conditionals with Polymorphism

Rather than using a large `if-else` or `switch` statement to handle different types or behaviors, you can use polymorphism to delegate responsibility to different classes.

```csharp
public abstract class Animal
{
    public abstract void Speak();
}

public class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Woof!");
    }
}

public class Cat : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Meow!");
    }
}

public class Bird : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Tweet!");
    }
}

// Using polymorphism
Animal animal = new Dog();
animal.Speak();  // Output: Woof!
```

**Explanation:**
- **Polymorphism:** Different classes (`Dog`, `Cat`, `Bird`) implement their specific behavior (`Speak`) instead of handling the behavior in a single conditional structure.

#### Example 2: Strategy Pattern for Conditional Logic

The Strategy design pattern allows you to encapsulate conditional logic into separate strategy classes, making it easier to manage and extend.

```csharp
public interface IDiscountStrategy
{
    double GetDiscount(double totalPrice);
}

public class NoDiscountStrategy : IDiscountStrategy
{
    public double GetDiscount(double totalPrice) => 0;
}

public class BlackFridayDiscountStrategy : IDiscountStrategy
{
    public double GetDiscount(double totalPrice) => totalPrice * 0.25;
}

public class RegularCustomerDiscountStrategy : IDiscountStrategy
{
    public double GetDiscount(double totalPrice) => totalPrice * 0.1;
}

public class ShoppingCart
{
    private readonly IDiscountStrategy _discountStrategy;

    public ShoppingCart(IDiscountStrategy discountStrategy)
    {
        _discountStrategy = discountStrategy;
    }

    public double CalculateTotalPrice(double totalPrice)
    {
        return totalPrice - _discountStrategy.GetDiscount(totalPrice);
    }
}

// Usage
ShoppingCart cart = new ShoppingCart(new BlackFridayDiscountStrategy());
double finalPrice = cart.CalculateTotalPrice(100);  // Output: 75.0
```

**Explanation:**
- **Strategy Pattern:** Different discount strategies (`NoDiscountStrategy`, `BlackFridayDiscountStrategy`, `RegularCustomerDiscountStrategy`) encapsulate the logic for calculating discounts. The `ShoppingCart` class uses one of these strategies to determine the final price.

### 13. **Testing Conditional Logic**

Finally, robust testing is essential to ensure that your conditional logic works as expected. Writing unit tests that cover all branches of your conditions will help catch bugs early and ensure your code behaves correctly.

#### Example 1: Unit Testing with `xUnit`

Here’s an example of how you might test conditional logic using the `xUnit` testing framework in C#.

```csharp
public class DiscountCalculator
{
    public double CalculateDiscount(double purchaseAmount)
    {
        if (purchaseAmount >= 1000)
            return purchaseAmount * 0.20;
        else if (purchaseAmount >= 500)
            return purchaseAmount * 0.10;
        else if (purchaseAmount >= 200)
            return purchaseAmount * 0.05;
        else
            return 0;
    }
}

public class DiscountCalculatorTests
{
    [Fact]
    public void CalculateDiscount_GivenPurchaseAmountAbove1000_Returns20
