function moon(input) {
    let speed = Number(input.shift()), gasoline100 = Number(input.shift());
    let gasoline = (gasoline100 * (384400 * 2) / 100);
    let time = Math.ceil((384400 * 2) / speed) + 3;
    console.log(time); console.log(gasoline)

}

function pc(input) {
    let mm = input.shift(), time = Number(input.shift()), ppl = Number(input.shift()), timeOfDay = input.shift();
    let price = 0;
    let totalCost = 0;
    if (mm == "march" || mm == "april" || mm == "may") {
        if (timeOfDay == "day") price = 10.50;
        else price = 8.40;



    } else {
        if (timeOfDay == "day") price = 12.60;
        else price = 10.20;


    }
    if (ppl >= 4) {
        price *= 0.90;
        if (time >= 5) {
            price /= 2;

        }
    }
    totalCost = ppl * time * price;
    console.log(`Price per person for one hour: ${price.toFixed(2)}\nTotal cost of the visit: ${totalCost.toFixed(2)}`)
}

function wtf(input) {
    let n = Number(input.shift()), p1 = p2 = p3 = 0;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (num % 2 == 0) p1++
        if (num % 3 == 0) p2++
        if (num % 4 == 0) p3++

    }
    p1 = (100 / n * p1).toFixed(2) + "%";
    p2 = (100 / n * p2).toFixed(2) + "%";
    p3 = (100 / n * p3).toFixed(2) + "%";
    console.log(`${p1}\n${p2}\n${p3}`)
}

function koledniPodaraci(input) {
    let age = input.shift(), counterKids = 0, counterAdults = 0;
    while (age !== "Christmas") {
        age = Number(age)
        if (age > 16) {
            counterAdults++;
        } else {
            counterKids++;
        }
        age = input.shift();

    }
    let moneyToys = counterKids * 5;
    let moneySweaters = counterAdults * 15;
    console.log(`Number of adults: ${counterAdults}`)
    console.log(`Number of kids: ${counterKids}`)
    console.log(`Money for toys: ${moneyToys}`)
    console.log(`Money for sweaters: ${moneySweaters}`)
}