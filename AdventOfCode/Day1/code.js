const fs = require("fs");
const text = fs.readFileSync("./data.txt", "utf-8");
const data = text.split("\n")

const depthsArray = []
for (const text of data) {
    depthsArray.push(parseInt(text))
}


//! Part 1


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

//! Part 2

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