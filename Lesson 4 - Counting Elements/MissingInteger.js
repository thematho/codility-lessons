// Find the smallest positive integer that does not occur in a given sequence.
// Time complexity O(N) or O(N * log(N))
function solution(A) {
  var minPosInt = 1;
  var numbersMap = {};
  A.forEach((num) => {
    if (num > 0) {
      numbersMap[num] = num;
    }
  });
  Object.values(numbersMap).forEach((num) => {
    if (minPosInt !== num) {
      return minPosInt;
    }
    minPosInt++;
  });
  return minPosInt;
}