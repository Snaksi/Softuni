const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function test() {
    const sayHello = () => {console.log("Hello World!");}

    const printAreaTriangle = (width, height) => {
        let areaTriangle = (width*height)/2;
        console.log(`Лицето на равнобедрения триъгълник с основа ${width} и височина ${height} е = ${areaTriangle}`);
    }

    let snaksi = "Stanimir Spov", age = 25;
    printHello();
    console.log(`${snaksi} is ${age} y/o.`);
    console.log(snaksi + " is " + age + " y/o.");

    let areaSquare = calculateAreaSquare(5);
    console.log("Лице на квадрат със страна 5м = " + areaSquare);

    console.log("Лице на квадрат със страна 5м = " + calculateAreaSquare(5));

    sayHello();
    printAreaTriangle(10, 20);
    console.log(array);
    console.log(array[5]);

    let object = {
        name: "Angel",
        height: 170,
        eyes: "brown"
    };

    console.log(object.name);
}

test();

function printHello() {
    console.log("Hello World!");
}

function calculateAreaSquare(side) {
    return side*side;
}

//////////////////////////////////////////

(input) => { // strelkata sled inputa oznachava anonimna funkciq
    const   dohod = Number(input.shift()),
            sredenUspeh = Number(input.shift()),
            minimalnaZaplata = Number(input.shift());

    let socialna = 0, otlichen = 0;

    if(dohod < minimalnaZaplata && sredenUspeh > 4.5) { // ako "if/else if" se systoi ot edin red ne e pujno da se slagad {}
        socialna = minimalnaZaplata*0.35;
    }

    if(sredenUspeh >= 5.5) {
        otlichen = sredenUspeh*25;
    }

    if(socialna > 0 && otlichen > 0) { // && za postavqne na 2ro uslovie
        if(socialna > otlichen) {
            console.log(`You get a Social scholarship ${Math.floor(socialna)} BGN`);
        } else {
            console.log(`You get a scholarship for excellent results ${Math.floor(otlichen)} BGN`);
        }
    } else if(socialna > 0) {
        console.log(`You get a Social scholarship ${Math.floor(socialna)} BGN`);
    } else if(otlichen > 0) {
        console.log(`You get a scholarship for excellent results ${Math.floor(otlichen)} BGN`);
    } else {
        console.log("You cannot get a scholarship!");
    }
}

&& логическо и
|| логическо или
използвад се в if / else if функциите