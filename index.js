let die = document.getElementById('die');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let img1 = document.getElementById('1');
let img2 = document.getElementById('2');
let img3 = document.getElementById('3');
let img4 = document.getElementById('4');
let img5 = document.getElementById('5');
let img6 = document.getElementById('6');

function roll() {
    let numberOfDice = [];
    for (let x = 0; x < die.value; x++) {
        numberOfDice.unshift(Math.floor(Math.random() * 5) + 1);
    }

    for (let y = 0; y < numberOfDice.length; y++) {
        switch (numberOfDice[y]) {
            case 1:
                img1.style.visibility = "visible";
                break;
            case 2:
                img2.style.visibility = "visible";
                break;
            case 3:
                img3.style.visibility = "visible";
                break;
            case 4:
                img4.style.visibility = "visible";
                break;
            case 5:
                img5.style.visibility = "visible";
                break;
            case 6:
                img6.style.visibility = "visible";
                break;
        }
    }


}

btn.addEventListener('click', roll);