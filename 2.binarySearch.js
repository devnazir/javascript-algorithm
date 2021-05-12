/*
  O log(n)
  logaritmic time => kebalikan dari exponential / perpangkatan

  jumlah operasi bergantung pada log(n)
*/

function binarySearch(arr, key) {
  let left = 0, right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2) 

    if (arr[mid] === key) {
      return `${key} has found at index ${mid}`
    }

    if (arr[mid] > key) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
}

// log (5) = 3
/*
  find :
  mid = 4   //
  mid = 6   // => hanya melakukan pengecekan selama 3 kali dalam n data, karena log (8) adalah 3
  mid = 7   //

  mid = 8 ==> found
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8] // n = 8
console.log(binarySearch(arr, 8)) // 8 has found at index 7