const setNum = document.getElementById('answerNum');
const numCheckBtn = document.getElementById('numCheck');
const remainTurn = document.getElementById('remainTurn');

// 初期値
let eatCount = 0;
let biteCount = 0;
let turn = 10;
let nums = [
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
];
let cpNums = [];
remainTurn.textContent = `残り${turn}回です。`;

// cpの数字決定関数
function randomNums() {
    cpNums = [];
    let cpNumIndex1 = Math.floor(Math.random() * 10);
    let cpNumIndex2 = Math.floor(Math.random() * 10);
    let cpNumIndex3 = Math.floor(Math.random() * 10);
    
    // 数字の重複防止
    while (cpNumIndex1 === cpNumIndex2) {
        cpNumIndex2 = Math.floor(Math.random() * 10);
    }
    
    while (cpNumIndex1 === cpNumIndex3 || cpNumIndex2 === cpNumIndex3) {
        cpNumIndex3 = Math.floor(Math.random() * 10);
    }

    cpNums.push(nums[0][cpNumIndex1]);
    cpNums.push(nums[1][cpNumIndex2]);
    cpNums.push(nums[2][cpNumIndex3]);
    console.log(cpNums);
}

// 判定関数
function judge(nums) {

    for (let i = 0; i < 3; i++) {
        if (nums[i] === cpNums[i]) {
            eatCount++;
        } else if (nums[i] === cpNums[(i + 1) % 3] || nums[i] === cpNums[(i + 2) % 3]) {
            biteCount++;
        }
    }

    alert(`${eatCount}EAT,${biteCount}BITE`);

    if (eatCount === 3) {
        alert('クリア！！');
        turn = 10;
        randomNums();
    }
}

function answer() {
    eatCount = 0;
    biteCount = 0;
    turn --;
    let answerNums = Array.from(setNum.value);
    
    if (answerNums[0] === answerNums[1] || answerNums[1] === answerNums[2] || answerNums[2] === answerNums[0]) {
        alert('同じ数字を入れないでください');
        setNum.value = '';
        return;
    }
    
    if (answerNums.length !== 3) {
        alert('3桁の数字を入力してください');
        setNum.value = '';
        return;
    }
    
    judge(answerNums);
    
    if (turn === 0) {
        alert('ターンを使い切りました。あなたの負けです。');
        turn = 10;
        randomNums();
    }
    remainTurn.textContent = `残り${turn}回です。`;
    setNum.value = '';
}
// 答え合わせボタンイベント
numCheckBtn.addEventListener('click', answer);


// 関数呼び出し
randomNums();

