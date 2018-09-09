// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
// Time complexity: O(N)
function solution(A) {
    var minDiff = Infinity;
    var leftSideSum = 0;
    var rigthSideSum = A.reduce((a, b) => a + b);
    for (let i = 0; i < A.length; i++) {
        leftSideSum += A[i];
        rigthSideSum -= A[i];
        if (i !== A.length - 1) {
            let tmpDiff = Math.abs(rigthSideSum - leftSideSum);
            if (tmpDiff < minDiff) {
                minDiff = tmpDiff;
            }
        }
    }
    return minDiff;
}