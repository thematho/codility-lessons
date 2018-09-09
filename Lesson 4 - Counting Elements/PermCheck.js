// Check whether array A is a permutation.
// Time complexity: O(N) or O(N * log(N))
function solution(A) {
  var seqMap = {};
  if (A.length < 2) {
    return A[0] === 1 ? 1 : 0;
  }
  for (let i = 0; i < A.length; i++) {
    if (seqMap[A[i]]) {
      return 0;
    }
    seqMap[A[i]] = [A[i]];
    if (A[i] > A.length) {
      return 0;
    }
  }
  return Object.keys(seqMap).length < A.length ? 0 : 1;
}