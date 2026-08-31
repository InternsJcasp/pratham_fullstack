# Binary Search Tree (BST) — Time Complexity & Analysis

## 1. What is a Binary Search Tree?

A **Binary Search Tree (BST)** is a binary tree where, for every node:

- All values in the left subtree are smaller than the node.
- All values in the right subtree are greater than the node.
- Each node has at most two children.

Example:

```text
             10
            /  \
           5    15
          / \     \
         3   7     18
```

This ordering is what allows BST operations such as **search, insertion, and deletion** to be faster than a normal binary tree when the tree is reasonably balanced.

---

## 2. What Does `O(log n)` Mean?

In a balanced BST, each comparison allows us to ignore approximately half of the remaining tree.

For example:

```text
                    50
                   /  \
                 30    70
                / \    / \
              20  40 60  80
```

Searching for `60`:

```text
60 > 50  → go right
60 < 70  → go left
60 found → 60
```

Only a small number of nodes were visited.

This is why balanced BST operations are generally:

```text
O(log n)
```

---

# 3. The Most Important Concept: Height

BST time complexity is closely related to the **height of the tree**.

Let:

- `n` = number of nodes
- `h` = height of the tree

For many BST operations:

```text
Time Complexity = O(h)
```

If the BST is balanced:

```text
h ≈ log₂(n)
```

Therefore:

```text
O(h) = O(log n)
```

But if the BST becomes skewed:

```text
h = n
```

Therefore:

```text
O(h) = O(n)
```

---

# 4. Balanced vs Skewed BST

## Balanced BST

```text
             50
           /    \
         30      70
        / \      / \
      20  40   60  80
```

The height is relatively small.

For `n` nodes:

```text
h ≈ log₂(n)
```

So search, insert, and delete can be:

```text
O(log n)
```

---

## Skewed BST

A BST can become unbalanced if values are inserted in sorted order.

Example:

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

This looks almost like a linked list.

Now:

```text
h ≈ n
```

So operations can become:

```text
O(n)
```

This is one of the most important BST interview concepts.

---

# 5. Time Complexity Summary

| Operation             | Average / Balanced | Worst Case | Why                                |
| --------------------- | -----------------: | ---------: | ---------------------------------- |
| Search                |         `O(log n)` |     `O(n)` | Depends on tree height             |
| Insert                |         `O(log n)` |     `O(n)` | Follow one root-to-leaf path       |
| Delete                |         `O(log n)` |     `O(n)` | Find node + rearrange along a path |
| Find Minimum          |         `O(log n)` |     `O(n)` | Follow left children               |
| Find Maximum          |         `O(log n)` |     `O(n)` | Follow right children              |
| Inorder Traversal     |             `O(n)` |     `O(n)` | Every node must be visited         |
| Preorder Traversal    |             `O(n)` |     `O(n)` | Every node must be visited         |
| Postorder Traversal   |             `O(n)` |     `O(n)` | Every node must be visited         |
| Level Order Traversal |             `O(n)` |     `O(n)` | Every node is visited              |

> **Important:** For an ordinary BST, "average" `O(log n)` assumes the tree is reasonably balanced. A plain BST does not automatically guarantee balance.

---

# 6. Search — Time Complexity Analysis

Suppose we search for `60`:

```text
             50
            /  \
          30    70
               /  \
             60    80
```

Start at `50`.

```text
60 > 50
```

Go right.

At `70`:

```text
60 < 70
```

Go left.

At `60`:

```text
Found!
```

We do not need to inspect every node.

### Balanced BST

```text
O(log n)
```

### Worst-case skewed BST

```text
O(n)
```

### Why?

Search follows only one path from the root downward.

So:

```text
Search = O(h)
```

where `h` is the tree height.

---

# 7. Insertion — Time Complexity Analysis

Suppose we insert `65`:

```text
             50
            /  \
          30    70
               / \
             60   80
```

Compare:

```text
65 > 50 → right
65 < 70 → left
65 > 60 → right
```

Insert:

```text
             50
            /  \
          30    70
               / \
             60   80
               \
                65
```

Again, insertion follows one root-to-leaf path.

Therefore:

```text
Insertion = O(h)
```

### Balanced

```text
O(log n)
```

### Worst case

```text
O(n)
```

---

# 8. Deletion — Time Complexity Analysis

Deletion has three common cases.

## Case 1: Leaf Node

```text
       10
      /  \
     5    15
```

Delete `5`.

Simply remove it.

---

## Case 2: Node With One Child

```text
       10
         \
          15
            \
             20
```

Delete `15`.

Connect its parent directly to its child:

```text
       10
         \
          20
```

---

## Case 3: Node With Two Children

```text
             50
            /  \
          30    70
               / \
             60   80
```

Delete `70`.

We commonly replace it with its **inorder successor** (the smallest value in its right subtree).

Here:

```text
inorder successor = 80
```

Then rearrange the tree.

Finding the node and its replacement follows tree paths, so:

```text
Deletion = O(h)
```

### Balanced

```text
O(log n)
```

### Worst case

```text
O(n)
```

---

# 9. Finding Minimum

In a BST, the smallest value is always found by repeatedly going left.

```text
             50
            /
          30
         /
       20
      /
    10
```

Path:

```text
50 → 30 → 20 → 10
```

So:

```text
Minimum = leftmost node
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

# 10. Finding Maximum

The largest value is always found by repeatedly going right.

```text
50
  \
   70
     \
      80
        \
         90
```

Path:

```text
50 → 70 → 80 → 90
```

So:

```text
Maximum = rightmost node
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

# 11. Tree Traversal Complexity

Traversal is different from search.

For traversal, we must visit **every node**.

Suppose:

```text
             10
            /  \
           5    15
          / \     \
         3   7     18
```

Inorder:

```text
3 → 5 → 7 → 10 → 15 → 18
```

We visited all 6 nodes.

Therefore:

```text
Time = O(n)
```

The same applies to:

- Inorder
- Preorder
- Postorder
- Level order

All are:

```text
O(n)
```

because every node must be processed.

---

# 12. Space Complexity

Space complexity depends on what we are doing.

## Search / Insert

If implemented iteratively:

```text
O(1)
```

extra space.

If implemented recursively:

```text
O(h)
```

because of the recursion call stack.

---

## Traversal

Recursive DFS traversals use:

```text
O(h)
```

call-stack space.

For a balanced tree:

```text
O(log n)
```

For a skewed tree:

```text
O(n)
```

Level-order traversal uses a queue.

Its auxiliary space is:

```text
O(w)
```

where `w` is the maximum width of the tree.

For a broad balanced tree, this can be `O(n)`.

---

# 13. Why Does a Balanced BST Give `O(log n)`?

Consider a perfectly balanced tree.

```text
Level 0:          1 node
Level 1:          2 nodes
Level 2:          4 nodes
Level 3:          8 nodes
```

The number of nodes approximately doubles at every level.

After `h` levels:

```text
n ≈ 2^h
```

Take logarithm:

```text
h ≈ log₂(n)
```

Since BST operations such as search, insertion, and deletion generally travel down at most one root-to-leaf path:

```text
O(h)
```

becomes:

```text
O(log n)
```

---

# 14. Why Can a BST Become `O(n)`?

Consider inserting sorted values:

```text
10
20
30
40
50
```

The tree becomes:

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

There are `n` nodes and approximately `n` levels.

Therefore:

```text
h = n
```

So:

```text
O(h) = O(n)
```

This is why a normal BST does **not** guarantee `O(log n)`.

---

# 15. BST vs Balanced BST

A normal BST:

```text
Average:
O(log n)

Worst case:
O(n)
```

Self-balancing BSTs such as **AVL Trees** and **Red-Black Trees** maintain their height around `O(log n)`.

Therefore their search, insertion, and deletion operations have:

```text
O(log n)
```

worst-case time.

---

# 16. Important Difference: BST Property vs Height

Do not confuse these two ideas.

### BST property

```text
Left < Root < Right
```

This tells us **where to search**.

### Height

```text
h
```

This tells us **how many levels we may need to travel**.

Therefore:

```text
BST operation
     ↓
Follow tree path
     ↓
O(h)
     ↓
Balanced → O(log n)
Skewed   → O(n)
```

---

# 17. Complexity Cheat Sheet

```text
                  BST
                   |
             Tree Height (h)
                   |
          ┌────────┴────────┐
          ↓                 ↓
      Balanced            Skewed
      h = O(log n)        h = O(n)
          ↓                 ↓
 Search  O(log n)        O(n)
 Insert  O(log n)        O(n)
 Delete  O(log n)        O(n)
 Min     O(log n)        O(n)
 Max     O(log n)        O(n)
```

Traversal is different:

```text
Inorder   → O(n)
Preorder  → O(n)
Postorder → O(n)
Level     → O(n)
```

because traversal visits every node.

---

# 18. Interview Questions

## Q1. What is the search complexity of a BST?

**Answer:**

```text
Average / balanced: O(log n)
Worst case: O(n)
```

Because search takes `O(h)` time.

---

## Q2. Why is BST search `O(log n)`?

Only when the tree is balanced.

Each level eliminates approximately half of the possible search space.

```text
O(h) = O(log n)
```

---

## Q3. Can BST search be `O(n)`?

Yes.

If the tree is skewed:

```text
10
  \
   20
     \
      30
        \
         40
```

we may have to visit every node.

---

## Q4. What is the complexity of inorder traversal?

```text
O(n)
```

Every node is visited once.

---

## Q5. What is the complexity of finding minimum?

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

## Q6. What is the complexity of insertion?

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

## Q7. What is the complexity of deletion?

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

# 19. Final Summary

The most important formula is:

```text
BST operation ≈ O(h)
```

where `h` is the height of the BST.

If balanced:

```text
h = O(log n)

Therefore:
Search    → O(log n)
Insert    → O(log n)
Delete    → O(log n)
Min       → O(log n)
Max       → O(log n)
```

If skewed:

```text
h = O(n)

Therefore:
Search    → O(n)
Insert    → O(n)
Delete    → O(n)
Min       → O(n)
Max       → O(n)
```

But traversals always need to visit all nodes:

```text
Inorder   → O(n)
Preorder  → O(n)
Postorder → O(n)
LevelOrder→ O(n)
```

### Golden Rule

> **For BST search/insert/delete, think about HEIGHT. For traversal, think about NUMBER OF NODES.**

```text
Search / Insert / Delete
        ↓
      O(h)
        ↓
Balanced → O(log n)
Skewed   → O(n)


Traversal
        ↓
Visit every node
        ↓
      O(n)
```

---

## 20. Quick Reference Table

| Operation   | Balanced BST | Worst-case BST | Main Reason             |
| ----------- | -----------: | -------------: | ----------------------- |
| Search      |   `O(log n)` |         `O(n)` | Follow one path         |
| Insert      |   `O(log n)` |         `O(n)` | Follow one path         |
| Delete      |   `O(log n)` |         `O(n)` | Follow path + rearrange |
| Minimum     |   `O(log n)` |         `O(n)` | Follow left             |
| Maximum     |   `O(log n)` |         `O(n)` | Follow right            |
| Inorder     |       `O(n)` |         `O(n)` | Visit all nodes         |
| Preorder    |       `O(n)` |         `O(n)` | Visit all nodes         |
| Postorder   |       `O(n)` |         `O(n)` | Visit all nodes         |
| Level Order |       `O(n)` |         `O(n)` | Visit all nodes         |

---

### Key points to remember for interviews

1. **BST operations depend on tree height `h`.**
2. **Balanced BST:** `h = O(log n)`.
3. **Skewed BST:** `h = O(n)`.
4. **Search, insert, delete:** `O(h)`.
5. **Traversal:** `O(n)`.
6. A normal BST **does not guarantee** `O(log n)`.
7. Self-balancing BSTs maintain `O(log n)` height.
