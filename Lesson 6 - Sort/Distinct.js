// Compute number of distinct values in an array.
// Time complexity: O(N*lo(N)) or O(N)

function solution(A) {
  var mapedValues = {};
  for (let i = 0; i < A.length; i++) {
    mapedValues[A[i]] = A[i];
  }
  return Object.keys(mapedValues).length;
}