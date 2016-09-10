/**
 * Created by lxl on 2016/9/7.
 */
/**排序算法*/
function ArraySort(data){
    this.desc_sort = data.concat();
    return this;
}
ArraySort.prototype._swap = function(array,i,j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};
//插入排序
ArraySort.prototype.insert_sort = function () {
    var len = this.desc_sort.length;
    for (var i = 0;i< len;i++){
        var temp = this.desc_sort[i];
        var j = i-1;
        for(;j >= 0 && this.desc_sort[j]>temp; j--){
            this.desc_sort[j+1] = this.desc_sort[j];
        }
        this.desc_sort[j+1] = temp;
    }
    return this;
};
//冒泡排序
ArraySort.prototype.bubble_sort = function () {
    var len = this.desc_sort.length;
    for (var i = 0;i<len;i++){
        for(var j = 0;j<len-i;j++){
            if(this.desc_sort[j]>this.desc_sort[j+1]){
                this._swap(this.desc_sort,j,j+1);
            }
        }
        console.log("第"+i+"轮: "+this.desc_sort);
    }
    return this;
};
//选择排序
ArraySort.prototype.select_sort = function () {
    var len = this.desc_sort.length;
    for(var i = 0;i<len ; i++){
        var min = this.desc_sort[i];
        var min_ind = i;
        var j = i+1;
        for(;j<len;j++){
            if(this.desc_sort[j] < min){
                min = this.desc_sort[j];
                min_ind = j;
            }
        }
        this._swap(this.desc_sort,min_ind,i);
        console.log("第"+i+"轮: "+this.desc_sort);
    }
    return this;
};
//希尔排序
ArraySort.prototype.shell_sort = function () {
    var gap = 1;
    while (gap < this.desc_sort.length/3){
        gap = gap*3+1;
    }
    while(gap >=1){
        this._shell_sort(this.desc_sort,gap);
        gap = (gap-1)/3;
    }
    return this;
};

ArraySort.prototype._shell_sort = function (sort_array,gap) {
  for(var i = gap; i<this.desc_sort.length;i++){
      for(var j = i;j>=gap && this.desc_sort[j]<this.desc_sort[j-gap];j-=gap){
          this._swap(sort_array,j,j-gap);
      }
  }
};

//快速排序
ArraySort.prototype.quick_sort = function () {
   this.desc_sort =  this._quick_sort(this.desc_sort);
    return this;
};
ArraySort.prototype._quick_sort = function (data) {
    if(data.length == 0) return [];
    var mid = data[0];
    var left_array = [],right_array = [];

    for(var i = 0;i< data.length;i++){
        if(data[i]<mid){
            left_array.push(data[i]);
        }
        if(data[i]>mid){
            right_array.push(data[i]);
        }
    }
    return this._quick_sort(left_array).concat(mid,this._quick_sort(right_array));
};