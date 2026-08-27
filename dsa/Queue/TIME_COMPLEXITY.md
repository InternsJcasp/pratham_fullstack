# Queue Time Complexity

Understanding **Time Complexity** is important when working with a Queue because it tells us **how much time an operation takes as the number of elements increases**.

A Queue follows the **FIFO (First In, First Out)** principle.

```text
        QUEUE

Front                         Rear
  ↓                            ↓
[10] → [20] → [30] → [40] → [50]
 ↑
Remove                       Add
Dequeue                     Enqueue
```

---

## 1. What is Time Complexity?

Time Complexity tells us how the running time of an algorithm changes when the input size increases.

We usually represent it using **Big O notation**.

For example:

```text
O(1)   → Constant time
O(n)   → Linear time
O(log n) → Logarithmic time
```

For Queue operations, we mainly want:

```text
Enqueue  → O(1)
Dequeue  → O(1)
Peek     → O(1)
isEmpty  → O(1)
Size     → O(1)
Search   → O(n)
```

---

# 2. Main Queue Operations

A Queue commonly has these operations:

| Operation    | Meaning                | Time Complexity |
| ------------ | ---------------------- | --------------: |
| Enqueue      | Add element            |            O(1) |
| Dequeue      | Remove element         |            O(1) |
| Peek / Front | See first element      |            O(1) |
| isEmpty      | Check if empty         |            O(1) |
| Size         | Get number of elements |            O(1) |
| Search       | Find an element        |            O(n) |

Let's understand each one.

---

# 3. Enqueue — O(1)

**Enqueue** means adding an element to the **rear/back** of the Queue.

Example:

```text
Before:

Front
 ↓
[10] [20] [30]
             ↑
            Rear


Enqueue(40)


After:

Front
 ↓
[10] [20] [30] [40]
                  ↑
                 Rear
```

We only add the new element at the rear.

We don't need to check every element.

Therefore:

```text
Time Complexity = O(1)
```

### JavaScript Example

```javascript
function enqueue(value) {
  queue.push(value);
}
```

`push()` adds the element at the end.

Only one main operation is performed.

```text
Input size = 10       → approximately 1 operation
Input size = 1000     → approximately 1 operation
Input size = 100000   → approximately 1 operation
```

So:

```text
Enqueue → O(1)
```

---

# 4. Dequeue — O(1) with a Proper Queue Implementation

**Dequeue** means removing the element from the **front**.

Example:

```text
Before:

Front
 ↓
[10] [20] [30] [40]


Dequeue()


After:

      Front
       ↓
[20] [30] [40]
```

Only the first element needs to be removed.

With a proper Queue implementation using a `front` index:

```javascript
function dequeue() {
  if (front === rear) {
    return null;
  }

  const value = queue[front];
  front++;

  return value;
}
```

The important operation is:

```javascript
front++;
```

We simply move the `front` pointer.

Therefore:

```text
Dequeue → O(1)
```

---

# 5. Important JavaScript Note: Array.shift()

You may see Queue code written like this:

```javascript
function dequeue() {
  return queue.shift();
}
```

This is easy to understand, but `shift()` can be **O(n)** because removing index `0` may require the remaining elements to be shifted.

Example:

```text
Before:

[10] [20] [30] [40] [50]
 ↓

shift()

[20] [30] [40] [50]
```

Conceptually, elements may need to move.

Therefore:

```text
queue.shift() → O(n)
```

But a Queue implemented with a `front` pointer can achieve:

```text
dequeue() → O(1)
```

### Recommended approach for DSA

Instead of:

```javascript
queue.shift();
```

Use:

```javascript
const value = queue[front];
front++;
```

This gives:

```text
Dequeue → O(1)
```

---

# 6. Peek / Front — O(1)

**Peek** means looking at the first element without removing it.

Example:

```text
Front
 ↓
[10] [20] [30] [40]
```

Peek returns:

```text
10
```

We don't need to traverse the Queue.

We directly access the front element.

```javascript
function peek() {
  return queue[front];
}
```

Therefore:

```text
Peek → O(1)
```

---

# 7. isEmpty — O(1)

`isEmpty()` checks whether the Queue contains elements.

Example:

```text
Queue:

[10] [20] [30]

Not Empty
```

We can check the pointers:

```javascript
function isEmpty() {
  return front === rear;
}
```

Only one comparison is required.

Therefore:

```text
isEmpty → O(1)
```

---

# 8. Size — O(1)

If we maintain a `size` variable, we can get the Queue size immediately.

Example:

```javascript
let size = 0;
```

When adding:

```javascript
size++;
```

When removing:

```javascript
size--;
```

Then:

```javascript
function getSize() {
  return size;
}
```

This is one operation.

Therefore:

```text
Size → O(1)
```

---

# 9. Search — O(n)

Searching is different.

Suppose our Queue is:

```text
[10] [20] [30] [40] [50]
```

We want to find:

```text
40
```

We may have to check:

```text
10 ❌
20 ❌
30 ❌
40 ✅
```

In the worst case, we may need to check every element.

If there are `n` elements:

```text
n elements
↓
check up to n elements
```

Therefore:

```text
Search → O(n)
```

### JavaScript Example

```javascript
function search(value) {
  for (let i = front; i < rear; i++) {
    if (queue[i] === value) {
      return true;
    }
  }

  return false;
}
```

The loop may run `n` times.

Therefore:

```text
Time Complexity = O(n)
```

---

# 10. Example with 5 Elements

Consider:

```text
Queue

Front
 ↓
[10] [20] [30] [40] [50]
                       ↑
                      Rear
```

### Enqueue

```text
enqueue(60)

[10] [20] [30] [40] [50] [60]
```

Only one element is added.

```text
O(1)
```

### Dequeue

```text
dequeue()

[20] [30] [40] [50] [60]
 ↑
Front
```

Front pointer moves.

```text
O(1)
```

### Peek

```text
peek()

Returns → 20
```

Direct access.

```text
O(1)
```

### Search

```text
search(50)

20 → ❌
30 → ❌
40 → ❌
50 → ✅
```

Multiple elements may need to be checked.

```text
O(n)
```

---

# 11. Queue Using Linked List

A Queue can also be implemented using a **Linked List**.

We normally maintain:

```text
Front                      Rear
 ↓                           ↓
[10] → [20] → [30] → [40]
```

When we have both `front` and `rear` pointers:

### Enqueue

Add at the rear:

```text
O(1)
```

### Dequeue

Remove from the front:

```text
O(1)
```

### Peek

Access the front node:

```text
O(1)
```

### Search

Traverse the Linked List:

```text
O(n)
```

So:

| Operation | Linked List Queue |
| --------- | ----------------: |
| Enqueue   |              O(1) |
| Dequeue   |              O(1) |
| Peek      |              O(1) |
| isEmpty   |              O(1) |
| Search    |              O(n) |

---

# 12. Circular Queue

A Circular Queue uses an array in a circular manner.

Example:

```text
       ┌───────────────────┐
       ↓                   │
[10] [20] [30] [40] [50] ──┘
 ↑
Front
```

The rear can wrap around to the beginning.

With proper `front` and `rear` pointers:

```text
Enqueue  → O(1)
Dequeue  → O(1)
Peek     → O(1)
isEmpty  → O(1)
isFull   → O(1)
```

This is one of the advantages of a Circular Queue.

---

# 13. Queue Using Two Stacks

A Queue can also be implemented using two stacks.

```text
Stack 1        Stack 2

[30]           [10]
[20]           [20]
[10]           [30]
```

Depending on the implementation, individual operations can sometimes be **O(1)** and sometimes **O(n)**.

However, using the standard two-stack approach, the important concept is:

```text
Amortized Enqueue → O(1)
Amortized Dequeue → O(1)
```

Amortized means that although one particular operation may take more time, the average cost over many operations remains constant.

---

# 14. Best, Average and Worst Case

Time complexity can also be discussed using cases.

For Queue operations:

### Enqueue

```text
Best Case    → O(1)
Average Case → O(1)
Worst Case   → O(1)
```

Assuming the Queue has available space and uses a proper implementation.

### Dequeue

```text
Best Case    → O(1)
Average Case → O(1)
Worst Case   → O(1)
```

### Search

```text
Best Case    → O(1)
```

If the first element is the element we are looking for.

```text
Worst Case → O(n)
```

If the element is at the end or doesn't exist.

---

# 15. Time Complexity Visualization

Imagine a Queue containing:

```text
10 elements
```

Enqueue:

```text
████████████████████  O(1)
```

Now:

```text
1,000 elements
```

Enqueue:

```text
████████████████████  O(1)
```

Now:

```text
1,000,000 elements
```

Enqueue:

```text
████████████████████  O(1)
```

The number of elements doesn't significantly change the number of operations.

That's why it is called:

```text
CONSTANT TIME
O(1)
```

---

# 16. Why O(n) is Different

Suppose we search for an element.

Queue:

```text
[10] [20] [30] [40] [50]
```

Searching for `50`:

```text
10 → check
20 → check
30 → check
40 → check
50 → found
```

With more elements:

```text
[10] [20] [30] [40] ... [100000]
```

We may have to check many elements.

Therefore the amount of work grows with `n`.

```text
Search → O(n)
```

---

# 17. Complete Queue Complexity Table

| Queue Operation | Array Queue      | Linked List Queue | Complexity |
| --------------- | ---------------- | ----------------- | ---------: |
| Enqueue         | Add at rear      | Add at rear       |       O(1) |
| Dequeue         | Front pointer    | Remove front node |       O(1) |
| Peek            | Access front     | Access front node |       O(1) |
| isEmpty         | Compare pointers | Check front       |       O(1) |
| Size            | Stored counter   | Stored counter    |       O(1) |
| Search          | Traverse         | Traverse          |       O(n) |

> **Note:** If an array queue uses JavaScript `shift()` for dequeue, that specific implementation is typically **O(n)** rather than O(1).

---

# 18. Space Complexity of Queue

Time complexity tells us about **time**.

Space complexity tells us about **memory**.

If we store `n` elements in a Queue:

```text
[10] [20] [30] ... [n]
```

We need memory for all `n` elements.

Therefore:

```text
Space Complexity = O(n)
```

For example:

```text
5 elements  → O(5)
100 elements → O(100)
n elements → O(n)
```

So a Queue generally has:

```text
Time:
Enqueue → O(1)
Dequeue → O(1)
Peek    → O(1)
Search  → O(n)

Space:
Queue   → O(n)
```

---

# 19. Easy Trick to Remember

Remember these four:

```text
ADD      → O(1)
REMOVE   → O(1)
LOOK     → O(1)
SEARCH   → O(n)
```

Or:

```text
Enqueue  → O(1)
Dequeue  → O(1)
Peek     → O(1)
Search   → O(n)
```

### Why?

```text
Enqueue
   ↓
Rear
   ↓
Directly add
   ↓
O(1)


Dequeue
   ↓
Front
   ↓
Directly remove
   ↓
O(1)


Peek
   ↓
Front
   ↓
Directly access
   ↓
O(1)


Search
   ↓
May check every element
   ↓
O(n)
```

---

# 20. Final Summary

The most important Queue time complexities are:

```text
┌─────────────────────────────┐
│      QUEUE COMPLEXITY       │
├─────────────────────────────┤
│ Enqueue      → O(1)         │
│ Dequeue      → O(1)         │
│ Peek         → O(1)         │
│ isEmpty      → O(1)         │
│ Size         → O(1)         │
│ Search       → O(n)         │
│ Space        → O(n)         │
└─────────────────────────────┘
```

### Interview Rule

If an interviewer asks:

> **What is the time complexity of Queue operations?**

You can answer:

```text
Enqueue = O(1)
Dequeue = O(1)
Peek    = O(1)
Search  = O(n)
Space   = O(n)
```

**Important:** These `O(1)` dequeue/enqueue results assume a proper Queue implementation using front/rear pointers (or equivalent). Using JavaScript `Array.shift()` for dequeue makes that operation `O(n)`.
