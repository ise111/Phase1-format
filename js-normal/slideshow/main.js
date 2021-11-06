const season = [
    {img: './img/slide1.png', text: '春へ'},
    {img: './img/slide2.png', text: '夏へ'},
    {img: './img/slide3.png', text: '秋へ'},
    {img: './img/slide4.png', text: '冬へ'}
];
const img = document.querySelector('img');
const btn = document.getElementById('pushBtn');
const selectNum = document.getElementById('seasonNum');
const skipBtn = document.getElementById('skipBtn');
let num = 0;

img.setAttribute('src', season[num].img);
btn.textContent = season[num].text;

btn.addEventListener('click', e => {
    if (num === 3) {
        num = 0;
    } else {
        num++;
    }
    img.setAttribute('src', season[num].img);
    btn.textContent = season[num].text;
});


skipBtn.addEventListener('click', e => {
    let skipNum = selectNum.value;
    img.setAttribute('src', season[skipNum].img);
    btn.textContent = season[skipNum].text;
});
console.log(selectNum.value);