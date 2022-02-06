const fs = require("fs");
const text = fs.readFileSync("./data.txt", "utf-8");
const data = text.split("\n")

const practice = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2"
]

//! Part 1

const findEndPoint = (directions) => {
    let horizontal = 0
    let depth = 0

    for (const direction of directions) {
        let directionArray = direction.split(" ")

        if (directionArray[0] === 'forward') {
            horizontal += parseInt(directionArray[1])
        } else if (directionArray[0] === 'down') {
            depth += parseInt(directionArray[1])
        } else if (directionArray[0] === 'up') {
            depth -= parseInt(directionArray[1])
        }
    }

    return depth * horizontal
}

// console.log(findEndPoint(data))


//! Part 2

const findEndPointPlus = (directions) => {
    let horizontal = 0
    let depth = 0
    let aim = 0

    for (const direction of directions) {
        const directionArray = direction.split(" ")
        const angle = directionArray[0]
        const amount = parseInt(directionArray[1])

        if (angle === 'forward') {
            horizontal += amount
            depth += (amount * aim)
        } else if (angle === 'down') {
            aim += amount
        } else if (angle === 'up') {
            aim -= amount
        }
    }

    return depth * horizontal
}

// console.log(findEndPointPlus(data))
// console.log(findEndPointPlus(practice))