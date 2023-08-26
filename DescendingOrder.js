function descendingOrder(n) {
    let str = n.toString();
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        newArr[i] = parseInt(str[i]);
    }
    newArr.sort((a, b) => b - a);
    let result = "";
    for (let i = 0; i < newArr.length; i++) {
        result += newArr[i];
    }
    return parseInt(result);
}

module.exports = descendingOrder;
