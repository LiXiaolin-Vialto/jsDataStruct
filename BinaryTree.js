/**
 * Created by lxl on 2016/9/7.
 */
/**
 * 排序二叉树
 * */
function BinaryTreeNode(data,left,right) {
    this.left = left;
    this.data = data;
    this.right = right;
    return this;
}
function BinaryTree() {
    this.root = null;
}

BinaryTree.create_tree_from_array = function (array) {
    var binary_tree = new BinaryTree();
    for(var i = 0;i < array.length ; i++){
        binary_tree.root = binary_tree._insert_data_to_tree(binary_tree.root,array[i]);
    }
    return binary_tree;
};
//插入
BinaryTree.prototype.insert_data_to_tree = function (data) {

    this.root = this._insert_data_to_tree(this.root,data);
};

BinaryTree.prototype._insert_data_to_tree = function (binary_node,data) {
    if(binary_node == null) {
        return new BinaryTreeNode(data,null,null);
    }
    else if(binary_node.data < data){
        binary_node.right = this._insert_data_to_tree(binary_node.right,data);
    }
    else if(binary_node.data > data){
        binary_node.left = this._insert_data_to_tree(binary_node.left,data);
    }
    return binary_node;
};
//后序遍历
BinaryTree.prototype.postorder_traversal_tree = function () {
    var tree_array = [];
    this._postorder_traversal_tree(this.root,tree_array);
    return tree_array;
};

BinaryTree.prototype._postorder_traversal_tree = function (tree_node,tree_array) {
    if(tree_node){
        this._postorder_traversal_tree(tree_node.left,tree_array);
        this._postorder_traversal_tree(tree_node.right,tree_array);
        tree_array.push(tree_node.data);
    }
};
//先序遍历
BinaryTree.prototype.preorder_traversal_tree = function () {
    var tree_array = [];
    this._preorder_traversal_tree(this.root,tree_array);
    return tree_array;
};
BinaryTree.prototype._preorder_traversal_tree = function (tree_node,tree_array) {
    if(tree_node){
        tree_array.push(tree_node.data);
        this._preorder_traversal_tree(tree_node.left,tree_array);
        this._preorder_traversal_tree(tree_node.right,tree_array);
    }
};
//中序遍历
BinaryTree.prototype.midorder_traversal_tree = function () {
    var tree_array = [];
    this._midorder_traversal_tree(this.root,tree_array);
    return tree_array;
};
BinaryTree.prototype._midorder_traversal_tree = function (tree_node,tree_array) {
    if(tree_node){
        this._midorder_traversal_tree(tree_node.left,tree_array);
        tree_array.push(tree_node.data);
        this._midorder_traversal_tree(tree_node.right,tree_array);
    }
};
//查找节点
BinaryTree.prototype.find_node_from_tree = function (data) {
   var node = this._find_node_from_tree(this.root,data);
    return node;
};
BinaryTree.prototype._find_node_from_tree = function (tree_node,data) {
    if(tree_node == null) return null;
    else if(tree_node.data == data){
        return tree_node;
    }else if(tree_node.data > data){
       return this._find_node_from_tree(tree_node.left,data);
    }else if (tree_node.data < data){
        return this._find_node_from_tree(tree_node.right,data);
    }
};
//删除节点
BinaryTree.prototype.remove_node_tree = function (data) {
    var removed_node = this._remove_node_from_tree(this.root,data);
    if(removed_node == null ) return null;
    if(removed_node.remove_main_node){
        this.root = removed_node.curr;
    }
};
BinaryTree.prototype._remove_node_from_tree = function (tree_node,data) {
    //找到即将被删除的节点{last:该节点的上一个节点，curr：该节点}
    var tobe_remove_node = this._find_removed_node(tree_node,data);
    //如果找不到即将被删除的节点，返回空值.
    if(tobe_remove_node == null) return null;
    //如果即将被删除的节点仅有一子树
    if(tobe_remove_node.curr.left == null ||tobe_remove_node.curr.right == null){
        return this._remove_half_tree(tobe_remove_node.last,tobe_remove_node.curr);
    }
    //若被删除的节点有两个子树
    else {
        //找到左子树中最大的节点，将该节点移动到被删除的节点上，删除最大节点.
        var max_data = this._find_max_of_tree(tobe_remove_node.curr);
        tobe_remove_node.curr.data = max_data.curr.data;
       return  this._remove_half_tree(max_data.last,max_data.curr);
    }
};

BinaryTree.prototype._find_max_of_tree = function (tree_node) {
    var last_node = tree_node;
    var curr_node = tree_node.left;
    while(curr_node.right){
        last_node = curr_node;
        curr_node = curr_node.right;
    }

    return {
        last:last_node,
        curr:curr_node
    };
};
BinaryTree.prototype._find_removed_node = function (tree_node,data) {
    var last_node = null,curr_node = tree_node;
    while (curr_node){
        if(curr_node.data == data) {
            return {last:last_node,
                    curr: curr_node
            }
        }
        last_node = curr_node;
        if(curr_node.data <data){
            curr_node = curr_node.right;
        }
        else {
            curr_node = curr_node.left;
        }
    }
    return null;
};
//删掉一半的树
BinaryTree.prototype._remove_half_tree = function (last,current) {
    // //current节点仅有左分支或有分支,last为current节点的上一个节点
    var temp = current.left!= null?current.left:current.right;
    //如果last为空，证明需要删除的是根节点 curr是它的左分支.
    if(last == null){
        return {
            remove_main_node:true,
            curr:temp
        }
    }
    else if(last.left.data == current.data){
        last.left = temp;
    }
    else if(last.right == current){
        last.right = temp;
    }
    return {
        remove_main_node:false,
        curr:current
    }
};