function linearSearch(arr, key, start) {
  if (start < arr.length) {
    if(key == arr[start]) {
      return `${key} has found at index ${start}`
    }

    return linearSearch(arr, key, start + 1)
  }
}

const arr = ["Nazir", 1, "Hello", "Mulkan"]
console.log(linearSearch(arr, "Hello", 0))