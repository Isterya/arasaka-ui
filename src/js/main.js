import $ from './lib/lib';

// $('button').on('click', function(){
//     $(this).toggleClass('active');
// })

// $('button').on('click', function() {
//     $('div').eq(2).toggleClass('active')
// })
//
// $('div').click(function() {
//     console.log($(this).index())
// })
//
// // console.log($('div').eq(2).find('.some'));
// // console.log($('.some').closest('.findme'))
// console.log($('.more').eq(0).siblings())

$('.active').html(`<div>${$('button').html()}</div>`);