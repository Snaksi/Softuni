//function ss(input){
//    let moneyForFood = Number(input.shift()), 
//    moneyForSouvenires = Number(input.shift()),
//    moneyForHotel = Number(input.shift());
//    let moneyForGasoline = (420/100*7)*1.85;
//    let totalSpendings = 3*moneyForFood+3*moneyForSouvenires
//    let sleepCost1 = moneyForHotel * 0.9, sleepCost2 = moneyForHotel * 0.85,
//    sleepCost3 = moneyForHotel * 0.8;
//    let totalMoneyNeeded = moneyForGasoline + totalSpendings + sleepCost1 + sleepCost2 + sleepCost3
//    console.log(`Money needed: ${(totalMoneyNeeded).toFixed(2)}`)
//}

//function ss(input) {
//    let w = Number(input.shift()), l = Number(input.shift()), h = Number(input.shift());
//    let humanHight = Number(input.shift());
//    let obem = w * l * h;
//    let room = (1.70 + 0.40) * 2 * 2;
//    let space = obem / room;
//    if (space < 3) {
//        console.log('The spacecraft is too small.');
//    } else if (space > 10) {
//        console.log('The spacecraft is too big.');
//    }else{
//        console.log(`The spacecraft holds ${Math.floor(space)} astronauts.`)
//    }
//
//}

//function ss(input) {
//    let sushi = input.shift(), restaurant = input.shift(), count = Number(input.shift()), symbol = input.shift();
//    let price = 0, end = 0;
//    if (restaurant !== "Sushi Zone" && restaurant !== "Sushi Time" && restaurant !== "Sushi Bar" && restaurant !== "Asian Pub")
//        console.log(`${restaurant} is invalid restaurant!`);
//    switch (restaurant) {
//        case "Sushi Zone":
//            if (sushi == "sashimi") {
//                price = 4.99;
//                end = price * count;
//                if (symbol === "Y") {
//                    end = end + (end * 0.2);
//                    console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//                } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//            } else if (sushi == "maki") {
//                price = 5.29;
//                end = price * count;
//                if (symbol === "Y") {
//                    end = end + (end * 0.2);
//                    console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//                } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//            } else if (sushi == "uramaki") {
//                price = 5.99;
//                end = price * count;
//                if (symbol === "Y") {
//                    end = end + (end * 0.2);
//                    console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//                } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//            } else (sushi == "temari"); {
//                price = 5.99;
//                end = price * count;
//                if (symbol === "Y") {
//                    end = end + (end * 0.2);
//                    console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//                } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//            }
//            ; break;
//        case "Sushi Time": if (sushi == "sashimi") {
//            price = 5.49;
//            end = price * count;
//            if (symbol === "Y") {
//                end = end + (end * 0.2);
//                console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//            } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//        } else if (sushi == "maki") {
//            price = 4.69;
//            end = price * count;
//            if (symbol === "Y") {
//                end = end + (end * 0.2);
//                console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//            } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//        } else if (sushi == "uramaki") {
//            price = 4.49;
//            end = price * count;
//            if (symbol === "Y") {
//                end = end + (end * 0.2);
//                console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//            } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//        } else (sushi == "temari"); {
//                price = 5.19;
//                end = price * count;
//                if (symbol === "Y") {
//                    end = end + (end * 0.2);
//                    console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//                } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//            }; break;
//        case "Sushi Bar": if (sushi == "sashimi") {
//            price = 5.25;
//            end = price * count;
//            if (symbol === "Y") {
//                end = end + (end * 0.2);
//                console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//            } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//        } else if (sushi == "maki") {
//            price = 5.55;
//            end = price * count;
//            if (symbol === "Y") {
//                end = end + (end * 0.2);
//                console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//            } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//        } else if (sushi == "uramaki") {
//            price = 6.25;
//            end = price * count;
//            if (symbol === "Y") {
//                end = end + (end * 0.2);
//                console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//            } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//        } else (sushi == "temari"); {
//                price = 4.75;
//                end = price * count;
//                if (symbol === "Y") {
//                    end = end + (end * 0.2);
//                    console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//                } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//            }; break;
//        case "Asian Pub": if (sushi == "sashimi") {
//            price = 4.50;
//            end = price * count;
//            if (symbol === "Y") {
//                end = end + (end * 0.2);
//                console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//            } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//        } else if (sushi == "maki") {
//            price = 4.80;
//            end = price * count;
//            if (symbol === "Y") {
//                end = end + (end * 0.2);
//                console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//            } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//        } else if (sushi == "uramaki") {
//            price = 5.50;
//            end = price * count;
//            if (symbol === "Y") {
//                end = end + (end * 0.2);
//                console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//            } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//        } else (sushi == "temari"); {
//                price = 5.50;
//                end = price * count;
//                if (symbol === "Y") {
//                    end = end + (end * 0.2);
//                    console.log(`Total price: ${Math.ceil(end)} lv.`); break;
//                } else { console.log(`Total price: ${Math.ceil(end)} lv.`) ; break;}
//            }; break;
//    }
//}
