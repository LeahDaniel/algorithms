const fs = require("fs");
const text = fs.readFileSync("./data.txt", "utf-8");
const data = text.split("\n")

const practice = [
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

//! Part 1

const createNewBinary = (array) => {
    let bitObj = {}
    let epsilon = ''
    let gamma = ''

    for (const binaryStr of array) {
        for (let i = 0; i < binaryStr.length; i++) {
            if (bitObj[i]) {
                bitObj[i].push(binaryStr[i])
            } else {
                bitObj[i] = [binaryStr[i]]
            }
        }
    }

    let current0count = 0
    let current1count = 0


    for (let i = 0; i < Object.keys(bitObj).length; i++) {
        for (const numStr of bitObj[i]) {
            if (numStr === '0') {
                current0count++
            } else {
                current1count++
            }
        }
        if (current0count > current1count) {
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

// console.log(createNewBinary(data))

//! Part 2

const findBinary = (array) => {
    let oxygens = [...array]
    let co2s = [...array]
    let current0countOx = 0
    let current1countOx = 0
    let current0countCo2 = 0
    let current1countCo2 = 0

    for (let i = 0; i < oxygens[0].length; i++) {
        for (let j = 0; j < oxygens.length; j ++) {
            if (oxygens[j][i] === '0') {
                current0countOx++
            } else {
                current1countOx++
            }
        }
        for (let x = 0; x < co2s.length; x ++) {
            if (co2s[x][i] === '0') {
                current0countCo2++
            } else {
                current1countCo2++
            }
        }
        if(oxygens.length > 1){
            for (let y = 0; y < array.length; y ++) {
                if (current0countOx > current1countOx) {
                    let foundIndex = oxygens.findIndex(binStr => binStr[i] === '1')
                    if(foundIndex !== -1) {
                        oxygens.splice(foundIndex, 1) 
                    }
                } else {
                    let foundOtherIndex = oxygens.findIndex(binStr => binStr[i] === '0')
                    if(foundOtherIndex !== -1) {
                        oxygens.splice(foundOtherIndex, 1) 
                    }
                }
            }
        }
        if(co2s.length > 1){
            for (let z = 0; z < array.length; z ++) {
                if (current0countCo2 > current1countCo2) {
                    let foundIndex = co2s.findIndex(binStr => binStr[i] === '0')
                    if(foundIndex !== -1) {
                        co2s.splice(foundIndex, 1) 
                    }
                } else {
                    let foundOtherIndex = co2s.findIndex(binStr => binStr[i] === '1')
                    if(foundOtherIndex !== -1) {
                        co2s.splice(foundOtherIndex, 1) 
                    }
                }
            }
        }
        
        current0countOx = 0
        current1countOx = 0
        current0countCo2 = 0
        current1countCo2 = 0
    }

    let num1 = parseInt(oxygens[0], 2)
    let num2 = parseInt(co2s[0], 2)

    return num1 * num2
}

// console.log(findBinary(data))