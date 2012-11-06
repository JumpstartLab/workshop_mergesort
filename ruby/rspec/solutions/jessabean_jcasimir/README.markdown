## Merge-Sort Solution

Jess (@jessabean) and I (@jcasimir) paired on a TDD-style implementation of mergesort. 

We used RSpec to define the expected behavior and tried to build complexity slowly. You can see the first spec just "sorts" a single number. From there we moved up to more complex sets and made sure to test both odd and even numbered inputs.

We didn't do a great job testing the nuances of the algorithm. We basically got to the point where we had a test exercising the entire algorithm, saw that it went red, then had to make it work.

Part of this weakness was because we were keeping the Ruby code all in one place -- one big `sort` method. We were able to muddle through and, amazingly, make it work.

However, it would have been instructive to break the method down earlier in the process. We eventually started the refactor tractor and broke the algorithm into parts:

1. Split
2. Sort
3. Merge

For continued study, it'd be instructive to delete the implementation of any of these methods, then write a spec for just that method and reimplement.