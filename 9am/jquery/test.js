// $(document).ready(function () {
//   $('h2').hide()
//   $('button').click(function () {
//     $('h2').show('fast')
//     $('h2').show('slow')
//     $('h2').show(2000)
//     $('h2').toggle()
//     $('h2').slideToggle()
//   })
// })

$(document).ready(function () {
  $('span').hide()
  $('button').click(function () {
    // console.log(this)
    const pe = $(this).parent()
    // console.log(pe)
    pe.children('span').toggle()
  })
})
