const panel = document.getElementById('panel');
const backCard = document.querySelector('.back');
const backCards = document.querySelectorAll('.back');
const nextPlayer = document.getElementById('nextPlayer');
const player1 = document.getElementById('player1Point');
const player2 = document.getElementById('player2Point');


let cardNums = [1, 1, 2, 2, 3, 3, 4, 4];
let openCount = 0;
let showTime;
let card1;
let card2;
let player1Point = 0;
let player2Point = 0;
let turn = 0;



// カード配置
// カードシャッフル
function shuffleCards() {

    nextPlayer.textContent = `次はplayer${turn + 1}の番です`;
    player1.textContent = `player1: ${player1Point}`;
    player2.textContent = `player2: ${player2Point}`;

    for (let i = cardNums.length - 1; i >= 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));
        [cardNums[i], cardNums[j]] =[cardNums[j], cardNums[i]];

    }
}

// panelに配置
function setCards() {

    for (let i = 0; i < cardNums.length; i++) {

        panel.children[i].value = cardNums[i];

    }
}

// ゲームプレイ
// カードオープン
function openCard() {
    // 同じカード押し防止
    if (this === card1) {
        return;
    } else {
        openCount++;
    }

    if (openCount === 1) {
        card1 = this;
        card1.classList.remove('back');
        card1.textContent = card1.value;

    } else if (openCount === 2) {
        card2 = this;
        card2.classList.remove('back');
        card2.textContent = card2.value;

        showTime = setInterval(checkCards, 1000);
        
    } else {
        return;
    }

}


// オープンカードの判定
function checkCards() {
    clearInterval(showTime);

    if (card1.value === card2.value) {
        card1.classList.add('finish');
        card2.classList.add('finish');
        openCount = 0;

        if (turn === 0) {

            player1Point++;
            player1.textContent = `player1: ${player1Point}`;

        } else {

            player2Point++;
            player2.textContent = `player2: ${player2Point}`;

        }

        if (document.querySelectorAll('.finish').length === 8) {

            if (player1Point === player2Point) {
                alert('引き分け');
            } else if (player1Point > player2Point) {
                alert('player1の勝ち');
            } else {
                alert('player2の勝ち');
            }

            reset();

        }

    } else {

        card1.classList.add('back');
        card2.classList.add('back');
        card1.textContent = '';
        card2.textContent = '';
        openCount = 0;
        turn = (turn + 1) % 2;
        nextPlayer.textContent = `次はplayer${turn + 1}の番です`;
        
    }
}

// ゲーム再スタート
function reset() {
    document.querySelectorAll('.finish').forEach(function(finish) {
        finish.classList.remove('finish');
        finish.classList.add('back');
        finish.textContent = '';
    });
    turn = 0;
    player1Point = 0;
    player2Point = 0;

    shuffleCards();
    setCards();
}


backCards.forEach(function(backCard) {
    backCard.addEventListener('click', openCard);
});

shuffleCards();
setCards();
