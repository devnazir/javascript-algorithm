// O(n^2)

function selectionShort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lockIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lockIndex] > arr[j]) {
        lockIndex = j
      }
    }

    [arr[i], arr[lockIndex]] = [arr[lockIndex], arr[i]]
  }

  return arr
}

let arr = [2, 3, 1, 4, 5]
console.log(selectionShort(arr))