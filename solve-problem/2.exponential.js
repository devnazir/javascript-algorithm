function exponential(value, ex) {
  let result = value
  if(ex === 1) return result

  for (let i = 1; i < ex; i++) {
    result *= value
  }

  return result
}

console.log(exponential(2, 3)) // 8
console.log(2**3) // 8