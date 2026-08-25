# Linked List – Time Complexity

## 1. Singly Linked List

| Operation           | Time Complexity |
| ------------------- | --------------- |
| Search              | O(n)            |
| Insert at Beginning | O(1)            |
| Insert at End       | O(n)            |
| Delete First Node   | O(1)            |
| Delete Last Node    | O(n)            |
| Traverse            | O(n)            |
| Find Length         | O(n)\*          |
| Reverse             | O(n)            |
| Find Middle         | O(n)            |

> **Note:** If the linked list stores its length separately, finding the length is **O(1)**.

---

## 2. Doubly Linked List

| Operation           | Time Complexity |
| ------------------- | --------------- |
| Search              | O(n)            |
| Insert at Beginning | O(1)            |
| Insert at End       | O(1)            |
| Delete First Node   | O(1)            |
| Delete Last Node    | O(1)            |
| Traverse            | O(n)            |
| Find Length         | O(n)\*          |
| Reverse             | O(n)            |
| Find Middle         | O(n)            |

---

## 3. Circular Linked List

| Operation           | Time Complexity |
| ------------------- | --------------- |
| Access by index     | O(n)            |
| Search              | O(n)            |
| Insert at Beginning | O(1)            |
| Insert at End       | O(n)            |
| Delete First Node   | O(1)            |
| Delete Last Node    | O(n)            |
| Traverse            | O(n)            |
| Find Length         | O(n)\*          |

---

## 4. Quick Summary

### Singly Linked List

- Insert at beginning → **O(1)**
- Delete first → **O(1)**
- Search → **O(n)**
- Traverse → **O(n)**
- Insert at end → **O(n)**
- Delete last → **O(n)**

### Doubly Linked List

- Insert at beginning → **O(1)**
- Insert at end → **O(1)**
- Delete first → **O(1)**
- Delete last → **O(1)**
- Search → **O(n)**
- Traverse → **O(n)**

### Circular Linked List

- Search → **O(n)**
- Traverse → **O(n)**
- Insert/Delete depends on whether a **tail pointer** is maintained.

---

## 5. Big-O Meaning

| Big-O | Meaning                    |
| ----- | -------------------------- |
| O(1)  | Constant – very fast       |
| O(n)  | Depends on number of nodes |
| O(n²) | Slower for large input     |

### Example

If a linked list has **100 nodes**:

- `O(1)` → approximately the same work regardless of 100 or 1000 nodes.
- `O(n)` → may check up to **100 nodes**.
- `O(n²)` → may perform around **10,000 operations**.

---

## Conclusion

Linked Lists are useful when we frequently **insert or delete elements**, especially at the beginning or when we already have a reference to the required node.

The main thing to remember:

**O(1) = Fast**
**O(n) = Need to traverse nodes**

_Find Length is O(n) unless a separate `length` variable is maintained._
