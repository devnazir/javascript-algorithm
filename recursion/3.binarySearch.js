function binarySearch(arr, left, right, key) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === key) {
      return `${key} has found at index ${mid}`
    }

    if (arr[mid] > key) {
      return binarySearch(arr, left, mid - 1, key)
    } else {
      return binarySearch(arr, mid + 1, right, key)
    }
  }
}

const arr = [4, 2, 3, 1]
arr.sort()
console.log(binarySearch(arr, 0, arr.length - 1, 1))