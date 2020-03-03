function ggg(input) {
    let chislo = Number(input.shift());

    switch (chislo) {
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Error"); break;

    }
}

function fff(input) {
    let animal = input.shift();

    switch (animal) {
        case "dog": console.log("mammal"); break;
        case "snake": console.log("reptile"); break;
        case "crocodile": console.log("reptile"); break;
        case "tortoise": console.log("reptile"); break;
        default: console.log("unknown")
    }
}

