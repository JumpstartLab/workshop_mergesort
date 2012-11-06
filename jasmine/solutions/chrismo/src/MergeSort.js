function MergeSort() {

}

MergeSort.prototype = {
  sort:function (list) {
    var workArray = [];
    for (var i = 0; i < list.length; i++) {
      workArray.push([list[i]])
    }

    while (workArray.length > 1) {
      var i = 0;
      while (i < workArray.length) {
        var j = Math.min(workArray.length - 1, i + 1);

        if (workArray[i][0] > workArray[j][0]) {
          this.swap(workArray, i, j);
        }
        var inc = this.merge(workArray, i, j);

        i = j + 1 + inc;
      }
    }

    return this.flatten(workArray);
  },

  swap:function (array, i, j) {
    var temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  },

  merge:function (array, i, j) {
    if (i != j) {
      array[i] = array[i].concat(array[j]);
      array.splice(j, 1);
      return -1;
    } else {
      return 0;
    }
  },

  flatten:function (array) {
    if (array.length > 0) {
      return array.reduce(function (a, b) {
        return a.concat(b);
      });
    } else {
      return array;
    }
  }
}