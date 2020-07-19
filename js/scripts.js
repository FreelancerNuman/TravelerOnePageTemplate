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
/* Back To Top Smooth Scroll */
var backToTopButton = document.querySelector("#back_to_top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { 
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else {
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}
backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  var targetPosition = 0;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}
function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};
