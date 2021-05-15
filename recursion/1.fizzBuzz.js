function fizzBuzz(length, start, result) {
  if (start < length) {
    if (start % 3 === 0 && start % 5 === 0) {
      result[start] = 'Fizz Buzz'
    } else if (start % 3 === 0) {
      result[start] = 'Fizz'
    } else if (start % 5 === 0) {
      result[start] = 'Buzz'
    } else {
      result[start] = start
    }

    return fizzBuzz(length, start + 1, result)
  }

  result.shift()
  return result.join(' - ')
}

console.log(fizzBuzz(20, 1, []))