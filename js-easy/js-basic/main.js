console.log('Hello, world!');
console.log('こんにちは世界！');
console.log(1 + 2);
console.log(10 - 4 * 8);
console.log({ one: 1, two: 2 });

const answer = 42;
console.log(answer);

const breakfast = "お茶漬け";
console.log("今日の朝ごはんは" + breakfast + "でした。");

console.log(`今日の朝ごはんは${breakfast}でした。`);

const html = `
<div class="container">
  <p>test</p>
</div>
`;
console.log(html);

const days = ['日', '月', '火', '水', '木', '金', '土'];

console.log(days.length);
console.log(days[0]);

const nengou = ['明治', '大正', '昭和', '平成'];
nengou.push('令和');

console.log(nengou);
nengou.splice(1, 2);
console.log(nengou);

const num = Math.random();

if (num >= 0.5) {
    console.log('大きめ');
} else {
    console.log('小さめ');
}
console.log(`数は${num}`);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const double = x => x * 2;