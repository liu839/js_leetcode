var numJewelsInStones = function(J, S) {
    var j = J.split("")
    var nums = 0
    for (i in S){
        if(j.indexOf(S[i]) > -1){
            nums += 1
        }
    }
    return nums
};
console.log(numJewelsInStones("aA","aAAAvvvb"));