// Getting the elements from HTML document
let Password_text = document.getElementById("password_actual");
let uppercase_check = document.getElementsByClassName("uppercase")[0];
let lowercase_check = document.getElementsByClassName("lowercase")[0];
let numbers_check = document.getElementsByClassName("numbers")[0];
let special_symbols_check =
    document.getElementsByClassName("special_symbols")[0];
let spaces_check = document.getElementsByClassName("spaces")[0];
let x;
let password_attributes = document.getElementsByClassName("modifiers_inner");
//Arrays for the Password
const lowercase_array = [...Array(26)].map((_, i) =>
    String.fromCharCode(i + 97)
);
const uppercase_array = [...Array(26)].map((val, i) =>
    String.fromCharCode(i + 65)
);
const symbols_array = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    "'",
    "/",
    ":",
    ";",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let attributes_applied = 0;
let button = document.getElementById("button");
let array = [uppercase_array];
let temp1 = 0,
    temp2 = 0,
    temp3 = 0;
//Logic Goes Here

Array.from(password_attributes).forEach((e) => {
    e.addEventListener("click", () => {
        if (e.classList[0] == "uppercase" || e.classList[0] == "spaces") {
        } else {
            e.firstElementChild.checked == true
                ? (e.firstElementChild.checked = false)
                : (e.firstElementChild.checked = true);
        }
    });
});

button.onclick = () => {
    let length = document.getElementById("length").value;
    if (length >= 10 && length <= 140) {
        array = [uppercase_array];
        if (numbers_check.firstElementChild.checked == true) {
            array.forEach((e) => {
                if (e == numbers) {
                    temp1 == 1;
                }
            });
            if (temp1 == 0) {
                array.push(numbers);
            }
        }
        if (lowercase_check.firstElementChild.checked == true) {
            array.forEach((e) => {
                if (e == lowercase_array) {
                    temp2 == 1;
                }
            });
            if (temp2 == 0) {
                array.push(lowercase_array);
            }
        }
        if (special_symbols_check.firstElementChild.checked == true) {
            array.forEach((e) => {
                if (e == symbols_array) {
                    temp3 == 1;
                }
            });
            if (temp3 == 0) {
                array.push(symbols_array);
            }
        }
        Password_text.innerHTML = "";
        length = document.getElementById("length").value;
        attributes_applied = document.querySelectorAll(
            'input[type="checkbox"]:checked'
        ).length;
        for (let i = 0; i < length; i++) {
            x = Math.floor(Math.random() * attributes_applied);
            Password_text.innerHTML +=
                array[x][Math.floor(Math.random() * array[x].length)];
        }
    } else {
        alert("The lenght of password must be between 10 and 140");
    }
};
