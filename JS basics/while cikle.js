//function solve(input){
//    let command = input.shift();
//    let sum = 0;
//
//    while(command !== "Stop"){
//        let num = Number(command)
//        sum += num;
//        command = input.shift();
//    }
//    console.log(sum)
//}

//function kotence(input){
//    let n = Number(input.shift());
//    let currentNum = 1;
//    while(n >= currentNum){
//        console.log(currentNum);
//        currentNum = currentNum * 2 + 1
//    }
//}
//kotence(["10"])

//function ss(input) {
//    let transactionCount = Number(input.shift());
//    let balance = 0;
//    let counter = 1;
//    while (transactionCount >= counter) {
//        let num = Number(input.shift());
//        if (num < 0) {
//            console.log("Invalid operation!");
//            break;
//        }
//        balance += num;
//        console.log(`Increase: ${num.toFixed(2)}`);
//        counter++;
//    }
//    console.log("Total: " + balance.toFixed(2));
//}

//function sss(input){
//    let n = Number(input.shift());
//    let counter = 0;
//    let maxNum = Number.MIN_SAFE_INTEGER
//    while(n > counter){
//        let num = Number(input.shift());
//        if(num > maxNum){
//            maxNum = num;
//        }
//        counter++
//    }
//    console.log(maxNum)
//
//function s(input) {
//    let name = input.shift();
//    let counter = 0;
//    let sumGrade = 0;
//    while (counter < 12) {
//        let grade = Number(input.shift());
//        if (grade >= 4.00) {
//            sumGrade += grade;
//            counter++;
//        }
//    }
//    console.log(`${name} graduated. Average grade: ${(sumGrade / counter).toFixed(2)}`)
//}

//function nana(input){
//    let w = Number(input.shift());
//    let l = Number(input.shift());
//    let h = Number(input.shift());
//
//    let totalFreeSpace = w * l * h;
//    let command = input.shift();
//
//    while(command !== "Done"){
//        let box = Number(command);
//        totalFreeSpace -= box;
//        if (totalFreeSpace < 0){            
//        break;
//        }
//        command = input.shift();
//
//    }
//    if(totalFreeSpace < 0 ){
//        console.log(`No more free space! You need ${Math.abs(totalFreeSpace)} Cubic meters more.`)
//    }else {
//        console.log(`${totalFreeSpace} Cubic meters left.`)
//    }
//}

//function s(input) {
//    let name = input.shift();
//    let counter = 0;
//    let sumGrade = 0;
//    let repeat = 0;
//    while (counter < 12) {
//        let grade = Number(input.shift());
//
//        if (grade >= 4.00) {
//            sumGrade += grade;
//            counter++;
//        } else {            
//            if (++repeat == 2) {
//                console.log(`${name} has been excluded at ${counter + 1} grade`);
//                return;
//            }
//        }
//    }
//    console.log(`${name} graduated. Average grade: ${(sumGrade / counter).toFixed(2)}`)
//}

//function sss(input){
//    let herBook = input.shift();
//    let countBooks = Number(input.shift());
//    let nameBook = input.shift();
//
//    let count = 0;
//    let bookIsFound = false;
//    
//    while(count < countBooks){
//        
//        if (nameBook == herBook){
//            bookIsFound = true;
//            break;
//        }
//        count++;
//        nameBook = input.shift();
//        }
//    if(bookIsFound == false){
//        console.log("The book you search is not here!")
//        console.log(`You checked ${countBooks} books.`)
//    }else{
//        console.log(`You checked ${count} books and found it.`)
//    }
//}

//function solve(input) {
//    let limitBadScores = Number(input.shift());
//    let badScores = 0;
//    let exercises = 0;
//    let sumScores = 0;
//    let lastProblem = '';
//
//    let line = input.shift();
//    while(line !== 'Enough') {
//        lastProblem = line;
//        exercises++;
//        let score = Number(input.shift());
//
//        if(score <= 4) {
//            if(++badScores === limitBadScores) {
//                console.log(`You need a break, ${badScores} poor grades.`);
//                return;
//            }
//        }
//
//        sumScores += score;
//
//        line = input.shift();
//    }
//
//    console.log(`Average score: ${(sumScores/exercises).toFixed(2)}`);
//    console.log(`Number of problems: ${exercises}`);
//    console.log(`Last problem: ${lastProblem}`);
//
//function ss(input){
//    let neededMoney = Number(input.shift());
//    let ownedMoney = Number(input.shift());
//
//    let days = 0;
//    let spendCounter = 0;
//
//    while(ownedMoney < neededMoney && spendCounter < 5){
//
//        let command = input.shift();
//        let movingMoney = Number(input.shift());
//        
//        if(command == "save"){
//            ownedMoney += movingMoney;
//            spendCounter = 0;
//        }else{
//            ownedMoney -= movingMoney;
//            spendCounter++;
//            if (ownedMoney < 0){
//            ownedMoney = 0;
//            }
//        }
//        if(ownedMoney >= neededMoney){
//            console.log(`You saved the money for ${days + 1} days.`);
//            return;
//        }           
//         days++;
//    }
//    console.log("You can't save the money.");
//    console.log(days)
//}


//function ss(input) {
//
//    let stepsCounter = 0;
//    let goalSteps = 10000;
//    let steps = 0;
//
//    while (steps < goalSteps) {
//        
//        stepsCounter = Number(input.shift());
//
//        if (isNaN(stepsCounter)) {
//            steps+= Number(input.shift());
//            if(steps >= 10000)console.log("Goal reached! Good job!");
//            else
//            console.log(`${goalSteps - steps} more steps to reach goal.`);
//            return;
//        }
//        steps += stepsCounter;
//        
//
//    }
//    console.log("Goal reached! Good job!");
//}
//ss([ '1500', '3000', '250', '1548','2000', 'Going home', '2000', '' ])



//function solve(input) {
//    let steps = 0;
//    let line = input.shift();
//    while(line !== 'Going home' || steps < 10000) {
//        steps += Number(line);
//        line = input.shift();
//    }
//    
//    if(steps >= 10000) console.log('Goal reached! Good job!');
//    else console.log(`${10000-steps} more steps to reach goal.`);
//}

//function ss(input) {
//    let w = Number(input.shift()), l = Number(input.shift());
//    let pieces = w * l;
//    let piecesNeeded = 0;
//
//    while (pieces >= piecesNeeded || piecesNeeded !== "STOP") {
//        pieces -= piecesNeeded;
//        if (pieces <= 0) { break }
//        piecesNeeded = input.shift();
//    }
//    if (piecesNeeded == "STOP") {
//        console.log(`${pieces} pieces are left.`)
//    } else {
//        console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`)
//    }
//}

function solve(input) {
    let change = Number(input.shift())*100;
    let coins = [ 200, 100, 50, 20, 10, 5, 2, 1 ];
    let counter = 0;
    for(let i=0; i<8; i++) {
        coin = coins[i];
        while(change - coin >= 0) {
            change -= coin;
            counter++;
        }
        if(change == 0) break;
    }
    console.log(counter);
}