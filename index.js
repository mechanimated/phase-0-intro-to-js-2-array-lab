const cats = [
    "Milo",
    "Otis",
    "Garfield"
];


function destructivelyAppendCat() {
    cats.push("Ralph");
};

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const appendCat = [...cats]
    appendCat.push("Broom");
    return appendCat
}

function prependCat() {
    const prependCat = [...cats]
    prependCat.unshift("Arnold");
    return prependCat
}

function removeLastCat() {
    const removeLastCat = [...cats]
    removeLastCat.pop();
    return removeLastCat
}

function removeFirstCat() {
    const removeFirstCat = [...cats]
    removeFirstCat.shift();
    return removeFirstCat
}