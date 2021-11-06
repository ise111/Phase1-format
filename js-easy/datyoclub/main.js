let memberNum = 0

function cntUp() {
    memberNum++
}

function reply() {
    let str1 = ''
    let str2 = 'どうぞどうぞぉ～'
    for(let i = 0;i < memberNum; i++) {
        str1 += str2
    }
    alert(str1)
    memberNum = 0
}

function cntDown() {
    memberNum--
    if (memberNum < 0) {
        alert('誰もやらないんかい！')
        memberNum = 0
    }
}