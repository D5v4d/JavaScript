let result = +prompt('введите число');
if (typeof result === 'number') {
    if (isNaN(result)) {
        console.log('упс, кажется ошиблись')
    } else if (result % 2 === 0) {
        console.log('число четное')
    } else {
        console.log('число нечетное')
    }
}