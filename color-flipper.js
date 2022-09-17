const btn = document.getElementById('click-change');
const colorvalues = document.getElementById('color-code');


const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener('click', function () {
    let hexThing = "#";
    for (let i = 0; i < 6; i++) {
        hexThing += HEX[getCode()];
    }

    // console.log(hexThing);
    colorvalues.innerText = hexThing;
    const BG = document.getElementById('BG-HERE');
    BG.style.backgroundColor = hexThing;


});

const getCode = () => {
    return Math.floor(Math.random() * HEX.length);
}


