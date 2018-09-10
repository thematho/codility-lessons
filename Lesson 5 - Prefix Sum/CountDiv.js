// Compute number of integers divisible by k in range [a..b].
// Time complexity: O(1)
function solution(A, B, K) {
  var offset = A % K === 0 ? 1 : 0;
  if (A === B) {
    return offSet;
  }
  return Math.floor(B / K) - Math.floor(A / K) + offSet;
}