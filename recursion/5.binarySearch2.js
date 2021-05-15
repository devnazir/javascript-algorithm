function binarySearch(arr, left, right, key) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === key) {
      return `${key} has found at index ${mid}`
    }

    if (arr[mid].charAt(0).charCodeAt() >= key.charAt(0).charCodeAt()) {
      return binarySearch(arr, left, mid - 1, key)
    } else {
      return binarySearch(arr, mid + 1, right, key)
    }
  }

  return `${key} tidak ditemukan`
}


let arr = ["Andi", "Akbar", "Bela", "Ceko", "Dede", "Ega", "Fazar"]

console.log(binarySearch(arr, 0, arr.length - 1, "Akbar")) // Akbar has found at index 1