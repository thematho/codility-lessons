// MaxCounters
// Calculate the values of counters after applying all alternating operations: increase counter by 1; 
// set value of all counters to current maximum.
// Time complexity:O(N + M)
function solution(N, A) {
  var counters = new Array(N);
  var maxCounter = 0, lastMaxOperation = 0;
  var increase = (X) => {
    if (counters[X] < lastMaxOperation) {
      counters[X] = lastMaxOperation;
    }
    counters[X]++;
    if (counters[X] > maxCounter) {
      maxCounter = counters[X];
    }
  },
    max = () => lastMaxOperation = maxCounter;
  counters.fill(0);

  A.forEach((X, K) => {
    if (X === N + 1) {
      max();
    } else if (1 <= X && X <= N) {
      increase(X - 1);
    }
  });
  counters = counters.map((c) => {
    return c < lastMaxOperation ? lastMaxOperation : c
  });
  return counters;
}