function searchSpace(values) {
  let space = 0
  for (const alphabet of values) {
    if (alphabet == " ") {
      space++
    }
  }

  return space
}

console.log(searchSpace('NAZIR BAHRUL ULUM'))