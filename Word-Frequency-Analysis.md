**Problem Description:**

You are given a block of text, and your task is to compute the frequency of each distinct word in the text. Words are defined as sequences of alphanumeric characters, and they are case-insensitive. You need to output the frequencies of all distinct words in the text, sorted in descending order of frequency. In case of a tie (when two words have the same frequency), the words should be sorted lexicographically in ascending order.

**Input:**

- A single string `text` (1 ≤ |text| ≤ 10^5), where `text` is the block of text to process. The string can contain any printable characters including spaces, punctuation marks, and line breaks.

**Output:**

- A list of tuples, where each tuple contains a word and its corresponding frequency. The list should be sorted by frequency in descending order. If two words have the same frequency, they should be sorted lexicographically in ascending order. Each tuple should be formatted as `(word, frequency)`.

**Constraints:**

- Words are defined as sequences of alphanumeric characters (letters and digits). Punctuation marks and spaces are used to separate words.
- The case of letters is ignored (e.g., "Word" and "word" are considered the same word).
- The frequency output should not exceed 10^4 words (though this is an edge case and typically handled naturally by the problem constraints).

**Examples:**

**Example 1:**

Input:
```
"Hello world! Hello everyone. Welcome to the world of programming. Programming is fun."
```

Output:
```
[('hello', 2), ('world', 2), ('programming', 2), ('everyone', 1), ('welcome', 1), ('to', 1), ('the', 1), ('of', 1), ('is', 1), ('fun', 1)]
```

**Example 2:**

Input:
```
"Testing, testing, 1 2 3 testing."
```

Output:
```
[('testing', 3), ('1', 1), ('2', 1), ('3', 1)]
```

**Note:**

- The output list should be sorted by word frequency in descending order and by word lexicographically in ascending order when frequencies are tied.
- Ensure that the word counting is case-insensitive and punctuation is correctly handled to separate words.