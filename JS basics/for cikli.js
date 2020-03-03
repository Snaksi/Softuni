function con(input){
    let n = Number(input.shift());
    let minNum = Number.MAX_SAFE_INTEGER;
    let maxNum = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < n; i++){
        let currentNumber = Number(input.shift());
        if (currentNumber < minNum){
            minNum = currentNumber;
        }
        if (currentNumber > maxNum){
            maxNum = currentNumber;
        }
    }
    console.log(`Max number: ${maxNum}`)
    console.log(`Min number: ${minNum}`)
}
con([2, 10, 20])

function solve(input){
    let n = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0;

    for(let i = 1; i <= n * 2; i++){
        let num = Number(input.shift());
        if (i <= n){
            leftSum += num;
        }else{
            rightSum += num;
        }
    }
    if(leftSum === rightSum){
        console.log(`Yes, sum = ${leftSum}`)
    }else{
        console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`)
    }
}

function solve(input){
    let age = Number(input.shift());
    let priceWashingMachine = Number(input.shift());
    let singlePriceToy = Number(input.shift());

    let countOfToys = 0;
    let money = 0;
    let incommingMoney = 10;
    for(let i = 1; i <= age; i++){
        if(i % 2 !== 0){
            countOfToys += 1;
        }else {
            money += incommingMoney;
            incommingMoney += 10;
            money -= 1;
        }
    }
    money += countOfToys * singlePriceToy;
    if(priceWashingMachine <= money){
        console.log(`Yes! ${(money - priceWashingMachine).toFixed(2)}`)
    }else{
        console.log(`No! ${(priceWashingMachine - money).toFixed(2)}`)
    }
}