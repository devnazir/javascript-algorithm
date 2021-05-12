// O(n^2)


function bubleShort(arr) {
  for(let i = 0; i<arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }

  return arr
}

const arr = [2, 3, 1, 4, 5]
/*
  [2, 3, 1, 4, 5]
  [1, 3, 2, 4, 5]
  [1, 2, 3, 4, 5]
  [1, 2, 3, 4, 5]
*/

console.log(bubleShort(arr)) // [1, 2, 3, 4, 5]