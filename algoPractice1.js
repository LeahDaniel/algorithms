
//!1


const sumOfMultiples = () => {
    let sum = 0

    for (let i = 0; i <= 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
            console.log(i, sum)
        }
    }

    return `The answer is ${sum}`
}

// console.log(sumOfMultiples())

//!2

const staircase = (n) => {
    //if n is within the specified constraints from the instructions
    if (n < 100 && n > 0) {
        for (let i = 1; i <= n; i++) {
            //each for loop iteration will console.log a new row
            const spacesNum = n - i
            let spaceString = ''
            let numString = ''

            for (let s = 0; s < spacesNum; s++) {
                //create the string of spaces (which should be the total width,
                // minus how many #'s are on current row)
                spaceString += " "
            }

            for (let t = 0; t < i; t++) {
                //create the string of num symbols
                numString += "#"
            }

            //combine spaces and num strings 
            let string = spaceString + numString

            //console.log whole string with spaces and nums
            console.log(string)
        }
    } else {
        console.log("invalid num")
    }
}

// staircase(6)

//!3

const tallestBuilding = (array) => {
    let tallest = 0
    let tallBuildingCount = 0

    for (const height of array) {
        if (height > tallest) {
            tallest = height

        }
    }

    for (const height of array) {
        if (height === tallest) {
            tallBuildingCount += 1
        }
    }

    console.log(tallBuildingCount)
}

// tallestBuilding([ 2, 6, 10, 11, 13, 18, 25, 28, 31, 32, 34, 36, 38, 45, 48, 54, 57, 62, 64, 73, 74, 79, 81, 83, 85, 89, 101, 111, 121, 137, 144, 146, 159, 160, 164, 167, 169, 170, 174, 176, 178, 179, 180, 183, 185, 191, 192, 196, 198, 200, 204, 206, 207, 211, 212, 217, 226, 229, 233, 235, 238, 245, 246, 250, 252, 254, 258, 260, 263, 271, 273, 285, 289, 291, 299, 300, 301, 302, 312, 315, 316, 319, 325, 333, 338, 341, 345, 364, 997, 372, 373, 374, 382, 383, 388, 393, 406, 412, 417, 422, 428, 429, 433, 434, 436, 441, 445, 447, 452, 469, 470, 478, 484, 495, 513, 997, 530, 541, 547, 550, 556, 557, 558, 559, 562, 564, 569, 571, 578, 583, 587, 591, 593, 600, 603, 606, 608, 609, 612, 616, 617, 620, 622, 623, 636, 638, 651, 653, 655, 662, 664, 665, 686, 687, 692, 695, 700, 701, 997, 706, 707, 708, 713, 724, 728, 730, 732, 746, 755, 767, 775, 783, 787, 789, 815, 825, 827, 829, 840, 841, 844, 997, 886, 890, 893, 898, 901, 904, 909, 918, 919, 924, 931, 936, 944, 957, 976, 977, 997, 997
// ])

//!4


const roundGradesWithMath = grades => {
    const round = num => {
        return Math.ceil(num / 5) * 5
    }

    if (grades.length >= 1 && grades.length <= 30) {
        const newArray = []
        for (const grade of grades) {
            if (grade < 38 && grade > 0) {
                newArray.push(grade)
            } else if ((round(grade) - grade) <= 2 && grade <= 100 && grade >= 0) {
                newArray.push(round(grade))
            } else if (grade < 100 && grade > 0) {
                newArray.push(grade)
            } else {
                return `Error occurred at : ${grade}`
            }
        }
        return newArray
    } else {
        return "oops"
    }
}

// console.log(roundGradesWithMath([22, 91, 92, 93, 94, 95, 96, 97, 98]))

const roundGradesWithoutMath = (grades) => {
    if (grades.length >= 1 && grades.length <= 30) {
        const newArray = []
        for (const grade of grades) {
            let gradeOne = grade + 1
            let gradeTwo = grade + 2

            if (grade < 38 && grade > 0) {
                newArray.push(grade)
            } else if (gradeOne % 5 === 0 && grade <= 100 && grade >= 0) {
                newArray.push(gradeOne)
            } else if (gradeTwo % 5 === 0 && grade <= 100 && grade >= 0) {
                newArray.push(gradeTwo)
            } else if (grade < 100 && grade > 0) {
                newArray.push(grade)
            } else {
                return `Error occurred at : ${grade}`
            }
        }
        return newArray
    } else {
        return "oops"
    }
}

// console.log(roundGradesWithoutMath([91, 92, 93, 94, 95, 96]))


//!5

const fuelCalc = (array) => {
    let sum = 0

    for (const moduleMass of array) {
        const fuelRequired = Math.floor(moduleMass / 3) - 2
        sum += fuelRequired
    }

    return sum
}


const moduleMasses = [
    53035,
    84950,
    100012
]

// console.log(fuelCalc(moduleMasses))

//!6

const isPalindrome = (num) => {
    const stringNum = num.toString()
    const reversed = stringNum.split("").reverse().join("")
    return reversed === stringNum
}

const maxPalindrome = (minLimit, maxLimit) => {
    const allPalindromes = []

    for (let firstNum = minLimit; firstNum <= maxLimit; firstNum++) {
        for (let secondNum = minLimit; secondNum < maxLimit; secondNum++) {
            if (isPalindrome(firstNum * secondNum)) {
                allPalindromes.push(firstNum * secondNum)
            }
        }
    }

    return Math.max(...allPalindromes)
}

// console.log(maxPalindrome(10, 99))
// console.log(maxPalindrome(100, 999))


//!7
//with reverse
const isPalindromeString = (string) => {
    const reversed = string.split("").reverse().join("")
    return reversed === string
}

//without reverse
const isPalindromeString2 = (string) => {
    let reversed = ''

    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i]
    }

    return reversed === string
}

// console.log(isPalindromeString("tattarrattat"))
// console.log(isPalindromeString2("tattarrattat"))
// console.log(isPalindromeString("dog"))
// console.log(isPalindromeString2("dog"))

//! 8

const climbingLeaderboard = (ranked, player) => {
    const findRanking = (score, leaderboard) => {
        let uniqueLeaderboard = [... new Set(leaderboard)]
        let foundScoreRank = 0

        uniqueLeaderboard.forEach((value, key) => {
            if (value === score) {
                foundScoreRank = key + 1
            }
        })

        return foundScoreRank
    }

    const orderArray = (array) => {
        array.sort(function (a, b) {
            return b - a
        })
        return array
    }

    let ranks = []
    let newScoreArray = ranked

    for (const score of player) {
        newScoreArray.push(score)
        newScoreArray = orderArray(newScoreArray)
        const foundRank = findRanking(score, newScoreArray)
        if (foundRank < 5) {
            ranks.push(foundRank)
        }
    }

    return ranks
}

// topFiveScores = [500, 450, 450, 300, 290, 270]
// currentPlayerGameScores = [280, 400, 500]

topFiveScores = [490, 450, 400, 320, 320, 290]
currentPlayerGameScores = [50, 310, 480, 200, 350, 180]


// console.log(climbingLeaderboard(topFiveScores, currentPlayerGameScores))

//! 9

const frequencyChanges = [12, -10, -4, -8, 18, -1, -13,
    10, -13, 5, 7, 6, 14, -9, -8, 7, 18, -11, 13, -1, 20, 11,
    13, -2, 3, -8, -16, 4, -6, -3, -9, -12, 16, 17, -5, -11,
    2, -20, -15, 5, 3, 11, -13, -18, -13, -6, -19, 6, -15,
    -11, 16, 1, 15, 5, -18, 14, -5, -15, -3, 11, -17, 19, 12,
    5, 8, -2, 10, 13, 8, 19, 8, 17, -6, 8, 4, -9, 19, 13, 11,
    -2, 20, 3, -16, -18, 3, -5, -15, 18, 18, 9, -18, -19, 17,
    -16, 15, -12, 2, -20, 7, -3, -9, 10, 4, 20, -13, -17, -23,
    7, 18, 21, 16, 17, 5, -14, 19, -18, -10, 7, 1, -13, 16,
    -21, 12, 19, 11, -5, 14, 11, -9, 19, -2, -7, 3, -20, 9,
    -16, 9, 10, 17, -18, -12, -11, -11, 20, -18, -12, -5, -7,
    15, 20, 18, 23, 17, -7, 5, -7, 8, -2, -15, 5, -17, 1, -5,
    -8, 7, 15, 5, 1, 15, -11, -1, 17, 15, 18, 7, -3, -16, -7,
    18, -6, 17, -2, 20, -2, -7, -17, 20, -1, 8, -16, -12, -6,
    -3, 19, 19, 18, -7, 17, 5, 19, -15, -13, 2, 14, 2, 1, 13,
    -7, 2, -10, -10, -15, 9, 9, 14, 7, 4, -15, -5, -17, -5,
    -9, 13, 6, 2, -15, -11, 17, -19, 14, -13, 3, 1, -18, -15,
    -17, -12, 13, -17, 5, -9, 2, 5, -8, -8, -19, 11, 20, 11,
    16, -7, 20, 3, -21, -8, -11, -9, 8, -15, -20, -20, -17,
    24, 17, -12, -20, -12, -3, 14, -18, 13, -74, -19, -13, 2,
    23, -13, 24, -17, -5, 14, -10, -2, -10, -7, -6, -23, -10,
    -3, 9, -11, 8, 16, -8, -28, -10, 17, -9, -10, -9, -8, 2,
    5, -19, 11, -16, 8, -14, -5, 8, 4, -3, 8, -7, 4, 1, -2,
    -7, 15, 3, 10, 4, 1, -14, -18, 15, -21, 3, 14, -15, -13,
    -14, -6, 15, 1, 11, 26, 19, -16, 5, -2, -9, 12, 19, -11,
    23, -3, 15, -13, 14, -9, -26, 17, 63, -4, -20, -10, -39,
    -55, -6, -15, -9, -16, -17, -14, -12, 21, 1, -2, -16, -13,
    -21, 26, 27, 17, 6, 2, -18, 1, 18, 25, -3, 19, -35, -26,
    4, -48, -3, 1, 20, 8, -27, -25, -8, -10, -24, 3, -61, 64,
    17, 21, 84, 49, 4, -233, -2, 535, 55053, -1, -12, 2, -19,
    13, 10, 10, 15, -12, 13, 15, 8, -15, -13, 10, -7, 3, -10,
    16, 12, -6, 4, 3, 19, 14, 2, 10, 4, 16, -2, -8, 18, -14,
    -1, 4, -1, 15, 10, -6, 17, 17, 15, 8, 15, 6, 9, 19, -2,
    13, -19, -15, -6, -15, -4, -10, -1, -4, -18, 15, -2, 3,
    13, 5, 14, 15, -19, 7, 13, -14, -11, 10, 8, 13, -16, 5,
    -13, -16, 10, -5, -9, -1, 2, 15, -4, -19, -7, 19, 12, 24,
    10, 10, 18, 15, 12, -5, -11, 5, 10, -12, -7, -14, 12, -17,
    -13, -20, 14, -13, 11, -16, 15, 15, 18, -8, 10, 17, 1,
    -10, 19, 8, 7, 4, 11, 11, -15, -13, 18, -17, 19, 5, -6,
    -9, 6, 18, -10, 9, -18, -17, -2, -14, -19, -1, -8, -10,
    -7, -18, 3, 14, 6, 14, -17, 18, 10, 23, 4, -14, 12, -4,
    -19, 15, 20, -5, 15, 16, -21, 14, -15, -17, -15, 7, 10,
    18, 21, 14, 6, 4, 6, 17, -18, -14, -18, -8, 24, 10, 8,
    -13, 18, 3, -18, -2, -3, -8, -1, -1, -16, 9, -4, 10, 20,
    18, 9, -1, 17, -2, 16, 16, -17, 13, 5, -6, -15, -19, 11,
    -17, -8, 10, -1, 10, -22, -15, 11, 20, -14, 2, 11, 17, 17,
    18, -8, 7, 8, -14, 19, -6, 2, 10, 6, 5, 10, 3, -8, -4,
    -13, -15, -16, -5, -19, 16, -15, 5, -27, -18, 3, -7, 21,
    -8, -15, -4, -5, -8, 3, 22, 6, 8, 12, -27, 32, -4, 2, 4,
    -5, 26, -5, -3, -4, 21, 34, 4, -6, 17, -6, 7, 7, 10, -19,
    20, 2, 14, 14, 17, 5, 16, -17, 11, -13, -5, 15, 7, -18,
    -9, -13, -2, -14, -2, -4, -3, -7, 12, 14, -9, 20, 7, 7,
    15, 12, -3, -14, -1, 4, -16, 14, -3, -16, -8, 14, 18, 14,
    -5, -6, 7, 14, 16, -22, -16, -13, -9, -13, -1, -15, -9,
    -6, 20, 17, 1, -3, 44, 17, 17, 21, 9, 20, -17, 11, 10,
    -15, 10, 3, 4, 16, 8, -7, 17, 8, 15, -9, 4, 28, 8, -1, -6,
    -10, -65, 4, -42, -14, -14, -24, -15, 6, 13, -72, -1, -17,
    -5, 7, -27, 19, -21, -2, 20, -2, 3, -34, 30, 23, -30, -5,
    20, -27, 11, -27, -7, -23, 39, -225, 15, 60, 472, 54569,
    1, 15, 13, 6, -10, -13, -2, -6, 13, 2, 5, -10, -5, -11,
    -1, 18, -12, -15, -7, -1, 13, -18, -1, -5, -2, -14, -5,
    -4, -16, -10, 8, -1, 20, 11, 15, -3, -17, 8, 11, -6, -9,
    -8, -11, -1, -13, -3, -8, 12, 18, -11, -17, -12, 6, -7,
    -3, 15, 9, 13, -14, 18, 20, -6, -12, 2, 20, -12, -23, -17,
    -7, 1, -24, -17, -7, -18, 3, -13, 14, 2, -12, -16, 2, -35,
    -3, 2, -18, -14, -13, 10, -3, -17, 4, 23, 16, -7, -30, 29,
    -19, 18, -3, 20, -7, -3, 77, 1, 42, 18, 9, -1, 23, 57, 8,
    -12, 1, 5, 12, 3, 10, -1, 14, 20, -7, -3, -14, -12, 9, 16,
    16, 12, 14, 11, 11, 2, 1, 19, -10, 18, -17, -9, -11, -8,
    10, -1, -110292]

const changeFrequency = (frequencies) => {
    let cumulativeFrequency = 0

    for (const frequency of frequencies) {
        cumulativeFrequency += frequency
    }

    return cumulativeFrequency
}

// console.log(changeFrequency(frequencyChanges))

//!10

// Note: uses same data as #9

const firstDuplicateFrequency = (frequencies) => {
    let cumulativeFrequency = 0
    const currentFrequencySet = new Set()
    let duplicate = 0

    while (duplicate === 0) {
        for (const frequency of frequencies) {
            cumulativeFrequency += frequency
            if (currentFrequencySet.has(cumulativeFrequency)) {
                duplicate = cumulativeFrequency
            } else {
                currentFrequencySet.add(cumulativeFrequency)
            }

        }
    }

    return duplicate
}

// console.log(firstDuplicateFrequency(frequencyChanges))

//! 11

const checkSum = (productIds) => {
    let letterCounts = {}
    let tripleCounter = 0
    let doubleCounter = 0

    for (const productId of productIds) {
        for (const letter of productId) {
            if (letterCounts[letter]) {
                letterCounts[letter] += 1
            } else {
                letterCounts[letter] = 1
            }
        }
        const letterEntries = Object.entries(letterCounts)
        const triple = letterEntries.find(entry => entry[1] === 3)
        const double = letterEntries.find(entry => entry[1] === 2)
        if (triple) {
            tripleCounter += 1
        }
        if (double) {
            doubleCounter += 1
        }
        letterCounts = {}
    }

    return tripleCounter * doubleCounter

}


const boxIds = ["ubkfmdjxyzlbgkrotcepvswaqx", "uikfmdkuyzlbgerotcepvswaqh", "uikfmdpxyzlbgnrotcepvswoeh", "ikfmdjxyzlbgnrotqepvswyqh", "qgkfmdjxyzlbgnmotcepvswaqh", "uikfmdjxyzqbgnrytcepvsbaqh", "uikfmdjxyzibgprotcecvswaqh", "uikfmajxyzlcgnrojcepvswaqh", "uvkfsdjxyzlbgnrotcepvjwaqh", "uikfmdjxfzlbggrotcepvswawh", "uikfmhjxyzlbgnuotcepvjwaqh", "uikfmdjxyzlbuzcotcepvswaqh", "uikfmdwxyzlbgnrotcepvfwamh", "uikfmdexyzlbgnroecepvswhqh", "uikfmdjuyzlbgnrotcqpvswafh", "uikfddjxyzvbgnrotceppswaqh", "yikfwdjxyzlbgnrotcepvswagh", "uiktmdjxyzlbgnrotceposwajh", "uikfmdsxyzlbgnroteetvswaqh", "uikfpdjxyzlbgnroncepvswuqh", "uikfmtjxyzlbgurotcepvswaoh", "eikfmdjxyjlbgnrotcepyswaqh", "uikfkdjxyzlbgnrotcepvszaqv", "uikfrdjxtwlbgnrotcepvswaqh", "uikfmdjxyzlbgnrotpepwswahh", "kikfmdjxyzlbgnkotcepvswqqh", "uikfkduxyzlbgnrotcepvswafh", "uikfxhjxyzlbgnrotcegvswaqh", "uikfmdjxyzlmgnrotcenvawaqh", "uzkfmddxyzlbgnrltcepvswaqh",
    "uikfmdjxyzlbgnrobcepisqaqh", "uijfmdjxyzlbgnrotcexvrwaqh", "uiwjmdjxyzlbgnrotceprswaqh", "uhkqmdjxwzlbgnrotcepvswaqh", "uiktmsjxyzwbgnrotcepvswaqh", "uikfmdjxyztbgnqotcepvswcqh", "uibfmdjxyzlbgnroqcepvswaqx", "uwkfmdjxyxlbgnrotcfpvswaqh", "uikumdjxyzlbgnrstceposwaqh", "uikfzdjxyznhgnrotcepvswaqh", "uikuydjxyzlbgnrotqepvswaqh", "uikfmdqxyzlbgnrotfefvswaqh", "yikfmdjxyzlbrnrqtcepvswaqh", "uiifmdjxyzlbenrotcfpvswaqh", "uxkjmdjxyzlbgnrotcmpvswaqh", "uikgmdjxyzlbgnrotceovlwaqh", "uikfmdjxyzvbgzrotcenvswaqh", "uiufmdjxyzlbgnrotceposwazh", "uiafmdjxyzlignmotcepvswaqh", "uikfmdjxyzwbgnsotlepvswaqh", "uikjmdjvyzlbgnrotcenvswaqh", "uikfmdjxyzlbonroteepvswaqi", "uikfmdjxyzldgnroxcepviwaqh", "uikvmdjxyzlbgdrotrepvswaqh", "uikfmdjyyzwbgnrotcepvzwaqh", "uikfmdjxyzzbnnvotcepvswaqh", "uikomdjxyzlbgnrotcepvuwhqh", "uikfmmjxyzbbgnrotcepvswayh", "uikfmdjfezlbgprotcepvswaqh", "uzkfmojxmzlbgnrotcepvswaqh",
    "uipfmdjxyzlbgnrotceyuswaqh", "uikfmdjxyzlkgnmotcepvswadh", "uikfmdjxyzlbgnuctcbpvswaqh", "uikfqdjxyzlbogrotcepvswaqh", "uikfmdjxyzlfynrotcepvswash", "uikfmdjxizzmgnrotcepvswaqh", "uhkfmdjxyzlbhnrotcenvswaqh", "uipfmdjxyzlbgorotcepfswaqh", "uikfmdjxyznbgnrotcepvswfah", "uikfmujxyzlbgnrotnepvssaqh", "uikfmdjxyzlxgnrotcepvsrwqh", "uikfmdjxszlbgnrottvpvswaqh", "umkfmdskyzlbgnrotcepvswaqh", "uikfmdjxyzlbgorotcwpzswaqh", "uikfmdhxyzzbgnzotcepvswaqh", "jikfmdjxyzlbgnrotcepveyaqh", "uirfmdlxyzlbgnjotcepvswaqh", "uikfmdjxyzlbgnrorxepvswazh", "uikfmdjxyzltgnrotcepvsxaqi", "uikfmdjxyzlbxlrotcepkswaqh", "uvkfmdjxyzlbgnrotcopvswxqh", "uxkfmdjxkzlbgnrotcepvswqqh", "uikfmdjxyzlbqnrotcepvhwrqh", "uikfmdjxyzlvgnrolcepvswrqh", "urkfmdixyzlbgnrotcepvsjaqh", "uikfmdjxymlbsnrotcepvswcqh", "uikfmdjxyilbgnrotcepvcwzqh", "uikfadjxlzlbgnrotcepvswaql", "uikfmdjxuzlbgdrotcgpvswaqh", "yikfmdgxyzlbgnrotcepvswarh",
    "uikfmdjxyzlbgorotcepcswaqv", "uikkmdjxyzlbvnrotcepvvwaqh", "uwzfmdjxyxlbgnrotcfpvswaqh", "uikfmdjxyztbgnrotcrtvswaqh", "uiufmdjxyzhbgnrotcupvswaqh", "uikfzdjcyzlbgnrotcfpvswaqh", "uipfmdjxyzlbgnrotavpvswaqh", "uikfmajxyzlbgnrotcepbsxaqh", "uikfmdjfyzlbgnrotbepvswmqh", "gikkmdjxyzlbgnrptcepvswaqh", "uikfmdjxqvlbgnrotsepvswaqh", "fikfmdjxyzlbgnrotcegvswoqh", "idkfmdjxyzlbgnrotcepwswaqh", "uikfmdqxyzlbmnrobcepvswaqh", "uikfmdjxyzpbgnroicepvsyaqh", "uikfmkoxyzlbgnrotcgpvswaqh", "unkfmdjxyzlbpnrolcepvswaqh", "uikfmdjmyzlbgfrotcupvswaqh", "ujkfmdjxynlbgnroteepvswaqh", "uikfmljxyzlbgnaotcepvsiaqh", "uikfmdjdyzlbgnrotcepvtwaqd", "uikfmdjxyzlbgnyotcepimwaqh", "uikfmdjxyzfbjnrotcepvxwaqh", "eiwfmdjxyzlbgnrdtcepvswaqh", "umkhmdjxyzlbgnrotceivswaqh", "uikfmdjxyzlbgnrotcwpvswneh", "uckfmdjxyzlbknrotcepvswauh", "uiofmdjoyzlbgnrbtcepvswaqh", "uikfmdbxyzlbgnrotcepaslaqh", "uimfmdjxyalbgnrotcepvswaxh",
    "uqkfmdjxyzlbwnrotcepmswaqh", "uiyfmdjxyzlbgnrotcepvswxuh", "uikfmdjxyzlbgmrotgepvswamh", "uikfmdjxyqlbgarozcepvswaqh", "uikfmdjxyzabanpotcepvswaqh", "uikfmdjgyzlbsnrotcepvswaqj", "uikfmdjxyzlbwnrottepvsvaqh", "uikfmdjxyzlbbnrotcepvofaqh", "uikfudjxyzlbgnustcepvswaqh", "cskfmqjxyzlbgnrotcepvswaqh", "uiwfmddxyzlbgnrotccpvswaqh", "eikpmdjxyzlbgnrotcesvswaqh", "uikfmdzxyzlngnrrtcepvswaqh", "uikfmdjxyzlbgnrotcepaswtph", "uirfmdjxyzlbgnrotcepvswsqe", "uikjmdjxqzlbgirotcepvswaqh", "uikfmdjxsllbknrotcepvswaqh", "uikfmdjxyqlbgcrotcepvswaqu", "uikfmdjsymlbgnrotcebvswaqh", "uikfmdjxezlbgnroccepviwaqh", "uikfmdjiyzjbgnrotcepvswarh", "uqkfmdjxyzmbgnrotcepvslaqh", "unkfmdjxyzlbinrotceplswaqh", "uikfmdjxyzpbgnrjtcedvswaqh", "uicfmdjxyzlbgrrotcepvswamh", "ukknmdjxyzlbgnqotcepvswaqh", "uikfudjxyzlbdnrztcepvswaqh", "uikfmdjxyzlbgnrozcepvswawk", "uikfmduxyzsbgnrotcepvswauh", "uikfmdjxyzljbnrotcenvswaqh",
    "uukfmdjxyzlbgnrotcckvswaqh", "uilfldjxyzlbgnrotcdpvswaqh", "uckfmdjxyvybgnrotcepvswaqh", "qikfmdjxyglbgnrotcepvrwaqh", "uikfmhjxyzltgnrotcepvswbqh", "uikfmdjxipabgnrotcepvswaqh", "uikfmdjxyzlbgnrotceovswanl", "uikfmdjxyzlbgirotcapvswahh", "uikfucjxyflbgnrotcepvswaqh", "pikfmdjxyzpbgnrotcepvswaeh", "uikfmdjiyylbgnrotcervswaqh", "uikfmdjgyzlbgnrotcaevswaqh", "uikvmdjxyzlbunrotcepvswarh", "uikfadjuyzpbgnrotcepvswaqh", "uikfmdjxyzlbgnrotcepsawaqj", "eikfmdjxyflbgnrotcepvswaeh", "uisfmdaxyzlbgnrotcepvswlqh", "vikfmdjxyzlzgnrotcepvswanh", "ukkfmdoxyzlbgnrotcewvswaqh", "uikfmdhxyzlbgnrotcrpvbwaqh", "uhkfmdjwezlbgnrotcepvswaqh", "uikfddjxyzlbgnroteepvpwaqh", "uikfmdjxczlbgncotiepvswaqh", "uikfvdjxyzlbgnrotcnpvsaaqh", "uikfmdjxyzlbgnritcepvlwmqh", "uikfmdjxczlcgnrotcecvswaqh", "mikfmdjxyzlbgnrotcepvswasi", "uifvmdjxyzlbgnrotpepvswaqh", "uikzmdjxyzlbgnrotrepvswaqs", "uikfmqjqyzlbunrotcepvswaqh",
    "uikfpdyxyzlbgnrotcepvswagh", "uikfmdjxyzobgnrotrlpvswaqh", "zisdmdjxyzlbgnrotcepvswaqh", "uikfmdjxyzlbgnlotiesvswaqh", "uikfddixyzlbgnroucepvswaqh", "uijfmdrxyzlbgnrotoepvswaqh", "uikfmdcxbzlbgnrotcepvpwaqh", "uikfmdjxxzlbfnrotcecvswaqh", "upkfmdjxyzmtgnrotcepvswaqh", "uikfmdrxyzlbgnrjtcepvswaqp", "uizfmdjxyzlbsnrotcepviwaqh", "uidfmdjxyslbgnrotcxpvswaqh", "uikfmdjxyzlbgnrovyepvsdaqh", "uiafmdjxyzlbgnrxtcepvsdaqh", "ugkfmdjxyzlbgnrodcepvswawh", "pikfmtjxyzhbgnrotcepvswaqh", "uikfmdjxyzlfgnvotcepvswtqh", "uikbmdjxyzlbgerotcepvswaqm", "uikfmdjxyhlbdnrotcepvswaqy", "uikfgdjxyzlbgnhotcepvswdqh", "uikfmdpxyzlbgnrotcepvscanh", "uikfmdjxyzsbgnretcepvswaqn", "uikfddjxyzlrgnrotcepvsbaqh", "uikfmdjxyzlbgnrotcqnrswaqh", "uhkfmejxyzlbgnrotvepvswaqh", "uikimdjxyzlngnrotceprswaqh", "uikfmdjxyzwbunrotiepvswaqh", "rikfmdjxyzlbgnrotcypvssaqh", "uikfmdjxyzlbdnrotcrpvswsqh", "uekfmdjxkzlbznrotcepvswaqh",
    "uikfmdjxyglbgvrotcepvswaqv", "uikfmcjxyzlbgnrotmeovswaqh", "uikfmdjxyznbgnrozcepvswaqm", "uikfmdjxyzlbdnrotcepdsyaqh", "umkfmdjxfzlbgnrotiepvswaqh", "uitfmdjxyzvbcnrotcepvswaqh", "uikfmdjqyzlbgnrvtcepvlwaqh", "uikfmdjxyzkbworotcepvswaqh", "uikfmdzxyzlbwnrotcypvswaqh", "uikfmdjxyklbgnrftyepvswaqh", "uinfmsjxyzlbgnrotcepsswaqh", "xisfmdjxymlbgnrotcepvswaqh", "uikfmdjxjzlbgnropcepvswaqv", "uikfmdjxyalegyrotcepvswaqh", "uikfydjxyzlbgnrotcekvswtqh", "uikwmojxyzlbgnromcepvswaqh", "uikdmdjayzlbgnrotcepvswzqh", "uikfmdjxyzlmvnrotctpvswaqh", "uikfmbjxyzlbgnrotceptsweqh", "yvkfmdjxyzlbgqrotcepvswaqh", "uikomdjxfxlbgnrotcepvswaqh", "uikfmdjxczlbgnroocepgswaqh", "uikemdjxizlbgnrotcegvswaqh", "uikdmdjxyzlbgwrotceprswaqh", "tiyfmdjfyzlbgnrotcepvswaqh", "tmkfmdjxyzlbgirotcepvswaqh", "uikfmdjxyzebgnzotcepqswaqh", "uikfmljxyzlbgnrwtcepvswaeh", "uikfmojxyzlbgnrotcepbswwqh", "uikfmdjxyzlbgsrotcewvswwqh",
    "uikfmdjhyzlbgdrogcepvswaqh", "uikfmvjxyzlbrnrltcepvswaqh", "jikfmdjxyzlbgnrotcepvgcaqh", "uikhtdjxyzlbgnrotcepvswarh", "uikfmdjxyezbgnritcepvswaqh", "uikfwdjxyzlbgnrotzepvsnaqh", "uikfmdjxqylbgnrobcepvswaqh", "zikzmdjxyzlbgnrhtcepvswaqh", "uiksmzjxyzlbgnrftcepvswaqh", "uikfmdjxuzlbgnrotcepvsvaqc"]

// console.log(checkSum(productIds))

//! 12

const compareTwoStrings = (string1, string2) => {
    let intersection = ''

    for (let charx = 0; charx < string1.length; charx++) {
        if (string1[charx] === string2[charx]) {
            intersection += string1[charx]
        }
    }

    if (string1.length - intersection.length === 1) {
        return intersection
    }
}

console.time('mine')
let result = ''

for (let i = 0; i < boxIds.length; i ++) {
    for (let j = i + 1; j < boxIds.length; j ++) {
        const intersection = compareTwoStrings(boxIds[i], boxIds[j])
        if (intersection) {
            result = intersection
        }
    }
}

console.log(result)
console.timeEnd("mine")




//! The below is code obtained from an NSS instructor, which I commented out

// generator function, which returns Generator object
// each time Generator object .next property is accessed, yields next value
const comparator = function* () {
    for (let i = 0; i < boxIds.length; i++) {
        // split string to create array, map through this array to return 
        // new array of [index, element] arrays. From this, create a 
        // new Map (which now has indexes as keys and elements as values)
        const first = new Map(boxIds[i].split("").map((cn, idx) => [idx, cn]));
        for (let j = i + 1; j < boxIds.length; j++) {
            const second = new Map(boxIds[j].split("").map((cn, idx) => [idx, cn]));
            // outer loop starts on index 0, inner loop starts on index 1 and then loops 
            // through each other item in the array. So first yield would return object 
            // containing Maps of the strings at indexes 0 and 1,
            // next yield would be 0 and 2, and so on until 1 and 1, 1 and 2, etc
            // this will prevent any pairs from repeating and aid in processing time
            yield { first, second }
        }
    }
}()

let differentCharacters = 0
let differentKey = null

//starts timer (which I re-named "Steve" to compare with my function)
console.time("Steve")

//loops through code in "do" block until "while" conditions met
do {
    const ids = comparator.next().value
    // ids ex:
    //  {
    //     first: Map(26) {
    //       0 => 'u',
    //       1 => 'w',
    //          ...
    //     },
    //     second: Map(26) {
    //       0 => 'u',
    //       1 => 'w',
    //          ...
    //     }
    //  }

    differentCharacters = 0;

    for (key of ids.first.keys()) {
        // if first Map's value of the current key is not equal
        // to the second Map's value for the current key, increment 
        // differentCharacters int and set the differentKey variable to the current key
        if (ids.first.get(key) !== ids.second.get(key)) {
            differentCharacters++
            differentKey = key
        }
    }

    // once all letters have been iterated through, if this is the correct string pair 
    //(only one diff char), delete the property from the first Map where the value is different, 
    // using the stored differentKey integer
    // Join the values of the map together to create a string, and console log it
    if (differentCharacters === 1) {
        ids.first.delete(differentKey)
        console.log([...ids.first.values()].join(""))
    }

    //if this was not the correct string pair (differentCharacters !== 1), 
    //code in "do" block runs again using the next yield from the Generator object
} while (differentCharacters !== 1)

//ends timer
console.timeEnd("Steve")

