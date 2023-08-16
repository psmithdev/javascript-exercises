const palindromes = function (str) {
    let strReverse = str.split("").reverse().join("");
    
    if (str === strReverse) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
