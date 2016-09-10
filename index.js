/**
 * Created by lxl on 2016/9/7.
 */
window.onload = function () {

    /** 哈希表*/
    var ht = HashTable.createHashTable(17);
    ht.insert_str_from_hash("abc");
    ht.insert_str_from_hash("bac");
    console.log(ht.find_str_from_hash("abc"));
    console.log(ht);
    /** 排序*/
    var data = [23, 45, 16, 37, 3, 99, 22];
    var sort = new ArraySort(data);
    console.log("排序前: " + data);
    //选择排序
    //console.log("选择排序后: " + sort.insert_sort().desc_sort);
    //冒泡排序
    //console.log("冒泡排序后:" + sort.bubble_sort().desc_sort);
    //选择排序
    //console.log("选择排序后: "+ sort.select_sort().desc_sort);
    //希尔排序
    //console.log("希尔排序后: " + sort.shell_sort().desc_sort);
    //快速排序
    console.log("快速排序后: "+sort.quick_sort().desc_sort);

    /** 二叉树 */
    var binaryTree = BinaryTree.create_tree_from_array(data);
    // console.log("后序遍历: " + binaryTree.postorder_traversal_tree());
    // console.log("先序遍历: " + binaryTree.preorder_traversal_tree());

    //插入
    console.log("插入前 中序遍历: " + binaryTree.midorder_traversal_tree());
    binaryTree.insert_data_to_tree(29);
    console.log("插入后 中序遍历: " + binaryTree.midorder_traversal_tree());

    //二叉树的查找
    console.log(binaryTree.find_node_from_tree(23));
    console.log(binaryTree.find_node_from_tree(35));
    //删除
    console.log(binaryTree.midorder_traversal_tree());
    binaryTree.remove_node_tree(45);
    console.log(binaryTree.midorder_traversal_tree());
    /**链表*/
    console.log("以下为链表的输出");
    var linkList = LinkList.createList(data);
    linkList.insertNode(29);
    console.log(linkList.traversal());
    console.log("找到下标为7的元素: "+linkList.findNodeByIndex(7).data);
    linkList.insertNodeToIndex(0,12);
    console.log("在下标为3的位置上插入12: "+linkList.traversal());
    console.log("查找链表内值为23的元素: "+linkList.indexOfData(23));
    console.log("查找链表内值为35(不存在)的元素: "+linkList.indexOfData(35));
    console.log(linkList.traversal());
    // linkList.removeNodeByIndex(0);
    linkList.removeNodeByData(23);
    console.log(linkList.traversal());
};