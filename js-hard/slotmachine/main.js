
const num1 = document.getElementById('nowTime');
const num2 = document.getElementById('nowTime2');
const num3 = document.getElementById('nowTime3');
const num4 = document.getElementById('nowTime4');
const num5 = document.getElementById('nowTime5');
const num6 = document.getElementById('nowTime6');
const num7 = document.getElementById('nowTime7');
const num8 = document.getElementById('nowTime8');
const num9 = document.getElementById('nowTime9');
const startBtn = document.getElementById('startTimer');
const stopBtn1 = document.getElementById('setTime1');
const stopBtn2 = document.getElementById('setTime2');
const stopBtn3 = document.getElementById('setTime3');
const middleSlot = document.querySelector('.middle-slot');


num1.value = 0;
num2.value = 9;
num3.value = 8;
num4.value = 9;
num5.value = 9;
num6.value = 9;
num7.value = 1;
num8.value = 1;
num9.value = 1;
num1.textContent = num1.value;
num2.textContent = num2.value;
num3.textContent = num3.value;
num4.textContent = num4.value;
num5.textContent = num5.value;
num6.textContent = num6.value;
num7.textContent = num7.value;
num8.textContent = num8.value;
num9.textContent = num9.value;
let timer1;
let timer2;
let timer3;
let timer4;
let timer5;
let timer6;
let timer7;
let timer8;
let timer9;

console.log((num2.value + 1) % 10);

// 0~9に変化する関数
function rotate(num) {

    num.value = (num.value + 1) % 10;
    num.textContent = num.value;
}

// 結果判定関数
function result() {

    if (num1.value === num2.value && num2.value === num3.value) {
        alert('おめでとう！！');
    } else if ((num1.value + 1) % 10 === num2.value && (num2.value + 1) % 10 === num3.value) {
        alert('斜め揃い！おめでとう！');
    } else if (num1.value === (num2.value + 1) % 10 && num2.value === (num3.value + 1) % 10) {
        alert('斜め揃い！おめでとう！');
    } else {
        alert('再挑戦');
    }
}

// 全ての数字が変化する関数
function start() {
    
    // 初期化、連続押し対策
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
    stopBtn1.disabled = false;
    stopBtn2.disabled = false;
    stopBtn3.disabled = false;
    
    timer1 = setInterval(function() {
        rotate(num1);
    }, 100);
    timer2 = setInterval(function() {
        rotate(num2);
    }, 100);
    timer3 = setInterval(function() {
        rotate(num3);
    }, 100);
    timer4 = setInterval(function() {
        rotate(num4);
    }, 100);
    timer5 = setInterval(function() {
        rotate(num5);
    }, 100);
    timer6 = setInterval(function() {
        rotate(num6);
    }, 100);
    timer7 = setInterval(function() {
        rotate(num7);
    }, 100);
    timer8 = setInterval(function() {
        rotate(num8);
    }, 100);
    timer9 = setInterval(function() {
        rotate(num9);
    }, 100);
}



// スタートボタン
startBtn.addEventListener('click', start);

// ストップボタン1
stopBtn1.addEventListener('click', function() {
    clearInterval(timer1);
    clearInterval(timer4);
    clearInterval(timer7);
    stopBtn1.setAttribute('disabled', true);
    if (stopBtn2.disabled && stopBtn3.disabled) {
        result();
    }
});

// ストップボタン2
stopBtn2.addEventListener('click', function() {
    clearInterval(timer2);
    clearInterval(timer5);
    clearInterval(timer8);
    stopBtn2.setAttribute('disabled', true);

    if (stopBtn1.disabled && stopBtn3.disabled) {
        result();
    }
});

// ストップボタン3
stopBtn3.addEventListener('click', function() {
    clearInterval(timer3);
    clearInterval(timer6);
    clearInterval(timer9);
    stopBtn3.setAttribute('disabled', true);

    if (stopBtn2.disabled && stopBtn1.disabled) {
        result();
    }
});


