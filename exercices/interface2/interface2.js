var ArrayQueue = /** @class */ (function () {
    function ArrayQueue() {
        this.items = [];
    }
    ArrayQueue.prototype.enqueue = function (item) {
        this.items.push(item);
        console.log("Enqueued: ".concat(item));
    };
    ArrayQueue.prototype.dequeue = function () {
        var item = this.items.shift();
        console.log("Dequeued: ".concat(item));
        return item;
    };
    ArrayQueue.prototype.front = function () {
        var item = this.items.length > 0 ? this.items[0] : undefined;
        console.log("Front: ".concat(item));
        return item;
    };
    ArrayQueue.prototype.isEmpty = function () {
        var empty = this.items.length === 0;
        console.log("Is empty: ".concat(empty));
        return empty;
    };
    return ArrayQueue;
}());
var queue = new ArrayQueue();
queue.isEmpty(); // true
queue.enqueue(1); // Enqueued: 1
queue.enqueue(2); // Enqueued: 2
queue.front(); // Front: 1
queue.dequeue(); // Dequeued: 1
queue.front(); // Front: 2
queue.isEmpty(); // false
