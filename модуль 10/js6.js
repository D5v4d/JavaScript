const listNumber = [1, 1, 1, 1, 1]
let check = true;
for (let i = 0; i < listNumber.length; i++) {
    const items = listNumber[i];
    if (items !== listNumber[0]) {
        check = false;
        break;
    }
}

if (check) {
    console.log("true");
} else {
    console.log("false");
} 