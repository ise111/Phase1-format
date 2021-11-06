// const setBtn = document.getElementById('setBtn');
// const resetBtn = document.getElementById('resetBtn');
// const showImg = document.getElementById('showImg');


// setBtn.addEventListener('click', e => {
//     if (document.querySelector('.container')) {
//         document.querySelector('.container').remove();
//     }

//     let randomNum = Math.floor(Math.random() * 10 + 1);
//     const container = document.createElement('div');
//     container.className = 'container';
//     const ctr = showImg.appendChild(container);
//     console.log(randomNum)
//     const img1 = document.createElement('img');
//     img1.className = 'img1';
//     ctr.appendChild(img1);
//     document.querySelector('.img1').setAttribute('src', 'img/evolution1.png');

//     if (randomNum > 4) {
//         const img2 = document.createElement('img');
//         img2.className = 'img2';
//         ctr.appendChild(img2);
//         document.querySelector('.img2').setAttribute('src', 'img/evolution2.png');

//         if (randomNum > 7) {
//             const img3 = document.createElement('img');
//             img3.className = 'img3';
//             ctr.appendChild(img3);
//             document.querySelector('.img3').setAttribute('src', 'img/evolution3.png');

//             if (randomNum === 10) {
//                 const img4 = document.createElement('img');
//                 img4.className = 'img4';
//                 ctr.appendChild(img4);
//                 document.querySelector('.img4').setAttribute('src', 'img/evolution4.png');
//             }
//         }
//     }
// });


// resetBtn.addEventListener('click', e => {
//     document.querySelector('.container').remove();
// });

const setBtn = document.getElementById('setBtn');
const reset = document.getElementById('resetBtn');
const showImg = document.getElementById('showImg');

setBtn.addEventListener('click', function() {
  showImg.innerHTML = '';
  const checkEvo = Math.floor(Math.random() * 10);

  const first = document.createElement('div');
  first.innerHTML = "<img src='./img/evolution1.png' alt='原人'  /><p>原人</p>";
  showImg.appendChild(first);

  if (checkEvo >= 4) {
    const second = document.createElement('div');
    second.innerHTML = "<img src='./img/evolution2.png' alt='旧人'  /><p>旧人</p>";
    showImg.appendChild(second);
  }
  if (checkEvo >= 7) {
    const third = document.createElement('div');
    third.innerHTML = "<img src='./img/evolution3.png' alt='新人'/><p>新人</p>";
    showImg.appendChild(third);
  }
  if (checkEvo >= 9) {
    const fourth = document.createElement('div');
    fourth.innerHTML = "<img src='./img/evolution4.png' alt='現代人'/><p>現代人</p>";
    showImg.appendChild(fourth);
  }
});

reset.addEventListener('click', function() {
  showImg.innerHTML = '';
});