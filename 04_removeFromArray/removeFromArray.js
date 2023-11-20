const removeFromArray = function(numArray, ...removed) {
    return numArray.filter((num)=>!removed.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
