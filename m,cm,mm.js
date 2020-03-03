function sec(input){
    let chislo = Number(input.shift());
    let vhod = input.shift();
    let izhod = input.shift();

    if (vhod === "cm"){
        chislo = chislo / 10;
    } else if (vhod === "m"){
        chislo = chislo * 1000;
    }
    let krai = 0;

    if (izhod === "cm"){
        krai = chislo / 10;
    } else if (izhod === "m"){
        krai = chislo / 1000;
    } else if (izhod === "mm"){
        krai = chislo ;
    }
    console.log(krai.toFixed(3));
}

sec(["45",
    "cm",
    "mm"])