function factorial(value) {
  for (let i = value - 1; i > 0; i--) {
    value *= i
  }

  return value
}

console.log(factorial(3)) // 6
console.log(3 * 2 * 1) // 6