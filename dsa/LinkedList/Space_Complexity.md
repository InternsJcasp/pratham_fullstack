# Linked List – Space Complexity

## What is Space Complexity?

Space complexity means **how much extra memory** an algorithm needs while running.

For Linked Lists, space complexity mainly depends on the **number of nodes**.

---

## 1. Singly Linked List

Each node contains:

- Data
- Pointer to the next node

Example:

```text
[10 | next] → [20 | next] → [30 | null]
```

### Space Complexity

If there are `n` nodes:

```text
Space = O(n)
```

Because every node requires memory.

---

## 2. Doubly Linked List

Each node contains:

- Data
- Pointer to the next node
- Pointer to the previous node

Example:

```text
null ← [10] ⇄ [20] ⇄ [30] → null
```

### Space Complexity

```text
Space = O(n)
```

Doubly Linked Lists use more memory per node than Singly Linked Lists because they store an additional pointer.

---

## 3. Circular Linked List

In a Circular Linked List, the last node points back to the first node.

Example:

```text
[10] → [20] → [30]
 ↑             ↓
 └─────────────┘
```

### Space Complexity

```text
Space = O(n)
```

There are still `n` nodes, so memory grows linearly with the number of nodes.

---

## Space Complexity Comparison

| Linked List          | Space Complexity |
| -------------------- | ---------------- |
| Singly Linked List   | O(n)             |
| Doubly Linked List   | O(n)             |
| Circular Linked List | O(n)             |

### Important Point

All types of Linked Lists have **O(n) space complexity** because they store `n` nodes.

However:

- **Singly Linked List** → 1 pointer per node
- **Doubly Linked List** → 2 pointers per node
- **Circular Linked List** → 1 pointer per node

So, a Doubly Linked List generally uses **more memory per node**, even though its Big-O space complexity is still `O(n)`.

---

## Extra Space in Operations

Most basic Linked List operations use:

```text
O(1) extra space
```

For example:

- Insert at beginning → O(1)
- Insert at end → O(1) _(with a tail pointer)_
- Delete first node → O(1)
- Search → O(1) extra space

But recursive operations may use:

```text
O(n)
```

extra space because of the recursion call stack.

---

## Summary

```text
Singly Linked List   → O(n)
Doubly Linked List   → O(n)
Circular Linked List → O(n)
```

**Remember:** `n` represents the number of nodes in the Linked List.
