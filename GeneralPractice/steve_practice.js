/* 
A quarter of the animals on a farm have four legs. 
The remaining three quarters of the animals have two legs. 
If there are 60 legs overall, how many animals are there on the farm?

Write some JavaScript functions that will allow you to calculate 
the number of animals when any of the following parameters change.
- Total number of legs
- Percentage of animals with a certain number of legs
- The number of legs for each group

For example, your functions should be able to solve this variation.
Forty percent of the animals on a farm have three legs. 
The remaining 60 percent of the animals have four legs. 
If there are 180 legs overall, how many animals are there on the farm? 
*/

const totalAnimals = (total, percOne, legsOne, percTwo, legsTwo) => {  
    group1Multiplier =  (percOne / 100) * legsOne
    group2Multiplier = (percTwo / 100) * legsTwo

    return total / (group2Multiplier + group1Multiplier)
}

console.log(totalAnimals(180, 40, 3, 60, 4))