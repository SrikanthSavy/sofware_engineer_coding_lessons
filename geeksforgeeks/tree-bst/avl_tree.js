

class Node {
    constructor(data) {
        this.data = data;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Get height of a node
    height(node) {
        return node ? node.height : 0;
    }

    // Get balance factor of a node
    balanceFactor(node) {
        return this.height(node.left) - this.height(node.right);
    }

    // Update height of a node
    updateHeight(node) {
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    // Right rotation
    rightRotate(y) {
        let x = y.left;
        let T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    // Left rotation
    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    // Insert a node
    insert(data) {
        this.root = this._insert(this.root, data);
    }

    _insert(node, data) {
        // Perform standard BST insert
        if (node === null) {
            return new Node(data);
        }

        if (data < node.data) {
            node.left = this._insert(node.left, data);
        } else if (data > node.data) {
            node.right = this._insert(node.right, data);
        } else {
            // Duplicate data not allowed
            return node;
        }

        // Update height of current node
        this.updateHeight(node);

        // Get the balance factor
        let balance = this.balanceFactor(node);

        // Left Left Case
        if (balance > 1 && data < node.left.data) {
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && data > node.right.data) {
            return this.leftRotate(node);
        }

        // Left Right Case
        if (balance > 1 && data > node.left.data) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Left Case
        if (balance < -1 && data < node.right.data) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }

    // Inorder traversal
    inorder() {
        this._inorder(this.root);
    }

    _inorder(node) {
        if (node) {
            this._inorder(node.left);
            console.log(node.data);
            this._inorder(node.right);
        }
    }
}

// Example usage
let avl = new AVLTree();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(25);

console.log("Inorder traversal of the AVL tree:");
avl.inorder();