$(document).ready(function () {
  $('<h1></h1>', {
    text: 'hello jquery'
  }).appendTo('body')
})

$(document).ready(function () {
  $('<h1>Hello Javascript</h1>', {
    class: 'app',
    id: 'app'
  }).appendTo('body')
})

$(document).ready(function () {
  $('<h1></h1>', {
    class: 'app',
    id: 'hello'
  }).html('hello lorem ipsum').appendTo('body').css({
    color: 'red',
    padding: '20px',
    'margin-right': '30px'
  })
})
