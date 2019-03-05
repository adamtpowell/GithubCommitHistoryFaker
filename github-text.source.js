(function() {
    "use strict";

    let baseColor = "#ebedf0";
    let drawColor = "#196127";

    // Initialize the grid of rows.
    let rowElements = document.querySelectorAll(".js-calendar-graph-svg > g > g");
    let rows = [];
    for (let row of rowElements) {
        rows.push(row.children)
    }

    // Reset the grid to the default color.
    for (let row of rows) {
        if (row.length === 7) { // Omit the last, incomplete row
            for (let rect of row) {
                rect.style.fill = baseColor;
            }
        }
    }

    // Get the input from the user.
    let input = prompt("What do you want your commit history to say?", "hire me plz").toUpperCase();

    // Initialize the font.
    let font = {
        "A": [
            [0, 1, 0],
            [1, 0, 1],
            [1, 1, 1],
            [1, 0, 1],
            [1, 0, 1],
        ],
        "B": [
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 0],
        ],
        "C": [
            [0, 1, 1],
            [1, 0, 0],
            [1, 0, 0],
            [1, 0, 0],
            [0, 1, 1],
        ],
        "D": [
            [1, 1, 0],
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [1, 1, 0],
        ],
        "E": [
            [1, 1, 1],
            [1, 0, 0],
            [1, 1, 0],
            [1, 0, 0],
            [1, 1, 1],
        ],
        "F": [
            [1, 1, 1],
            [1, 0, 0],
            [1, 1, 0],
            [1, 0, 0],
            [1, 0, 0],
        ],
        "G": [
            [1, 1, 1, 1],
            [1, 0, 0, 0],
            [1, 0, 1, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1],
        ],
        "H": [
            [1, 0, 1],
            [1, 0, 1],
            [1, 1, 1],
            [1, 0, 1],
            [1, 0, 1],
        ],
        "I": [
            [1, 1, 1],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 1],
        ],
        "J": [
            [1, 1, 1],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [1, 0, 0],
        ],
        "K": [
            [1, 0, 0, 1],
            [1, 0, 1, 0],
            [1, 1, 0, 0],
            [1, 0, 1, 0],
            [1, 0, 0, 1],
        ],
        "L": [
            [1, 0, 0],
            [1, 0, 0],
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 1],
        ],
        "M": [
            [1, 0, 0, 1],
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
        ],
        "N": [
            [1, 0, 0, 1],
            [1, 1, 0, 1],
            [1, 0, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
        ],
        "O": [
            [0, 1, 0],
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [0, 1, 0],
        ],
        "P": [
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 0],
            [1, 0, 0],
            [1, 0, 0],
        ],
        "Q": [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 1, 0],
            [0, 1, 0, 1],
        ],
        "R": [
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 0],
            [1, 0, 1],
            [1, 0, 1],
        ],
        "S": [
            [0, 1, 1],
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
            [1, 1, 0]
        ],
        "T": [
            [1, 1, 1],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ],
        "U": [
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [0, 1, 1, 0],
        ],
        "V": [
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1],
            [0, 1, 0],
        ],
        "W": [
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1],
            [1, 0, 0, 1],
        ],
        "X": [
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
        ],
        "Y": [
            [1, 0, 1],
            [1, 0, 1],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ],
        "Z": [
            [1, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 1, 1, 0],
            [1, 0, 0, 0],
            [1, 1, 1, 1],
        ],
        " ": [
            [],
            [],
            [],
            [],
            [],
        ]
    }

    function printCharacter(char, x, y) {
        let cArr = font[char];
        console.log(cArr);
        for (let cy = 0; cy < cArr.length; cy++) {
            for (let cx = 0; cx < cArr[0].length; cx++) {
                if (cx + x < rows.length && cArr[cy][cx] === 1) {
                    rows[x + cx][y + cy].style.fill = drawColor;
                }
            }
        }
        return cArr[0].length + 1; // Return the width of the character just printed.
    }

    let characters = input.split("");
    console.log(characters);
    let x = 1
    for (let i = 0; i < characters.length; i++) {
        x += printCharacter(characters[i], x, 1);
    }
})();
