**Problem Description:**

You are given an array of integers. Your task is to identify and extract all duplicate elements in the array. Each duplicate element should be listed only once in the output, and the output should be in sorted ascending order.

**Input:**

- An integer `n` (1 ≤ n ≤ 10^5), representing the number of elements in the array.
- An array of `n` integers, where each integer `a_i` (−10^9 ≤ a_i ≤ 10^9) represents an element of the array.

**Output:**

- A list of integers representing the unique duplicate elements in ascending order.

**Constraints:**

- The array may contain both positive and negative integers, as well as zero.
- The number of duplicates should be deduplicated (i.e., if an element appears more than twice, it should be listed only once).
- The output should be sorted in ascending order.

**Examples:**

1. **Input:**
   ```
   8
   4 3 2 5 1 3 2 4
   ```
   **Output:**
   ```
   2 3 4
   ```

2. **Input:**
   ```
   5
   7 8 9 10 11
   ```
   **Output:**
   ```
   ```

3. **Input:**
   ```
   7
   -1 0 1 -1 0 2 2
   ```
   **Output:**
   ```
   -1 0 2
   ```

**Note:**

In the examples above, the output list contains only the numbers that appear more than once in the input array, and the numbers are presented in ascending order.