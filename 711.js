const money = document.getElementById('money')
const pay = document.getElementById('pay')
const sukli = document.getElementById('change')
const total = document.getElementById('total')

const sminus = document.getElementById('soft-drinks-minus')
const splus = document.getElementById('soft-drinks-plus')
const squantity = document.getElementById('soft-drinks-quantity')
const sototal = document.getElementById('stotal')

const cminus = document.getElementById('chips-minus')
const cplus = document.getElementById('chips-plus')
const cquantity = document.getElementById('chips-quantity')
const cototal = document.getElementById('ctotal')


const iminus = document.getElementById('ice-minus')
const iplus = document.getElementById('ice-plus')
const iquantity = document.getElementById('ice-quantity')
const iototal = document.getElementById('itotal')

const bminus = document.getElementById('biskwet-minus')
const bquantity = document.getElementById('biskwet-quantity')
const bplus = document.getElementById('biskwet-plus')
const bototal = document.getElementById('btotal')

const aminus = document.getElementById('alcohol-minus')
const aplus = document.getElementById('alcohol-plus')
const aquantity = document.getElementById('alcohol-quantity')
const aototal = document.getElementById('atotal')

const dminus = document.getElementById('donot-minus')
const dplus = document.getElementById('donot-plus')
const dquantity = document.getElementById('donot-quantity')
const dototal = document.getElementById('dtotal')

squantity.value = Number(squantity.value)
cquantity.value = Number(cquantity.value)
iquantity.value = Number(iquantity.value)
bquantity.value = Number(bquantity.value)
aquantity.value = Number(aquantity.value)
dquantity.value = Number(dquantity.value)



let stotal;
let soft = 43;

let ctotal;
let chip = 15;

let itotal;
let ice = 20;

let btotal;
let biskwet = 8;

let atotal;
let alcohol = 56;

let dtotal;
let dougnot = 23;

alert("Welcome to 7EVELYN ENJOY!")

//soft
splus.onclick = function(){
    squantity.value++;
    stotal = soft * squantity.value 
    squantity.textContent = squantity.value ;
    sototal.textContent = stotal ;
}
sminus.onclick = function(){
    squantity.value--;
    stotal -= soft;
    if(squantity.value < 0 || stotal < 0){
        alert('sorry out of order')
        squantity.value = 0;
    }
    else{
    squantity.textContent = squantity.value ;
    sototal.textContent = stotal ;
}
}
//

//chips
cplus.onclick = function(){
    cquantity.value++;
    ctotal = chip * cquantity.value 
    cquantity.textContent = cquantity.value ;
    cototal.textContent = ctotal ;
}
cminus.onclick = function(){
    cquantity.value--;
    ctotal -= chip;
    if(cquantity.value < 0 || ctotal < 0){
        alert('sorry out of order')
        cquantity.value = 0;
    }
    else{
    cquantity.textContent = cquantity.value ;
    cototal.textContent = ctotal ;
}
}
//

//ice
iplus.onclick = function(){
    iquantity.value++;
    itotal = ice * iquantity.value 
    iquantity.textContent = iquantity.value ;
    iototal.textContent = itotal ;
}
iminus.onclick = function(){
    iquantity.value--;
    itotal -= ice;
    if(iquantity.value < 0 || itotal < 0){
        alert('sorry out of order')
        iquantity.value = 0;
    }
    else{
    iquantity.textContent = iquantity.value ;
    iototal.textContent = itotal ;
}
}
//

//biskwet
bplus.onclick = function(){
    bquantity.value++;
    btotal = biskwet * bquantity.value 
    bquantity.textContent = bquantity.value ;
    bototal.textContent = btotal ;
}
bminus.onclick = function(){
    bquantity.value--;
    btotal -= biskwet;
    if(bquantity.value < 0 || btotal < 0){
        alert('sorry out of order')
        bquantity.value = 0;
    }
    else{
    bquantity.textContent = bquantity.value ;
    bototal.textContent = btotal ;
}
}
//

//alcohol
aplus.onclick = function(){
    aquantity.value++;
    atotal = alcohol * aquantity.value 
    aquantity.textContent = aquantity.value ;
    aototal.textContent = atotal ;
}
aminus.onclick = function(){
    aquantity.value--;
    atotal -= aiskwet;
    if(aquantity.value < 0 || atotal < 0){
        alert('sorry out of order')
        aquantity.value = 0;
    }
    else{
    aquantity.textContent = aquantity.value ;
    aototal.textContent = atotal ;
}
}
//

//donot
dplus.onclick = function(){
    dquantity.value++;
    dtotal = dougnot * dquantity.value 
    dquantity.textContent = dquantity.value ;
    dototal.textContent = dtotal ;
}
dminus.onclick = function(){
    dquantity.value--;
    atotal -= aiskwet;
    if(dquantity.value < 0 || dtotal < 0){
        alert('sorry out of order')
        dquantity.value = 0;
    }
    else{
    dquantity.textContent = dquantity.value ;
    dototal.textContent = dtotal ;
}
}
//


//payment
pay.onclick = function() {
    let moneyValue = parseFloat(money.value);

    if (isNaN(moneyValue) || money.value === "") {
        alert('please enter money');
        sukli.textContent = "0";
        return;
    }

    let sTotal = stotal || 0;
    let cTotal = ctotal || 0;
    let iTotal = itotal || 0;
    let bTotal = btotal || 0;
    let aTotal = atotal || 0;
    let dTotal = dtotal || 0;

    let totalAmount = sTotal + cTotal + iTotal + bTotal + aTotal + dTotal;

    let change = moneyValue - totalAmount;

    if (change < 0) {
        sukli.textContent = "More money needed";
    } else {
        sukli.textContent = change;
    }

    total.textContent = totalAmount;
}
//
