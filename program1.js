/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];
    const brackets = { '(': ')','[':']','{':'}'};

    for(let char of s){
        if(brackets[char]){
            stack.push(char);
        }else{
            const lastBracket = stack.pop();
            if(brackets[lastBracket] !== char){
                return false;
            }
        }
    }
    return stack.length === 0;
};

module.exports = { isValid };


