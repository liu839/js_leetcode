var getRow = function(rowIndex) {
    if(rowIndex===0)return [1]
    let list = [1]
    for(let i = 0; i<rowIndex ; i++){
        list.unshift(0)
        for(let j = 0; j < i+1 ;j++){
            list[j] = list[j] + list[j+1]
        }
    }
    return list
};
