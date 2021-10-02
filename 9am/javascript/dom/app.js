const body = document.querySelector('body')
const btn = document.querySelector('button')
const color = document.querySelector('#color')
const colors = ['red', 'green', 'blue', 'black', 'yellow', 'skyblue', 'pink'];
for (let i = 0; i < colors.length; i++) {
    const element = `<option value="${colors[i]}">${colors[i]}</option>`;
    color.innerHTML += element;

}
color.addEventListener('change', function () {
    body.style.background = this.value;
});

// btn.addEventListener('click', () => {
//     const a = body.style.background = colors[Math.floor(7 * Math.random())]
//     console.log(a);
// })
/*
const allBtn = document.querySelectorAll('button');
// console.log(allBtn);
allBtn.forEach(btn => {
    // console.log(btn);
    btn.addEventListener('click', function () {
        // console.log(this);
        body.style.background = this.innerHTML
    })
})*/

// console.log(Math.floor(Math.random() * 6));