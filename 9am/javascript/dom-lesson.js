const h1 = document.createElement('h1');
const body = document.querySelector('body');
h1.innerHTML = "<b>Hello World</b>";
body.append(h1);


const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    h1.id = "app"
})