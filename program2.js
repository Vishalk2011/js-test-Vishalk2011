/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanNumberals(){
            'I' : 1,
            'V' : 5,
            'X' : 10,
            'L' : 50,
            'C' : 100,
            'D' : 50,
            'M' : 1000
    };
    let result = 0;
    for(let i = 0; i < s.length; i++){
        const currentNumeral = romanNumerals[s[i]];

        const nextNumerals = romanNumerals[s[i+1]];

        if(nextNumeral && currentNumeral < nextNumeral){
            result += (nextNumeral - currentNumeral);
            i++;
        }else{
            result += currentNumeral;
        }
    }
    return result;

        
};


module.exports={romanToInt}
