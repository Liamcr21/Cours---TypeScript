interface Queue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    front(): T | undefined;
    isEmpty(): boolean;
  }

  
  class ArrayQueue<T> implements Queue<T> {
    private items: T[] = [];
  
    enqueue(item: T): void {
      this.items.push(item);
      console.log(`Enqueued: ${item}`);
    }
  
    dequeue(): T | undefined {
      const item = this.items.shift();
      console.log(`Dequeued: ${item}`);
      return item;
    }
  
    front(): T | undefined {
      const item = this.items.length > 0 ? this.items[0] : undefined;
      console.log(`Front: ${item}`);
      return item;
    }
  
    isEmpty(): boolean {
      const empty = this.items.length === 0;
      console.log(`Is empty: ${empty}`);
      return empty;
    }
  }
  
  const queue = new ArrayQueue<number>();
  
  queue.isEmpty(); 
  
  queue.enqueue(1); 
  queue.enqueue(2);
  
  queue.front(); 
  
  queue.dequeue(); 
  
  queue.front();
  
  queue.isEmpty(); 
  