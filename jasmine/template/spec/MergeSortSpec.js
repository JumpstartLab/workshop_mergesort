describe("MergeSort", function () {
  it("should sort empty list", function () {
    expect(new MergeSort().sort([])).toEqual([]);
  });
});