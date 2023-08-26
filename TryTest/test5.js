const filter_list = (list) => {
    let longer = list.length;
    let newArr = [];
    for (let i = 0; i < longer; i++){
        (typeof list[i] === 'number') ? newArr.push(list[i]) : undefined
    }
    return newArr;
}
//return list.filter(v => typeof v === 'number');
module.exports = filter_list;