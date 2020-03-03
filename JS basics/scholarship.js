function nqshto(input){
    let dohod = Number(input.shift());
    let sredenUspeh = Number(input.shift());
    let minZaplata = Number(input.shift());
    let socStipendiq = Math.floor(minZaplata * 0.35);
    let stipendiqOtl = Math.floor(25 * sredenUspeh);
    if (dohod < minZaplata){
        if(sredenUspeh >= 4.50){
            if (socStipendiq > stipendiqOtl){
                console.log(`You get a Social scholarship ${socStipendiq} BGN`);
            }else {
                console.log(`You get a Social scholarship ${stipendiqOtl} BGN`);
            }
        }
    }else if (sredenUspeh >= 5.50){
        if(socStipendiq > stipendiqOtl){
            console.log(`You get a scholarship for excellent results ${socStipendiq} BGN`)
        }else{
            console.log(`You get a scholarship for excellent results ${stipendiqOtl} BGN`)
        }
    }else{
        console.log("You cannot get a scholarship!")
    }
    
}

nqshto([450.00,
    5.65,
    420.00])