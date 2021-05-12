/*
  O(n) 
  pertumbuhan n akan memengaruhi 
  jumlah operasi, karena jumlah operasi akan berbanding lurus selama pertumbuhan n.
  n => size / total data / length data
  =====================================

  Ini berarti semakin tinggi nilai n maka runtime code atau waktu proses 
  untuk menjalankan algoritma akan semakin besar
*/

function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === key) {
      return `${key} has found at index ${i}`
    }
  }
}

/*
  let i = 0 => pemberian nilai, (nilai const, operasi dijalankan satu kali) operasi 1
  i < arr.length => perbandingan, (operasi berbanding lurus dengan pertumbunan n) operasi 2
  i++ => iterasi, (operasi berbanding lurus dengan pertumbunan n) operasi 3

  n = 5
  operasi = 2n
  2n = 1 + 10 => 11 operasi
*/

const arr = [2, 1, 3, 4, 5] // n = 5

console.log(linearSearch(arr, 5)) // 5 has found at index 4