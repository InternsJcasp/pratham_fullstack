# Binary Search Tree (BST) — Space Complexity & Complexity Analysis

## 1. What is a Binary Search Tree?

A **Binary Search Tree (BST)** is a binary tree that follows this rule:

- Values smaller than a node are stored in its **left subtree**.
- Values greater than a node are stored in its **right subtree**.
- Each node can have at most two children.

Example:

```text
             10
            /  \
           5    15
          / \     \
         3   7     18
```

The BST property helps us search for values without necessarily visiting every node.

---

# 2. The Most Important Concept: Height

Most BST operation complexities depend on the **height** of the tree.

Let:

- `n` = number of nodes
- `h` = height of the tree

For operations that follow one root-to-leaf path:

```text
Time Complexity = O(h)
```

The value of `h` depends on whether the tree is balanced.

### Balanced BST

```text
             50
           /    \
         30      70
        / \      / \
      20  40   60  80
```

Height is approximately:

```text
h = O(log n)
```

Therefore:

```text
Search  = O(log n)
Insert  = O(log n)
Delete  = O(log n)
```

### Skewed BST

```text
10
  \
   20
     \
      30
        \
         40
           \
            50
```

Height becomes:

```text
h = O(n)
```

Therefore:

```text
Search  = O(n)
Insert  = O(n)
Delete  = O(n)
```

---

# 3. Space Complexity of a BST

There are two different things to consider:

1. **Space required to store the BST**
2. **Extra/auxiliary space used by an operation**

These should not be confused.

---

# 4. Space Required to Store a BST

If a BST contains `n` nodes, we need to store all `n` nodes.

Each node normally stores:

```text
value
left pointer/reference
right pointer/reference
```

Therefore, the total space required is:

```text
O(n)
```

Example:

```text
             10
            /  \
           5    15
          / \     \
         3   7     18
```

There are 6 nodes.

As the number of nodes grows, storage grows linearly:

```text
10 nodes   → O(10)
100 nodes  → O(100)
1000 nodes → O(1000)
```

So:

> **Space complexity to store a BST = O(n)**

---

# 5. Auxiliary Space vs Total Space

This distinction is important in interviews.

### Total space

Space used to store the entire tree:

```text
O(n)
```

### Auxiliary space

Extra space used by an algorithm while operating on the tree.

For example, iterative search can use:

```text
O(1)
```

extra space.

Recursive search can use:

```text
O(h)
```

because of the recursion call stack.

---

# 6. Search Space Complexity

Consider iterative search:

```javascript
function search(root, target) {
  while (root !== null) {
    if (root.value === target) {
      return root;
    }

    if (target < root.value) {
      root = root.left;
    } else {
      root = root.right;
    }
  }

  return null;
}
```

This algorithm does not create a new data structure proportional to the number of nodes.

It only keeps a reference to the current node.

Therefore:

```text
Auxiliary Space = O(1)
```

### Time Complexity

Search follows a path from root to leaf:

```text
O(h)
```

Balanced:

```text
O(log n)
```

Worst case:

```text
O(n)
```

---

# 7. Recursive Search Space Complexity

Recursive version:

```javascript
function search(root, target) {
  if (root === null) {
    return null;
  }

  if (root.value === target) {
    return root;
  }

  if (target < root.value) {
    return search(root.left, target);
  }

  return search(root.right, target);
}
```

Each recursive call stays on the call stack until the answer is returned.

Therefore:

```text
Auxiliary Space = O(h)
```

### Balanced BST

```text
O(log n)
```

### Skewed BST

```text
O(n)
```

---

# 8. Insertion Space Complexity

## Iterative insertion

An iterative insertion algorithm can use constant extra space:

```text
O(1)
```

because it only keeps references such as:

```text
current
parent
```

### Time

```text
O(h)
```

Balanced:

```text
O(log n)
```

Worst case:

```text
O(n)
```

---

## Recursive insertion

Recursive insertion uses the call stack:

```text
O(h)
```

Balanced:

```text
O(log n)
```

Worst case:

```text
O(n)
```

---

# 9. Deletion Space Complexity

Deletion in a BST can be implemented iteratively or recursively.

### Iterative deletion

Auxiliary space:

```text
O(1)
```

### Recursive deletion

Auxiliary space:

```text
O(h)
```

The time complexity is:

```text
O(h)
```

So:

### Balanced

```text
Time  = O(log n)
Space = O(log n)  // recursive
```

### Worst case

```text
Time  = O(n)
Space = O(n)      // recursive
```

---

# 10. Finding Minimum Space Complexity

To find the minimum, we repeatedly move left:

```text
             50
            /
          30
         /
       20
      /
    10
```

Iteratively:

```javascript
function findMin(root) {
  while (root.left !== null) {
    root = root.left;
  }

  return root;
}
```

Only one variable/reference is needed.

Therefore:

```text
Auxiliary Space = O(1)
```

Time:

```text
O(h)
```

Balanced:

```text
O(log n)
```

Worst case:

```text
O(n)
```

---

# 11. Finding Maximum Space Complexity

To find the maximum, repeatedly move right:

```text
50
  \
   70
     \
      80
        \
         90
```

Iterative version:

```javascript
function findMax(root) {
  while (root.right !== null) {
    root = root.right;
  }

  return root;
}
```

Auxiliary space:

```text
O(1)
```

Time:

```text
O(h)
```

Balanced:

```text
O(log n)
```

Worst case:

```text
O(n)
```

---

# 12. Traversal Space Complexity

Traversal is different because we need to visit every node.

There are four common traversals:

- Inorder
- Preorder
- Postorder
- Level Order

---

## 12.1 Inorder Traversal

Inorder:

```text
LEFT → ROOT → RIGHT
```

Example:

```text
             10
            /  \
           5    15
          / \
         3   7
```

Output:

```text
3 → 5 → 7 → 10 → 15
```

Recursive code:

```javascript
function inorder(root) {
  if (root === null) {
    return;
  }

  inorder(root.left);

  console.log(root.value);

  inorder(root.right);
}
```

The recursion stack can grow up to the height of the tree.

Therefore:

```text
Auxiliary Space = O(h)
```

Balanced:

```text
O(log n)
```

Worst case:

```text
O(n)
```

Time:

```text
O(n)
```

because every node is visited.

---

# 13. Preorder Traversal Space Complexity

Preorder:

```text
ROOT → LEFT → RIGHT
```

Recursive implementation uses:

```text
O(h)
```

auxiliary space.

Time:

```text
O(n)
```

because every node is visited.

---

# 14. Postorder Traversal Space Complexity

Postorder:

```text
LEFT → RIGHT → ROOT
```

Recursive implementation uses:

```text
O(h)
```

auxiliary space.

Time:

```text
O(n)
```

because every node is visited.

---

# 15. Level Order Traversal Space Complexity

Level order uses a queue.

Example:

```text
             10
            /  \
           5    15
          / \     \
         3   7     18
```

Level order:

```text
10 → 5 → 15 → 3 → 7 → 18
```

We store nodes in a queue.

The queue can contain many nodes at the same time.

Therefore auxiliary space is:

```text
O(w)
```

where `w` is the maximum width of the tree.

In the worst case:

```text
O(n)
```

Time:

```text
O(n)
```

---

# 16. Complete Complexity Table

| Operation    | Time — Balanced | Time — Worst Case | Auxiliary Space — Iterative | Auxiliary Space — Recursive |
| ------------ | --------------: | ----------------: | --------------------------: | --------------------------: |
| Search       |      `O(log n)` |            `O(n)` |                      `O(1)` |                      `O(h)` |
| Insert       |      `O(log n)` |            `O(n)` |                      `O(1)` |                      `O(h)` |
| Delete       |      `O(log n)` |            `O(n)` |                      `O(1)` |                      `O(h)` |
| Find Minimum |      `O(log n)` |            `O(n)` |                      `O(1)` |                      `O(h)` |
| Find Maximum |      `O(log n)` |            `O(n)` |                      `O(1)` |                      `O(h)` |
| Inorder      |          `O(n)` |            `O(n)` |                    `O(h)`\* |                      `O(h)` |
| Preorder     |          `O(n)` |            `O(n)` |                    `O(h)`\* |                      `O(h)` |
| Postorder    |          `O(n)` |            `O(n)` |                    `O(h)`\* |                      `O(h)` |
| Level Order  |          `O(n)` |            `O(n)` |           `O(n)` worst case |                           — |

`*` Iterative DFS typically uses an explicit stack, which can require `O(h)` space.

Remember:

```text
h = tree height
n = number of nodes
```

---

# 17. Overall BST Space Complexity

The BST itself contains `n` nodes.

Therefore:

```text
BST Storage Space = O(n)
```

But an operation's **extra space** can be smaller.

For example:

```text
BST storage      = O(n)

Iterative search
extra space      = O(1)
```

This means we should always clarify whether we are talking about:

```text
Total storage
```

or:

```text
Auxiliary space
```

---

# 18. Time Complexity Analysis

Now let's analyze the time complexity of common BST operations.

## Search

Search follows one path:

```text
O(h)
```

Balanced:

```text
O(log n)
```

Worst case:

```text
O(n)
```

---

## Insert

Insertion follows one root-to-leaf path:

```text
O(h)
```

Balanced:

```text
O(log n)
```

Worst case:

```text
O(n)
```

---

## Delete

Deletion first finds the node and then performs the required rearrangement.

Overall:

```text
O(h)
```

Balanced:

```text
O(log n)
```

Worst case:

```text
O(n)
```

---

## Find Minimum

Follow the leftmost path:

```text
O(h)
```

Balanced:

```text
O(log n)
```

Worst case:

```text
O(n)
```

---

## Find Maximum

Follow the rightmost path:

```text
O(h)
```

Balanced:

```text
O(log n)
```

Worst case:

```text
O(n)
```

---

## Traversals

Every node is visited exactly once:

```text
O(n)
```

This applies to:

```text
Inorder
Preorder
Postorder
Level Order
```

---

# 19. Why Is Balanced BST `O(log n)`?

Imagine a balanced tree:

```text
                 50
              /      \
            25        75
           /  \      /  \
         10   40    60   90
```

At each level, the number of possible nodes increases approximately by a factor of 2.

The height is approximately:

```text
h ≈ log₂(n)
```

Operations such as search, insertion, and deletion follow a path whose length is approximately the tree height.

Therefore:

```text
O(h)
=
O(log n)
```

---

# 20. Why Does a Skewed BST Become `O(n)`?

Suppose values are inserted in increasing order:

```text
10
  \
   20
     \
      30
        \
         40
           \
            50
```

Instead of having a small height, we now have:

```text
h ≈ n
```

Therefore:

```text
O(h)
=
O(n)
```

This is the biggest disadvantage of an ordinary BST.

---

# 21. Balanced vs Skewed — Visual Summary

### Balanced

```text
             50
           /    \
         30      70
        / \      / \
      20  40   60  80
```

```text
Height = O(log n)

Search    = O(log n)
Insert    = O(log n)
Delete    = O(log n)
```

### Skewed

```text
10
  \
   20
     \
      30
        \
         40
           \
            50
```

```text
Height = O(n)

Search    = O(n)
Insert    = O(n)
Delete    = O(n)
```

---

# 22. Big-O vs Space Complexity

Big-O can describe both time and space.

### Time complexity

How much work does the algorithm perform?

Example:

```text
Search → O(log n) average/balanced
```

### Space complexity

How much memory does the algorithm use?

Example:

```text
Iterative search → O(1) auxiliary space
```

So:

```text
             Complexity
             /         \
          Time         Space
           ↓             ↓
        O(log n)       O(1)
```

---

# 23. Important Interview Question

### Q: What is the space complexity of a BST?

There are two possible answers depending on what is being asked.

If the question means:

> "How much memory does it take to store `n` nodes?"

Answer:

```text
O(n)
```

If the question means:

> "What is the auxiliary space of recursive BST search?"

Answer:

```text
O(h)
```

Worst case:

```text
O(n)
```

If the search is iterative:

```text
O(1)
```

This distinction is important.

---

# 24. BST Complexity Cheat Sheet

```text
                BST
                 |
       ┌─────────┴─────────┐
       ↓                   ↓
   Balanced              Skewed
   h = O(log n)           h = O(n)
       ↓                   ↓
   Search O(log n)       Search O(n)
   Insert O(log n)       Insert O(n)
   Delete O(log n)       Delete O(n)
   Min O(log n)          Min O(n)
   Max O(log n)          Max O(n)
```

Traversal:

```text
Inorder    → O(n)
Preorder   → O(n)
Postorder  → O(n)
LevelOrder → O(n)
```

Storage:

```text
BST storage → O(n)
```

Auxiliary space:

```text
Iterative search/insert/min/max → O(1)
Recursive operations             → O(h)
DFS recursion/stack              → O(h)
Level-order queue                → O(w), worst O(n)
```

---

# 25. Final Rules to Remember

### Rule 1 — BST storage

```text
n nodes → O(n) storage
```

### Rule 2 — BST operations

```text
Search / Insert / Delete / Min / Max
                    ↓
                  O(h)
```

### Rule 3 — Balanced tree

```text
h = O(log n)
```

Therefore:

```text
O(log n)
```

### Rule 4 — Skewed tree

```text
h = O(n)
```

Therefore:

```text
O(n)
```

### Rule 5 — Traversal

Every node must be visited:

```text
O(n)
```

### Rule 6 — Recursion

Recursive algorithms use call-stack space:

```text
O(h)
```

### Rule 7 — Iterative operations

Many simple BST operations can use:

```text
O(1)
```

extra space.

---

# 26. Final Quick Reference

| Concept                      |           Complexity |
| ---------------------------- | -------------------: |
| Store `n` BST nodes          |               `O(n)` |
| Search — balanced            |           `O(log n)` |
| Search — worst               |               `O(n)` |
| Insert — balanced            |           `O(log n)` |
| Insert — worst               |               `O(n)` |
| Delete — balanced            |           `O(log n)` |
| Delete — worst               |               `O(n)` |
| Min — balanced               |           `O(log n)` |
| Max — balanced               |           `O(log n)` |
| Traversals                   |               `O(n)` |
| Iterative search extra space |               `O(1)` |
| Recursive search extra space |               `O(h)` |
| Recursive worst-case space   |               `O(n)` |
| Level-order auxiliary space  | `O(w)`, worst `O(n)` |

---

# 27. Golden Rule

The easiest way to remember BST complexity is:

```text
             BST
              |
       "How tall is it?"
              |
              h
         ┌────┴────┐
         ↓         ↓
     Balanced    Skewed
         ↓         ↓
    O(log n)      O(n)
```

For **search, insertion, deletion, minimum, and maximum**:

```text
Time = O(h)
```

For **storing the whole BST**:

```text
Space = O(n)
```

For **recursive operations**:

```text
Auxiliary Space = O(h)
```

For **traversal**:

```text
Time = O(n)
```

> **The most important interview sentence:**  
> **"BST operation complexity depends on the height `h`. A balanced BST has `h = O(log n)`, while a skewed BST can have `h = O(n)`."**
