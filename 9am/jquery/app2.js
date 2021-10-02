$(document).ready(function () {
  $('h2').css({
    background: 'red',
    color: '#fff'
  })
  $('.main  p:first').css({ // first,last,nth(3)
    background: 'green'
  })
  $('button').on('click', function () {
    $('.seemore').slideToggle(1000)
  })
})
