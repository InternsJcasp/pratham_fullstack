Below is a professional **README.md** that you can keep in your DSA notes or GitHub repository.

````md
# Time Complexity & Space Complexity

## 📖 Introduction

When solving any programming problem, writing a correct solution is only half of the job.

A Software Engineer should also know:

- How fast the algorithm runs (**Time Complexity**)
- How much extra memory the algorithm uses (**Space Complexity**)

These two concepts help us compare algorithms and choose the most efficient one.

---

# What is Time Complexity?

Time Complexity measures how the running time of an algorithm grows as the input size (**n**) increases.

It does **NOT** measure the actual execution time (seconds or milliseconds).

Instead, it measures how the number of operations grows.

Example:

```javascript
for (let i = 0; i < n; i++) {
    console.log(i);
}
````

If

```
n = 5
```

The loop executes

```
5 times
```

If

```
n = 1000
```

The loop executes

```
1000 times
```

Time Complexity

```
O(n)
```

---

# Big O Notation

Big O represents the worst-case growth of an algorithm.

Common Time Complexities

| Big O      | Name         | Performance |
| ---------- | ------------ | ----------- |
| O(1)       | Constant     | ⭐ Excellent |
| O(log n)   | Logarithmic  | ⭐ Excellent |
| O(n)       | Linear       | ✅ Good      |
| O(n log n) | Linearithmic | ✅ Very Good |
| O(n²)      | Quadratic    | ⚠ Slow      |
| O(n³)      | Cubic        | ❌ Very Slow |
| O(2ⁿ)      | Exponential  | ❌ Very Bad  |
| O(n!)      | Factorial    | 🚫 Worst    |

---

# Example of O(1)

```javascript
let arr = [10,20,30];

console.log(arr[1]);
```

Accessing an array element always takes one operation.

Time Complexity

```
O(1)
```

---

# Example of O(n)

```javascript
for(let i=0;i<n;i++){
    console.log(i);
}
```

Runs n times.

Time Complexity

```
O(n)
```

---

# Example of O(log n)

```javascript
let i = 1;

while(i < n){
    i *= 2;
}
```

The value doubles every iteration.

Example

```
1
2
4
8
16
32
```

Time Complexity

```
O(log n)
```

---

# Example of O(n log n)

Imagine sorting 1000 books by repeatedly dividing them into smaller groups.

Algorithms like Merge Sort and Quick Sort work this way.

Time Complexity

```
O(n log n)
```

---

# Example of O(n²)

```javascript
for(let i=0;i<n;i++){

    for(let j=0;j<n;j++){

        console.log(i,j);

    }

}
```

Nested loops.

Time Complexity

```
O(n²)
```

---

# What is Space Complexity?

Space Complexity measures how much **extra memory** an algorithm uses while solving a problem.

The input itself is usually **not counted**.

Only the additional memory is considered.

---

# Example of O(1) Space

```javascript
let sum = 0;

for(let i=0;i<arr.length;i++){

    sum += arr[i];

}
```

Extra variables

```
sum
i
```

Memory does not increase with input size.

Space Complexity

```
O(1)
```

---

# Example of O(n) Space

```javascript
let result = [];

for(let i=0;i<arr.length;i++){

    result.push(arr[i]);

}
```

A new array stores every element.

Space Complexity

```
O(n)
```

---

# Example of O(n²) Space

```javascript
let matrix = [];

for(let i=0;i<n;i++){

    matrix[i]=[];

    for(let j=0;j<n;j++){

        matrix[i][j]=0;

    }

}
```

Creates an n × n matrix.

Space Complexity

```
O(n²)
```

---

# Problem-Solving Approach

Before writing code, always follow these steps.

## Step 1 – Understand

Ask yourself:

* What is the input?
* What is the expected output?
* Are there any edge cases?

---

## Step 2 – Plan

Think about the algorithm before writing code.

Write the logic in simple English.

Example

```
Take the first element as maximum.

Traverse the array.

Compare every element.

Update maximum.

Return the answer.
```

---

## Step 3 – Code

Convert the plan into code.

Use meaningful variable names.

Write clean and readable code.

---

## Step 4 – Test

Test your solution with different cases.

Example

```
[]

[5]

[1,2,3]

[-5,-1,-10]
```

---

## Step 5 – Analyze

Find the:

* Time Complexity
* Space Complexity

Ask yourself:

* How many loops?
* Are the loops nested?
* Is recursion used?
* Am I creating a new array or object?

---

## Step 6 – Optimize

Can the algorithm be improved?

Questions to ask:

* Can I remove a nested loop?
* Can I stop early using `break`?
* Can I reduce extra memory?
* Can I solve it in one traversal?

---

# Time Complexity Cheat Sheet

| Pattern                | Complexity |
| ---------------------- | ---------- |
| Access Array by Index  | O(1)       |
| Single Loop            | O(n)       |
| Two Independent Loops  | O(n)       |
| Nested Loops           | O(n²)      |
| Triple Nested Loops    | O(n³)      |
| Divide by 2 Every Time | O(log n)   |
| Merge Sort             | O(n log n) |

---

# Space Complexity Cheat Sheet

| Memory Used          | Complexity                 |
| -------------------- | -------------------------- |
| Few Variables        | O(1)                       |
| New Array            | O(n)                       |
| New Object / HashMap | O(n)                       |
| New Matrix           | O(n²)                      |
| Recursive Call Stack | Depends on recursion depth |

---
