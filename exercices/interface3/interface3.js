var SimpleLinkedList = /** @class */ (function () {
    function SimpleLinkedList() {
        this.head = null;
    }
    SimpleLinkedList.prototype.insert = function (value) {
        var newNode = { value: value, next: null };
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    };
    SimpleLinkedList.prototype.delete = function (value) {
        if (this.head === null) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
        }
        else {
            var current = this.head;
            while (current.next !== null) {
                if (current.next.value === value) {
                    current.next = current.next.next;
                    return;
                }
                current = current.next;
            }
        }
    };
    SimpleLinkedList.prototype.find = function (value) {
        var current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    };
    SimpleLinkedList.prototype.size = function () {
        var count = 0;
        var current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    };
    return SimpleLinkedList;
}());
// Example usage
var list = new SimpleLinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
console.log(list.size()); // 3
console.log(list.find(1));
list.delete(2);
console.log(list.size()); // 2
console.log(list.find(2)); // { value: 3, next: null }
