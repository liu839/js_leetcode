/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let sum_ = 0;
    customers.forEach((val,index)=>{
        if(grumpy[index]){
        }
        else{
        sum_ += val
        }
    });
    max_ = 0
        for(i=0; i<X; i++){
            max_ += customers[i] *(grumpy[i]&1)
        }
    temp = max_
    for(i = X; i<customers.length;i++){
        temp += customers[i] *(grumpy[i]&1)
        temp -= customers[i-X] * (grumpy[i-X]&1)
        max_ = Math.max(temp, max_)
    }
    return sum_ + max_
};