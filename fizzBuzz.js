function fizzBuzz(num) {
    var returnText = ""
    var boolean1 = false
    var boolean2 = false
    
    if (num % 3 == 0 || num % 10 == 3 || parseInt(num / 10) == 3) {
        returnText = returnText + 'Fizz'
        boolean1 = true
    } if (num % 5 == 0 || num % 10 == 5 || parseInt(num / 10 ) == 5) {
        returnText = returnText + 'Buzz'
        boolean2 = true
    } 
    
    if(boolean1 == false && boolean2 == false){
        returnText = num + ""
    }

return returnText
}

module.exports = fizzBuzz 