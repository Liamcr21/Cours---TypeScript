interface Stack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
  }

  class ArrayStack<T> implements Stack<T> {
    private items: T[];

    constructor() {
      this.items = [];
    }

    push(item: T): void {
      this.items.push(item);
    }

    pop(): T | undefined {
      return this.items.pop();
    }

    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }

  // Example usage
  const stack = new ArrayStack<number>();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.peek()); // 3
  console.log(stack.pop()); // 3
  console.log(stack.pop()); // 2
  console.log(stack.isEmpty()); // false
  console.log(stack.pop()); // 1
  console.log(stack.isEmpty()); // true
  console.log(stack.pop()); // undefined