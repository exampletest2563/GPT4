# Chapter: Sets in C#

## Introduction to Sets in C#

Sets are a fundamental data structure in many programming languages, including C#. They are part of the collections framework and are useful for managing unique items without concern for their order. A set is essentially a collection of distinct elements—meaning each element can only appear once. This property makes sets ideal for scenarios where duplication is not allowed, such as managing a collection of unique identifiers or filtering out repeated data.

In C#, sets are implemented through the `HashSet<T>` class, which provides high performance for operations such as add, remove, and search due to its underlying hash table mechanism. This chapter will cover everything you need to know about using sets in C#.

### What is a Set? 📚

A set is a collection type that stores unique elements, meaning no duplicates are allowed. This concept is crucial when you need to ensure all elements are distinct, such as when filtering out repeated values from a dataset.

### Characteristics of Sets in C#

- **Unique Elements**: Sets do not allow duplicate elements. If you try to add an element that already exists in the set, it will simply be ignored.
- **Unordered**: Sets do not maintain the order of elements. The order in which elements are stored is not guaranteed.
- **Fast Operations**: Due to the use of hashing, sets provide efficient operations for adding, removing, and checking for the existence of an element.

## The `HashSet<T>` Class

The `HashSet<T>` class is the most commonly used set implementation in C#. It provides a collection of unique elements and is optimized for performance.

### Creating a HashSet

Creating a `HashSet` is straightforward. You can initialize it with or without initial elements.

```csharp
HashSet<int> numbers = new HashSet<int>(); // An empty HashSet
HashSet<string> fruits = new HashSet<string> { "Apple", "Banana", "Cherry" }; // A HashSet with initial elements
```

### Basic Operations

1. **Adding Elements**: You can add elements to a `HashSet` using the `Add` method. If the element already exists, it won’t be added again.

   ```csharp
   HashSet<string> fruits = new HashSet<string>();
   fruits.Add("Apple");
   fruits.Add("Banana");
   fruits.Add("Apple"); // This won't be added since "Apple" is already in the set
   ```

   *Practical Example: Filter Unique Words in a Sentence*

   ```csharp
   string sentence = "C# is great and C# is powerful";
   HashSet<string> uniqueWords = new HashSet<string>(sentence.Split(' '));
   foreach (string word in uniqueWords)
   {
       Console.WriteLine(word);
   }
   // Output: C#, is, great, and, powerful
   ```
2. **Removing Elements**: To remove an element from a `HashSet`, use the `Remove` method. This method returns `true` if the element was successfully removed and `false` if the element was not found.

   ```csharp
   HashSet<string> fruits = new HashSet<string> { "Apple", "Banana", "Cherry" };
   bool removed = fruits.Remove("Banana"); // removed is true
   removed = fruits.Remove("Grapes"); // removed is false, as "Grapes" is not in the set
   ```

   *Practical Example: Manage a List of Unique Users*

   ```csharp
   HashSet<string> users = new HashSet<string> { "Alice", "Bob", "Charlie" };
   users.Remove("Alice"); // Alice left the system
   users.Add("Dave");     // Dave joined the system

   Console.WriteLine(string.Join(", ", users));
   // Output: Bob, Charlie, Dave
   ```

3. **Checking for Elements**: The `Contains` method checks if an element is present in the `HashSet`. It returns `true` if the element exists, otherwise `false`.

   ```csharp
   HashSet<string> fruits = new HashSet<string> { "Apple", "Banana", "Cherry" };
   bool hasApple = fruits.Contains("Apple"); // hasApple is true
   bool hasGrapes = fruits.Contains("Grapes"); // hasGrapes is false
   ```

   *Practical Example: Verify Access Permissions*

   ```csharp
   HashSet<string> allowedPermissions = new HashSet<string> { "Read", "Write", "Execute" };
   string permission = "Delete";

   if (!allowedPermissions.Contains(permission))
   {
       Console.WriteLine("Permission denied: " + permission);
   }
   else
   {
       Console.WriteLine("Permission granted: " + permission);
   }
   // Output: Permission denied: Delete
   ```

4. **Clearing a HashSet**: The `Clear` method removes all elements from the `HashSet`.

   ```csharp
   HashSet<int> numbers = new HashSet<int> { 1, 2, 3, 4, 5 };
   numbers.Clear(); // The set is now empty
   ```

   *Practical Example: Resetting Game State*

   ```csharp
   HashSet<string> activePlayers = new HashSet<string> { "Alice", "Bob", "Charlie" };
   Console.WriteLine("Players in game: " + activePlayers.Count); // Output: 3

   activePlayers.Clear(); // Game reset, all players removed
   Console.WriteLine("Players in game after reset: " + activePlayers.Count); // Output: 0
   ```

### Advanced Operations

1. **Union**: Combines two sets and returns a new set containing all unique elements from both. In C#, you can use the `UnionWith` method to perform this operation in-place, or use LINQ’s `Union` method to get a new set.

   ```csharp
   HashSet<int> set1 = new HashSet<int> { 1, 2, 3 };
   HashSet<int> set2 = new HashSet<int> { 3, 4, 5 };

   set1.UnionWith(set2); // set1 now contains { 1, 2, 3, 4, 5 }
   ```

   *Practical Example: Combine Two Contact Lists*

   ```csharp
   HashSet<string> contactsA = new HashSet<string> { "Alice", "Bob" };
   HashSet<string> contactsB = new HashSet<string> { "Charlie", "Bob" };

   contactsA.UnionWith(contactsB); // contactsA now contains { "Alice", "Bob", "Charlie" }
   Console.WriteLine(string.Join(", ", contactsA)); // Output: Alice, Bob, Charlie
   ```

2. **Intersection**: Finds common elements between two sets. Use the `IntersectWith` method to modify the set in place or LINQ’s `Intersect` method for a new set.

   ```csharp
   HashSet<int> set1 = new HashSet<int> { 1, 2, 3, 4 };
   HashSet<int> set2 = new HashSet<int> { 3, 4, 5, 6 };

   set1.IntersectWith(set2); // set1 now contains { 3, 4 }
   ```

   *Practical Example: Find Common Friends on Social Media*

   ```csharp
   HashSet<string> friendsOfAlice = new HashSet<string> { "Bob", "Charlie", "Dave" };
   HashSet<string> friendsOfBob = new HashSet<string> { "Charlie", "Eve", "Alice" };

   friendsOfAlice.IntersectWith(friendsOfBob); // Now contains { "Charlie" }
   Console.WriteLine("Common friends: " + string.Join(", ", friendsOfAlice)); // Output: Common friends: Charlie
   ```

3. **Difference**: Finds elements present in one set but not in the other. The `ExceptWith` method performs this operation in-place.

   ```csharp
   HashSet<int> set1 = new HashSet<int> { 1, 2, 3, 4 };
   HashSet<int> set2 = new HashSet<int> { 3, 4, 5, 6 };

   set1.ExceptWith(set2); // set1 now contains { 1, 2 }
   ```

   *Practical Example: Find Unread Notifications*

   ```csharp
   HashSet<string> allNotifications = new HashSet<string> { "Alert1", "Alert2", "Alert3" };
   HashSet<string> readNotifications = new HashSet<string> { "Alert2" };

   allNotifications.ExceptWith(readNotifications); // Now contains { "Alert1", "Alert3" }
   Console.WriteLine("Unread notifications: " + string.Join(", ", allNotifications)); // Output: Unread notifications: Alert1, Alert3
   ```

4. **Symmetric Difference**: Finds elements present in either set but not in both. The `SymmetricExceptWith` method performs this operation in-place.

   ```csharp
   HashSet<int> set1 = new HashSet<int> { 1, 2, 3 };
   HashSet<int> set2 = new HashSet<int> { 3, 4, 5 };

   set1.SymmetricExceptWith(set2); // set1 now contains { 1, 2, 4, 5 }
   ```

   *Practical Example: Exclusive Subscribers*

   ```csharp
   HashSet<string> newsletterA = new HashSet<string> { "User1", "User2", "User3" };
   HashSet<string> newsletterB = new HashSet<string> { "User3", "User4", "User5" };

   newsletterA.SymmetricExceptWith(newsletterB); // Now contains { "User1", "User2", "User4", "User5" }
   Console.WriteLine("Exclusive subscribers: " + string.Join(", ", newsletterA)); // Output: Exclusive subscribers: User1, User2, User4, User5
   ```

### HashSet Constructors

C#’s `HashSet` class provides several constructors that offer flexibility when creating sets:

1. **Default Constructor**: Creates an empty set.

   ```csharp
   HashSet<int> numbers = new HashSet<int>();
   ```

2. **Collection Constructor**: Initializes the set with elements from another collection.

   ```csharp
   List<int> list = new List<int> { 1, 2, 3, 4 };
   HashSet<int> numbers = new HashSet<int>(list);
   ```

3. **Equality Comparer Constructor**: Creates a set that uses a specified equality comparer for elements.

   ```csharp
   HashSet<string> caseInsensitiveSet = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
   caseInsensitiveSet.Add("apple");
   bool containsApple = caseInsensitiveSet.Contains("APPLE"); // true
   ```

### Practical Examples: Real-World Applications of Sets

1. **Managing Unique Identifiers**: In scenarios like database operations, where you need to ensure each identifier is unique, `HashSet` provides an efficient way to manage unique identifiers without the need for manual checks.

   ```csharp
   HashSet<int> userIds = new HashSet<int>();
   userIds.Add(101);
   userIds.Add(102);
   userIds.Add(101); // This will be ignored, no duplicates allowed
   ```

2. **Tracking Seen Elements**: For algorithms that need to track seen elements to avoid processing them again, such as searching algorithms, `HashSet` is a perfect choice.

   ```csharp
   int[] nums = { 1, 2, 3, 4, 2, 3, 4, 5 };
   HashSet<int> seen = new HashSet<int>();
   foreach (var num in nums)
   {
       if (!seen.Contains(num))
       {
           Console.WriteLine(num);
           seen.Add(num);
       }
   }
   // Output: 1, 2, 3, 4, 5
   ```

3. **Filtering Duplicates in Data**: When processing data that may contain duplicates, such as removing duplicate entries from a CSV file, using a set can simplify the task significantly.

   ```csharp
   List<string> rawData = new List<string> { "Alice", "Bob", "Alice", "Charlie", "Bob" };
   HashSet<string> uniqueData = new HashSet<string>(rawData);

   foreach (var name in uniqueData)
   {
       Console.WriteLine(name);
   }
   // Output: Alice, Bob, Charlie
   ```

4. **User Management in Applications**: In many applications, especially multiplayer games or chat applications, maintaining a list of currently active users or unique participants can be effectively managed using sets.

   ```csharp
   HashSet<string> activeUsers = new HashSet<string>();
   
   // Adding users
   activeUsers.Add("User1");
   activeUsers.Add("User2");
   activeUsers.Add("User3");

   // User2 logs out
   activeUsers.Remove("User2");

   // Check if a user is active
   if (activeUsers.Contains("User2"))
   {
       Console.WriteLine("User2 is active.");
   }
   else
   {
       Console.WriteLine("User2 is not active.");
   }

   // Output: User2 is not active.
   ```

5. **Tagging and Categorization**: Sets are excellent for managing tags or categories where duplication isn’t allowed. For instance, a blog application could use sets to manage unique tags associated with blog posts.

   ```csharp
   HashSet<string> tags = new HashSet<string> { "CSharp", "Programming", "DotNet" };

   // Attempting to add a duplicate tag
   tags.Add("CSharp"); // No effect, "CSharp" is already in the set

   // Adding a new tag
   tags.Add("Tutorial");

   foreach (var tag in tags)
   {
       Console.WriteLine(tag);
   }
   // Output: CSharp, Programming, DotNet, Tutorial
   ```

6. **Preventing Multiple Submissions**: In web applications, when dealing with user-generated content such as polls or surveys, a `HashSet` can ensure each user submits only once by keeping track of user IDs that have already submitted.

   ```csharp
   HashSet<string> submittedUsers = new HashSet<string>();

   string currentUserId = "user123";

   if (!submittedUsers.Contains(currentUserId))
   {
       // Process the submission
       Console.WriteLine("Submission accepted.");
       submittedUsers.Add(currentUserId);
   }
   else
   {
       Console.WriteLine("User has already submitted.");
   }

   // Output: Submission accepted.
   ```

### Custom Equality Comparer

In some cases, you may need a `HashSet` that determines uniqueness based on specific criteria. For example, if you have a class with multiple properties, and you want to determine uniqueness based on a subset of these properties, you can create a custom equality comparer.

```csharp
class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public override bool Equals(object obj)
    {
        if (obj is Person other)
        {
            return this.FirstName == other.FirstName && this.LastName == other.LastName;
        }
        return false;
    }

    public override int GetHashCode()
    {
        return (FirstName + LastName).GetHashCode();
    }
}

HashSet<Person> people = new HashSet<Person>
{
    new Person { FirstName = "John", LastName = "Doe" },
    new Person { FirstName = "Jane", LastName = "Smith" }
};

people.Add(new Person { FirstName = "John", LastName = "Doe" }); // This will not be added, as it's considered a duplicate
```

### Handling Complex Objects

Using sets with complex objects often requires defining how equality and hash codes are computed for the objects. The `HashSet` uses the `GetHashCode` and `Equals` methods to determine object uniqueness. When using sets with custom or complex objects, always override these methods to ensure correct behavior.

### Performance Considerations

`HashSet<T>` is designed for fast lookups, inserts, and deletes. However, the performance is heavily dependent on the quality of the hash function. Poorly designed hash functions that lead to frequent collisions can degrade performance.

- **Choosing Types**: Use `HashSet` when you have no interest in the order of elements and when duplicate prevention is a priority.
- **Memory Usage**: Sets typically consume more memory than lists because they store hash codes alongside elements. Be mindful of this when working with large data sets.
- **Hash Function Quality**: Ensure that the hash function for the objects you store distributes hash codes uniformly to avoid collisions and maintain performance.

### When to Use Sets

Sets are particularly useful in scenarios where:

1. **Uniqueness is Required**: When you need to guarantee that all elements are distinct.
2. **Fast Membership Tests**: When frequent checks for the existence of an element are necessary.
3. **Set Operations**: When you need to perform operations like unions, intersections, and differences.

### Common Mistakes and Pitfalls

- **Forgetting to Override Equals and GetHashCode**: When using sets with custom objects, it is crucial to override these methods; otherwise, the default implementation (which might not align with your equality logic) will be used.
- **Assuming Order**: Sets do not guarantee order, so if your application logic depends on ordering, consider using other collections like `List<T>` or `SortedSet<T>`.
- **Improper Handling of Hash Collisions**: Understand how your hash codes are being generated, especially when storing objects. High collision rates can turn what should be O(1) operations into O(n).

### Conclusion

Sets in C# provide a powerful way to manage collections of unique elements. The `HashSet<T>` class, with its O(1) time complexity for add, remove, and contains operations, is a great choice for many scenarios where uniqueness and performance are important. By understanding the characteristics and proper usage of sets, you can leverage this data structure to build more efficient and robust applications.

Whether you’re filtering duplicates from data, managing unique user lists, or performing complex set operations, sets offer a versatile tool in your C# programming toolkit. With practice and mindful use of the concepts and examples covered in this chapter, you'll be well-equipped to harness the full power of sets in your applications.


