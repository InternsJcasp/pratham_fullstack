class CircularQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
  }
  //   Add element
  enqueue(value) {
    // queue
    if ((this.rear + 1) % this.size === this.front) {
      console.log("Queue is Full");
      return;
    }
    //first element
    if (this.front === -1) {
      this.front = 0;
    }

    // move rear circularly
    this.rear = (this.rear + 1) % this.size;

    this.queue[this.rear] = value;
  }
  //   remove the element

  dequeue() {
    // queue empty
    if (this.front === -1) {
      console.log("Queue is empty");
    }
    const value = this.queue[this.front];

    // only one element
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return value;
  }
  // get first of the queue
  peek() {
    if (this.front === -1) {
      return "Queue is empty";
    }
    return this.queue[this.front];
  }

  //   display the queue
  display() {
    if (this.front === -1) {
      console.log("Queue is Empty ");
      return;
    }
    let result = [];
    let i = this.front;

    while (true) {
      result.push(this.queue[i]);

      if (i === this.rear) {
        break;
      }

      i = (i + 1) % this.size;
    }
    console.log(result);
  }
}

const q = new CircularQueue(5);

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

q.display();

console.log(q.dequeue());

console.log(q.dequeue());

q.enqueue(50);
q.enqueue(60);

q.display();
