function MergeSort() {

}

MergeSort.prototype = {
  sort:function (list) {
    workArray = [];
    for (var i = 0; i < list.length; i++) {
      workArray.push([list[i]])
    }

    var i = 0;
    var j = Math.min(workArray.length - 1, 1);

    if (workArray[i] > workArray[j]) {
      var temp = workArray[j];
      workArray[j] = workArray[i];
      workArray[i] = temp;
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