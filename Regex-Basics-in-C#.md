# Chapter: Mastering Regular Expressions in C#

## Introduction to Regular Expressions

Regular expressions (often abbreviated as "regex" or "regexp") are powerful tools used for pattern matching within strings. In C#, regular expressions are implemented using the `System.Text.RegularExpressions` namespace, providing a robust way to search, validate, manipulate, and extract text.

Regular expressions can seem intimidating at first, but with practice, they become a valuable tool in any developer's toolkit. This chapter will take you from the basics to more advanced uses of regex in C#, complete with practical, beginner-friendly examples.

---

## 📚 1. What are Regular Expressions?

Regular expressions are sequences of characters that define a search pattern. They are commonly used for:

- **Searching**: Finding specific strings or patterns within text.
- **Validation**: Ensuring that input data meets certain criteria (e.g., email addresses or phone numbers).
- **Replacement**: Modifying parts of a string based on a pattern.
- **Extraction**: Pulling out specific parts of a string that match a pattern.

At its core, a regular expression is a mini language within a programming language that allows you to express how you want to search through text.

---

## 🛠️ 2. Getting Started with Regex in C#

In C#, the `Regex` class is found in the `System.Text.RegularExpressions` namespace. To use regular expressions, you’ll typically follow these steps:

1. **Import the Namespace**: 
   ```csharp
   using System.Text.RegularExpressions;
   ```

2. **Create a Regex Object**: 
   You can create a `Regex` object using the constructor, which takes a

   ## 🛠️ 2. Getting Started with Regex in C# (continued)

To use regular expressions in C#, you need to understand the basic methods and properties of the `Regex` class. Let's go through some of the fundamental methods and their usage.

### 2.1 Creating a Regex Object

In C#, you can create a `Regex` object by passing a pattern as a string to the `Regex` constructor. This pattern represents the regular expression you want to use for matching, searching, or manipulating text.

Here's an example of creating a `Regex` object:

```csharp
using System.Text.RegularExpressions;

Regex regex = new Regex("pattern");
```

### 2.2 Basic Methods of the `Regex` Class

The `Regex` class provides several methods for working with regular expressions:

- **`IsMatch`**: Checks if a pattern matches a specific input string.
- **`Match`**: Searches an input string for a single occurrence of a pattern.
- **`Matches`**: Searches an input string for all occurrences of a pattern and returns a collection of all matches.
- **`Replace`**: Replaces strings that match a pattern with a specified replacement string.
- **`Split`**: Splits an input string into an array of substrings based on a pattern.

Let's go through each of these methods with practical examples.

---

## 🔍 3. Using `IsMatch` to Validate Input

The `IsMatch` method checks if a string matches a regular expression pattern. It returns `true` if the pattern is found, otherwise, it returns `false`. This is particularly useful for validating input data.

### Example: Checking if a String is an Email Address

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string input = "example@example.com";
        string pattern = @"^[\w\.-]+@[\w\.-]+\.\w+$";  // A simple email pattern

        Regex regex = new Regex(pattern);
        bool isValidEmail = regex.IsMatch(input);

        Console.WriteLine($"Is '{input}' a valid email address? {isValidEmail}");
    }
}
```

**Explanation**: 

- The pattern `@"^[\w\.-]+@[\w\.-]+\.\w+$"` is a basic regex pattern for matching email addresses.
- `^` asserts the start of the string.
- `[\w\.-]+` matches one or more word characters, dots, or hyphens.
- `@` matches the "@" symbol.
- `[\w\.-]+\.\w+` matches the domain part after "@".

**Output**:

```
Is 'example@example.com' a valid email address? True
```

---

## 🔎 4. Using `Match` to Search for Patterns

The `Match` method searches an input string for the first occurrence of a pattern. It returns a `Match` object that provides information about the match.

### Example: Finding a Phone Number in Text

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string input = "Contact me at 123-456-7890 or 098-765-4321.";
        string pattern = @"\d{3}-\d{3}-\d{4}";

        Regex regex = new Regex(pattern);
        Match match = regex.Match(input);

        if (match.Success)
        {
            Console.WriteLine($"Phone number found: {match.Value}");
        }
        else
        {
            Console.WriteLine("No phone number found.");
        }
    }
}
```

**Explanation**: 

- The pattern `@"\d{3}-\d{3}-\d{4}"` matches phone numbers in the format `123-456-7890`.
- `\d{3}` matches exactly three digits.
- `-` matches the hyphen character.
- `Match.Success` checks if the pattern was found.

**Output**:

```
Phone number found: 123-456-7890
```

---

## 📋 5. Using `Matches` to Find All Occurrences

The `Matches` method searches an input string for all occurrences of a pattern and returns a `MatchCollection` containing all matches.

### Example: Extracting All Email Addresses from Text

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string input = "Emails: first@example.com, second@test.org, user@domain.net";
        string pattern = @"[\w\.-]+@[\w\.-]+\.\w+";

        Regex regex = new Regex(pattern);
        MatchCollection matches = regex.Matches(input);

        foreach (Match match in matches)
        {
            Console.WriteLine($"Email found: {match.Value}");
        }
    }
}
```

**Explanation**: 

- `Matches` finds all email addresses in the input string.
- The pattern used here is the same basic email pattern as before.
- The `MatchCollection` object contains all matches found in the input.

**Output**:

```
Email found: first@example.com
Email found: second@test.org
Email found: user@domain.net
```

---

## 🔄 6. Using `Replace` for String Replacement

The `Replace` method replaces substrings in an input string that match a regular expression pattern with a specified replacement string.

### Example: Censoring Profanity in Text

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string input = "This is a darn sentence with a heck of an expression.";
        string pattern = @"\bdarn\b|\bheck\b";
        string replacement = "****";

        Regex regex = new Regex(pattern);
        string result = regex.Replace(input, replacement);

        Console.WriteLine(result);
    }
}
```

**Explanation**:

- The pattern `@"\bdarn\b|\bheck\b"` matches the words "darn" and "heck".
- `\b` asserts a word boundary, ensuring that only whole words are matched.
- The `|` character is a logical OR operator in regex.
- `Replace` substitutes all matches with the replacement string "****".

**Output**:

```
This is a **** sentence with a **** of an expression.
```

---

## ✂️ 7. Using `Split` to Break Down Strings

The `Split` method splits an input string into an array of substrings based on a regex pattern.

### Example: Splitting a Sentence into Words

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string input = "This is a sample sentence, to demonstrate splitting!";
        string pattern = @"[\s,]+";

        Regex regex = new Regex(pattern);
        string[] words = regex.Split(input);

        foreach (string word in words)
        {
            Console.WriteLine(word);
        }
    }
}
```

**Explanation**:

- The pattern `@"[\s,]+"` matches one or more whitespace characters or commas.
- `\s` matches any whitespace character.
- The `Split` method divides the input string wherever the pattern is found.

**Output**:

```
This
is
a
sample
sentence
to
demonstrate
splitting!
```

---

## 💡 8. Special Characters in Regular Expressions

Regular expressions use special characters (also known as metacharacters) to define patterns. Here are some of the most commonly used metacharacters:

| Character | Description                               | Example               |
|-----------|-------------------------------------------|-----------------------|
| `.`       | Matches any character except newline      | `a.b` matches "a*b"   |
| `^`       | Matches the start of a string             | `^Hello` matches "Hello" at the start of a string |
| `$`       | Matches the end of a string               | `end$` matches "the end" at the end of a string |
| `\d`      | Matches any digit (0-9)                   | `\d{2}` matches "23"  |
| `\w`      | Matches any word character (alphanumeric + underscore) | `\w+` matches "hello" or "world123" |
| `\s`      | Matches any whitespace character          | `\s` matches " " or "\t" |
| `*`       | Matches 0 or more occurrences             | `a*` matches "aaa" or "" |
| `+`       | Matches 1 or more occurrences             | `a+` matches "aaa" but not "" |
| `?`       | Matches 0 or 1 occurrence                 | `a?` matches "a" or "" |
| `{n}`     | Matches exactly `n` occurrences           | `\d{3}` matches "123" |
| `[]`      | Matches any one of the characters inside  | `[aeiou]` matches "a", "e", "i", "o", or "u" |
| `()`      | Groups expressions                        | `(abc)` matches "abc" |

---

## 🔍 9. Practical Examples

Now that we've covered the basics, let's look at some practical examples of how to use regular expressions in C#.

### 9.1 Example: Validating a Password

Let's create a regex to validate a password. The password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()

## 🔍 9. Practical Examples (continued)

### 9.1 Example: Validating a Password (continued)

Let's create a regex to validate a password. The password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string pattern = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$";
        Regex regex = new Regex(pattern);

        string[] passwords = { "Password123", "pass", "12345678", "Passw0rd!", "StrongPass1" };

        foreach (string password in passwords)
        {
            bool isValid = regex.IsMatch(password);
            Console.WriteLine($"Password '{password}' is valid: {isValid}");
        }
    }
}
```

**Explanation**:

- The pattern `@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"` ensures:
  - `(?=.*[a-z])`: At least one lowercase letter.
  - `(?=.*[A-Z])`: At least one uppercase letter.
  - `(?=.*\d)`: At least one digit.
  - `.{8,}`: At least 8 characters in length.
- The `IsMatch` method is used to check if each password meets the criteria.

**Output**:

```
Password 'Password123' is valid: True
Password 'pass' is valid: False
Password '12345678' is valid: False
Password 'Passw0rd!' is valid: True
Password 'StrongPass1' is valid: True
```

### 9.2 Example: Extracting Dates from Text

Suppose we want to extract dates from a block of text. This example will find dates in the format `dd/mm/yyyy`.

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void
### 9.2 Example: Extracting Dates from Text (continued)

Suppose we want to extract dates from a block of text. This example will find dates in the format `dd/mm/yyyy`.

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string input = "The event will be held on 15/09/2024, and the next meeting is scheduled for 01/01/2025.";
        string pattern = @"\b\d{2}/\d{2}/\d{4}\b";

        Regex regex = new Regex(pattern);
        MatchCollection matches = regex.Matches(input);

        foreach (Match match in matches)
        {
            Console.WriteLine($"Date found: {match.Value}");
        }
    }
}
```

**Explanation**:

- The pattern `@"\b\d{2}/\d{2}/\d{4}\b"` is designed to match dates in the format `dd/mm/yyyy`:
  - `\b` asserts a word boundary to ensure the date is a complete token.
  - `\d{2}` matches exactly two digits for the day.
  - `/` matches the literal slash character separating day, month, and year.
  - `\d{4}` matches exactly four digits for the year.
- `Matches` finds all occurrences of the pattern in the input string.

**Output**:

```
Date found: 15/09/2024
Date found: 01/01/2025
```

### 9.3 Example: Replacing Multiple Whitespace Characters

Sometimes, text may contain multiple spaces, tabs, or newlines that need to be normalized. This example demonstrates how to replace multiple whitespace characters with a single space.

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string input = "This   is    an example   with   irregular   spacing.";
        string pattern = @"\s+";

        Regex regex = new Regex(pattern);
        string result = regex.Replace(input, " ");

        Console.WriteLine(result);
    }
}
```

**Explanation**:

- The pattern `@"\s+"` matches one or more whitespace characters:
  - `\s` matches any whitespace character (space, tab, newline).
  - `+` indicates that the previous token (`\s`) should match one or more times.
- `Replace` replaces all occurrences of the pattern with a single space.

**Output**:

```
This is an example with irregular spacing.
```

### 9.4 Example: Validating a URL

Validating URLs can be tricky due to their complexity and variety. Here's a simple example to check if a string looks like a basic HTTP or HTTPS URL.

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string pattern = @"^(http|https)://([\w\-]+\.)+[\w\-]+(/[\w\-./?%&=]*)?$";
        Regex regex = new Regex(pattern);

        string[] urls = { "https://www.example.com", "http://example", "ftp://invalid-url", "https://valid-url.com/page?query=1" };

        foreach (string url in urls)
        {
            bool isValid = regex.IsMatch(url);
            Console.WriteLine($"URL '{url}' is valid: {isValid}");
        }
    }
}
```

**Explanation**:

- The pattern `@"^(http|https)://([\w\-]+\.)+[\w\-]+(/[\w\-./?%&=]*)?$"` is used to validate URLs:
  - `^(http|https)://` ensures the URL starts with `http://` or `https://`.
  - `([\w\-]+\.)+` matches one or more subdomains (like `www.` or `blog.`).


### 9.4 Example: Validating a URL (continued)

- `[\w\-]+` matches the domain name, which consists of word characters or hyphens.
- `(/[\w\-./?%&=]*)?` matches an optional path that includes characters typically found in URLs (`/`, `.`, `-`, `?`, `%`, `&`, `=`).
- `$` asserts the end of the string.

**Output**:

```
URL 'https://www.example.com' is valid: True
URL 'http://example' is valid: False
URL 'ftp://invalid-url' is valid: False
URL 'https://valid-url.com/page?query=1' is valid: True
```

### 9.5 Example: Extracting Hashtags from Text

Extracting hashtags from text can be useful for processing social media data or categorizing content. Here's an example of how to extract hashtags from a string.

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string input = "This is a post with some #hashtags! Let's #Extract them.";
        string pattern = @"#\w+";

        Regex regex = new Regex(pattern);
        MatchCollection matches = regex.Matches(input);

        foreach (Match match in matches)
        {
            Console.WriteLine($"Hashtag found: {match.Value}");
        }
    }
}
```

**Explanation**:

- The pattern `"#\w+"` matches hashtags:
  - `#` matches the hash symbol.
  - `\w+` matches one or more word characters (letters, digits, or underscores), ensuring the hashtag includes characters following the `#`.

**Output**:

```
Hashtag found: #hashtags
Hashtag found: #Extract
```

### 9.6 Example: Removing HTML Tags

Sometimes you need to strip HTML tags from a string to get only the text content. Here’s how you can do it using regex.

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string input = "<p>This is <em>formatted</em> text with <strong>HTML</strong> tags.</p>";
        string pattern = @"<.*?>";

        Regex regex = new Regex(pattern);
        string result = regex.Replace(input, "");

        Console.WriteLine(result);
    }
}
```

**Explanation**:

- The pattern `@"<.*?>"` matches HTML tags:
  - `<` matches the start of an HTML tag.
  - `.*?` matches any character (except newline) zero or more times in a non-greedy way.
  - `>` matches the end of an HTML tag.
- `Replace` removes all occurrences of the pattern (HTML tags) from the input.

**Output**:

```
This is formatted text with HTML tags.
```

### 9.7 Example: Validating an IP Address

Validating IP addresses can be important for network programming or configuring systems. Here’s a regex for validating IPv4 addresses.

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string pattern = @"^(\d{1,3}\.){3}\d{1,3}$";
        Regex regex = new Regex(pattern);

        string[] ipAddresses = { "192.168.1.1", "256.100.50.0", "127.0.0.1", "192.168.1" };

        foreach (string ip in ipAddresses)
        {
            bool isValid = regex.IsMatch(ip);
            Console.WriteLine($"IP address '{ip}' is valid: {isValid}");
        }
    }
}
```

**Explanation**:

- The pattern `@"^(\d{1,3}\.){3}\d{1,3}$"` is used for matching IPv4 addresses:
  - `^` asserts the start of the string.
  - `(\d{1,3}\.){3}` matches three groups of 1 to 3 digits followed by a period.
  - `\d{1,3}` matches the final set of 1 to 3 digits.
  - `$` asserts the end of the string.

**Note**: This pattern does not account for valid IP ranges (0-255) but serves as a basic example for structure validation.

**Output**:

```
IP address '192.168.1.1' is valid: True
IP address '256.100.50.0' is valid: True
IP address '127.0.0.1' is valid: True
IP address '192.168.1' is valid: False
```

### 9.8 Example: Extracting File Paths

If you need to extract file paths from a string, regex can help you find paths based on a typical file path format.

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string input = @"The files are located at C:\Documents\Report.docx and D:\Photos\Image.png.";
        string pattern = @"[a-zA-Z]:\\[^\s]+";

        Regex regex = new Regex(pattern);
        MatchCollection matches = regex.Matches(input);

        foreach (Match match in matches)
        {
            Console.WriteLine($"File path found: {match.Value}");
        }
    }
}
```

**Explanation**:

- The pattern `@"[a-zA-Z]:\\[^\s]+"` matches file paths:
  - `[a-zA-Z]:` matches a drive letter followed by a colon.
  - `\\` matches a backslash (escaped in regex).
  - `[^\s]+` matches one or more characters that are not whitespace.

**Output**:

```
File path found: C:\Documents\Report.docx
File path found: D:\Photos\Image.png
```

---

## 🚀 10. Advanced Regex Techniques

### 10.1 Lookaheads and Lookbehinds

Lookaheads and lookbehinds are types of assertions in regex that allow you to match a pattern only if it's preceded or followed by another pattern, without including the preceding or following pattern in the match.

- **Positive Lookahead (`(?=...)`)**: Asserts that what follows must match the pattern inside.
- **Negative Lookahead (`(?!...)`)**: Asserts that what follows must not match the pattern inside.
- **Positive Lookbehind (`(?<=...)`)**: Asserts that what precedes must match the pattern inside.
- **Negative Lookbehind (`(?<!...)`)**: Asserts that what precedes must not match the pattern inside.

### Example: Extracting Prices Not Followed by a Specific Currency

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string input = "Prices are $30, $40, and 50€.";
        string pattern = @"\$\d+(?!\s?€)";

        Regex regex = new Regex(pattern);
        MatchCollection matches = regex.Matches(input);

        foreach (Match match in matches)
        {
            Console.WriteLine($"Price found: {match.Value}");
        }
    }
}
```

**Explanation**:

- The pattern `@"\$\d+(?!\s?€)"` matches dollar prices that are not followed by a euro symbol:
  - `\$` matches the dollar symbol.
  - `\d+` matches one or more digits.
  - `(?!\s?€)` is a negative lookahead that asserts the number is **not** followed by an optional space and a euro symbol.

**Output**:

```
Price found: $30
Price found: $40
```

### 10.2 Named Groups

Named groups allow you to assign a name to a capturing group, making it easier to reference and improve code readability.

### Example: Named Group for Extracting User Details

```csharp
using System;
using System.Text.RegularExpressions;

public class Example
{
    public static void Main()
    {
        string input = "User: JohnDoe, Email: john@example.com";
        string pattern = @"User: (?<username>\w+), Email: (?<email>[\w\.-]+@[\w\.-]+\.\w+)";

        Regex regex = new Regex(pattern);
        Match match = regex.Match(input);

        if (match.Success)
        {
            string username = match.Groups["username"].Value;
            string email = match.Groups["email"].Value;
            Console.WriteLine($"Username: {username}");
            Console.WriteLine($"Email: {email}");
        }
    }
}
```

**Explanation**:

- The pattern `@"User: (?<username>\w+), Email: (?<email>[\w\.-]+@[\w\.-]+\.\w+)"` uses named groups:
  - `(?<username>\w+)` captures the username into a group named `username`.
  - `(?<email>[\w\.-]+@[\w\.-]+\.\w+)` captures the email into a group named `email`.

**Output**:

```
Username: JohnDoe
Email: john@example.com
```

---

## 📘 Conclusion

Regular expressions in C# are a versatile and powerful tool for processing text. From simple searches to complex pattern matching, regex allows developers to handle string manipulation tasks efficiently. Understanding the basics, such as pattern matching and using methods like `IsMatch`, `Match`, `Matches`, `Replace`, and `Split`, along with advanced techniques like lookaheads, lookbehinds, and named groups, will enable you to tackle a wide range of text processing


# 📚 Comprehensive Guide to Text Processing in C#

Text processing is a fundamental skill in programming, especially in C#, where applications often need to handle, transform, and manipulate text data. Whether you're building a web application, a desktop application, or working with data files, understanding text processing can significantly enhance your ability to write efficient and effective C# code.

## 📖 Chapter Overview

1. **Introduction to Text Processing in C#**
2. **String Basics and Manipulation**
3. **Using StringBuilder for Efficient Text Manipulation**
4. **Parsing and Formatting Strings**
5. **Handling Common String Operations**
6. **Regular Expressions for Advanced Text Processing**
7. **Working with Files and Streams**
8. **Localization and Internationalization**
9. **Practical Examples and Use Cases**

---

## 1. 📝 Introduction to Text Processing in C#

### 1.1 What is Text Processing?

Text processing involves analyzing, manipulating, and transforming text data to extract meaningful information or reformat the data according to specific needs. In C#, text processing typically deals with `string` objects and various classes available in the .NET framework that provide powerful functionalities for handling text.

### 1.2 Why Text Processing Matters

Text processing is crucial in numerous scenarios, including:
- **Data Cleaning and Transformation**: Preparing raw text data for analysis or storage.
- **Search and Replace**: Finding and modifying text within strings.
- **Data Parsing**: Extracting useful information from structured or unstructured text.
- **Input Validation**: Ensuring text input matches required formats (e.g., email addresses, phone numbers).

### 1.3 Key Text Processing Classes in C#

- **`string`**: Represents an immutable sequence of characters.
- **`StringBuilder`**: A mutable string class that improves performance for extensive modifications.
- **`Regex`**: Provides a way to work with regular expressions for pattern matching and complex text manipulation.
- **`StreamReader` and `StreamWriter`**: Classes for reading and writing text data to and from files.
- **`CultureInfo`**: Provides information about specific cultures, including number formats and date formats, which is essential for localization and internationalization.

---

## 2. 🔤 String Basics and Manipulation

### 2.1 The `string` Type in C#

The `string` type in C# is an alias for `System.String` in the .NET Framework. It represents a sequence of characters and is immutable, meaning any modification creates a new string instance.

#### 2.1.1 Creating Strings

You can create strings in several ways:

```csharp
// Using string literals
string hello = "Hello, World!";

// Using the new keyword (not common)
string greetings = new string("Hello, C#!".ToCharArray());
```

#### 2.1.2 String Interpolation and Concatenation

- **String Concatenation**: Joining strings together using the `+` operator or the `String.Concat` method.

    ```csharp
    string name = "John";
    string greeting = "Hello, " + name + "!"; // Concatenation using +
    string fullGreeting = String.Concat(greeting, " How are you today?"); // Using String.Concat
    ```

- **String Interpolation**: A more readable and efficient way to format strings, introduced in C# 6.0.

    ```csharp
    string name = "Jane";
    string greeting = $"Hello, {name}!"; // Interpolation
    ```

### 2.2 Common String Methods

The `string` class provides a rich set of methods to perform various operations. Here are some commonly used methods:

#### 2.2.1 Length and Indexing

- **`Length`**: Gets the number of characters in a string.

    ```csharp
    string example = "Hello";
    int length = example.Length; // 5
    ```

- **Indexing**: Access individual characters using an index.

    ```csharp
    char firstLetter = example[0]; // 'H'
    ```

#### 2.2.2 Substring Operations

- **`Substring`**: Extracts a portion of a string.

    ```csharp
    string phrase = "Hello, World!";
    string sub = phrase.Substring(7, 5); // "World"
    ```

#### 2.2.3 Searching Within Strings

- **`IndexOf`**: Returns the zero-based index of the first occurrence of a substring or character.

    ```csharp
    int index = phrase.IndexOf("World"); // 7
    ```

- **`Contains`**: Checks if a string contains a specified substring.

    ```csharp
    bool containsWorld = phrase.Contains("World"); // true
    ```

#### 2.2.4 Modifying Strings

- **`Replace`**: Replaces all occurrences of a specified substring or character.

    ```csharp
    string newPhrase = phrase.Replace("World", "C#"); // "Hello, C#!"
    ```

- **`ToUpper` and `ToLower`**: Converts a string to uppercase or lowercase.

    ```csharp
    string upper = phrase.ToUpper(); // "HELLO, WORLD!"
    string lower = phrase.ToLower(); // "hello, world!"
    ```

- **`Trim`**: Removes leading and trailing white spaces.

    ```csharp
    string trimmed = "   Hello   ".Trim(); // "Hello"
    ```

#### 2.2.5 Splitting and Joining Strings

- **`Split`**: Splits a string into an array of substrings based on a delimiter.

    ```csharp
    string csv = "apple,banana,orange";
    string[] fruits = csv.Split(','); // ["apple", "banana", "orange"]
    ```

- **`Join`**: Combines an array of strings into a single string with a specified separator.

    ```csharp
    string[] words = { "Hello", "World" };
    string sentence = String.Join(" ", words); // "Hello World"
    ```

### 2.3 Example: Basic String Manipulation

Here’s a practical example to demonstrate basic string manipulation:

```csharp
using System;

public class StringManipulationExample
{
    public static void Main()
    {
        string input = "  C# Programming is fun!  ";
        
        // Trimming white spaces
        string trimmed = input.Trim();
        
        // Changing case
        string upper = trimmed.ToUpper();
        string lower = trimmed.ToLower();
        
        // Replacing text
        string replaced = trimmed.Replace("fun", "awesome");
        
        // Splitting into words
        string[] words = trimmed.Split(' ');

        Console.WriteLine($"Original: '{input}'");
        Console.WriteLine($"Trimmed: '{trimmed}'");
        Console.WriteLine($"Uppercase: '{upper}'");
        Console.WriteLine($"Lowercase: '{lower}'");
        Console.WriteLine($"Replaced: '{replaced}'");
        Console.WriteLine($"Words: {String.Join(", ", words)}");
    }
}
```

**Output**:

```
Original: '  C# Programming is fun!  '
Trimmed: 'C# Programming is fun!'
Uppercase: 'C# PROGRAMMING IS FUN!'
Lowercase: 'c# programming is fun!'
Replaced: 'C# Programming is awesome!'
Words: C#, Programming, is, fun!
```

---

## 3. 📜 Using `StringBuilder` for Efficient Text Manipulation

### 3.1 Why Use `StringBuilder`?

The `string` type is immutable, meaning any operation that appears to modify a string actually creates a new string instance. This can lead to performance issues when dealing with large amounts of text or in scenarios where frequent modifications are necessary.

`StringBuilder` is a mutable string class that allows modifications without creating new instances. This makes it ideal for scenarios where you need to append, remove, or modify strings frequently.

### 3.2 Basic Usage of `StringBuilder`

The `StringBuilder` class is part of the `System.Text` namespace. Here's how to use it:

```csharp
using System;
using System.Text;

public class StringBuilderExample
{
    public static void Main()
    {
        // Initialize a new StringBuilder
        StringBuilder sb = new StringBuilder();

        // Append strings
        sb.Append("Hello");
        sb.Append(", ");
        sb.Append("World!");

        Console.WriteLine(sb.ToString()); // "Hello, World!"
    }
}
```

### 3.3 Common `StringBuilder` Methods

- **`Append`**: Adds a string or object representation to the end.

    ```csharp
    sb.Append(" More text.");
    ```

- **`Insert`**: Inserts a string or object representation at a specified index.

    ```csharp
    sb.Insert(7, "beautiful ");
    // Result: "Hello, beautiful World!"
    ```

- **`Remove`**: Removes a specified number of characters from a given index.

    ```csharp
    sb.Remove(5, 2);
    // Result: "Hello beautiful World!"
    ```

- **`Replace`**: Replaces all occurrences of a specified character or string.

    ```csharp
    sb.Replace("World", "Universe");
    // Result: "Hello beautiful Universe!"
    ```

- **`Clear`**: Clears all contents of the `StringBuilder`.

    ```csharp
    sb.Clear(); // Empties the StringBuilder
    ```

### 3.4 Example: Efficiently Building Large Strings

Suppose you need to construct a large string by concatenating numbers. Using `StringBuilder` is much more efficient than using regular strings.

```csharp
using System;
using System.Text;

public class LargeStringExample
{
    public static void Main()
    {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < 1000; i++)
        {
            sb.Append(i.ToString());
            sb.Append(", ");
        }

        // Removing the last comma and space
        sb.Remove(sb.Length - 2, 2);

        Console.WriteLine(sb.ToString());
    }
}
```

**Output**:

```
0, 1, 2, ..., 998, 999
```

---

## 4. 📊 Parsing and Formatting Strings

Parsing and formatting strings are crucial for data manipulation, especially when dealing with user input, file data, or data that requires specific formats.

### 4.1 Parsing Strings to Other Types

Parsing converts strings to other data types, such as integers, dates, or floating-point numbers.

#### 4.1.1 Parsing Numbers

- **`int.Parse`**: Converts a string to an integer.

    ```csharp
    int number = int.Parse("123"); // 123
    ```

- **`double.Parse`**: Converts a string to a double.

    ```csharp
    double value = double.Parse("123.45"); // 123.45
    ```

- **`TryParse`**: Safely attempts to parse a string without throwing an exception if parsing fails.

    ```csharp
    if (int.TryParse("123", out int result))
    {
        Console.WriteLine($"Parsed number: {result}");
    }
    else
    {
        Console.WriteLine("Invalid number format.");
    }
    ```

#### 4.1.2 Parsing Dates

- **`DateTime.Parse`**: Converts a string representation of a date and time to a `DateTime` object.

```csharp
string dateString = "2024-08-27";
DateTime date = DateTime.Parse(dateString);
Console.WriteLine($"Parsed date: {date.ToString("yyyy-MM-dd")}"); // Output: Parsed date: 2024-08-27
```

- **`DateTime.TryParse`**: Safely attempts to parse a date string and outputs a `DateTime` object if successful, or indicates failure without throwing an exception.

```csharp
string dateString = "2024-08-27";
if (DateTime.TryParse(dateString, out DateTime result))
{
    Console.WriteLine($"Parsed date: {result.ToString("yyyy-MM-dd")}");
}
else
{
    Console.WriteLine("Invalid date format.");
}
```

### 4.2 Formatting Strings

Formatting strings is essential for presenting data in a specific format, especially when displaying dates, numbers, or other data types in user interfaces or logs.

#### 4.2.1 Numeric Formatting

C# provides several standard numeric format strings:

- **Currency (`C`)**: Formats a number as currency.
  
```csharp
double price = 123.456;
string formattedPrice = price.ToString("C"); // Output: "$123.46" (depending on culture)
```

- **Number (`N`)**: Formats a number with commas and decimal places.
  
```csharp
int largeNumber = 123456789;
string formattedNumber = largeNumber.ToString("N"); // Output: "123,456,789.00"
```

- **Percentage (`P`)**: Formats a number as a percentage.
  
```csharp
double rate = 0.85;
string formattedRate = rate.ToString("P"); // Output: "85.00%"
```

#### 4.2.2 Date and Time Formatting

- **Standard Date and Time Format Strings**: Predefined patterns for date and time.

```csharp
DateTime now = DateTime.Now;
string shortDate = now.ToString("d"); // Output: "8/27/2024" (depending on culture)
string longTime = now.ToString("T"); // Output: "4:05:07 PM" (depending on culture)
```

- **Custom Date and Time Format Strings**: Allows specific formatting by combining various format specifiers.

```csharp
DateTime now = DateTime.Now;
string customFormat = now.ToString("dddd, dd MMMM yyyy HH:mm:ss");
Console.WriteLine(customFormat); // Output: "Tuesday, 27 August 2024 16:05:07"
```

### 4.3 Example: Parsing and Formatting User Input

Here's a practical example that combines parsing and formatting, where a user inputs a date and a number:

```csharp
using System;

public class ParsingFormattingExample
{
    public static void Main()
    {
        Console.WriteLine("Enter a date (yyyy-MM-dd):");
        string dateInput = Console.ReadLine();

        if (DateTime.TryParse(dateInput, out DateTime date))
        {
            Console.WriteLine($"Formatted Date: {date.ToString("MMMM dd, yyyy")}");
        }
        else
        {
            Console.WriteLine("Invalid date format.");
        }

        Console.WriteLine("Enter a number:");
        string numberInput = Console.ReadLine();

        if (double.TryParse(numberInput, out double number))
        {
            Console.WriteLine($"Formatted Number: {number.ToString("N2")}");
        }
        else
        {
            Console.WriteLine("Invalid number format.");
        }
    }
}
```

**Output**:

```
Enter a date (yyyy-MM-dd):
2024-08-27
Formatted Date: August 27, 2024
Enter a number:
12345.6789
Formatted Number: 12,345.68
```

---

## 5. 🔍 Handling Common String Operations

### 5.1 Case Conversion

Converting strings to uppercase or lowercase is common in text processing, particularly when performing case-insensitive comparisons or standardizing input.

```csharp
string text = "Hello, World!";
string upper = text.ToUpper(); // "HELLO, WORLD!"
string lower = text.ToLower(); // "hello, world!"
```

### 5.2 Trimming and Removing Whitespace

Whitespace can often cause issues, such as extra spaces around input data. Removing or trimming whitespace ensures clean data handling.

- **`Trim`**: Removes leading and trailing white spaces.

```csharp
string messyInput = "   example   ";
string cleanInput = messyInput.Trim(); // "example"
```

- **`TrimStart`** and **`TrimEnd`**: Remove white spaces only from the start or end of a string.

```csharp
string startTrimmed = messyInput.TrimStart(); // "example   "
string endTrimmed = messyInput.TrimEnd(); // "   example"
```

### 5.3 Checking String Equality

String comparisons are fundamental in text processing. C# offers several ways to compare strings, considering or ignoring case.

#### 5.3.1 Case-Sensitive Comparison

- **`Equals`**: Compares strings with case sensitivity.

```csharp
string str1 = "hello";
string str2 = "Hello";
bool areEqual = str1.Equals(str2); // false
```

#### 5.3.2 Case-Insensitive Comparison

- **`Equals` with `StringComparison`**: Compares strings without case sensitivity.

```csharp
bool areEqualIgnoreCase = str1.Equals(str2, StringComparison.OrdinalIgnoreCase); // true
```

### 5.4 Checking for Null or Empty Strings

C# provides several methods to check if a string is `null` or empty, which is crucial for validating input or handling optional data.

- **`String.IsNullOrEmpty`**: Checks if a string is `null` or empty.

```csharp
string str = null;
bool isNullOrEmpty = String.IsNullOrEmpty(str); // true
```

- **`String.IsNullOrWhiteSpace`**: Checks if a string is `null`, empty, or consists only of white spaces.

```csharp
string whitespace = "   ";
bool isNullOrWhiteSpace = String.IsNullOrWhiteSpace(whitespace); // true
```

### 5.5 Example: Common String Operations

Let's demonstrate these common string operations with a simple example:

```csharp
using System;

public class CommonStringOperations
{
    public static void Main()
    {
        string input = "  Welcome to C# Programming  ";

        // Case Conversion
        Console.WriteLine($"Uppercase: {input.ToUpper()}");
        Console.WriteLine($"Lowercase: {input.ToLower()}");

        // Trimming
        string trimmedInput = input.Trim();
        Console.WriteLine($"Trimmed: '{trimmedInput}'");

        // Checking for Null or Empty
        bool isEmpty = String.IsNullOrEmpty(trimmedInput);
        Console.WriteLine($"Is empty: {isEmpty}");

        // Case-Insensitive Comparison
        string compareString = "welcome to c# programming";
        bool isEqual = trimmedInput.Equals(compareString, StringComparison.OrdinalIgnoreCase);
        Console.WriteLine($"Is equal ignoring case: {isEqual}");
    }
}
```

**Output**:

```
Uppercase: "  WELCOME TO C# PROGRAMMING  "
Lowercase: "  welcome to c# programming  "
Trimmed: 'Welcome to C# Programming'
Is empty: False
Is equal ignoring case: True
```

---

## 6. 🔍 Regular Expressions for Advanced Text Processing

Regular expressions (regex) are powerful tools for matching patterns in strings, allowing for complex text processing. Regex is covered in-depth in a separate chapter, but here’s a brief overview of its use in text processing.

### 6.1 Introduction to Regular Expressions

Regular expressions provide a concise syntax for specifying patterns to search, match, and manipulate strings. In C#, the `System.Text.RegularExpressions` namespace contains classes for working with regex.

### 6.2 Basic Regex Operations

#### 6.2.1 Matching Patterns

- **`Regex.IsMatch`**: Checks if a string matches a regex pattern.

```csharp
using System.Text.RegularExpressions;

string text = "The quick brown fox";
bool containsQuick = Regex.IsMatch(text, @"\bquick\b"); // true
```

#### 6.2.2 Extracting Matches

- **`Regex.Match`** and **`Regex.Matches`**: Extract single or multiple matches from a string.

```csharp
string sentence = "The rain in Spain stays mainly in the plain.";
MatchCollection matches = Regex.Matches(sentence, @"\bin\b");

foreach (Match match in matches)
{
    Console.WriteLine($"Match found at index {match.Index}: {match.Value}");
}
```

#### 6.2.3 Replacing Patterns

- **`Regex.Replace`**: Replaces substrings matching a regex pattern with a replacement string.

```csharp
string input = "This is a test.";
string output = Regex.Replace(input, @"\s", "_");
Console.WriteLine(output); // "This_is_a_test."
```

### 6.3 Example: Using Regex for Text Validation

Here's an example of using regex to validate email addresses:

```csharp
using System;
using System.Text.RegularExpressions;

public class RegexExample
{
    public static void Main()
    {
        string email = "example@example.com";
        string pattern = @"^[^@\s]+@[^@\s]+\.[^@\s]+$";

        bool isValid = Regex.IsMatch(email, pattern);
pattern);

        if (isValid)
        {
            Console.WriteLine($"'{email}' is a valid email address.");
        }
        else
        {
            Console.WriteLine($"'{email}' is not a valid email address.");
        }
    }
}
```

**Output**:

```
'example@example.com' is a valid email address.
```

This example demonstrates a simple regex pattern to check for basic email address formatting. It ensures that the email has characters before and after an '@' symbol and ends with a domain part after a period (`.`).

---

## 7. 📂 Working with Files and Streams

Text processing often involves reading from and writing to files. C# provides various classes in the `System.IO` namespace to handle file operations efficiently.

### 7.1 Reading from Files

To read text data from files, you can use classes like `StreamReader` or the convenience methods in `File` class.

#### 7.1.1 Using `StreamReader`

`StreamReader` allows reading from files line by line, which is useful for processing large text files.

```csharp
using System;
using System.IO;

public class FileReadingExample
{
    public static void Main()
    {
        string filePath = "example.txt";

        using (StreamReader reader = new StreamReader(filePath))
        {
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                Console.WriteLine(line);
            }
        }
    }
}
```

#### 7.1.2 Using `File.ReadAllText` and `File.ReadAllLines`

`File.ReadAllText` reads the entire file into a single string, while `File.ReadAllLines` reads all lines into a string array.

```csharp
string content = File.ReadAllText("example.txt");
Console.WriteLine(content);

string[] lines = File.ReadAllLines("example.txt");
foreach (string line in lines)
{
    Console.WriteLine(line);
}
```

### 7.2 Writing to Files

To write text data to files, you can use `StreamWriter` or methods in the `File` class.

#### 7.2.1 Using `StreamWriter`

`StreamWriter` allows writing to files line by line or in chunks.

```csharp
using System;
using System.IO;

public class FileWritingExample
{
    public static void Main()
    {
        string filePath = "output.txt";

        using (StreamWriter writer = new StreamWriter(filePath))
        {
            writer.WriteLine("Hello, World!");
            writer.WriteLine("Writing to a file in C#.");
        }
    }
}
```

#### 7.2.2 Using `File.WriteAllText` and `File.WriteAllLines`

`File.WriteAllText` writes a single string to a file, while `File.WriteAllLines` writes an array of strings as individual lines.

```csharp
string content = "Hello, World!\nWriting to a file in C#.";
File.WriteAllText("output.txt", content);

string[] lines = { "Line 1", "Line 2", "Line 3" };
File.WriteAllLines("output.txt", lines);
```

### 7.3 Example: File Copying with Text Processing

Here's a practical example that reads a text file, modifies its content, and writes the modified content to a new file:

```csharp
using System;
using System.IO;

public class FileCopyExample
{
    public static void Main()
    {
        string sourceFilePath = "source.txt";
        string destinationFilePath = "destination.txt";

        // Reading content from source file
        string[] lines = File.ReadAllLines(sourceFilePath);

        // Processing text
        for (int i = 0; i < lines.Length; i++)
        {
            lines[i] = lines[i].ToUpper(); // Converting each line to uppercase
        }

        // Writing processed content to destination file
        File.WriteAllLines(destinationFilePath, lines);

        Console.WriteLine($"Content copied and processed from '{sourceFilePath}' to '{destinationFilePath}'.");
    }
}
```

**Output**:

```
Content copied and processed from 'source.txt' to 'destination.txt'.
```

This example demonstrates reading from a source file, processing the text (converting to uppercase), and writing the processed text to a new file.

---

## 8. 🌍 Localization and Internationalization

### 8.1 Understanding Localization and Internationalization

- **Internationalization (i18n)**: The process of designing software so that it can be adapted to various languages and regions without engineering changes.
- **Localization (l10n)**: The process of adapting software for a specific region or language by translating text and adjusting layouts, dates, numbers, and currency formats.

### 8.2 Using `CultureInfo` for Localization

`CultureInfo` is a class that provides information about a specific culture, such as language, country, number formats, date formats, etc. It’s used to ensure that applications are localized correctly for different regions.

#### 8.2.1 Formatting Numbers and Dates with `CultureInfo`

You can format numbers and dates based on different cultures:

```csharp
using System;
using System.Globalization;

public class LocalizationExample
{
    public static void Main()
    {
        double number = 12345.6789;
        DateTime date = DateTime.Now;

        // US culture
        CultureInfo usCulture = new CultureInfo("en-US");
        Console.WriteLine(number.ToString("C", usCulture)); // Output: $12,345.68
        Console.WriteLine(date.ToString("D", usCulture)); // Output: Tuesday, August 27, 2024

        // French culture
        CultureInfo frCulture = new CultureInfo("fr-FR");
        Console.WriteLine(number.ToString("C", frCulture)); // Output: 12 345,68 €
        Console.WriteLine(date.ToString("D", frCulture)); // Output: mardi 27 août 2024
    }
}
```

#### 8.2.2 Resource Files for String Localization

Resource files (.resx) are used to store localized strings and other resources. C# applications can automatically switch between different resources based on the current culture.

1. **Create Resource Files**: Create .resx files for each language (e.g., `Strings.en-US.resx`, `Strings.fr-FR.resx`).
2. **Access Localized Strings**: Use the `ResourceManager` class to access strings based on the current culture.

```csharp
using System;
using System.Globalization;
using System.Resources;

public class ResourceLocalizationExample
{
    public static void Main()
    {
        ResourceManager rm = new ResourceManager("MyApp.Resources.Strings", typeof(ResourceLocalizationExample).Assembly);

        // Set culture to French
        CultureInfo.CurrentCulture = new CultureInfo("fr-FR");
        string hello = rm.GetString("Hello");
        Console.WriteLine(hello); // Output: Bonjour (if localized correctly)

        // Set culture to English
        CultureInfo.CurrentCulture = new CultureInfo("en-US");
        hello = rm.GetString("Hello");
        Console.WriteLine(hello); // Output: Hello
    }
}
```

### 8.3 Example: Multi-Language Greeting Application

Here's an example of a simple application that displays greetings in different languages based on the user's culture:

```csharp
using System;
using System.Globalization;
using System.Resources;

public class MultiLanguageGreeting
{
    public static void Main()
    {
        ResourceManager rm = new ResourceManager("GreetingApp.Resources.Greetings", typeof(MultiLanguageGreeting).Assembly);

        Console.WriteLine("Choose language (en-US or fr-FR):");
        string cultureCode = Console.ReadLine();
        CultureInfo culture = new CultureInfo(cultureCode);

        // Set culture
        CultureInfo.CurrentCulture = culture;

        string greeting = rm.GetString("Greeting");
        Console.WriteLine(greeting);
    }
}
```

**Resource Files Content**:

- **Greetings.en-US.resx**:
  - Key: `Greeting`
  - Value: `Hello! Welcome to our application.`

- **Greetings.fr-FR.resx**:
  - Key: `Greeting`
  - Value: `Bonjour! Bienvenue dans notre application.`

**Output (when `fr-FR` is selected)**:

```
Choose language (en-US or fr-FR):
fr-FR
Bonjour! Bienvenue dans notre application.
```

---

## 9. 🛠️ Practical Examples and Use Cases

### 9.1 Example: Text-Based Search Tool

A text-based search tool can search through files or strings based on user input and display the results.

```csharp
using System;
using System.IO;
using System.Text.RegularExpressions;

public class TextSearchTool
{
    public static void Main()
    {
        Console.WriteLine("Enter the directory to search in:");
        string directoryPath = Console.ReadLine();

        Console.WriteLine("Enter the text pattern to search for:");
        string pattern = Console.ReadLine();

        foreach (string file in Directory.GetFiles(directoryPath))
        {
            string content = File.ReadAllText(file);
            if (Regex.IsMatch(content, pattern))
            {
                Console.WriteLine($"Pattern found in: {file}");
            }
        }
    }
}
```

### 9.2 Example: CSV File Parser

A CSV (Comma-Separated Values) parser can read a CSV file, process its data, and output the contents in a structured format.

```csharp
using System;
using System.IO;

public class CsvParser
{
    public static void Main()
    {
        string filePath = "data.csv";
        string[] lines = File.ReadAllLines(filePath);

        foreach (string line in lines)
        {
            string[] columns = line.Split(',');
columns = line.Split(',');

            // Display parsed data
            Console.WriteLine("Parsed CSV Data:");
            foreach (string column in columns)
            {
                Console.WriteLine(column.Trim());
            }

            Console.WriteLine(); // Add a line break between records
        }
    }
}
```

This CSV parser reads each line of a CSV file, splits it into columns based on commas, and then trims any extra whitespace around each column. This approach is basic and works well for simple CSV files without quoted fields containing commas.

### 9.3 Example: Simple Text Editor

A simple text editor application can allow users to create, edit, and save text files. This example demonstrates reading from and writing to files interactively.

```csharp
using System;
using System.IO;

public class SimpleTextEditor
{
    public static void Main()
    {
        Console.WriteLine("Welcome to the Simple Text Editor!");

        while (true)
        {
            Console.WriteLine("\nMenu:");
            Console.WriteLine("1. Open file");
            Console.WriteLine("2. Edit file");
            Console.WriteLine("3. Save file");
            Console.WriteLine("4. Exit");
            Console.Write("Select an option: ");

            string option = Console.ReadLine();

            switch (option)
            {
                case "1":
                    OpenFile();
                    break;
                case "2":
                    EditFile();
                    break;
                case "3":
                    SaveFile();
                    break;
                case "4":
                    Console.WriteLine("Exiting...");
                    return;
                default:
                    Console.WriteLine("Invalid option. Please try again.");
                    break;
            }
        }
    }

    static string filePath = "";
    static string fileContent = "";

    static void OpenFile()
    {
        Console.Write("Enter the path of the file to open: ");
        filePath = Console.ReadLine();

        if (File.Exists(filePath))
        {
            fileContent = File.ReadAllText(filePath);
            Console.WriteLine($"File content:\n{fileContent}");
        }
        else
        {
            Console.WriteLine("File does not exist.");
        }
    }

    static void EditFile()
    {
        if (string.IsNullOrEmpty(filePath))
        {
            Console.WriteLine("No file is currently opened. Please open a file first.");
            return;
        }

        Console.WriteLine("Current file content:");
        Console.WriteLine(fileContent);
        Console.WriteLine("Enter new content (replace all content):");
        fileContent = Console.ReadLine();
    }

    static void SaveFile()
    {
        if (string.IsNullOrEmpty(filePath))
        {
            Console.WriteLine("No file is currently opened. Please open a file first.");
            return;
        }

        File.WriteAllText(filePath, fileContent);
        Console.WriteLine("File saved successfully.");
    }
}
```

This example provides a basic text editor that lets users open, edit, and save text files. The editor reads the file content into a string, allows the user to modify the content, and then writes the modified content back to the file.

### 9.4 Example: Text Encryption and Decryption

Text encryption and decryption are crucial for protecting sensitive data. This example demonstrates basic encryption and decryption using C#'s `System.Security.Cryptography` namespace.

```csharp
using System;
using System.Security.Cryptography;
using System.Text;

public class TextEncryption
{
    public static void Main()
    {
        Console.WriteLine("Enter text to encrypt:");
        string plainText = Console.ReadLine();

        string encryptedText = Encrypt(plainText);
        Console.WriteLine($"Encrypted Text: {encryptedText}");

        string decryptedText = Decrypt(encryptedText);
        Console.WriteLine($"Decrypted Text: {decryptedText}");
    }

    private static string Encrypt(string plainText)
    {
        byte[] data = Encoding.UTF8.GetBytes(plainText);
        using (MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider())
        {
            byte[] keys = md5.ComputeHash(Encoding.UTF8.GetBytes("encryptionkey"));
            using (TripleDESCryptoServiceProvider tripleDes = new TripleDESCryptoServiceProvider()
            {
                Key = keys,
                Mode = CipherMode.ECB,
                Padding = PaddingMode.PKCS7
            })
            {
                ICryptoTransform transform = tripleDes.CreateEncryptor();
                byte[] results = transform.TransformFinalBlock(data, 0, data.Length);
                return Convert.ToBase64String(results, 0, results.Length);
            }
        }
    }

    private static string Decrypt(string encryptedText)
    {
        byte[] data = Convert.FromBase64String(encryptedText);
        using (MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider())
        {
            byte[] keys = md5.ComputeHash(Encoding.UTF8.GetBytes("encryptionkey"));
            using (TripleDESCryptoServiceProvider tripleDes = new TripleDESCryptoServiceProvider()
            {
                Key = keys,
                Mode = CipherMode.ECB,
                Padding = PaddingMode.PKCS7
            })
            {
                ICryptoTransform transform = tripleDes.CreateDecryptor();
                byte[] results = transform.TransformFinalBlock(data, 0, data.Length);
                return Encoding.UTF8.GetString(results);
            }
        }
    }
}
```

**Output**:

```
Enter text to encrypt:
Hello World
Encrypted Text: +ABCN4LAlnW8qgR2vF8RfQ==
Decrypted Text: Hello World
```

In this example, the text is encrypted and decrypted using Triple DES (3DES) with a fixed encryption key. While this is a basic example suitable for educational purposes, in real-world applications, you should use more secure algorithms and key management practices.

---

## 10. 📜 Summary

In this chapter, we covered comprehensive aspects of text processing in C#. From basic string manipulations to advanced parsing, formatting, and regex usage, you now have a solid foundation to handle various text processing tasks in your C# applications. We also explored file operations, localization, and encryption, showcasing practical examples to solidify your understanding.

Text processing is a fundamental skill in software development, whether you're working with user input, files, or network data. Mastering these techniques allows you to build robust applications that can handle diverse text formats, ensure data accuracy, and improve user experience. As you continue learning, consider diving deeper into topics like natural language processing, data serialization, and more advanced encryption to further enhance your skills.

---

This concludes the chapter on **Text Processing in C#**. Make sure to practice these concepts by building small projects and experimenting with different text operations to gain confidence and proficiency. Happy coding!


# Chapter: Creating and Using Objects in C#

## Introduction

Welcome to this chapter on **Creating and Using Objects in C#**! 🎉 In C#, everything revolves around objects and classes. Understanding how to create and manipulate objects is fundamental to mastering C# programming. This chapter will guide you through the core concepts of classes, objects, instances, constructors, reference types, non-static methods, and modifying data and behavior. By the end, you'll have a solid foundation for building robust object-oriented applications.

### What You Will Learn:

1. **Classes and Objects**: Understanding the blueprint of objects.
2. **Creating Instances**: How to create and use instances of classes.
3. **Constructors**: Special methods for initializing objects.
4. **Reference Types**: Understanding how objects are handled in memory.
5. **Non-static Methods**: Adding behavior to your objects.
6. **Changing Data and Behavior**: How to modify object states and functionalities.

---

## 1. 🎓 Understanding Classes and Objects

### 1.1 What is a Class?

A **class** in C# is a blueprint for creating objects. It defines the properties (data) and methods (behavior) that the objects created from the class will have. Think of a class as a cookie cutter and an object as a cookie. You can make many cookies (objects) from one cookie cutter (class).

#### Example: Defining a Simple Class

Let's start by defining a simple class named `Car`.

```csharp
public class Car
{
    // Properties
    public string Brand;
    public string Model;
    public int Year;

    // Methods
    public void DisplayInfo()
    {
        Console.WriteLine($"Brand: {Brand}, Model: {Model}, Year: {Year}");
    }
}
```

- **Properties**: `Brand`, `Model`, and `Year` are variables that store data about the car.
- **Methods**: `DisplayInfo()` is a function that prints the car's details.

### 1.2 What is an Object?

An **object** is an instance of a class. It is a concrete entity based on the class blueprint. Using the `Car` class, we can create multiple car objects, each representing a specific car with its own brand, model, and year.

#### Example: Creating an Object

```csharp
public class Program
{
    public static void Main()
    {
        // Creating an object of Car class
        Car myCar = new Car();

        // Assigning values to the object's properties
        myCar.Brand = "Toyota";
        myCar.Model = "Camry";
        myCar.Year = 2020;

        // Calling the method
        myCar.DisplayInfo();
    }
}
```

**Output**:
```
Brand: Toyota, Model: Camry, Year: 2020
```

In this example:
- `myCar` is an **object** of the `Car` class.
- The object has properties `Brand`, `Model`, and `Year`, which store specific details about this car.
- The `DisplayInfo()` method is called to print out the car's details.

### 1.3 Classes vs. Objects

- **Class**: A blueprint or template for creating objects. It defines the structure and behavior of all objects that will be created from it.
- **Object**: A specific instance of a class. It represents a real-world entity with unique data.

#### Example: Multiple Objects

You can create multiple objects from the same class, each with different data.

```csharp
public class Program
{
    public static void Main()
    {
        Car car1 = new Car();
        car1.Brand = "Honda";
        car1.Model = "Civic";
        car1.Year = 2019;

        Car car2 = new Car();
        car2.Brand = "Ford";
        car2.Model = "Mustang";
        car2.Year = 2021;

        car1.DisplayInfo();
        car2.DisplayInfo();
    }
}
```

**Output**:
```
Brand: Honda, Model: Civic, Year: 2019
Brand: Ford, Model: Mustang, Year: 2021
```

Here, `car1` and `car2` are two different objects of the `Car` class, each representing a different car.

---

## 2. 🏗️ Creating Instances

### 2.1 What is an Instance?

An **instance** is a concrete realization of a class. When you create an object using the `new` keyword, you are creating an instance of that class. 

#### Example: Instantiating Objects

```csharp
public class Program
{
    public static void Main()
    {
        // Creating an instance of Car
        Car myCar = new Car();
    }
}
```

Here, `myCar` is an **instance** of the `Car` class.

### 2.2 The `new` Keyword

The `new` keyword is used to create an object of a class. It allocates memory for the new object and returns a reference to that memory.

#### Example: The `new` Keyword in Action

```csharp
Car myCar = new Car(); // Using 'new' to create an instance
```

- **`Car myCar`**: Declares a variable `myCar` of type `Car`.
- **`new Car()`**: Creates a new instance of the `Car` class and assigns it to `myCar`.

### 2.3 Accessing Members of an Object

Once you have an object, you can access its properties and methods using the dot `.` operator.

#### Example: Accessing Object Members

```csharp
public class Program
{
    public static void Main()
    {
        Car myCar = new Car();
        myCar.Brand = "Tesla"; // Accessing property
        myCar.Model = "Model S"; // Accessing property
        myCar.Year = 2022; // Accessing property

        myCar.DisplayInfo(); // Calling method
    }
}
```

**Output**:
```
Brand: Tesla, Model: Model S, Year: 2022
```

Here, we are accessing the `Brand`, `Model`, and `Year` properties of the `myCar` object and calling its `DisplayInfo()` method.

---

## 3. 🚀 Constructors

### 3.1 What is a Constructor?

A **constructor** is a special method that is called when an object is instantiated. It initializes the object and sets default values for its properties.

#### Example: Defining a Constructor

```csharp
public class Car
{
    public string Brand;
    public string Model;
    public int Year;

    // Constructor
    public Car(string brand, string model, int year)
    {
        Brand = brand;
        Model = model;
        Year = year;
    }

    public void DisplayInfo()
    {
        Console.WriteLine($"Brand: {Brand}, Model: {Model}, Year: {Year}");
    }
}
```

Here, the `Car` class has a constructor that takes three parameters: `brand`, `model`, and `year`. This constructor initializes the properties of the `Car` object with the values passed to it.

### 3.2 Using Constructors

When creating a new object, you can pass arguments to the constructor to set the initial values of the properties.

#### Example: Using a Constructor

```csharp
public class Program
{
    public static void Main()
    {
        // Creating an object using the constructor
        Car myCar = new Car("Audi", "A4", 2021);

        myCar.DisplayInfo();
    }
}
```

**Output**:
```
Brand: Audi, Model: A4, Year: 2021
```

In this example, the `Car` object `myCar` is created with initial values provided through the constructor.

### 3.3 Default Constructor

If you do not define a constructor, C# provides a **default constructor** that initializes the object with default values (e.g., `null` for reference types and `0` for numeric types).

#### Example: Default Constructor

```csharp
public class Bike
{
    public string Brand;
    public string Model;
}

public class Program
{
    public static void Main()
    {
        Bike myBike = new Bike(); // Default constructor is called
        Console.WriteLine($"Brand: {myBike.Brand}, Model: {myBike.Model}");
    }
}
```

**Output**:
```
Brand: , Model: 
```

Here, since no constructor is defined in the `Bike` class, the default constructor is called, and properties are initialized to their default values.

---

## 4. 🔄 Reference Types

### 4.1 What are Reference Types?

In C#, classes are **reference types**. This means that variables of class types store references (memory addresses) to the actual data. Unlike **value types** (like `int` or `double`), reference types do not store the actual object data directly.

#### Example: Reference Type Behavior

```csharp
public class Car
{
    public string Brand;
}

public class Program
{
    public static void Main()
    {
        Car car1 = new Car();
        car1.Brand = "BMW";

        Car car2 = car1; // car2 references the same object as car1
        car2.Brand = "Mercedes";

        Console.WriteLine(car1.Brand); // Output: Mercedes
    }
}
```

**Output**:
```
Mercedes
```

Here, both `car1` and `car2` reference the same `Car` object in memory. Changing the `Brand` property using `car2` also affects `car1` because they point to the same object.

###

### 4.2 Reference vs. Value Types

Understanding the difference between **reference types** and **value types** is crucial in C#. 

- **Reference Types**: Store references to their data. When you assign one reference type variable to another, both variables refer to the same object in memory. If you change the object through one variable, the change is reflected in the other.
  
- **Value Types**: Store their data directly. When you assign one value type variable to another, a copy of the data is made. Changes to one variable do not affect the other.

Let's look at another example to illustrate this difference:

#### Example: Reference Type vs. Value Type

```csharp
public class Person
{
    public string Name;
}

public class Program
{
    public static void Main()
    {
        // Reference Type Example
        Person person1 = new Person();
        person1.Name = "Alice";

        Person person2 = person1; // person2 references the same object as person1
        person2.Name = "Bob";

        Console.WriteLine(person1.Name); // Output: Bob

        // Value Type Example
        int number1 = 5;
        int number2 = number1; // number2 is a copy of number1
        number2 = 10;

        Console.WriteLine(number1); // Output: 5
        Console.WriteLine(number2); // Output: 10
    }
}
```

**Output**:
```
Bob
5
10
```

In this example:
- **Reference Type**: Both `person1` and `person2` point to the same `Person` object. Changing `Name` via `person2` also changes it for `person1`.
- **Value Type**: `number1` and `number2` are independent of each other. Changing `number2` does not affect `number1`.

### 4.3 Passing Reference Types to Methods

When passing reference types to methods, the method receives a reference to the same object. Any modifications to the object within the method will affect the original object.

#### Example: Modifying Reference Types in Methods

```csharp
public class Dog
{
    public string Name;
}

public class Program
{
    public static void Main()
    {
        Dog myDog = new Dog();
        myDog.Name = "Buddy";

        RenameDog(myDog);

        Console.WriteLine(myDog.Name); // Output: Max
    }

    public static void RenameDog(Dog dog)
    {
        dog.Name = "Max"; // Modifies the original object
    }
}
```

**Output**:
```
Max
```

Here, the `RenameDog` method changes the `Name` property of the `Dog` object. Since `dog` is a reference type, the change is reflected outside the method.

---

## 5. 🏃 Non-Static Methods

### 5.1 What is a Non-Static Method?

A **non-static method** (also called an **instance method**) is a method that belongs to an instance of a class. It can access the instance's properties and other instance methods. Non-static methods are used to define behavior that operates on the data within a specific object.

#### Example: Defining and Using a Non-Static Method

```csharp
public class Calculator
{
    // Non-static method to add two numbers
    public int Add(int a, int b)
    {
        return a + b;
    }
}

public class Program
{
    public static void Main()
    {
        Calculator calc = new Calculator(); // Creating an instance
        int result = calc.Add(5, 3); // Calling a non-static method
        Console.WriteLine(result); // Output: 8
    }
}
```

**Output**:
```
8
```

Here, `Add` is a non-static method of the `Calculator` class. We create an instance of `Calculator` and call `Add` on that instance to add two numbers.

### 5.2 Accessing Non-Static Methods

To access a non-static method, you need to create an instance of the class and then use that instance to call the method.

#### Example: Using Non-Static Methods

```csharp
public class Program
{
    public static void Main()
    {
        Calculator calc = new Calculator(); // Instance of Calculator
        Console.WriteLine(calc.Add(7, 2)); // Output: 9

        // Another instance
        Calculator anotherCalc = new Calculator();
        Console.WriteLine(anotherCalc.Add(10, 5)); // Output: 15
    }
}
```

**Output**:
```
9
15
```

### 5.3 Non-Static Methods and Object State

Non-static methods often work with the object's state (its properties). They can modify the state or perform actions based on the state.

#### Example: Non-Static Methods Modifying Object State

```csharp
public class BankAccount
{
    public string AccountHolder;
    public double Balance;

    // Method to deposit money
    public void Deposit(double amount)
    {
        Balance += amount;
    }

    // Method to withdraw money
    public void Withdraw(double amount)
    {
        if (Balance >= amount)
        {
            Balance -= amount;
        }
        else
        {
            Console.WriteLine("Insufficient funds.");
        }
    }

    // Method to display account details
    public void DisplayAccountDetails()
    {
        Console.WriteLine($"Account Holder: {AccountHolder}, Balance: {Balance}");
    }
}

public class Program
{
    public static void Main()
    {
        BankAccount myAccount = new BankAccount();
        myAccount.AccountHolder = "John Doe";
        myAccount.Deposit(1000.0);
        myAccount.Withdraw(200.0);
        myAccount.DisplayAccountDetails();
    }
}
```

**Output**:
```
Account Holder: John Doe, Balance: 800
```

In this example:
- `Deposit` and `Withdraw` are non-static methods that modify the `Balance` property of the `BankAccount` object.
- `DisplayAccountDetails` is a non-static method that accesses the properties of the object to display the account details.

---

## 6. 🛠️ Changing Data and Behavior

### 6.1 Modifying Object Properties

You can change the properties of an object at any time after it has been created. This is often done through methods that encapsulate the logic for modifying the object's state.

#### Example: Modifying Object Properties

```csharp
public class Person
{
    public string Name;
    public int Age;

    // Method to update age
    public void UpdateAge(int newAge)
    {
        Age = newAge;
    }

    // Method to display person's details
    public void DisplayPersonDetails()
    {
        Console.WriteLine($"Name: {Name}, Age: {Age}");
    }
}

public class Program
{
    public static void Main()
    {
        Person person = new Person();
        person.Name = "Alice";
        person.Age = 25;

        person.DisplayPersonDetails(); // Output: Name: Alice, Age: 25

        person.UpdateAge(26); // Modifying the Age property

        person.DisplayPersonDetails(); // Output: Name: Alice, Age: 26
    }
}
```

**Output**:
```
Name: Alice, Age: 25
Name: Alice, Age: 26
```

In this example:
- The `UpdateAge` method changes the `Age` property of the `Person` object.
- The `DisplayPersonDetails` method shows the current state of the object.

### 6.2 Encapsulation with Methods

Encapsulation is a core principle of object-oriented programming (OOP). It involves hiding the internal state of an object and requiring all interaction to be performed through methods. This helps protect the object's state from unintended modifications.

#### Example: Encapsulation with Methods

```csharp
public class SecureBankAccount
{
    private double Balance; // Private field

    // Public method to deposit money
    public void Deposit(double amount)
    {
        if (amount > 0)
        {
            Balance += amount;
        }
    }

    // Public method to withdraw money
    public void Withdraw(double amount)
    {
        if (amount > 0 && amount <= Balance)
        {
            Balance -= amount;
        }
    }

    // Public method to get the current balance
    public double GetBalance()
    {
        return Balance;
    }
}

public class Program
{
    public static void Main()
    {
        SecureBankAccount account = new SecureBankAccount();
        account.Deposit(500);
        account.Withdraw(200);

        Console.WriteLine($"Balance: {account.GetBalance()}"); // Output: Balance: 300
    }
}
```

**Output**:
```
Balance: 300
```

Here:
- The `Balance` field is private and cannot be accessed directly from outside the class.
- The `Deposit`, `Withdraw`, and `GetBalance` methods provide controlled access to the `Balance` field, ensuring encapsulation and protecting the object's state.

### 6.3 Changing Object Behavior

Sometimes you may need to change how an object behaves based on its state or other conditions. This can be done by adding methods that alter the behavior of the object.

#### Example: Changing Object Behavior

```csharp
public class LightSwitch
{
    private bool isOn;

    // Method to toggle the light switch
    public void Toggle()
    {
        isOn = !isOn; // Toggle the state
    }

    // Method to display the current state
    public void DisplayState()
    {
        if (isOn)
        {
            Console.WriteLine("The light is ON.");
        }
        else ```
        {
            Console.WriteLine("The light is OFF.");
        }
    }
}

public class Program
{
    public static void Main()
    {
        LightSwitch light = new LightSwitch(); // Create a new LightSwitch object

        light.DisplayState(); // Output: The light is OFF.
        light.Toggle(); // Change the state to ON
        light.DisplayState(); // Output: The light is ON.
        light.Toggle(); // Change the state back to OFF
        light.DisplayState(); // Output: The light is OFF.
    }
}
```

**Output**:
```
The light is OFF.
The light is ON.
The light is OFF.
```

In this example:
- The `LightSwitch` class has a private field `isOn` that keeps track of whether the light is on or off.
- The `Toggle` method changes the state of the light switch. Each time it's called, it flips the `isOn` value to its opposite.
- The `DisplayState` method checks the current state of `isOn` and prints the appropriate message.

This example illustrates how you can change the behavior of an object through methods that alter its state.

---

## Summary

### Key Concepts Covered

1. **Classes and Objects**: A class is a blueprint for creating objects, and an object is an instance of a class.
2. **Creating Instances**: Objects are created using the `new` keyword, which allocates memory and calls a constructor.
3. **Constructors**: Constructors initialize objects and set initial values for properties.
4. **Reference Types**: Objects in C# are reference types, meaning variables store references to the actual object data in memory.
5. **Non-Static Methods**: These methods belong to an instance of a class and can access and modify the object's state.
6. **Changing Data and Behavior**: Objects can have their properties modified and behavior changed through methods, which provide controlled access and encapsulation.

### Practical Examples Recap

- **Defining a Simple Class**: Created a `Car` class with properties and methods to illustrate the basic structure.
- **Creating an Object**: Demonstrated how to instantiate a class to create an object and access its properties and methods.
- **Using Constructors**: Showed how to define and use constructors to initialize objects with specific values.
- **Reference Type Behavior**: Highlighted how objects behave as reference types in memory, affecting how variables interact with them.
- **Non-Static Methods**: Explained the use of instance methods to manipulate object data and behavior.
- **Encapsulation with Methods**: Used the `SecureBankAccount` example to show how to protect object state and enforce proper usage.

By understanding these core principles, you are now equipped to create and manage objects in C#. This knowledge is foundational for building more complex and robust applications in the C# programming language.

### Next Steps

To further enhance your skills:
- **Practice**: Try creating your own classes and objects with different properties and methods.
- **Experiment**: Modify object states and behaviors to understand how C# handles objects and memory.
- **Learn Advanced Topics**: As you become comfortable with the basics, explore topics like inheritance, polymorphism, and interfaces, which build upon these fundamental concepts.

Happy coding! 🚀




