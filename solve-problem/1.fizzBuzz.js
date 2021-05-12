function fizzBuzz(length) {
  const result = []
  for (let i = 1; i <= length; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result[i] = "Fizz Buzz"
    } else if (i % 3 == 0) {
      result[i] = "Fizz"
    } else if (i % 5 == 0) {
      result[i] = "Buzz"
    } else {
      result[i] = i
    }
  }

  result.shift()

  return result.join(' - ')
}

console.log(fizzBuzz(20))
// 1 - 2 - Fizz - 4 - Buzz - Fizz - 7 - 8 - Fizz - Buzz - 11 - Fizz - 13 - 14 - Fizz Buzz - 16 - 17 - Fizz - 19 - Buzz