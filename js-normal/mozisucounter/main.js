const txtForm = document.getElementById('sampleForm');
const str = document.getElementById('sampleForm');
const txtCount = document.getElementById('textCounter');
const resetBtn = document.getElementById('resetBtn');
const iniDelBtn = document.getElementById('iniDel');
const endDelBtn = document.getElementById('endDel');
let strRemain = 400;

txtCount.textContent = `残り${strRemain}文字`;



txtForm.addEventListener('keyup', e => {
    txtCount.textContent = `残り${strRemain - str.value.length}文字`;
    
    if (strRemain <= 0) {
        alert('文字数オーバーです');
    }
});

resetBtn.addEventListener('click', e => {
    txtCount.textContent = `残り${strRemain}文字`;
});

iniDelBtn.addEventListener('click', e => {
    str.value = str.value.slice(1);
});

endDelBtn.addEventListener('click', e => {
    str.value = str.value.slice(0, -1);
});