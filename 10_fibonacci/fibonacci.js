const fibonacci = function(index) {
    
    const idx = Number(index)

    if (idx<0) return 'OOPS';
    
    let ans = 1
    let prev = 0

    for (let i = 2; i<=index; i++){
        let temp = ans
        ans += prev
        prev = temp
    }

    return ans;


};

// Do not edit below this line
module.exports = fibonacci;
