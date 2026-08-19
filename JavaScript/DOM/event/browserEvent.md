# Browser Events: Event Capturing, Event Bubbling & Event Delegation

## Overview

Browser events are actions that happen on a web page, such as:

-   Clicking a button
-   Typing in an input
-   Submitting a form
-   Moving the mouse
-   Selecting an option
-   Pressing a keyboard key

When an event happens on an element, the browser does not simply execute
the event on that element. The event travels through the DOM.

The three important concepts in this topic are:

1.  **Event Capturing**
2.  **Event Bubbling**
3.  **Event Delegation**

Understanding these concepts helps you write cleaner, more efficient
frontend code.

------------------------------------------------------------------------

# 1. DOM Event Flow

Before learning capturing and bubbling, understand the basic DOM
structure.

Consider this HTML:

``` html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

The DOM looks like:

``` text
HTML
  |
BODY
  |
DIV (parent)
  |
BUTTON (child)
```

If the user clicks the button, the browser processes the event through
different stages.

## Event Flow

``` text
                 CAPTURING
HTML
  ↓
BODY
  ↓
DIV
  ↓
BUTTON
  ↑
  |
  TARGET
  |
BUTTON
  ↑
DIV
  ↑
BODY
  ↑
HTML
                 BUBBLING
```

In simple words:

-   **Capturing:** Parent → Child
-   **Target:** The actual element clicked
-   **Bubbling:** Child → Parent

------------------------------------------------------------------------

# 2. Event Capturing

## What is Event Capturing?

**Event Capturing** is the phase where an event travels from the
outer/parent elements toward the element that was actually clicked.

Direction:

``` text
Parent → Child
```

For example:

``` text
Page
  ↓
Product Card
  ↓
Button
```

If the button is clicked, the event can travel:

``` text
Page → Product Card → Button
```

------------------------------------------------------------------------

## Simple Frontend Example

### HTML

``` html
<!DOCTYPE html>
<html>
<head>
    <title>Event Capturing</title>
</head>
<body>

    <div id="productCard">
        <h2>Laptop</h2>

        <button id="buyButton">
            Buy Now
        </button>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript

``` js
const productCard = document.getElementById("productCard");
const buyButton = document.getElementById("buyButton");

productCard.addEventListener("click", () => {
    console.log("Product Card");
}, true);

buyButton.addEventListener("click", () => {
    console.log("Buy Button");
}, true);
```

The `true` tells JavaScript to listen during the **capturing phase**.

When the user clicks the button:

``` text
Product Card
      ↓
Buy Button
```

Console:

``` text
Product Card
Buy Button
```

------------------------------------------------------------------------

## Event Capturing Syntax

``` js
element.addEventListener("click", handler, true);
```

The third argument:

``` js
true
```

means:

> Listen during event capturing.

You can also write:

``` js
element.addEventListener("click", handler, {
    capture: true
});
```

This is more explicit and easier to understand.

------------------------------------------------------------------------

# 3. Real-World Example of Event Capturing

## Example: Modal / Popup

Imagine a website has a modal:

``` text
Website
   |
   └── Modal
         |
         └── Close Button
```

When the user clicks the Close button, capturing allows the event to be
handled while the event is traveling from the outside toward the target.

Example:

``` js
modal.addEventListener("click", () => {
    console.log("Modal received event during capturing");
}, {
    capture: true
});

closeButton.addEventListener("click", () => {
    console.log("Close button clicked");
});
```

### Why might capturing be useful?

Capturing can be useful when a parent or higher-level component needs to
observe or intercept an event **before the target's bubbling handlers
run**.

Common situations include:

-   Monitoring interactions at a higher DOM level
-   Handling events before child handlers
-   Implementing special interaction logic
-   Working with complex UI components
-   Event monitoring and analytics

### Important Note

Event capturing is less commonly used than bubbling for normal
application event handling. Most everyday click handlers use the default
bubbling phase.

------------------------------------------------------------------------

# 4. Event Bubbling

## What is Event Bubbling?

**Event Bubbling** is the phase where an event travels from the element
that was clicked upward through its parent elements.

Direction:

``` text
Child → Parent
```

For example:

``` text
Button
   ↑
Product Card
   ↑
Product List
   ↑
Body
```

If the button is clicked, the event can move:

``` text
Button → Product Card → Product List → Body
```

------------------------------------------------------------------------

# 5. Simple Event Bubbling Example

### HTML

``` html
<!DOCTYPE html>
<html>
<head>
    <title>Event Bubbling</title>
</head>
<body>

    <div id="productCard">

        <h2>Laptop</h2>

        <button id="addCart">
            Add to Cart
        </button>

    </div>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript

``` js
const productCard = document.getElementById("productCard");
const addCart = document.getElementById("addCart");

addCart.addEventListener("click", () => {
    console.log("Button clicked");
});

productCard.addEventListener("click", () => {
    console.log("Product card clicked");
});
```

Notice that we did **not** pass `true`.

``` js
productCard.addEventListener("click", handler);
```

The default event phase for this listener is the **bubbling phase**.

When the button is clicked:

``` text
Button
  ↓
Product Card
```

The console will show:

``` text
Button clicked
Product card clicked
```

The event starts at the button and bubbles to the parent.

------------------------------------------------------------------------

# 6. Real-World Example of Event Bubbling

## Example: E-commerce Product Card

Imagine an e-commerce application:

``` text
Product Card
├── Image
├── Product Name
├── Price
└── Add to Cart Button
```

The user clicks:

``` text
Add to Cart
```

The event occurs on the button first.

Then it can bubble to:

``` text
Button
  ↓
Product Card
  ↓
Product List
```

This is useful when different levels of the UI need to know about an
interaction.

For example:

-   The button adds the product to the cart.
-   The product card can track the interaction.
-   A higher-level component can track analytics.

------------------------------------------------------------------------

# 7. Stopping Event Bubbling

Sometimes you do not want an event to continue to the parent.

You can use:

``` js
event.stopPropagation();
```

Example:

``` js
addCart.addEventListener("click", (event) => {

    event.stopPropagation();

    console.log("Only button handler runs");

});
```

Now the event will not continue bubbling to the product card.

### Important

Use `stopPropagation()` carefully.

Stopping propagation unnecessarily can make event behavior harder to
understand, especially in large applications.

------------------------------------------------------------------------

# 8. Event Delegation

## What is Event Delegation?

**Event Delegation** is a technique where we attach one event listener
to a parent element instead of attaching separate listeners to many
child elements.

It works mainly because of **event bubbling**.

Example:

``` text
Product List
├── Product 1 → Button
├── Product 2 → Button
├── Product 3 → Button
├── Product 4 → Button
└── Product 5 → Button
```

Instead of:

``` text
Button 1 → listener
Button 2 → listener
Button 3 → listener
Button 4 → listener
Button 5 → listener
```

we use:

``` text
Product List
     |
     └── ONE listener
```

The parent receives the bubbled event and checks which child triggered
it.

------------------------------------------------------------------------

# 9. Simple Event Delegation Example

### HTML

``` html
<!DOCTYPE html>
<html>
<head>
    <title>Event Delegation</title>
</head>
<body>

    <h1>Products</h1>

    <div id="productList">

        <div class="product">
            <h3>Laptop</h3>
            <button class="add-cart">
                Add to Cart
            </button>
        </div>

        <div class="product">
            <h3>Phone</h3>
            <button class="add-cart">
                Add to Cart
            </button>
        </div>

        <div class="product">
            <h3>Headphones</h3>
            <button class="add-cart">
                Add to Cart
            </button>
        </div>

    </div>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript

``` js
const productList = document.getElementById("productList");

productList.addEventListener("click", (event) => {

    if (event.target.classList.contains("add-cart")) {

        console.log("Add to Cart clicked");

    }

});
```

There are three buttons, but we only created **one event listener**.

------------------------------------------------------------------------

# 10. How Event Delegation Works

Suppose the user clicks the Phone button.

The actual target is:

``` text
Phone Button
```

The event bubbles:

``` text
Phone Button
      ↓
Phone Product
      ↓
Product List
```

The `productList` listener receives the event.

Then:

``` js
event.target
```

gives us the element that was actually clicked.

So:

``` js
if (event.target.classList.contains("add-cart"))
```

means:

> "Was the element that the user clicked an Add to Cart button?"

If yes, handle the action.

------------------------------------------------------------------------

# 11. Real-World Example: Dynamic Todo List

Event delegation is especially useful when elements are added or removed
dynamically.

Imagine:

``` text
Todo List
├── Learn JavaScript [Delete]
├── Learn React      [Delete]
└── Learn DSA        [Delete]
```

Instead of adding an event listener to every Delete button, attach one
listener to the `<ul>`.

### HTML

``` html
<ul id="todoList">

    <li>
        Learn JavaScript
        <button class="delete-btn">Delete</button>
    </li>

    <li>
        Learn React
        <button class="delete-btn">Delete</button>
    </li>

</ul>

<button id="addTodo">
    Add Todo
</button>
```

### JavaScript

``` js
const todoList = document.getElementById("todoList");
const addTodo = document.getElementById("addTodo");

todoList.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete-btn")) {

        event.target.parentElement.remove();

    }

});

addTodo.addEventListener("click", () => {

    const li = document.createElement("li");

    li.innerHTML = `
        Learn Node.js
        <button class="delete-btn">
            Delete
        </button>
    `;

    todoList.appendChild(li);

});
```

Now a new Todo is created dynamically:

``` text
Learn Node.js [Delete]
```

We did **not** create another listener for its Delete button.

The existing parent listener handles it.

This is one of the biggest advantages of event delegation.

------------------------------------------------------------------------

# 12. Real-World Uses of Event Delegation

Event delegation is commonly useful for:

### E-commerce

``` text
Product List
├── Add to Cart
├── Add to Cart
├── Add to Cart
└── Add to Cart
```

One parent listener can handle all buttons.

### Todo Applications

``` text
Todo List
├── Delete
├── Edit
├── Complete
└── Delete
```

One listener can handle actions.

### Tables

For example:

``` text
Users Table
--------------------------------
Name       Edit       Delete
Rahul      Edit       Delete
Amit       Edit       Delete
Priya      Edit       Delete
```

Instead of attaching listeners to every Edit/Delete button, a listener
can be placed on the table.

### Navigation Menus

``` text
Navbar
├── Home
├── Products
├── About
└── Contact
```

A parent can handle interactions from its menu items.

### Dynamic UI

If JavaScript creates new buttons after the page loads, event delegation
can handle those new elements without adding another listener to each
one.

------------------------------------------------------------------------

# 13. `event.target` vs `event.currentTarget`

This is very important when learning event delegation.

Suppose:

``` html
<div id="parent">
    <button id="child">Click</button>
</div>
```

JavaScript:

``` js
parent.addEventListener("click", (event) => {

    console.log(event.target);
    console.log(event.currentTarget);

});
```

If the button is clicked:

### `event.target`

The element that **actually started the event**.

``` text
button
```

### `event.currentTarget`

The element whose **event listener is currently executing**.

``` text
parent
```

So:

``` text
event.target        → Button
event.currentTarget → Parent
```

This distinction is extremely important for event delegation.

------------------------------------------------------------------------

# 14. `target` Example

``` js
productList.addEventListener("click", (event) => {

    console.log("Target:", event.target);

    console.log("Current Target:", event.currentTarget);

});
```

If the user clicks the Laptop button:

``` text
Target:
<button class="add-cart">

Current Target:
<div id="productList">
```

Remember:

> **target = where the event started**

> **currentTarget = where the listener is attached**

------------------------------------------------------------------------

# 15. Capturing vs Bubbling

Consider:

``` html
<div id="parent">
    <button id="child">
        Click Me
    </button>
</div>
```

### Capturing

``` js
parent.addEventListener("click", handler, true);
```

Flow:

``` text
Parent
  ↓
Button
```

### Bubbling

``` js
parent.addEventListener("click", handler);
```

Flow:

``` text
Button
  ↓
Parent
```

------------------------------------------------------------------------

# 16. Capturing vs Bubbling vs Delegation

  -----------------------------------------------------------------------
  Concept                 Direction               Purpose
  ----------------------- ----------------------- -----------------------
  Event Capturing         Parent → Child          Handle/observe event
                                                  while traveling toward
                                                  target

  Event Bubbling          Child → Parent          Allow event to travel
                                                  upward

  Event Delegation        Child → Parent          Use bubbling so one
                                                  parent handles many
                                                  children
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# 17. Easy Real-World Analogy

Imagine a company.

``` text
Company
  |
Department
  |
Team
  |
Employee
```

An employee performs an action.

### Capturing

The information travels:

``` text
Company
   ↓
Department
   ↓
Team
   ↓
Employee
```

**Outside → Inside**

### Bubbling

The information travels:

``` text
Employee
   ↑
Team
   ↑
Department
   ↑
Company
```

**Inside → Outside**

### Delegation

Instead of giving every employee a separate manager for one type of
action, the team manager handles the actions of all employees.

``` text
Employee 1 ─┐
Employee 2 ─┤
Employee 3 ─┼──→ Team Manager
Employee 4 ─┘
```

One parent handles many children.

------------------------------------------------------------------------

# 18. When Should You Use Each?

## Use Event Capturing When:

-   You need a parent to observe an event before the target handler.
-   You are working with complex event flows.
-   You need special event interception logic.
-   You specifically need the capturing phase.

For normal frontend interactions, you will generally use bubbling more
often.

------------------------------------------------------------------------

## Use Event Bubbling When:

-   You want events to naturally move from child to parent.
-   Parent elements need to respond to child interactions.
-   You want to build event delegation.
-   You need to handle events at different levels of the DOM.

Bubbling is the default behavior for many common events such as `click`.

------------------------------------------------------------------------

## Use Event Delegation When:

-   You have many similar child elements.
-   You have dynamically generated elements.
-   You want fewer event listeners.
-   You are building lists, tables, menus, carts, or todo applications.

------------------------------------------------------------------------

# 19. Important Frontend Example

Imagine an e-commerce application:

``` text
Product List
│
├── Laptop
│    └── Add to Cart
│
├── Phone
│    └── Add to Cart
│
├── Keyboard
│    └── Add to Cart
│
└── Mouse
     └── Add to Cart
```

### Without delegation

``` js
laptopButton.addEventListener("click", addToCart);
phoneButton.addEventListener("click", addToCart);
keyboardButton.addEventListener("click", addToCart);
mouseButton.addEventListener("click", addToCart);
```

### With delegation

``` js
productList.addEventListener("click", (event) => {

    if (event.target.classList.contains("add-cart")) {
        addToCart();
    }

});
```

One parent listener handles the children.

This becomes particularly useful when products are created dynamically
from an API.

------------------------------------------------------------------------

# 20. Important Points to Remember

### Event Capturing

``` text
Parent → Child
```

Uses:

``` js
addEventListener("click", handler, true);
```

------------------------------------------------------------------------

### Event Bubbling

``` text
Child → Parent
```

Usually the default:

``` js
addEventListener("click", handler);
```

------------------------------------------------------------------------

### Event Delegation

``` text
Many Children → One Parent Listener
```

Uses bubbling:

``` js
parent.addEventListener("click", (event) => {
    // identify the clicked child
});
```

------------------------------------------------------------------------

# 21. Final Cheat Sheet

``` text
                 EVENT FLOW

          CAPTURING
              ↓
Parent ─────────────→ Child
                         ↓
                       TARGET
                         ↓
Child ───────────────→ Parent
              ↑
           BUBBLING
```

``` text
CAPTURING
Parent → Child

BUBBLING
Child → Parent

DELEGATION
Parent handles events from many children
```

## Key Learning

**Event Capturing** tells you how an event can travel **from the outside
of the DOM toward the target**.

**Event Bubbling** tells you how an event can travel **from the target
back up through its parents**.

**Event Delegation** is a practical frontend technique that uses **event
bubbling** so that a parent can handle events from many child elements
using a single event listener.

For real frontend development, remember this relationship:

``` text
Event Capturing
      ↓
Understand event flow

Event Bubbling
      ↓
Understand child → parent flow

Event Delegation
      ↓
Use bubbling to efficiently handle many children
```