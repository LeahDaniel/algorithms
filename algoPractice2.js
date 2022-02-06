//The following are answers to https://adventofcode.com/ for the year of 2021


//! Day 1 data
const fs = require("fs");
const text = fs.readFileSync("./day1data.txt", "utf-8");
const textByLine = text.split("\n")

const depthsArray = []
for (const text of textByLine) {
    depthsArray.push(parseInt(text))
}


//! Day 1, Part 1


const countIncreases = (depths) => {
    let increases = 0

    for (let i = 1; i < depths.length; i++) {
        if (depths[i] > depths[i - 1]) {
            increases++
        }
    }

    return increases
}

// console.log(countIncreases(depthsArray))

//! Day 1, Part 2

const threeSumIncreases = (depths) => {
    let firstSum = 0
    let secondSum = 0
    let increases = 0

    for (let i = 0; i < depths.length; i++) {
        if (depths[i + 1] && depths[i + 2] && depths[i + 3]) {
            firstSum = depths[i] + depths[i + 1] + depths[i + 2]
            secondSum = depths[i + 1] + depths[i + 2] + depths[i + 3]
            if (secondSum > firstSum) {
                increases++
            }
        }
    }

    return increases
}

// console.log(threeSumIncreases(depthsArray))


//! Day 2 data

const newText = fs.readFileSync("./day2data.txt", "utf-8");
const day2data = newText.split("\n")

const practice = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2"
]

//! Day 2 Part 1

const findEndPoint = (directions) => {
    let horizontal = 0
    let depth = 0

    for (const direction of directions){
        let directionArray = direction.split(" ")
        
        if(directionArray[0] === 'forward'){
            horizontal += parseInt(directionArray[1])
        } else if (directionArray[0] === 'down'){
            depth += parseInt(directionArray[1])
        } else if (directionArray[0] === 'up'){
            depth -= parseInt(directionArray[1])
        }
    }

    return depth * horizontal
}

// console.log(findEndPoint(day2data))


//! Day 2 Part 2

const findEndPointPlus = (directions) => {
    let horizontal = 0
    let depth = 0
    let aim = 0

    for (const direction of directions){
        const directionArray = direction.split(" ")
        const angle = directionArray[0]
        const amount = parseInt(directionArray[1])
        
        if(angle === 'forward'){
            horizontal += amount
            depth += (amount * aim)
        } else if (angle === 'down'){
            aim += amount
        } else if (angle === 'up'){
            aim -= amount
        }
    }

    return depth * horizontal
}

// console.log(findEndPointPlus(day2data))
// console.log(findEndPointPlus(practice))

//! Day 3 data
const day3Text = fs.readFileSync("./day3data.txt", "utf-8");
const day3data = day3Text.split("\n")

const day3practice = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010"
]

//! Day 3 Part 1

const binaryStuff = (array) => {
    let bitObj = {}
    let epsilon = ''
    let gamma = ''

    for (const binaryStr of array){
        for (let i = 0; i< binaryStr.length; i ++){
            if(bitObj[i]){
                bitObj[i].push(binaryStr[i])
            } else {
                bitObj[i] = [binaryStr[i]]
            }
        }
    }

    let current0count = 0
    let current1count = 0


    for (let i = 0; i < Object.keys(bitObj).length; i++){
        for (const numStr of bitObj[i]){
            if(numStr === '0'){
                current0count ++
            } else {
                current1count ++
            }
        }
        if(current0count > current1count){
            gamma += "0"
            epsilon += "1"
        } else {
            gamma += "1"
            epsilon += "0"
        }
        current0count = 0
        current1count = 0
    }

    let num1 = parseInt(epsilon, 2)
    let num2 = parseInt(gamma, 2)

    return num1 * num2
}

// console.log(binaryStuff(day3data))