interface LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
  }

  interface LinkedList<T> {
    insert(value: T): void;
    delete(value: T): void;
    find(value: T): LinkedListNode<T> | null;
    size(): number;
  }

  class SimpleLinkedList<T> implements LinkedList<T> {
    private head: LinkedListNode<T> | null;

    constructor() {
      this.head = null;
    }

    insert(value: T): void {
      const newNode: LinkedListNode<T> = { value, next: null };
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }

    delete(value: T): void {
      if (this.head === null) {
        return;
      }
      if (this.head.value === value) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        while (current.next !== null) {
          if (current.next.value === value) {
            current.next = current.next.next;
            return;
          }
          current = current.next;
        }
      }
    }

    find(value: T): LinkedListNode<T> | null {
      let current = this.head;
      while (current !== null) {
        if (current.value === value) {
          return current;
        }
        current = current.next;
      }
      return null;
    }

    size(): number {
      let count = 0;
      let current = this.head;
      while (current !== null) {
        count++;
        current = current.next;
      }
      return count;
    }
  }

  // Example usage
  const list = new SimpleLinkedList<number>();
  list.insert(1);
  list.insert(2);
  list.insert(3);
  console.log(list.size()); // 3
  console.log(list.find(1));
  list.delete(2);
  console.log(list.size()); // 2
  console.log(list.find(2)); // { value: 3, next: null }