
const string = prompt('Enter a name');

// Creating an array from the given string

const newArray = string.split('');

// Performing ASCII manipulation
const manArray = newArray.map(function (letter) {
    return (letter.charCodeAt(0) + 4);
});

const cipherArray = manArray.map(array => {
    return String.fromCharCode(array);
})

const cipherText = cipherArray.join('');

console.log(cipherText);
