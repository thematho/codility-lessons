// Find the minimal average of any slice containing at least two elements.
// Time complexity: O(N)
function solution(A) {
  var minAVG = Infinity, index = -1;
  
  for(let i = 0; i < A.length-1; i++){
      let avgTwoEl = (A[i]+ A[i+1])/2;
      let avgTreeEl = A[i+2] !== undefined ? (A[i] + A[i + 1] + A[i + 2])/3 : Infinity;
      if(avgTwoEl < minAVG) {
          minAVG = avgTwoEl;
          index = i;
      } else if(avgTreeEl < minAVG) {
          minAVG = avgTreeEl;
          index = i;
      } 
  }
  return index;
}