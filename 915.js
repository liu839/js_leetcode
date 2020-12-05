/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
    for (
        let spliceBy = 1, leftMax = -Infinity, rightMin = Infinity;
        spliceBy < A.length;
        spliceBy ++
    ) {
        leftMax  = Math.max(A[spliceBy-1], leftMax)
        rightMin = A[spliceBy-1] > rightMin? rightMin: Math.min(...A.slice(spliceBy))
        if (leftMax <= rightMin) return spliceBy
    }
};
