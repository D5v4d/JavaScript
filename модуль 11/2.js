const namers = prompt("Введите число от 0 до 1000")

function calculatingNumbers(result) {
    if (result > 1000 || result < 0) {
        return "Данные неверны"
    } else {
        if (result == 1 || result == 0) {
            return "Не простое и не составное число"
        } else {
            for (i = 2; i < namers; i++) {
                if (result % i === 0) {
                    return "Составное число"
                }
            }
            return "Простое число"
        }
    }
}

const itog = alert(calculatingNumbers(namers))