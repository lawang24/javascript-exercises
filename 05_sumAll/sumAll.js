const sumAll = function(num1,num2) {

    if (!(isValid(num1) && isValid(num2)))
        return 'ERROR'

    const start = Math.min(num1,num2)
    const stop = Math.max(num1,num2)

    let sum = 0
    for (let i = start; i<=stop; i++){
        sum+=i
    }

    return sum

};

function isValid(number){
    return (typeof(number)==='number' && number>0)
}

// Do not edit below this line
module.exports = sumAll;
