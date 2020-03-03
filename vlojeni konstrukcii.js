function ggg(input) {
    let age = Number(input.shift());
    let gender = input.shift();
    if (gender == "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    } else if (gender == "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss")
        }
    }
}
function fff(input) {
    let produkt = input.shift();
    let grad = input.shift();
    let kolichestvo = Number(input.shift());
    let cena = 0;
    if (produkt == "coffee") {
        if (grad == "Sofia") {
            cena = 0.50;
            console.log(cena * kolichestvo);
        } else if (grad == "Plovdiv") {
            cena = 0.40;
            console.log(cena * kolichestvo);
        } else if (grad == "Varna") {
            cena = 0.45;
            console.log(cena * kolichestvo);
        }
    } else if (produkt == "water") {
        if (grad == "Sofia") {
            cena = 0.80;
            console.log(cena * kolichestvo);
        } else if (grad == "Plovdiv") {
            cena = 0.70;
            console.log(cena * kolichestvo);
        } else if (grad == "Varna") {
            cena = 0.70;
            console.log(cena * kolichestvo);
        }
    } else if (produkt == "beer") {
        if (grad == "Sofia") {
            cena = 1.20;
            console.log(cena * kolichestvo);
        } else if (grad == "Plovdiv") {
            cena = 1.15;
            console.log(cena * kolichestvo);
        } else if (grad == "Varna") {
            cena = 1.10;
            console.log(cena * kolichestvo);
        }
    } else if (produkt == "sweets") {
        if (grad == "Sofia") {
            cena = 1.45;
            console.log(cena * kolichestvo);
        } else if (grad == "Plovdiv") {
            cena = 1.30;
            console.log(cena * kolichestvo);
        } else if (grad == "Varna") {
            cena = 1.35;
            console.log(cena * kolichestvo);
        }
    } else {
        if (grad == "Sofia") {
            cena = 1.60;
            console.log(cena * kolichestvo);
        } else if (grad == "Plovdiv") {
            cena = 1.50;
            console.log(cena * kolichestvo);
        } else if (grad == "Varna") {
            cena = 1.55;
            console.log(cena * kolichestvo);
        }
    }
}
function hhh(input) {
    let number = Number(input.shift());
    if (number >= -100 && number <= 100 && number != 0) console.log("Yes")
    else console.log("No")
}
function aaa(input) {
    let neshto = input.shift();
    if (neshto == "banana" || neshto == "apple" || neshto == "kiwi" || neshto == "cherry" || neshto == "lemon" || neshto == "grapes")
        console.log("fruit");
    else if (neshto == "tomato" || neshto == "cucumber" || neshto == "pepper" || neshto == "carrot")
        console.log("vegetable");
    else console.log("unknown");
}
function sss(input) {
    let number = Number(input.shift());
    if (!(number >= 100 && number <= 200 || number == 0))
        console.log("invalid");

}