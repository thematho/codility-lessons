// Count the number of passing cars on the road.
// Time complexity:O(N)
function solution(A) {

  var travelToEast = 0,
    passingCount = 0;
  A.forEach((car) => {
    if (!car) {
      travelToEast++;
    } else {
      passingCount += travelToEast;
      if (passingCount > 1000000000) {
        return -1;
      }
    }
  });
  return passingCount > 1000000000 ? -1 : passingCount;
}