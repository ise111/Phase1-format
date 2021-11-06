// const startBtn = document.getElementById('gameStart');
// const cpHand = document.getElementById('cpHand');
// const log = document.getElementById('log');

// startBtn.addEventListener('click', e => {
//     startBtn.addEventListener('click', e => {
//         alert('unko')
//     });
//     let myHand = document.getElementById('myHand').value;
//     let cpTurn = Math.floor(Math.random() * 3);
//     switch (cpTurn) {
//         case 0: 
//             cpHand.textContent = '相手の手：グー';
//             if (myHand === '0') {
//                 log.textContent = '結果：あいこ';
//             } else if (myHand === '1') {
//                 log.textContent = '結果：負け';
//             } else if (myHand === '2') {
//                 log.textContent = '結果：勝ち';
//             }
//             break;
//         case 1:
//             cpHand.textContent = '相手の手：チョキ';
//             if (myHand === '0') {
//                 log.textContent = '結果：勝ち';
//             } else if (myHand === '1') {
//                 log.textContent = '結果：あいこ';
//             } else if (myHand === '2') {
//                 log.textContent = '結果：負け';
//             }
//             break;
//         case 2:
//             cpHand.textContent = '相手の手：パー';
//             if (myHand === '0') {
//                 log.textContent = '結果：負け';
//             } else if (myHand === '1') {
//                 log.textContent = '結果：勝ち';
//             } else if (myHand === '2') {
//                 log.textContent = '結果：あいこ';
//             }
//             break;
//     }
// });

const setBtn = document.getElementById('setHand');
const player = document.getElementById('player');
const player1Hand = document.getElementById('player1Hand');
const player2Hand = document.getElementById('player2Hand');
const gameStart = document.getElementById('gameStart');
const log = document.getElementById('log');
let clickCount = 0;
let firstHand;
let secondHand;




setBtn.addEventListener('click', e => {
    clickCount++;
    if (clickCount === 1) {
        firstHand = document.getElementById('playerHand').value;
        player.textContent = 'player2';
        player1Hand.textContent = 'player1:セット完了';
        console.log(firstHand)
    } else if (clickCount === 2) {
        secondHand = document.getElementById('playerHand').value;
        player.textContent = 'セット完了';
        player2Hand.textContent = 'player2:セット完了';
        console.log(secondHand)
    }
    
});

gameStart.addEventListener('click', e =>{
    if (clickCount >= 3) {
        alert('「決定ボタン」を2回以上クリックしないでください。');
    }
    
    switch (firstHand) {
        case '0': 
            player1Hand.textContent = 'player1：グー';
            if (secondHand === '0') {
                log.textContent = '結果：あいこ';
                player2Hand.textContent = 'player2：グー';
            } else if (secondHand === '1') {
                log.textContent = '結果：player1の勝ち';
                player2Hand.textContent = 'player2：チョキ';
            } else if (secondHand === '2') {
                log.textContent = '結果：player2の勝ち';
                player2Hand.textContent = 'player2：パー';
            }
            break;
        case '1':
            player1Hand.textContent = 'player1：チョキ';
            if (secondHand === '0') {
                log.textContent = '結果：player2の勝ち';
                player2Hand.textContent = 'player2：グー';
            } else if (secondHand === '1') {
                log.textContent = '結果：あいこ';
                player2Hand.textContent = 'player2：チョキ';
            } else if (secondHand === '2') {
                log.textContent = '結果：player1の勝ち';
                player2Hand.textContent = 'player2：パー';
            }
            break;
        case '2':
            player1Hand.textContent = 'player1：パー';
            if (secondHand === '0') {
                log.textContent = '結果：player1の勝ち';
                player2Hand.textContent = 'player2：グー';
            } else if (secondHand === '1') {
                log.textContent = '結果：player2の勝ち';
                player2Hand.textContent = 'player2：チョキ';
            } else if (secondHand === '2') {
                log.textContent = '結果：あいこ';
                player2Hand.textContent = 'player2：パー';
            }
            break;
    }
    player.textContent = 'player1';
    clickCount = 0;
});