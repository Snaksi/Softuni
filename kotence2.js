function koko(input){

    let priceEx = Number(input.shift());
    let broiPZ = Number(input.shift());
    let broiGK = Number(input.shift());
    let broiPM = Number(input.shift());
    let broiM = Number(input.shift());
    let broiK = Number(input.shift());

    let pariPZ = broiPZ * 2.60;
    let pariGK = broiGK * 3;
    let pariPM = broiPM * 4.10;
    let pariM = broiM * 8.20;
    let pariK = broiK * 2;

    let broika = broiPZ + broiGK + broiPM + broiM + broiK;
    let pari = (pariPZ + pariGK + pariPM + pariM + pariK);
    if (broika >= 50){
        pari = pari * 0.75;
    }
    pari = pari * 0.90;
    if (pari >= priceEx){
        let krai = (pari - priceEx).toFixed(2);
        console.log(`Yes! ${krai} lv left.`);
    }else{
        let krai = Math.abs(pari - priceEx).toFixed(2);
        console.log(`Not enough money! ${krai} lv needed.`)
    }

}
koko([40.8,
    1,
    1,
    1,
    1,
    10])