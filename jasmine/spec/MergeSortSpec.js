describe("MergeSort", function() {
  it("should sort empty list", function(){
    expect(new MergeSort().sort([])).toEqual([]);
  });

  it("should sort single element list", function() {
    expect(new MergeSort().sort([1])).toEqual([1]);
  });

  it("should sort already sorted two element list", function() {
    expect(new MergeSort().sort([1, 2])).toEqual([1, 2]);
  });

  it("should sort unsorted two element list", function() {
    expect(new MergeSort().sort([2, 1])).toEqual([1, 2]);
  });
});