function ss(input) {

    let days = Number(input.shift()) - 1;
    let room = input.shift();
    let ocenka = input.shift();

    let cena = 0;

    switch (room) {
        case "president apartment":
            cena = 35;
            if (days < 10) {
                cena = cena - (cena * 0.1);
                if (ocenka == "positive") {
                    cena = cena + (cena * 0.25);
                    let krai = cena * days;
                    console.log(krai.toFixed(2));
                } else {
                    cena = cena - (cena * 0.1);
                    let krai = cena * days;
                    console.log(krai.toFixed(2));
                }
            } else if (days >= 10 && days < 15) {
                cena = cena - cena * 0.15;
                if (ocenka == "positive") {
                    cena = cena + (cena * 0.25);
                    let krai = cena * days;
                    console.log(krai.toFixed(2));
                } else {
                    cena = cena - (cena * 0.1);
                    let krai = cena * days;
                    console.log(krai.toFixed(2));
                }
            } else {
                cena = cena - cena * 0.2;
                if (ocenka == "positive") {
                    cena = cena + (cena * 0.25);
                    let krai = cena * days;
                    console.log(krai.toFixed(2));
                } else {
                    cena = cena - (cena * 0.1);
                    let krai = cena * days;
                    console.log(krai.toFixed(2));
                }
            } break;
        case "apartment":
            cena = 25;
            if (days < 10) {
                cena = cena - cena * 0.3;
                if (ocenka == "positive") {
                    cena = cena + (cena * 0.25);
                    let krai = cena * days;
                    console.log(krai.toFixed(2));
                } else {
                    cena = cena - (cena * 0.1);
                    let krai = cena * days;
                    console.log(krai.toFixed(2));
                }
            } else if (days >= 10 && days < 15) {
                cena = cena - (cena * 0.35);
                if (ocenka == "positive") {
                    cena = cena + (cena * 0.25);
                    let krai = cena * days;
                    console.log(krai.toFixed(2));
                } else {
                    cena = cena - (cena * 0.1);
                    let krai = cena * days;
                    console.log(krai.toFixed(2));
                }
            } else {
                cena = cena - cena * 0.5;
                if (ocenka == "positive") {
                    cena = cena + (cena * 0.25);
                    let krai = cena * days;
                    console.log(krai.toFixed(2));
                } else {
                    cena = cena - (cena * 0.1);
                    let krai = cena * days;
                    console.log(krai.toFixed(2));
                }
            } break;
        case "room for one person":
            cena = 18;
            if (ocenka == "positive") {
                cena = cena + (cena * 0.25);
                let krai = cena * days;
                console.log(krai.toFixed(2));
            } else {
                cena = cena - (cena * 0.1);
                let krai = cena * days;
                console.log(krai.toFixed(2));
            }
    }
}

ss(["12",
    "room for one person",
    "positive"])