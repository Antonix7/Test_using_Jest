const space_count = (string) => {

    let spaceSum = 0;
    for (let i = 0; i < string.length; i++){
        (string[i] == " ") ? spaceSum++ : "el texto no contiene espacios";
    }

    return spaceSum;
}

module.exports = space_count;