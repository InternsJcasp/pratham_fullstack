# 📚 Space Complexity of Queue (Easy to Understand)

> A beginner-friendly guide to understand **Space Complexity in Queue** with examples, diagrams, and JavaScript code.

---

# 📖 Table of Contents

1. What is Space Complexity?
2. What is a Queue?
3. Why Space Complexity Matters?
4. Space Complexity of Queue Operations
5. Visual Explanation
6. Real-Life Example
7. JavaScript Example
8. Best Case vs Worst Case
9. Quick Revision

---

# 1️⃣ What is Space Complexity?

## Definition

**Space Complexity** means **how much memory (space)** a program needs while running.

In simple words:

> It tells us **how much extra memory is required** to store data.

### Real-Life Example

Imagine you have a **school bag**.

- Small bag → Stores few books.
- Big bag → Stores many books.

Queue is exactly like that.

The more elements you put inside the queue, the more memory it needs.

---

# 2️⃣ What is a Queue?

Queue follows the **FIFO Rule**.

> **First In → First Out**

Example:

People standing in a ticket line.

<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="150" rx="18" fill="#F8FAFC"/>
  <rect x="18" y="52" width="284" height="46" rx="23" fill="#E8F0FE"/>
  <g fill="#2563EB">
    <circle cx="52" cy="75" r="14"/>
    <circle cx="118" cy="75" r="14"/>
    <circle cx="184" cy="75" r="14"/>
    <circle cx="250" cy="75" r="14"/>
  </g>
  <g fill="#FFFFFF" font-family="Arial" font-size="11" text-anchor="middle">
    <text x="52" y="79">A</text>
    <text x="118" y="79">B</text>
    <text x="184" y="79">C</text>
    <text x="250" y="79">D</text>
  </g>
  <path d="M34 34 H118" stroke="#16A34A" stroke-width="4" stroke-linecap="round"/>
  <polygon points="118,28 132,34 118,40" fill="#16A34A"/>
  <text x="36" y="22" fill="#16A34A" font-size="12" font-family="Arial">Front</text>
  <path d="M286 116 H202" stroke="#EA580C" stroke-width="4" stroke-linecap="round"/>
  <polygon points="202,110 188,116 202,122" fill="#EA580C"/>
  <text x="232" y="136" fill="#EA580C" font-size="12" font-family="Arial">Rear</text>
</svg>

- A entered first.
- A will leave first.

---

# 3️⃣ Why Space Complexity Matters?

Suppose your mobile has **2 GB RAM**.

If your program keeps storing unnecessary data,
it will consume more memory and become slow.

Queue also stores data in memory.

Example:

| Queue Size | Memory Used |
|------------|-------------|
| 2 elements | Small |
| 10 elements | More |
| 1000 elements | Much More |

So...

> **More elements = More memory.**

---

# 4️⃣ Space Complexity of Queue

## Queue Storage

Suppose we create a queue.

```js
const queue = [];
```

Currently...

<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="120" rx="18" fill="#FFFFFF"/>
  <rect x="46" y="40" width="228" height="40" rx="10" fill="#EEF2FF" stroke="#6366F1"/>
  <text x="160" y="64" text-anchor="middle" font-family="Arial" font-size="13" fill="#4338CA">Queue is Empty</text>
  <text x="160" y="82" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748B">No memory for elements</text>
</svg>

Memory used is almost **0**.

Space Complexity:

<math value="O(1)" />

---

## Add One Element

```js
queue.push(10);
```

<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="120" rx="18" fill="#FFFFFF"/>
  <rect x="70" y="38" width="180" height="44" rx="12" fill="#ECFDF5" stroke="#22C55E"/>
  <rect x="84" y="48" width="56" height="24" rx="8" fill="#22C55E"/>
  <text x="112" y="64" text-anchor="middle" font-family="Arial" font-size="13" fill="#FFFFFF">10</text>
  <text x="160" y="96" text-anchor="middle" font-family="Arial" font-size="12" fill="#166534">1 element stored</text>
</svg>

Memory is used for **1 element**.

Space Complexity:

<math value="O(1)" />

---

## Add More Elements

```js
queue.push(20);
queue.push(30);
queue.push(40);
```

<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="140" rx="18" fill="#FFFFFF"/>
  <g>
    <rect x="34" y="46" width="58" height="30" rx="8" fill="#2563EB"/>
    <rect x="98" y="46" width="58" height="30" rx="8" fill="#3B82F6"/>
    <rect x="162" y="46" width="58" height="30" rx="8" fill="#60A5FA"/>
    <rect x="226" y="46" width="58" height="30" rx="8" fill="#93C5FD"/>
  </g>
  <g fill="#FFFFFF" font-family="Arial" font-size="13" text-anchor="middle">
    <text x="63" y="65">10</text>
    <text x="127" y="65">20</text>
    <text x="191" y="65">30</text>
    <text x="255" y="65">40</text>
  </g>
  <text x="34" y="28" font-family="Arial" font-size="12" fill="#2563EB">Front</text>
  <text x="226" y="100" font-family="Arial" font-size="12" fill="#EA580C">Rear</text>
  <text x="160" y="118" text-anchor="middle" font-family="Arial" font-size="12" fill="#475569">4 elements stored</text>
</svg>

Now memory stores **4 elements**.

As elements increase...

Memory also increases.

---

# 5️⃣ How Memory Grows

<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="200" rx="18" fill="#FFFFFF"/>
  <path d="M44 20 V160 H286" stroke="#CBD5E1" stroke-width="2"/>
  <text x="22" y="30" font-size="11" font-family="Arial" fill="#64748B">Memory</text>
  <text x="248" y="180" font-size="11" font-family="Arial" fill="#64748B">Elements</text>
  <polyline fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" points="52,150 102,132 152,106 202,74 252,38"/>
  <g fill="#2563EB">
    <circle cx="52" cy="150" r="4"/>
    <circle cx="102" cy="132" r="4"/>
    <circle cx="152" cy="106" r="4"/>
    <circle cx="202" cy="74" r="4"/>
    <circle cx="252" cy="38" r="4"/>
  </g>
  <g font-family="Arial" font-size="10" fill="#64748B">
    <text x="48" y="172">1</text>
    <text x="96" y="172">2</text>
    <text x="146" y="172">3</text>
    <text x="196" y="172">4</text>
    <text x="246" y="172">5</text>
  </g>
</svg>

As the queue becomes bigger,
memory also becomes bigger.

This is called **Linear Growth**.

---

# 6️⃣ Space Complexity Formula

Suppose queue has **N elements.**

Example:

```text
Queue = [5, 8, 10, 20, 50]
```

Total elements = **5**

Memory stores all 5 values.

Formula:

<math value="O(N)" />

Where...

**N = Number of elements inside the queue.**

---

# 7️⃣ Why is Queue O(N)?

Let's understand visually.

### Queue with 3 Elements

<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="120" rx="18" fill="#FFFFFF"/>
  <rect x="40" y="42" width="64" height="34" rx="10" fill="#DBEAFE"/>
  <rect x="112" y="42" width="64" height="34" rx="10" fill="#BFDBFE"/>
  <rect x="184" y="42" width="64" height="34" rx="10" fill="#93C5FD"/>
  <g fill="#1D4ED8" font-family="Arial" font-size="13" text-anchor="middle">
    <text x="72" y="63">A</text>
    <text x="144" y="63">B</text>
    <text x="216" y="63">C</text>
  </g>
  <text x="40" y="28" font-size="12" font-family="Arial" fill="#2563EB">Front</text>
  <text x="190" y="94" font-size="12" font-family="Arial" fill="#EA580C">Rear</text>
</svg>

Memory stores:

- A
- B
- C

Total = 3 memory locations.

---

### Queue with 8 Elements

<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="150" rx="18" fill="#FFFFFF"/>
  <g fill="#E9D5FF" stroke="#7C3AED">
    <rect x="24" y="42" width="30" height="26" rx="6"/>
    <rect x="58" y="42" width="30" height="26" rx="6"/>
    <rect x="92" y="42" width="30" height="26" rx="6"/>
    <rect x="126" y="42" width="30" height="26" rx="6"/>
    <rect x="160" y="42" width="30" height="26" rx="6"/>
    <rect x="194" y="42" width="30" height="26" rx="6"/>
    <rect x="228" y="42" width="30" height="26" rx="6"/>
    <rect x="262" y="42" width="30" height="26" rx="6"/>
  </g>
  <g fill="#5B21B6" font-family="Arial" font-size="11" text-anchor="middle">
    <text x="39" y="58">1</text>
    <text x="73" y="58">2</text>
    <text x="107" y="58">3</text>
    <text x="141" y="58">4</text>
    <text x="175" y="58">5</text>
    <text x="209" y="58">6</text>
    <text x="243" y="58">7</text>
    <text x="277" y="58">8</text>
  </g>
  <text x="24" y="26" font-size="12" font-family="Arial" fill="#7C3AED">Front</text>
  <text x="226" y="96" font-size="12" font-family="Arial" fill="#EA580C">Rear</text>
  <text x="160" y="122" text-anchor="middle" font-size="12" font-family="Arial" fill="#475569">8 memory locations used</text>
</svg>

Now memory stores **8 values.**

So memory depends on **N**.

Therefore...

<math value="\\boxed{O(N)}" />

---

# 8️⃣ Space Complexity of Every Queue Operation

| Operation | Extra Memory |
|----------|---------------|
| Enqueue | O(1) |
| Dequeue | O(1) |
| Front / Peek | O(1) |
| Rear | O(1) |
| Is Empty | O(1) |
| Store Entire Queue | O(N) |

---

## Enqueue

```js
queue.push(100);
```

Before:

<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="110" rx="18" fill="#FFFFFF"/>
  <rect x="54" y="40" width="64" height="28" rx="8" fill="#DBEAFE"/>
  <rect x="126" y="40" width="64" height="28" rx="8" fill="#BFDBFE"/>
  <g fill="#1D4ED8" font-family="Arial" font-size="13" text-anchor="middle">
    <text x="86" y="58">10</text>
    <text x="158" y="58">20</text>
  </g>
</svg>

After:

<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="110" rx="18" fill="#FFFFFF"/>
  <rect x="34" y="40" width="64" height="28" rx="8" fill="#DBEAFE"/>
  <rect x="106" y="40" width="64" height="28" rx="8" fill="#BFDBFE"/>
  <rect x="178" y="40" width="92" height="28" rx="8" fill="#DCFCE7"/>
  <g fill="#0F172A" font-family="Arial" font-size="13" text-anchor="middle">
    <text x="66" y="58">10</text>
    <text x="138" y="58">20</text>
    <text x="224" y="58">100</text>
  </g>
</svg>

Only **one new element** is added.

Extra Space = **O(1)**

---

## Dequeue

```js
queue.shift();
```

<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="120" rx="18" fill="#FFFFFF"/>
  <rect x="34" y="42" width="70" height="30" rx="10" fill="#FECDD3"/>
  <rect x="114" y="42" width="70" height="30" rx="10" fill="#DBEAFE"/>
  <rect x="194" y="42" width="70" height="30" rx="10" fill="#BFDBFE"/>
  <path d="M26 57 H10" stroke="#DC2626" stroke-width="4" stroke-linecap="round"/>
  <polygon points="10,50 0,57 10,64" fill="#DC2626"/>
  <text x="69" y="60" text-anchor="middle" font-family="Arial" font-size="13" fill="#7F1D1D">Removed</text>
  <g fill="#1D4ED8" font-family="Arial" font-size="13" text-anchor="middle">
    <text x="149" y="60">20</text>
    <text x="229" y="60">30</text>
  </g>
</svg>

Removing element doesn't create extra memory.

Extra Space = **O(1)**

---

## Peek

```js
queue[0];
```

It only **reads** the first value.

No new memory.

Space = **O(1)**

---

# 9️⃣ JavaScript Example

```js
const queue = [];

// Add elements
queue.push(10);
queue.push(20);
queue.push(30);

// Remove one
queue.shift();

console.log(queue);
```

Output:

```text
[20, 30]
```

Memory stores only remaining values.

---

# 🔟 Best Case vs Worst Case

| Case | Space |
|------|-------|
| Empty Queue | O(1) |
| 1 Element | O(1) |
| N Elements | O(N) |

---

### Best Case

<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="110" rx="18" fill="#FFFFFF"/>
  <rect x="52" y="38" width="216" height="34" rx="12" fill="#F1F5F9" stroke="#CBD5E1"/>
  <text x="160" y="59" text-anchor="middle" font-family="Arial" font-size="13" fill="#64748B">Queue is Empty</text>
</svg>

Very little memory.

Space = **O(1)**

---

### Worst Case

<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="150" rx="18" fill="#FFFFFF"/>
  <g fill="#FDE68A" stroke="#F59E0B">
    <rect x="20" y="42" width="28" height="26" rx="6"/>
    <rect x="52" y="42" width="28" height="26" rx="6"/>
    <rect x="84" y="42" width="28" height="26" rx="6"/>
    <rect x="116" y="42" width="28" height="26" rx="6"/>
    <rect x="148" y="42" width="28" height="26" rx="6"/>
    <rect x="180" y="42" width="28" height="26" rx="6"/>
    <rect x="212" y="42" width="28" height="26" rx="6"/>
    <rect x="244" y="42" width="28" height="26" rx="6"/>
    <rect x="276" y="42" width="24" height="26" rx="6"/>
  </g>
  <text x="160" y="96" text-anchor="middle" font-family="Arial" font-size="13" fill="#B45309">Many elements stored</text>
  <text x="160" y="116" text-anchor="middle" font-family="Arial" font-size="12" fill="#92400E">Memory increases with N</text>
</svg>

Lots of elements.

More memory.

Space = **O(N)**

---

# 1️⃣1️⃣ Time vs Space Complexity

| Topic | Meaning |
|-------|----------|
| Time Complexity | How fast code runs |
| Space Complexity | How much memory code uses |

Example:

```js
queue.push(10);
```

- Time → O(1)
- Space → O(1)

---

# 1️⃣2️⃣ Memory Growth Table

| Elements | Space Complexity |
|----------|------------------|
| 0 | O(1) |
| 1 | O(1) |
| 5 | O(5) |
| 10 | O(10) |
| N | O(N) |

---

# 1️⃣3️⃣ Quick Visualization

<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="170" rx="18" fill="#FFFFFF"/>
  <rect x="34" y="54" width="44" height="26" rx="8" fill="#DBEAFE"/>
  <rect x="84" y="54" width="44" height="26" rx="8" fill="#BFDBFE"/>
  <rect x="134" y="54" width="44" height="26" rx="8" fill="#93C5FD"/>
  <rect x="184" y="54" width="44" height="26" rx="8" fill="#60A5FA"/>
  <rect x="234" y="54" width="44" height="26" rx="8" fill="#2563EB"/>
  <text x="34" y="38" font-size="12" font-family="Arial" fill="#2563EB">Front</text>
  <text x="226" y="98" font-size="12" font-family="Arial" fill="#EA580C">Rear</text>
  <path d="M34 120 C90 92 150 84 220 62" stroke="#16A34A" stroke-width="4" fill="none" stroke-linecap="round"/>
  <polygon points="214,52 232,56 220,68" fill="#16A34A"/>
  <text x="34" y="140" font-size="12" font-family="Arial" fill="#166534">Elements increase</text>
  <text x="34" y="154" font-size="12" font-family="Arial" fill="#166534">Memory also increases</text>
</svg>

---

# 1️⃣4️⃣ Interview Questions

### Q1. What is the space complexity of a Queue?

✅ **Answer:** **O(N)** because the queue stores **N elements**.

---

### Q2. Why is Enqueue O(1) space?

Because only **one new element** is added.

---

### Q3. Why is Dequeue O(1)?

Because removing an element does not require extra memory.

---

### Q4. Does Peek use extra memory?

No.

It only reads the first element.

Space = **O(1)**

---

# 🎯 Final Summary

| Operation | Space Complexity |
|----------|------------------|
| Enqueue | O(1) |
| Dequeue | O(1) |
| Peek | O(1) |
| Rear | O(1) |
| Is Empty | O(1) |
| Complete Queue Storage | **O(N)** |

---

# 🧠 Easy Memory Trick

Think of a **bus** 🚌.

- Empty bus → Very little space used.
- 5 passengers → More space used.
- 50 passengers → Much more space used.

Queue works the same way.

> **The number of elements decides the memory.**

### 📌 Golden Rule

| Situation | Space Complexity |
|----------|------------------|
| No elements | O(1) |
| One element | O(1) |
| N elements stored | **O(N)** |

---

# ✅ One-Line Revision

> **Queue Space Complexity = O(N), because memory grows linearly with the number of elements stored in the queue.**