function kotence(input){

    let cenaUiski = Number(input.shift());
    let biraL = Number(input.shift());
    let vinoL = Number(input.shift());
    let rakiqL = Number(input.shift());
    let uiskiL = Number(input.shift());

    let cenaRakiq = cenaUiski / 2;
    let cenaVino = cenaRakiq * 0.6;
    let cenaBira = cenaRakiq * 0.2;

    let pariBira = biraL * cenaBira;
    let pariVino = vinoL * cenaVino;
    let pariRakiq = rakiqL * cenaRakiq;
    let pariUiski = uiskiL * cenaUiski;

    let krai = pariBira + pariVino + pariRakiq + pariUiski;

  console.log (krai.toFixed(2));
    
 
}

kotence([50, 10, 3.5, 6.5, 1]);