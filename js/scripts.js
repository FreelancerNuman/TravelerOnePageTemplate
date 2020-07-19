$(document).on('click','.show_color_btn',function(){
    $('.color_changer').toggleClass('add_margin_cc');
})

var color_1 = document.querySelector('.colors_1');

color_1.addEventListener('click', function() {
    if('click','.color_1') {
        document.documentElement.setAttribute('data-theme', 'color_1')
    } else {
        ""
    }
})
var color_2 = document.querySelector('.colors_2');

color_2.addEventListener('click', function() {
    if('click','.color_2') {
        document.documentElement.setAttribute('data-theme', 'color_2')
    } else {
        ""
    }
})
var color_3 = document.querySelector('.colors_3');

color_3.addEventListener('click', function() {
    if('click','.color_3') {
        document.documentElement.setAttribute('data-theme', 'color_3')
    } else {
       ""
    }
})
