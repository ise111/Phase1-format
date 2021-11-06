const nowPwd = document.getElementById('nowPassword');
const confirmPwd = document.getElementById('confirmPassword');
const newPwd = document.getElementById('newPassword');
const setPwd = document.getElementById('setPassword');
let correntPwd = 'aaaaa';

console.log(nowPwd.textContent);
nowPwd.textContent = `現在のパスワードは${correntPwd}`;

setPwd.addEventListener('click', e => {
    if (correntPwd === confirmPwd.value) {
        if (newPwd.value.match(/^\d{3}-?\d{4}$/g)) {
            if (newPwd.value.match(/(.+)(\1)/g)) {
                alert('同じ数字を連続して使えません')
            } else {
                if (newPwd.value.match(/123/g)) {
                    alert('「123」が含まれるものは使えません')
                } else {
                    if (newPwd.value.length < 8) {
                        alert('文字数は8文字以上で入力下さい');
                    } else if (newPwd.value === confirmPwd.value) {
                        alert('古いパスワードと同じものは使えません');
                    } else {
                        correntPwd = newPwd.value;
                        nowPwd.textContent = `現在のパスワードは${correntPwd}`;
                        alert(`新しいパスワードは${correntPwd}`);
                    }
                }

            }

            
        } else {
            alert('###-####形式で数字を入力ください');
        }
    } else {
        alert('現在のパスワードが違います。');
    }

});

