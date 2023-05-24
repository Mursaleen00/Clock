let se = document.getElementById('s');
let hr = document.getElementById('h');
let mi = document.getElementById('m');


function dispplayTime() {
    let date = new Date();


    let hh = date.getHours();
    let ss = date.getSeconds();
    let mm = date.getMinutes();

    let hRutrate = 30 * hh + mm / 2;
    let mRutrate = 6 * mm;
    let sRutrate = 6 * ss;

    hr.style.transform = `rotate(${hRutrate}deg)`;
    se.style.transform = `rotate(${sRutrate}deg)`;
    mi.style.transform = `rotate(${mRutrate}deg)`;
}

setInterval(dispplayTime, 1000);