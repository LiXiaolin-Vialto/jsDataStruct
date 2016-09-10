/**
 * Created by lxl on 2016/9/10.
 */
function LinkNode(data) {
    this.data = data;
    this.next = null;
    return this;
};

function LinkList() {
    this.header = null;
};

LinkList.prototype.insertNode = function (data) {
    var node = new LinkNode(data);
    node.next = this.header ;
    this.header = node;
};
//由数组创建链表
LinkList.createList = function (array) {
    var len = array.length;
    var linkList = new LinkList();
    for(var i = 0;i<len;i++){

        var node = new LinkNode(array[i]);
        node.next = linkList.header ;
        linkList.header = node;
    }
    return linkList;
};
//链表的遍历
LinkList.prototype.traversal = function () {
    var arr = [];
    var p = this.header;
    while(p){
        arr.push(p.data);
        p = p.next;
    }
    return arr;
};
//通过下标找元素
LinkList.prototype.findNodeByIndex = function (index) {
    var indx = 0;
    var p = this.header;
    while(p && indx < index){
        p = p.next;
        indx++;
    }
    return p;
};
//通过值查找元素，若找到，返回元素下标，若未找到，返回-1
LinkList.prototype.indexOfData = function (data) {
    var p = this.header;
    var index = 0;
    while (p){
        if(p.data == data) return index;
        p = p.next;
        index++;
    }
    return -1;
};
//把某个值插入到指定的下标元素上
LinkList.prototype.insertNodeToIndex = function (index,data) {
    if(index == 0){
        //需要在第一个元素上插入元素
        this.insertNode(data);
        return this.header;
    }

    var node = new LinkNode(data);
    var preNode = this.findNodeByIndex(index-1);
    node.next = preNode.next;
    preNode.next = node;
    return this.header;
};
//删除链表内元素
//通过下标删除
LinkList.prototype.removeNodeByIndex = function (index) {
    if(index == 0) {
        this.header = this.header.next;
        return this.header;
    }
    var remove = this._getNodePreByIndex(index);
    remove.last.next = remove.curr.next;

};
//通过值删除
LinkList.prototype.removeNodeByData = function (data) {
    var remove = this._getNodePreByData(data);
    if(remove){
        if(remove.last == null) {
            this.header = this.header.next;
            return this.header;
        }else if(remove.curr== null){
            return null;
        }
        remove.last.next = remove.curr.next;
    }
};

LinkList.prototype._getNodePreByIndex = function (index) {
    var indx = 0;
    var curr = this.header;
    var last = null;
    while(curr && indx < index){
        last = curr;
        curr = curr.next;
        indx ++;
    }

    return {curr:curr,
            last:last};
};
LinkList.prototype._getNodePreByData = function (data) {
    var curr = this.header;
    var last = null;
    while (curr && curr.data != data){
        last = curr;
        curr = curr.next;
    }
    return {
        last:last,
        curr:curr
    }
};

