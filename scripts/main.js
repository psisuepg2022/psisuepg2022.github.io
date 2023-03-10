const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');
const menuLi = document.querySelectorAll('.menuContent ul li');

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
  menuLi.forEach(li => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active')
    }
  })
  
})

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (event.currentTarget.id === 'links' || event.currentTarget.id === 'arrow') return;
    event.preventDefault();
    
      $([document.documentElement, document.body]).animate({
        scrollTop: $(this.hash).offset().top - 60
    }, 300);
  });
});

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "flex";
  const currentSlide = slides[slidePosition-1].children[0];
  currentSlide.classList.add('anim')
  circles[slidePosition-1].className += " enable";
} 

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      entry.target.classList.add('sectionAppear');
      entry.target.classList.remove('hidden');
    }
  });
}, { rootMargin: '-100px' });

observer.observe(document.getElementById('homeContainer'));
observer.observe(document.getElementById('aboutContainer'));
observer.observe(document.getElementById('aboutUsContainer'));
observer.observe(document.getElementById('imagesContainer'));

function toggleMenu (flag) {
  const menu = document.getElementById('menu');
  const backdrop = document.getElementById('backdrop');
  
  if (flag) {
    menu.style.display = 'flex';
    backdrop.style.display = 'flex';
  } else {
    menu.style.display = 'none';
    backdrop.style.display = 'none';
  }
}