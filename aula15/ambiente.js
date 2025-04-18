let num = [5, 8, 2, 9, 3]


console.log(num)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)  
console.log(`O primeiro valor do vetor é ${num[0]}`)

/* for (let c = 0; c < num.length; c++) {
    console.log(num[c])
} */

for (let c in num) {
    console.log(num[c])
}
