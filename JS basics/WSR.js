function ba(input){
    let recSec = Number(input.shift());
    let razM = Number(input.shift());
    let vremeZaM = Number(input.shift());

    let vremeIvan = ((vremeZaM * razM) + (Math.floor(razM/15)*12.5)).toFixed(2);
    let razlika = Math.abs(vremeIvan - recSec);

    if(recSec <= vremeIvan){
        console.log(`No, he failed! He was ${razlika.toFixed(2)} seconds slower.`);
    }else{
        console.log(`Yes, he succeeded! The new world record is ${vremeIvan} seconds.`);

    }

}

ba([10464,
    1500,
    20])