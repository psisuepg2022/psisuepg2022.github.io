const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY  >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  })

  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active')
    }
  })
})

$(document).ready(function(){
  $("a").on('click', function(event) {
    event.preventDefault();
    
      $([document.documentElement, document.body]).animate({
        scrollTop: $(this.hash).offset().top - 60
    }, 500);
  });
});