let names = new Map([
    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry", "blue"]
])


for (let color of names.keys()) {
    console.log(color + " - " + names.get(color));
}