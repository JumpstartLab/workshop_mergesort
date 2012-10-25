describe("MergeSort", function () {
  it("should sort empty list", function () {
    expect(new MergeSort().sort([])).toEqual([]);
  });

  it("should sort single element list", function () {
    expect(new MergeSort().sort([1])).toEqual([1]);
  });

  it("should sort already sorted two element list", function () {
    expect(new MergeSort().sort([1, 2])).toEqual([1, 2]);
  });

  it("should sort unsorted two element list", function () {
    expect(new MergeSort().sort([2, 1])).toEqual([1, 2]);
  });

  it("should sort unsorted three element list", function () {
    expect(new MergeSort().sort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  describe("merge", function () {
    it("should merge two inner arrays together", function () {
      var array = [
        [1],
        [2],
        [3]
      ];
      expect(new MergeSort().merge(array, 1, 2)).toEqual(-1);
      expect(array).toEqual([
        [1],
        [2, 3]
      ]);
      expect(new MergeSort().merge(array, 0, 0)).toEqual(0);
      expect(array).toEqual([
        [1],
        [2, 3]
      ]);
      expect(new MergeSort().merge(array, 0, 1)).toEqual(-1);
      expect(array).toEqual([
        [1, 2, 3]
      ]);
    })
  });
});