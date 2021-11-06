// 基礎
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0  && i % 5 === 0) {
//         console.log(`fizzbuzz`) 
//     } else if (i % 5 === 0) {
//         console.log(`buzz`)
//     } else if (i % 3 === 0) {
//         console.log('fizz')
//     } else {
//         console.log(i)
//     }
// }

// チャレンジ
// let i = 0
// function rewriteCntUp() {
//     i++;
//     console.log(i)
//     let count = document.getElementById('rewriteNum')
//     if (i % 3 === 0  && i % 5 === 0) {
//         count.textContent = `fizzbuzz`
//     } else if (i % 5 === 0) {
//         count.textContent = `buzz`
//     } else if (i % 3 === 0) {
//         count.textContent = `fizz`
//     } else {
//         count.textContent = i
//     }
// }

let i = 0
let count = document.getElementById('showNum')
function reset() {
    i = 0
    count.textContent = i
}

function numBtn() {
    i++;
    
    if (i % 3 === 0  && i % 5 === 0) {
        alert('ぶーーー！fizzbuzzでした！！')
        reset()
    } else if (i % 5 === 0) {
        alert('ぶーーー！buzzでした！！')
        reset()
    } else if (i % 3 === 0) {
        alert('ぶーーー！fizzでした！！')
        reset()
    } else {
        count.textContent = i
    }
    console.log(i)
}

function fizzBtn() {
    i++
      if (i % 3 === 0  && i % 5 === 0) {
        alert('ぶーーー！fizzbuzzでした！！')
        reset()
    } else if (i % 5 === 0) {
        alert('ぶーーー！buzzでした！！')
        reset()
    } else if (i % 3 === 0) {
        count.textContent = i
    } else {
        alert('ぶーーー！Numberでした！！')
        reset()
    }
    console.log(i)
}

function buzzBtn() {
    i++
      if (i % 3 === 0  && i % 5 === 0) {
        alert('ぶーーー！fizzbuzzでした！！')
        reset()
    } else if (i % 5 === 0) {
        count.textContent = i
    } else if (i % 3 === 0) {
        alert('ぶーーー！fizzでした！！')
        reset()
    } else {
        alert('ぶーーー！Numberでした！！')
        reset()
    }
    console.log(i)
}

function fizzbuzzBtn() {
    i++
      if (i % 3 === 0  && i % 5 === 0) {
          count.textContent = i
        } else if (i % 5 === 0) {
        alert('ぶーーー！buzzでした！！')
        reset()
    } else if (i % 3 === 0) {
        alert('ぶーーー！fizzでした！！')
        reset()
    } else {
        alert('ぶーーー！Numberでした！！')
        reset()
    }
    console.log(i)
}

