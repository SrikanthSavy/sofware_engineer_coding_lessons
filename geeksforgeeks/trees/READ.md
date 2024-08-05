
    Tree:  
        A tree is non-linear and a hierarchical data structure consisting of a collection of nodes such that each node of the tree stores a value and a list of references to other nodes (the “children”).

    Why Tree? 
        Unlike Array and Linked List, which are linear data structures, tree is hierarchical (or non-linear) data structure. 

        -> One reason to use trees might be because you want to store information that naturally forms a hierarchy. For example, the file system on a computer: 
        -> If we organize keys in form of a tree (with some ordering e.g., BST), we can search for a given key in moderate time (quicker than Linked List and slower than arrays). Self-balancing search trees like AVL and Red-Black trees guarantee an upper bound of O(Logn) for search.
        -> We can insert/delete keys in moderate time (quicker than Arrays and slower than Unordered Linked Lists). Self-balancing search trees like AVL and Red-Black trees guarantee an upper bound of O(Logn) for insertion/deletion.
        -> Like Linked Lists and unlike Arrays, Pointer implementation of trees don’t have an upper limit on number of nodes as nodes are linked using pointers.


        APPLICations of Tress
        =====================

        Store hierarchical data, like folder structure, organization structure, XML/HTML data.
        Binary Search Tree is a tree that allows fast search, insert, delete on a sorted data. It also allows finding closest item
        Heap is a tree data structure which is implemented using arrays and used to implement priority queues.
        B-Tree and B+ Tree : They are used to implement indexing in databases.
        Syntax Tree:  Scanning, parsing , generation of code and evaluation of arithmetic expressions in Compiler design.
        K-D Tree: A space partitioning tree used to organize points in K dimensional space.
        Trie : Used to implement dictionaries with prefix lookup.
        Suffix Tree : For quick pattern searching in a fixed text.
        Spanning Trees and shortest path trees are used in routers and bridges respectively in computer networks
        As a workflow for compositing digital images for visual effects.
        Decision trees.
        Organization chart of a large organization.
        In XML parser.
        Machine learning algorithm.
        For indexing in database.
        IN server like DNS (Domain Name Server)
        In Computer Graphics.
        To evaluate an expression.
        In chess game to store defense moves of player.
        In java virtual machine.


Types of Tree data structures:
-------------------------------
    
    1. General tree:  A general tree data structure has no restriction on the number of nodes. It means that a parent node can have any number of child nodes

    2. Binary tree  :  A node of a binary tree can have a maximum of two child nodes. In the given tree diagram, node B, D, and F are left children, while E, C, and G are the right children.  

    3. Balanced tree:  If the height of the left sub-tree and the right sub-tree is equal or differs at most by 1, the tree is known as a balanced tree.  

TREE TRaversal : 3- Types
------------------------
Inorder (Left, Root, Right) : (L,Root,R)
Preorder (Root, Left, Right) : (Root,L,R)
Postorder (Left, Right, Root) : (L,R,Root)


