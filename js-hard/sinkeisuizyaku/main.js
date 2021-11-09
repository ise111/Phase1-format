let cardNums = [1, 1, 2, 2, 3, 3, 4, 4];

console.log(shuffle(cardNums));
function shuffleCards() {
    for (let i = cardNums.length - 1; i = 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cardNums[i], cardNums[j]] =[cardNums[j], cardNums[i]]
    }
}

shuffleCards();