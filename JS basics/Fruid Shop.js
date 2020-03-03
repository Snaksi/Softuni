function ddd(input) {
    let plod = input.shift();
    let day = input.shift();
    let count = Number(input.shift());

    let priceB = 2.50;
    let priceA = 1.20;
    let priceO = 0.85;
    let priceGF = 1.45;
    let priceK = 2.70;
    let priceP = 5.50;
    let priceG = 3.85;

    let ppriceB = 2.70;
    let ppriceA = 1.25;
    let ppriceO = 0.90;
    let ppriceGF = 1.60;
    let ppriceK = 3.00;
    let ppriceP = 5.60;
    let ppriceG = 4.20;

    if (day == "Monday") {
        if (plod == "banana") console.log((count * priceB).toFixed(2));
        else if (plod == "apple") console.log((count * priceA).toFixed(2));
        else if (plod == "orange") console.log((count * priceO).toFixed(2));
        else if (plod == "grapefruit") console.log((count * priceGF).toFixed(2));
        else if (plod == "kiwi") console.log((count * priceK).toFixed(2));
        else if (plod == "pineapple") console.log((count * priceP).toFixed(2));
        else if (plod == "grapes") console.log((count * priceG).toFixed(2));
        else if (plod != "banana" || plod != "apple" || plod != "orange" || plod != "grapefruit" || plod != "kiwi" || plod != "pineapple" || plod != "grapes") console.log("error");
    } else if (day == "Tuesday") {
        if (plod == "banana") console.log((count * priceB).toFixed(2));
        else if (plod == "apple") console.log((count * priceA).toFixed(2));
        else if (plod == "orange") console.log((count * priceO).toFixed(2));
        else if (plod == "grapefruit") console.log((count * priceGF).toFixed(2));
        else if (plod == "kiwi") console.log((count * priceK).toFixed(2));
        else if (plod == "pineapple") console.log((count * priceP).toFixed(2));
        else if (plod == "grapes") console.log((count * priceG).toFixed(2));
        else if (plod != "banana" || plod != "apple" || "plod" != "orange" || "plod" != "grapefruit" || plod != "kiwi" || plod != "pineapple" || plod != "grapes") console.log("error");
    } else if (day == "Wednesday") {
        if (plod == "banana") console.log((count * priceB).toFixed(2));
        else if (plod == "apple") console.log((count * priceA).toFixed(2));
        else if (plod == "orange") console.log((count * priceO).toFixed(2));
        else if (plod == "grapefruit") console.log((count * priceGF).toFixed(2));
        else if (plod == "kiwi") console.log((count * priceK).toFixed(2));
        else if (plod == "pineapple") console.log((count * priceP).toFixed(2));
        else if (plod == "grapes") console.log((count * priceG).toFixed(2));
        else if (plod != "banana" || plod != "apple" || "plod" != "orange" || "plod" != "grapefruit" || plod != "kiwi" || plod != "pineapple" || plod != "grapes") console.log("error");
    } else if (day == "Thursday") {
        if (plod == "banana") console.log((count * priceB).toFixed(2));
        else if (plod == "apple") console.log((count * priceA).toFixed(2));
        else if (plod == "orange") console.log((count * priceO).toFixed(2));
        else if (plod == "grapefruit") console.log((count * priceGF).toFixed(2));
        else if (plod == "kiwi") console.log((count * priceK).toFixed(2));
        else if (plod == "pineapple") console.log((count * priceP).toFixed(2));
        else if (plod == "grapes") console.log((count * priceG).toFixed(2));
        else if (plod != "banana" || plod != "apple" || "plod" != "orange" || "plod" != "grapefruit" || plod != "kiwi" || plod != "pineapple" || plod != "grapes") console.log("error");
    } else if (day == "Friday") {
        if (plod == "banana") console.log((count * priceB).toFixed(2));
        else if (plod == "apple") console.log((count * priceA).toFixed(2));
        else if (plod == "orange") console.log((count * priceO).toFixed(2));
        else if (plod == "grapefruit") console.log((count * priceGF).toFixed(2));
        else if (plod == "kiwi") console.log((count * priceK).toFixed(2));
        else if (plod == "pineapple") console.log((count * priceP).toFixed(2));
        else if (plod == "grapes") console.log((count * priceG).toFixed(2));
        else if (plod != "banana" || plod != "apple" || "plod" != "orange" || "plod" != "grapefruit" || plod != "kiwi" || plod != "pineapple" || plod != "grapes") console.log("error");
    } else if (day == "Saturday") {
        if (plod == "banana") console.log((count * ppriceB).toFixed(2));
        else if (plod == "apple") console.log((count * ppriceA).toFixed(2));
        else if (plod == "orange") console.log((count * ppriceO).toFixed(2));
        else if (plod == "grapefruit") console.log((count * ppriceGF).toFixed(2));
        else if (plod == "kiwi") console.log((count * ppriceK).toFixed(2));
        else if (plod == "pineapple") console.log((count * ppriceP).toFixed(2));
        else if (plod == "grapes") console.log((count * ppriceG).toFixed(2));
        else if (plod != "banana" || plod != "apple" || plod != "orange" || plod != "grapefruit" || plod != "kiwi" || plod != "pineapple" || plod != "grapes") console.log("error");
    } else if (day == "Sunday") {
        if (plod == "banana") console.log((count * ppriceB).toFixed(2));
        else if (plod == "apple") console.log((count * ppriceA).toFixed(2));
        else if (plod == "orange") console.log((count * ppriceO).toFixed(2));
        else if (plod == "grapefruit") console.log((count * ppriceGF).toFixed(2));
        else if (plod == "kiwi") console.log((count * ppriceK).toFixed(2));
        else if (plod == "pineapple") console.log((count * ppriceP).toFixed(2));
        else if (plod == "grapes") console.log((count * ppriceG).toFixed(2));
        else if (plod != "banana" || plod != "apple" || plod != "orange" || plod != "grapefruit" || plod != "kiwi" || plod != "pineapple" || plod != "grapes") console.log("error");
    } else console.log("error");


}
ddd(["apple",
    "Tuesday",
    "2"])