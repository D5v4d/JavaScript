const result = [0, 0, "helloy", null, 1, 2, 3];

function countingGroups() {
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
    return [zero, text, nulls, even, odd];
}
const list = countingGroups();

console.log(result)
console.log("Нулей - " + list[0])
console.log("Текст - " + list[1])
console.log("nulls - " + list[2])
console.log("Четных - " + list[3])
console.log("Нечетных - " + list[4])