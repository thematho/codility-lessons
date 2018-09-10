// Find the minimal nucleotide from a range of sequence DNA.
// Time Complexity O(N * M)
// TODO: Better Solution O(N + M)

function solution(S, P, Q) {
  const impacts = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  };
  var minImpacts = [];
  var cache = {};
  for (let i = 0; i < P.length; i++) {
    let localMin = Infinity;

    if (cache[`${P[i]}-${Q[i]}`]) {
      localMin = cache[`${P[i]}-${Q[i]}`];
    } else {
      for (let j = P[i]; j <= Q[i]; j++) {
        let impact = impacts[S[j]];
        if (impact < localMin) {
          localMin = impact;
        }
      }
      cache[`${P[i]}-${Q[i]}`] = impact;
    }
    minImpacts.push(localMin);
  }
  return minImpacts;
}