// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
// Time complexity: O(N * log(N))

function solution(A) {
    A.sort((a,b) => a-b);
    
    var getConvinations = (list) => {
        var maxProduct = -Infinity
        for(let i = 0; i<list.length; i++){
            for(let j = i+1; j<list.length; j++){
                for(let k=j+1; k< list.length; k++){
                    let tripletProduct = list[i]*list[j]*list[k];
                    if(tripletProduct > maxProduct) {
                        maxProduct = tripletProduct;
                    }
                }
            }
        }
        return maxProduct;
    };
    let edgeNumbers = A.length > 6 ? A.slice(0,3).concat(A.slice(A.length - 3)) : A;
    let maxProduct = getConvinations(edgeNumbers);
    return maxProduct;
    
}