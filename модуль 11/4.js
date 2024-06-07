// Тут я хотел попробывать через функцию высшего порядка 
function itog() {
    return function () {
        const first = parseInt(prompt())
        return function () {
            const second = parseInt(prompt())
            return function () {
                const amount = []
                for (i = first; i <= second; i++) {
                    amount.push(i)
                }
                return amount
            }
        }
    }
}
const result = itog()()()();

function printNumber(arr) {
    let index = 0;
    const intervalId = setInterval(function () {
        if (index < arr.length) {
            console.log(arr[index]);
            index++
        } else {
            clearInterval(intervalId);
        }
    }, 1000)
}

printNumber(result)



//   Тут проше


function printNumber(first, second) {
    let index = first;

    const timerId = setInterval(function () {
        console.log(index)
        if (index == second) {
            clearInterval(timerId);
        }
        index++;
    }, 1000);
}

const firstNumber = parseInt(prompt())
const secondNumber = parseInt(prompt())
printNumber(firstNumber, secondNumber);


