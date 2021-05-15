function exponential(value, ex) {
  if(ex === 1) return value
  return value * exponential(value, ex - 1)
}

console.log(exponential(2, 4)) // 16