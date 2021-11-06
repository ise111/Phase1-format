const startBtn = document.getElementById('startTimer');
const confirmBtn = document.getElementById('confirmTime');
let timer;
let countSec = 0;

// function countTime() {
//     countSec++;
//     console.log(countSec);
//     if (countSec >= 40) {
//         alert('待ちすぎ！40秒が経ちました');
//         clearInterval(timer);
//         countSec = 0;
//     }
// }

// startBtn.addEventListener('click', e => {
//     clearInterval(timer);
//     timer = setInterval(countTime, 1000);
// });

// confirmBtn.addEventListener('click', e => {
//     clearInterval(timer);
//     if (countSec < 5) {
//         alert(`まだ${countSec}秒、、、もう一度！`);
//     } else if (countSec < 10) {
//         alert(`まだまだ${countSec}秒、、、もう一度！`);
//     } else if (countSec < 15) {
//         alert(`早い！${countSec}秒！！もう一度！`);
//     } else if (countSec < 20) {
//         alert(`もう少し待て！${countSec}秒！！もう一度！`);
//     } else if (countSec === 20) {
//         alert(`ジャスト！！！！${countSec}秒！！`);
//     }　else {
//         alert(`もう${countSec}秒。。。。`);
//     }
//     countSec = 0;
// });

// チャレンジ

let startSec;
let startMin;
let stopSec;
let stopMin;
let resultSec;

function countTime() {
    let stopTime = new Date();
    stopSec = stopTime.getSeconds();
    stopMin = stopTime.getMinutes();

    if (startMin === stopMin) {
        resultSec = stopSec - startSec;
    } else {
        resultSec = stopSec + 60 - startSec;
    }
    if (resultSec >= 40) {
        alert('待ちすぎ！40秒が経ちました');
        clearInterval(timer);
    }
}
        
startBtn.addEventListener('click', e => {
    let startTime = new Date();
    startSec = startTime.getSeconds();
    startMin = startTime.getMinutes();
    timer = setInterval(countTime, 1000);

    
});

confirmBtn.addEventListener('click', e => {
     if (startSec === undefined) {
        return;
    }

    if (resultSec < 5) {
        alert(`まだ${resultSec}秒、、、もう一度！`);
    } else if (resultSec < 10) {
        alert(`まだまだ${resultSec}秒、、、もう一度！`);
    } else if (resultSec < 15) {
        alert(`早い！${resultSec}秒！！もう一度！`);
    } else if (resultSec < 20) {
        alert(`もう少し待て！${resultSec}秒！！もう一度！`);
    } else if (resultSec === 20) {
        alert(`ジャスト！！！！${resultSec}秒！！`);
    }　else {
        alert(`もう${resultSec}秒。。。。`);
    }
    clearInterval(timer);
});
