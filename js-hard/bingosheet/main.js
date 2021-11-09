const row0 = document.getElementById('row0');
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const row3 = document.getElementById('row3');
const row4 = document.getElementById('row4');
const hitBtn = document.getElementById('hitNum');

let nums;
let usedNums = [];

// ビンゴカードの数字生成
function genarateNums() {
    
    nums = [[],[],[],[],[]];
    let supportNum = 1;
    let preNum = Math.floor(Math.random() * 15 + supportNum);

    for (let i = 0; i < 5; i ++) {

        for (let j = 0;j < 5; j ++) {

            while (nums.flat().includes(preNum)) {

                preNum = Math.floor(Math.random() * 15 + supportNum);

            }

            nums[j].push(preNum);

        }

        supportNum += 15;

    }

    nums[2][2] = 'free';
    setNums(row0, nums[0]);
    setNums(row1, nums[1]);
    setNums(row2, nums[2]);
    setNums(row3, nums[3]);
    setNums(row4, nums[4]);
}

// ビンゴカードにテキスト
function setNums(row, ary) {

    for(let childNum = 0; childNum < 5; childNum ++) {

        row.children[childNum].textContent = ary[childNum];

    }
} 

// 抽選
function lotteryNums() {
    // 初期化
    if (usedNums.length === 75) {
        alert('全ての数字が出ました！');
        usedNums = [];
        genarateNums();
        let hitedNums = document.querySelectorAll('.hit-num')

        hitedNums.forEach(function(hitedNum) {
            hitedNum.classList.remove('hit-num');
        });
        return;
    }

    // 数字の抽選
    let lotteryNum = Math.floor(Math.random() * 75 + 1);

    while (usedNums.flat().includes(lotteryNum)) {

        lotteryNum = Math.floor(Math.random() * 75 + 1);

    }
    
    alert(`数字は${lotteryNum}番です！`);
    usedNums.push(lotteryNum);

    // ビンゴカードとの整合
    for (let rowNum = 0; rowNum < nums.length; rowNum++) {

        if (nums[rowNum].includes(lotteryNum)) {
            let columnNum = nums[rowNum].indexOf(lotteryNum);
            document.getElementById(`row${rowNum}`).children[columnNum].classList.add('hit-num');
        }

    }
}

genarateNums();

hitBtn.addEventListener('click', lotteryNums);
