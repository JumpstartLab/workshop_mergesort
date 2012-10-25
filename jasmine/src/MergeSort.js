function MergeSort() {
  
}

MergeSort.prototype = {
  sort:function (list) {
    workArray = [];
    for (var i = 0; i < list.length; i++) 
    {
      workArray.push([list[i]])
    }
    
    return this.flatten(workArray);
  },
  
  flatten:function (array) {
      if (array.length > 0) {
        return array.reduce(function (a, b) {
          return a.concat(b);
        });
      }
      else {
        return array;
      }
    }
}