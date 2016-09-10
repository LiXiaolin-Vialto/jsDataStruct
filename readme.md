由js实现的数据结构，有链表、哈希表、排序二叉树的创建、添加、删除节点等简单的操作，仍然有需要改进的地方。
还加入了一些js实现的排序算法
BinaryTree:排序二叉树
包含的方法：
BinaryTreeNode 二叉树的节点类
BinaryTree 二叉树类
BinaryTree.create_tree_from_array 创建排序二叉树:输入：数组，输出：排序好的二叉树
BinaryTree.prototype.insert_data_to_tree  添加二叉树的节点
BinaryTree.prototype.postorder_traversal_tree 后序遍历二叉树
BinaryTree.prototype.preorder_traversal_tree  前序遍历二叉树
BinaryTree.prototype.midorder_traversal_tree 中序遍历二叉树
BinaryTree.prototype.find_node_from_tree 查找:输入:一个节点的值,返回:节点或null
BinaryTree.prototype.remove_node_tree 删除节点:输入：节点的值，返回: 此树
备注:
删除的方法是排序二叉树中最复杂的，以下为一种实现的逻辑：
1.找到需要删除的节点，若没找到，返回null，若找到，返回此节点的父节点以及此节点，数据结构为{curr:需要删除的节点，last:父节点}
2.判断该节点是否至多只有一棵子树，如果仅有一棵子树，删除该节点，将该节点的子节点链接到父节点上
3.如果该节点有两棵子树，找到其左子树里最大的节点，替换之，删除左子树上最大的节点。
4.如果需要删除的节点为根节点，走步骤三，然后将root值指向新的值。

哈希表:
这个哈希表是用数组存储的
HashTable.createHashTable 创建哈希表，输入size，为每个节点都创建一个array，返回该哈希表。
HashTable.prototype.insert_str_from_hash 为哈希表插入一个元素
HashTable.prototype._str_to_num 将元素变成一个哈希值
HashTable.prototype.find_str_from_hash 查找该元素

链表
链表目前还未遇到坑，包括链表的创建（由数组），链表的遍历，节点的添加，通过下标寻找链表节点，通过值寻找链表节点. 

排序
排序有选择排序，希尔排序、快速排序