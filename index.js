class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
        this.head.next = null;
    }
    append(value) {
        const node = new Node(value);
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = node;
    }

    prepend(value) {
        const node = new Node(value);

        node.next = this.head;
        this.head = node;
    }
    size() {
        let i = 0;
        let temp = this.head;
        while (temp != null) {
            temp = temp.next;
            i++;
        }
        return i;
    }
    getHead() {
        return this.head.value;
    }
    getTail() {
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        return temp.value;
    }
    at(index) {
        let i = 0;
        let temp = this.head;
        while (temp != null) {
            if (index === i) {
                return temp;
            }
            temp = temp.next;
            i++;
        }
    }
    pop() {
        let temp = this.head;
        while (temp.next.next !== null) {
            temp = temp.next;
        }
        temp.next = null;
    }
    contains(value) {
        let temp = this.head;
        while (temp != null) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    find(value) {
        let temp = this.head;
        let i = 0;
        while (temp != null) {
            if (temp.value === value) {
                return i;
            }
            temp = temp.next;
            i++;
        }
        return null;
    }
    toString() {
        let temp = this.head;
        let str = "";
        while (temp != null) {
            str = str.concat(`( ${temp.value} ) -> `);
            temp = temp.next;
        }
        str = str.concat("null");
        return str;
    }
    insertAt(value, index) {
        const node = new Node(value);
        let i = 0;
        let temp = this.head;
        while (temp != null) {
            if (index === i) {
                node.next = temp.next;
                temp.next = node;
                return;
            }
            temp = temp.next;
            i++;
        }
    }
    removeAt(index) {
        let i = 0;
        let temp = this.head;
        if (index === 0) {
            this.head = temp.next;
            return;
        }
        while (temp != null) {
            if (index === i) {
                this.at(i - 1).next = temp.next;
                return;
            }
            temp = temp.next;
            i++;
        }
    }
}
