//function ss(input){
//    for(let h = 0; h <= 23 ; h++){
//        for (m = 0; m <= 59; m++)
//        console.log(`${h}:${m}`)
//    }
//}

//function ss(input) {
//    for (a = 1; a <= 10; a++) {
//        for (b = 1; b <= 10; b++) {
//            let product = a * b;
//            console.log(`${a} * ${b} = ${product}`)
//        }
//    }
//}
//function ss(input) {
//    let n = Number(input.shift());
//
//    let valid = 0;
//    let result = 0;
//
//    for (a = 0; a <= n; a++) {
//        for (b = 0; b <= n; b++) {
//            for (c = 0; c <= n; c++) {
//                result = a + b + c;
//                if (result === n) {
//                    valid++
//                }
//            }
//        }
//    }
//    console.log(valid)
//}

//function ss(input) {
//    let start = Number(input.shift());
//    let end = Number(input.shift());
//    let num = Number(input.shift());
//    let counter = 0;
//    let result = 0;
//
//    for (let a = start; a <= end; a++) {
//        for (let b = start; b <= end; b++) {
//            
//            result = a + b;
//            counter++;
//            if (result === num) {
//                console.log(`Combination N:${counter} (${a} + ${b} = ${num})`);
//                return;
//            }
//        }
//    }
//    
//        console.log(`${counter} combinations - neither equals ${num}`);
//}
//
//
//ss([ '88', '888', '1000' ])


//function ss(input) {
//    let line = input.shift(), money = 0, neededMoney = 1, destination = "";
//
//    while (line !== "End") {
//        if (isNaN(line)) {
//            if (money >= neededMoney){
//                console.log(`Going to ${destination}!`)
//            }
//                destination = line;
//            neededMoney = Number(input.shift());
//            money = 0;
//        } else {
//            money += Number(line);
//        }
//        line = input.shift();
//
//    }
//    if (money >= neededMoney){
//        console.log(`Going to ${destination}!`)
//    }
//
//}

//function ss(input) {
//    let floor = Number(input.shift()), rooms = Number(input.shift());
//    for (a = floor; a > 0; a--) {
//        let output = ""
//        for (b = 0; b < rooms; b++) {
//            if (a == floor) {
//                output+=(`L${a}${b} `);
//                continue;
//            }
//            if (a % 2 == 1) {
//                output+=(`A${a}${b} `);
//            } else {
//                output+=(`O${a}${b} `);
//            }
//        }
//        console.log(output)
//    }
//}

