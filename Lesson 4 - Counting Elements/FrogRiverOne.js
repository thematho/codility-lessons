// Find the earliest time when a frog can jump to the other side of a river.
// Time complexity:O(N)
function solution(X, A) {
  var leafMap = {};
  var count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X && !leafMap[A[i]]) {
      leafMap[A[i]] = A[i];
      count++;
    }
    if (count === X) {
      return i;
    }
  }
  return -1;
}