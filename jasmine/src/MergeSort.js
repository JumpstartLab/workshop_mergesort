function MergeSort() {

}

MergeSort.prototype = {
  sort:function (list) {
    var workArray = [];
    for (var i = 0; i < list.length; i++) {
      workArray.push([list[i]])
    }

    var i = 0;
    while (i < workArray.length) {
      var j = Math.min(workArray.length - 1, i + 1);

      if (workArray[i] > workArray[j]) {
        this.swap(workArray, i, j);
      }

      i = j + 1;
    }

    return this.flatten(workArray);
  },

  swap:function (array, i, j) {
    var temp = array[j];
    array[j] = array[i];
    array[i] = temp;
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