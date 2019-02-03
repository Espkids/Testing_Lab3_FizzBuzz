const fizzBuzz = require('./fizzBuzz')

test('A number(3) is Fizz if it is divisible by 3 ' , () => {
    expect(fizzBuzz(3)).toBe('Fizz')
})

test('A number(5) is Buzz if it is divisible by 5 ' , () => {
    expect(fizzBuzz(5)).toBe('Buzz')
})


test('A number(13) is Fizz if number has a 3 in it' , () => {
    expect(fizzBuzz(13)).toBe('Fizz')
})

test('A number(59) is Buzz if number has a 5 in it' , () => {
    expect(fizzBuzz(59)).toBe('Buzz')
})


test('A number(42) is Fizz if it is divisible by 3 or  has a 3 in it' , () => {
    expect(fizzBuzz(42)).toBe('Fizz')
})

test('A number(73) is Fizz if it is divisible by 3 or  has a 3 in it' , () => {
    expect(fizzBuzz(73)).toBe('Fizz')
})

test('A number(20) is Buzz if it is divisible by 5 or  has a 5 in it' , () => {
    expect(fizzBuzz(20)).toBe('Buzz')
})

test('A number(52) is Buzz if it is divisible by 5 or  has a 5 in it' , () => {
    expect(fizzBuzz(52)).toBe('Buzz')
})

test('A number(15) is FizzBuzz if it is divisible by 3 or has a 3 in it or it is divisible by 5 or  has a 5 in it' , () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
})

test('A number(53) is FizzBuzz if it is divisible by 3 or has a 3 in it or it is divisible by 5 or  has a 5 in it' , () => {
    expect(fizzBuzz(53)).toBe('FizzBuzz')
})


