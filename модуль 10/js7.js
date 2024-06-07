const result = [0, 0, "helloy", null, 1, 2, 3];
let zero = 0, text = 0, nulls = 0, even = 0, odd = 0;
result.forEach((item) => {
    if (item === 0) {
        zero++
    } else if (typeof item === 'string') {
        text++
    } else if (typeof item !== 'number') {
        nulls++
    } else if (item % 2 === 0) {
        even++
    } else {
        odd++
    }
})

console.log("Нулей " + zero)
console.log("Текст " + text)
console.log("nulls " + nulls)
console.log("Четных " + even)
console.log("Нечетных " + odd)