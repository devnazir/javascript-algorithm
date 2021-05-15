function uniqValues(values) {
  let obj = {}
  let uniq = []

  for (const alphabet of values) {
    if (!obj[alphabet]) {
      uniq.push(obj[alphabet] = alphabet)
    }
  }

  return uniq
}

console.log(uniqValues("AAAAAAAAAAABBBBBBBBBBBCCCC"))