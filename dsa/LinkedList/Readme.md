# 🔗 Linked List — Introduction

A **Linked List** is a linear data structure where elements are stored in separate objects called **nodes**. Each node contains **data** and a reference (link) to the next node.

Unlike an array, linked list elements are **not stored in continuous memory locations**.

---

## 📌 What is a Node?

A node generally contains two parts:

```text
+--------+---------+
| Data   |  Next   |
+--------+---------+
```

* **Data** → Stores the actual value.
* **Next** → Stores the reference/address of the next node.

Example:

```text
10 → 20 → 30 → 40 → null
```

Here:

* `10`, `20`, `30`, `40` are data.
* `→` represents the link to the next node.
* `null` means there is no next node.

---

## 🌍 Real-World Example

Think about a **train**:

```text
🚃 Coach 1 → 🚃 Coach 2 → 🚃 Coach 3 → 🚃 Coach 4
```

Each coach is connected to the next coach.

Similarly:

```text
Node 1 → Node 2 → Node 3 → Node 4
```

Each node keeps a reference to the next node.

---

## 🆚 Array vs Linked List

| Feature       | Array                   | Linked List             |
| ------------- | ----------------------- | ----------------------- |
| Memory        | Continuous              | Non-continuous          |
| Size          | Usually fixed/resizable | Dynamic                 |
| Access        | Fast `O(1)`             | Sequential `O(n)`       |
| Insert/Delete | Can be expensive        | Easier with a reference |
| Extra Memory  | Less                    | Extra memory for links  |

---

## 🧩 Basic Linked List Structure

In JavaScript:

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
```

Creating nodes:

```javascript
const node1 = new Node(10);
const node2 = new Node(20);

node1.next = node2;
```

Now:

```text
10 → 20 → null
```

---

## 🏁 Head

The **head** is the first node of a linked list.

```text
Head
 ↓
10 → 20 → 30 → null
```

If the list is empty:

```text
Head → null
```

The head is important because it gives us the starting point to traverse the entire list.

---

## 🔄 Traversal

Traversal means visiting each node one by one.

```text
10 → 20 → 30 → 40 → null
↑
Start
```

We start from `head` and follow the `next` references until we reach `null`.

### Basic idea

```javascript
let current = head;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}
```

---

## 📚 Types of Linked Lists

### 1. Singly Linked List

Each node points only to the next node.

```text
10 → 20 → 30 → null
```

### 2. Doubly Linked List

Each node has links to both previous and next nodes.

```text
null ← 10 ⇄ 20 ⇄ 30 → null
```

### 3. Circular Linked List

The last node points back to the first node.

```text
10 → 20 → 30
↑         ↓
└─────────┘
```

---

## ⏱️ Common Time Complexities

For a singly linked list:

| Operation           |   Time |
| ------------------- | -----: |
| Access by index     | `O(n)` |
| Search              | `O(n)` |
| Insert at beginning | `O(1)` |
| Delete at beginning | `O(1)` |
| Insert at end*      | `O(n)` |
| Delete at end*      | `O(n)` |

*Can be improved with additional references such as a `tail` pointer.

---

## 💡 Why Learn Linked Lists?

Linked Lists help us understand:

* Dynamic data structures
* References and pointers
* Memory management concepts
* Insertion and deletion
* Traversal
* Stacks and queues
* More advanced data structures

---

## 🎯 Learning Goals

After learning Linked Lists, you should be able to:

* Understand nodes and references.
* Create a linked list.
* Traverse a linked list.
* Insert nodes.
* Delete nodes.
* Search for elements.
* Reverse a linked list.
* Understand singly, doubly, and circular linked lists.
* Analyze the time and space complexity of operations.

---

## 🚀 Key Idea to Remember

> **A Linked List is a chain of nodes where each node stores data and a reference to another node.**

```text
Head
 ↓
[10 | •] → [20 | •] → [30 | •] → null
```

Think of it as a **chain**: each node knows where the next node is.
