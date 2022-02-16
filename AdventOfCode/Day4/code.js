const fs = require("fs");
const text = fs.readFileSync("./data.txt", "utf-8");
const unformattedData = text.split("\n")
let data = []
for (const string of unformattedData) {
    data.push(string.replace(/  +/g, ' ').trim())
}

const practiceBoards = [
    '22 13 17 11 0',
    '8 2 23 4 24',
    '21 9 14 16 7',
    '6 10 3 18 5',
    '1 12 20 15 19',
    '',
    '3 15 0 2 22',
    '9 18 13 17 5',
    '19 8 7 25 23',
    '20 11 10 24 4',
    '14 21 16 12 6',
    '',
    '14 21 17 24 4',
    '10 16 15 9 19',
    '18 8 23 26 20',
    '22 11 13 6 5',
    '2 0 12 3 7'
]

const practiceDraws = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24]

//! Part 1

const formatBoards = (array) => {
    //add strings to arrays within an array in order to separate boards from each other
    let arrayOfArrays = []
    let currentArrayRow = []

    for (const row of array) {
        if (row === '') {
            arrayOfArrays.push(currentArrayRow)
            currentArrayRow = []
        } else {
            currentArrayRow.push(row)
        }
    }
    arrayOfArrays.push(currentArrayRow)

    //create Map that has each board has a property where the key is an id and the value is an object. The object has one property where the key is the score string and the value is an object with properties of row, column, and marked
    let mapOfBoards = new Map()

    for (let i = 0; i < arrayOfArrays.length; i++) {
        mapOfBoards.set(i, {})
        const foundObj = mapOfBoards.get(i)
        const arrayOfNums = arrayOfArrays[i][0].split(" ")

        for (let j = 0; j < arrayOfNums.length; j++) {
            foundObj[arrayOfNums[j]] = {
                row: i + 1,
                column: j + 1,
                marked: false
            }
        }
    }

    return mapOfBoards
}

const generator = function* generator(value) {
    if (boardCounter.has(key)) {
        let board = boardCounter.get(key)
        const newRowScore = board.rows[value[score].row]+ 1
        const newColumnScore = board.columns[value[score].column]+ 1
        yield {newRowScore, newColumnScore}
    } else {
        boardCounter.set(key,
            {
                rows: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0
                },
                columns: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0
                }
            })
        let board = boardCounter.get(key)
        const newRowScore = board.rows[value[score].row]+ 1
        const newColumnScore = board.columns[value[score].column]+ 1
        yield {newRowScore, newColumnScore}
    }

}()

const generateScore = (scoreDraws, boardArray) => {
    const mapOfBoards = formatBoards(boardArray)
    const boardCounter = new Map()

    for (const score of scoreDraws) {
        do {
            mapOfBoards.forEach((value, key) => {
                if (value[score]) {
                    value[score].marked = true
    
                   
                }
            }
            )

        } 
    }
    console.log(boardCounter)
}

generateScore(practiceDraws, practiceBoards)

//! Part 2


