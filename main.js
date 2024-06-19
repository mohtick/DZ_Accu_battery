


let curDisp = document.querySelector('.current_display');
let resDisp = document.querySelector('.resistance_display');


let btnPlus = document.querySelector('.btn_plus');
let btnMinus = document.querySelector('.btn_minus');

let voltage = 12;
let resistance = 10;


btnPlus.addEventListener('click', () => {
    resistance = resistance + 1;
    let current = voltage / resistance;
    resDisp.innerHTML = `${resistance} Om`;
    curDisp.innerHTML = `${current.toFixed(2)} A`;
});

btnMinus.addEventListener('click', () => {
    if (resistance <= 0) {
        return;
    }
    resistance = resistance - 1;
    let current = voltage / resistance;
    resDisp.innerHTML = `${resistance} Om`;
    curDisp.innerHTML = `${current.toFixed(2)} A`;
});


