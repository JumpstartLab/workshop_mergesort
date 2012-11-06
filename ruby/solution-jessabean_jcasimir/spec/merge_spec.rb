require './merge'

describe "Merge Sort" do
  it "exists" do
    expect{ Merge }.to_not raise_error
  end

  describe ".sort" do
    it "when given one number just returns that number" do
      inputs = [3]
      Merge.sort(inputs).should == [3]
    end

    it "can put two numbers in order" do
      inputs = [30, 11]
      Merge.sort(inputs).should == [11,30]
    end

    it "can sort three numbers" do
      inputs = [6,3,9]
      Merge.sort(inputs).should == [3,6,9]
    end

    it "does not use Array.sort" do
      inputs = [3, 9, 6]
      inputs.should_not_receive(:sort)
      Merge.sort(inputs)
    end

    it "sorts a long set with an even number of elements" do
      inputs = [ 2, 5, 12, 3, 88, 1, 0, 14]
      Merge.sort(inputs).should == [ 0, 1, 2, 3, 5, 12, 14, 88]
    end
  end
end