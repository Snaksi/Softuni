function ss(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());

    let firstCondition = (x == x1 || x == x2) && (y >= y1 && y <= y2);
    let secondCondition = (y == y1 || y == y2) && (x >= x1 && x <= x2);

    if (firstCondition || secondCondition) {
        console.log("Border");
    } else {
        console.log("Inside / Outside")
    }
}

function sss(input) {
    let type = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());

    if (type == "Premiere") {
        console.log(`${(rows * columns * 12.0).toFixed(2)} leva`);
    } else if (type == "Normal") {
        console.log(`${(rows * columns * 7.50).toFixed(2)} leva`);
    } else console.log(`${(rows * columns * 5.0).toFixed(2)} leva`);
}

function ssss(input) {

    let degrees = Number(input.shift());
    let time = input.shift();

    switch (time) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);
            } else if (degrees > 18 && degrees <= 24) {
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
            } else console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
            break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
            } else if (degrees > 18 && degrees <= 24) {
                console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
            } else console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
            break;
        case "Evening":
            if (degrees >= 10 && degrees <= 18) {
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
            } else if (degrees > 18 && degrees <= 24) {
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
            } else console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
            break;
    }

}

function s(input) {
    let flowers = input.shift();
    let count = Number(input.shift());
    let money = Number(input.shift());

    switch (flowers) {
        case "Roses":
            if (count > 80) {
                let endPrice = count * 5 - count * 5 * 0.1;
                if (money < endPrice) {
                    console.log(`Not enough money, you need ${Math.abs(money - endPrice).toFixed(2)} leva more.`);
                } else console.log(`Hey, you have a great garden with ${count} ${flowers} and ${Math.abs(money - endPrice).toFixed(2)} leva left.`);
            } else {
                let endPrice = count * 5;
                if (money < endPrice) {
                    console.log(`Not enough money, you need ${Math.abs(money - endPrice).toFixed(2)} leva more.`);
                } else console.log(`Hey, you have a great garden with ${count} ${flowers} and ${Math.abs(money - endPrice).toFixed(2)} leva left.`);
            } break;
        case "Dahlias":
            if (count > 90) {
                let endPrice = count * 3.80 - count * 3.80 * 0.15;
                if (money < endPrice) {
                    console.log(`Not enough money, you need ${Math.abs(money - endPrice).toFixed(2)} leva more.`);
                } else console.log(`Hey, you have a great garden with ${count} ${flowers} and ${Math.abs(money - endPrice).toFixed(2)} leva left.`);
            } else {
                let endPrice = count * 3.80;
                if (money < endPrice) {
                    console.log(`Not enough money, you need ${Math.abs(money - endPrice).toFixed(2)} leva more.`);
                } else console.log(`Hey, you have a great garden with ${count} ${flowers} and ${Math.abs(money - endPrice).toFixed(2)} leva left.`);
            } break;
        case "Tulips":
            if (count > 80) {
                let endPrice = count * 2.80 - count * 2.80 * 0.15;
                if (money < endPrice) {
                    console.log(`Not enough money, you need ${Math.abs(money - endPrice).toFixed(2)} leva more.`);
                } else console.log(`Hey, you have a great garden with ${count} ${flowers} and ${Math.abs(money - endPrice).toFixed(2)} leva left.`);
            } else {
                let endPrice = count * 2.80;
                if (money < endPrice) {
                    console.log(`Not enough money, you need ${Math.abs(money - endPrice).toFixed(2)} leva more.`);
                } else console.log(`Hey, you have a great garden with ${count} ${flowers} and ${Math.abs(money - endPrice).toFixed(2)} leva left.`);
            } break;
        case "Narcissus":
            if (count < 120) {
                let endPrice = count * (3 + 3 * 0.15);
                if (money < endPrice) {
                    console.log(`Not enough money, you need ${Math.abs(money - endPrice).toFixed(2)} leva more.`);
                } else console.log(`Hey, you have a great garden with ${count} ${flowers} and ${Math.abs(money - endPrice).toFixed(2)} leva left.`);
            } else {
                let endPrice = count * 3;
                if (money < endPrice) {
                    console.log(`Not enough money, you need ${Math.abs(money - endPrice).toFixed(2)} leva more.`);
                } else console.log(`Hey, you have a great garden with ${count} ${flowers} and ${Math.abs(money - endPrice).toFixed(2)} leva left.`);
            } break;
        case "Gladiolus":
            if (count < 80) {
                let endPrice = count * (2.5 + 2.5 * 0.2);
                if (money < endPrice) {
                    console.log(`Not enough money, you need ${Math.abs(money - endPrice).toFixed(2)} leva more.`);
                } else console.log(`Hey, you have a great garden with ${count} ${flowers} and ${Math.abs(money - endPrice).toFixed(2)} leva left.`);
            } else {
                let endPrice = count * 2.5;
                if (money < endPrice) {
                    console.log(`Not enough money, you need ${Math.abs(money - endPrice).toFixed(2)} leva more.`);
                } else console.log(`Hey, you have a great garden with ${count} ${flowers} and ${Math.abs(money - endPrice).toFixed(2)} leva left.`);
            } break;
    }
}
function qq(input){
    let money = Number(input.shift());
    let season = input.shift();
    let fisherman = Number(input.shift());

    let cenaKorab = 0;

    switch (season){
        case "Spring":
            cenaKorab = 3000;
            if (fisherman <= 6 ){
                cenaKorab = cenaKorab - (cenaKorab * 0.1 );
                if (fisherman % 2 == 0){
                    cenaKorab = cenaKorab* 0.05;
                }
                if (cenaKorab <= money){
                    console.log(`Yes! You have ${(money - cenaKorab).toFixed(2)} leva left.`);
                }else {
                    console.log(`Not enough money! You need ${Math.abs(money - cenaKorab).toFixed(2)} leva.`)
                }
            }else if(fisherman >= 7 && fisherman <= 11){
                cenaKorab = cenaKorab - (cenaKorab * 0.15 );
                if (fisherman % 2 == 0){
                    cenaKorab = cenaKorab* 0.05;
                }
                if (cenaKorab <= money){
                    console.log(`Yes! You have ${(money - cenaKorab).toFixed(2)} leva left.`);
                }else {
                    console.log(`Not enough money! You need ${Math.abs(money - cenaKorab).toFixed(2)} leva.`)
                }
            }else if(fisherman >= 12){
                cenaKorab = cenaKorab - (cenaKorab * 0.25 );
                if (fisherman % 2 == 0){
                    cenaKorab = cenaKorab* 0.05;
                }
                if (cenaKorab <= money){
                    console.log(`Yes! You have ${(money - cenaKorab).toFixed(2)} leva left.`);
                }else {
                    console.log(`Not enough money! You need ${Math.abs(money - cenaKorab).toFixed(2)} leva.`)
                }
            }break;
        case "Summer":
            cenaKorab = 4200;
            if (fisherman <= 6 ){
                cenaKorab = cenaKorab - (cenaKorab * 0.1 );
                if (fisherman % 2 == 0){
                    cenaKorab = cenaKorab* 0.05;
                }
                if (cenaKorab <= money){
                    console.log(`Yes! You have ${(money - cenaKorab).toFixed(2)} leva left.`);
                }else {
                    console.log(`Not enough money! You need ${Math.abs(money - cenaKorab).toFixed(2)} leva.`)
                }
            }else if(fisherman >= 7 && fisherman <= 11){
                cenaKorab = cenaKorab - (cenaKorab * 0.15 );
                if (fisherman % 2 == 0){
                    cenaKorab = cenaKorab* 0.05;
                }
                if (cenaKorab <= money){
                    console.log(`Yes! You have ${(money - cenaKorab).toFixed(2)} leva left.`);
                }else {
                    console.log(`Not enough money! You need ${Math.abs(money - cenaKorab).toFixed(2)} leva.`)
                }
            }else if(fisherman >= 12){
                cenaKorab = cenaKorab - (cenaKorab * 0.25 );
                if (fisherman % 2 == 0){
                    cenaKorab = cenaKorab* 0.05;
                }
                if (cenaKorab <= money){
                    console.log(`Yes! You have ${(money - cenaKorab).toFixed(2)} leva left.`);
                }else {
                    console.log(`Not enough money! You need ${Math.abs(money - cenaKorab).toFixed(2)} leva.`)
                }
            }break;
        case "Autumn":
            cenaKorab = 4200;
            if (fisherman <= 6 ){
                cenaKorab = cenaKorab - (cenaKorab * 0.1 );
               
                if (cenaKorab <= money){
                    console.log(`Yes! You have ${(money - cenaKorab).toFixed(2)} leva left.`);
                }else {
                    console.log(`Not enough money! You need ${Math.abs(money - cenaKorab).toFixed(2)} leva.`)
                }
            }else if(fisherman >= 7 && fisherman <= 11){
                cenaKorab = cenaKorab - (cenaKorab * 0.15 );
                
                if (cenaKorab <= money){
                    console.log(`Yes! You have ${(money - cenaKorab).toFixed(2)} leva left.`);
                }else {
                    console.log(`Not enough money! You need ${Math.abs(money - cenaKorab).toFixed(2)} leva.`)
                }
            }else if(fisherman >= 12){
                cenaKorab = cenaKorab - (cenaKorab * 0.25 );
                
                if (cenaKorab <= money){
                    console.log(`Yes! You have ${(money - cenaKorab).toFixed(2)} leva left.`);
                }else {
                    console.log(`Not enough money! You need ${Math.abs(money - cenaKorab).toFixed(2)} leva.`)
                }
            }break;
        case "Winter":
            cenaKorab = 2600;
            if (fisherman <= 6 ){
                cenaKorab = cenaKorab - (cenaKorab * 0.1 );
                if (fisherman % 2 == 0){
                    cenaKorab = cenaKorab* 0.05;
                }
                if (cenaKorab <= money){
                    console.log(`Yes! You have ${(money - cenaKorab).toFixed(2)} leva left.`);
                }else {
                    console.log(`Not enough money! You need ${Math.abs(money - cenaKorab).toFixed(2)} leva.`)
                }
            }else if(fisherman >= 7 && fisherman <= 11){
                cenaKorab = cenaKorab - (cenaKorab * 0.15 );
                if (fisherman % 2 == 0){
                    cenaKorab = cenaKorab* 0.05;
                }
                if (cenaKorab <= money){
                    console.log(`Yes! You have ${(money - cenaKorab).toFixed(2)} leva left.`);
                }else {
                    console.log(`Not enough money! You need ${Math.abs(money - cenaKorab).toFixed(2)} leva.`)
                }
            }else if(fisherman >= 12){
                cenaKorab = cenaKorab - (cenaKorab * 0.25 );
                if (fisherman % 2 == 0){
                    cenaKorab = cenaKorab* 0.05;
                }
                if (cenaKorab <= money){
                    console.log(`Yes! You have ${(money - cenaKorab).toFixed(2)} leva left.`);
                }else {
                    console.log(`Not enough money! You need ${Math.abs(money - cenaKorab).toFixed(2)} leva.`)
                }
            }
    }break;

}