const palindromes = function (string) {
    
    const processedString = string.replace(/[^a-z0-9]/gi,'').toLowerCase();
    return processedString.split("").reverse().join("") === processedString;


};

console.log(palindromes("Hi 134234@asdfa';';"))

// Do not edit below this line
module.exports = palindromes;