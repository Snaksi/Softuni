function kotence(input){
    let chas = Number(input.shift());
    let minuti = Number(input.shift());
    
    minuti = minuti + 15;

    if (minuti > 59){
    chas = chas + 1;
    minuti = minuti - 60;
    if (minuti < 10){
        minuti = `0${minuti}`
    }
    }
    if (chas > 23){
        chas = 0;
    }
    

    let krai = `${chas}:${minuti}`

    console.log(`${chas}:${minuti}`)
}

kotence([23, 46])