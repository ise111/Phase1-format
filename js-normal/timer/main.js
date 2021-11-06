const inputTime = document.getElementById('inputTime');
const setBtn = document.getElementById('setTime');
const startBtn = document.getElementById('startTimer');
const stopBtn = document.getElementById('stopTimer');
const timeInfo = document.getElementById('nowTime');
let setSec = inputTime.value;
let setMin = 0;
let setHour = 0;
let timer;
console.log(inputTime.value);

function countTime() {
    setSec--;
    timeInfo.textContent = `${setHour}:${setMin}:${setSec}`
    if (setSec === 0 && setMin === 0 && setHour === 0) {
        alert('終了です！！')
        clearInterval(timer);
        setSec = inputTime.value;
    } else if (setHour === 0 && setSec === 0) {
        setMin--;
        setSec = 60;
    } else if (setSec === 0) {
        setHour--;
        setMin = 59;
        setSec = 60;
    }

};

setBtn.addEventListener('click', e => {
    setSec = inputTime.value;
    setMin = 0;
    setHour = 0;
    console.log(setSec);
    if (setSec >= 60) {
        setMin = Math.floor(setSec / 60);
        setSec = setSec % 60;
        console.log(setMin);

        if (setMin >= 60) {
            setHour = Math.floor(setMin / 60);
            setMin = setMin % 60;
        }
    }

    timeInfo.textContent = `${setHour}時間${setMin}分${setSec}秒:セット完了です。`
    if (setSec === '') {
        document.querySelector('.msg').textContent = '※数字を入力してください';
    } else {
        document.querySelector('.msg').textContent = '';
    }
});

startBtn.addEventListener('click', e => {
    timer = setInterval(countTime, 1000);
});

stopBtn.addEventListener('click', e => {
    clearInterval(timer);
    timeInfo.textContent = `${setSec}: ストップしてます`;
});