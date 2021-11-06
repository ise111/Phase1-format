
function setBtn() {
    i = Math.floor(Math.random() * 10)
    console.log(i)
    if (i < 5) {
        // confirm('ペッペッペー')
        let res = confirm('ペッペッペー')
        if (res) {
            alert('ペッペッペー')
        } else {
            alert('斉藤さんだぞ！！！')
        }
    }　else {
        let res = confirm('斉藤さんだぞ！！！')
            if (res) {
                alert('斉藤さんだぞ！！！')
            } else {
                alert('ペッペッペー')
            }
    }
}