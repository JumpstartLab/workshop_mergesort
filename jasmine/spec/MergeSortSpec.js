describe("MergeSort", function() {
  it("should sort empty list", function(){
    expect(new MergeSort().sort([])).toEqual([]);
  });

  it("should sort single element list", function() {
    expect(new MergeSort().sort([1])).toEqual([1]);
  });
});