// const title = document.getElementById('title')
// console.log(`<h1>タグの中身のテキストは${title.textContent}です。`)

// const list = document.querySelector('.list')
// console.log(`<ul>タグの2つめの子要素のテキストは${list.children[1].textContent}です。`)

// const newItem = document.createElement('li')
// newItem.textContent = 'もも'
// list.appendChild(newItem)

// const button = document.getElementById('button')
// button.addEventListener('click', event => {
//     confirm("削除してよろしいですか？")
// })

window.alert('window')
alert('alert')

console.log(document.doctype)
console.log(document.title)

const intro = document.getElementById('intro')
console.log(intro.textContent)

const list = document.querySelector('.list')
console.log(list.children.length)

const items = document.querySelectorAll('.list li')
items.forEach((item) => {
    console.log(item.textContent)
})