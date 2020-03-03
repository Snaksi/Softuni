function kotence(input){

    let pari = Number(input.shift());
    let statisti = Number(input.shift());
    let cenaGashti = Number(input.shift());

    if (statisti >= 150){
        cenaGashti *= 0.90; // s *= se promenq stoinosta na neshtoto ako starata stoinost se izpolzva pri promqnata zvezdata se smenq spored deistvieto
    }

    let dekor = pari * 0.10;
    let gashti = statisti * cenaGashti;
    
    let razhodi = dekor + gashti;
    let krai = pari - razhodi;

    if (razhodi > pari){
        krai = Math.abs(krai);
    console.log("Not enough money!");
    console.log(`Wingard needs ${krai.toFixed(2)} leva more.`);
    
    } else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${krai.toFixed(2)} leva left.`);
    }
}

kotence([20000,
    120,
    55.5])