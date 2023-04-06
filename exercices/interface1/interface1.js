var ArrayStack = /** @class */ (function () {
    function ArrayStack() {
        this.items = [];
    }
    ArrayStack.prototype.push = function (item) {
        this.items.push(item);
    };
    ArrayStack.prototype.pop = function () {
        return this.items.pop();
    };
    ArrayStack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    ArrayStack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return ArrayStack;
}());
// Example usage
var stack = new ArrayStack();
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
