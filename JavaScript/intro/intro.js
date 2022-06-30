//  Add
function solution(param1, param2) {
    return param1 + param2
}

// centuryFromYear
function solution(year) {
    return Math.ceil( year / 100 )
}

// checkPalindrome
function solution(inputString) {
    return inputString === inputString.split("").reverse().join("")
}
