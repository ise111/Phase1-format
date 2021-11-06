// const startBtn = document.getElementById('diceBtn')
// const body = document.querySelector('body')

// // const diceImg = document.createElement('img')

// body.appendChild(diceImg)
// let diceNum = './img/saikoro1.png'

// // diceImg.setAttribute("src", diceNum)

// let timer;
// // let count = 0
// function random() {
//     diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
//     diceImg.setAttribute("src", diceNum) 
//     // count += 0.1;
//     // console.log(count)
//     // if (count >= 3) {
//     //     clearInterval(timer);
//     //     count = 0;
//     // }   
// }

// startBtn.addEventListener('click', e => {
//     // if (count === 0) {
//     clearInterval(timer);    
//     timer = setInterval(random, 100);
    
//     setTimeout(() =>{
//         clearInterval(timer)
//     }, 3000);
//     // } else {
//         // count = 0;
//     // }
// });

// 追加チャレンジ

const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');
const resultMsg = document.getElementById('result');

const dice1 = document.getElementById('setPlayer1dice');
const dice2 = document.getElementById('setPlayer2dice');
let diceNum = './img/saikoro1.png'
let timer;

dice1.setAttribute("src", diceNum);
dice2.setAttribute('src', diceNum);

function random(dice) {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    let diceNum = `./img/saikoro${randomNum}.png`;
    dice.setAttribute("src", diceNum);
}

function result() {
    let result1 = dice1.getAttribute('src').replace(/[^0-9]/g, '');
    let result2 = dice2.getAttribute('src').replace(/[^0-9]/g, '');

    if (result1 < result2) {
        resultMsg.textContent = 'プレイヤー２の勝利';
    } else if (result2 < result1) {
        resultMsg.textContent = 'プレイヤー1の勝利';
    } else {
        resultMsg.textContent = 'ドロー';
    }
    player1Btn.disabled = false;
    player2Btn.disabled = false;
}

player1Btn.addEventListener('click', e => {
    clearInterval(timer);    
    timer = setInterval('random(dice1)', 100);
    
    setTimeout(() =>{
        clearInterval(timer)
        if (player2Btn.getAttribute('disabled')) {
            result();
        }
    }, 3000);
    player1Btn.setAttribute('disabled', true);
});

player2Btn.addEventListener('click', e => {
    clearInterval(timer);    
    timer = setInterval('random(dice2)', 100);
    
    setTimeout(() =>{
        clearInterval(timer)
        if (player1Btn.getAttribute('disabled')) {
            result();
        }
    }, 3000);
    player2Btn.setAttribute('disabled', true);
});


