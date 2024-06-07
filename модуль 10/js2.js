const x = 1;
switch (typeof x) {
    case ("number"):
        console.log('число');
        break;
    case ("string"):
        console.log('строка');
        break;
    case ("boolean"):
        console.log('логический тип');
        break;
    default:
        console.log('Тип не определён');
}