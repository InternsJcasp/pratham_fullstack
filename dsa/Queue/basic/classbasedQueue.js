class Queue {
  constructor() {
    this.items = [];
  }
  //   ADD ELEMENT
  enqueue(element) {
    this.items.push(element);
  }
  //   REMOVE FIRST ELEMENT
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }
  //   GET FIRST ELEMENT IN QUEUE
  peek() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.items[0];
  }

  //   CHECK EMPTY
  isEmpty() {
    return this.items.length === 0;
  }

  //   GET SIZE
  size() {
    return this.items.length;
  }
  //   DISPLAY QUEUE
  display() {
    console.log(this.items);
  }
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.display();

console.log(queue.peek());

console.log(queue.dequeue());

queue.display();

console.log(queue.size());
