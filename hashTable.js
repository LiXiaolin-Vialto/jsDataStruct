/**
 * Created by lxl on 2016/9/7.
 */
function HashTable(){
    this.table = null;
}
HashTable.createHashTable = function (hashSize) {
    /**
    * 创建一个hash表，由数组组成每个数组元素指向一个数组
    * */

    var hashTable = new HashTable();
    hashTable.table = new Array(hashSize);
    for(var i = 0 ;i<hashSize;i++){
        hashTable.table[i] = new Array();
    }
    return hashTable;
};

HashTable.prototype.insert_str_from_hash = function (str) {
    var index = this._str_to_num(str) % this.table.length;
    return this._insert_str_to_hash(str,index);
};

HashTable.prototype._insert_str_to_hash = function (str,index) {
   if(this.table[index].indexOf(str) < 0){
       this.table[index].push(str);
   }
   return index;
};

HashTable.prototype._str_to_num = function(str){
    var sum = 0;
    for (var i = 0;i<str.length;i++) {
        sum += str.charCodeAt(i);
    }
    return sum;
};
HashTable.prototype.find_str_from_hash = function(str)
{
    var data_index = this._str_to_num(str);
    var index = data_index % this.table.length;

    var index_column = this.table[index].indexOf(str);
    //在这里写入代码
    return {row:index, column:index_column};
};
HashTable.prototype._str_to_num = function(str){
    var sum = 0;
    for(var i = 0;i<str.length; i++){
        sum+=str.charCodeAt(i);
    }
    return sum;
};
