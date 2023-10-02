//для мобильного меню
(() => {
  const burger = () => {
    const navBtn = document.getElementById('navMenu');
    navBtn.style.display === 'none' ? navBtn.style.display = 'block' : navBtn.style.display = 'none';
  };
  document.getElementById('btn').addEventListener('click', burger);
})();
// burger
(() => {
  let btn = document.querySelector('.menu-btn');
  let nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
})();
// accordion
(() => {
  const acc = document.getElementsByClassName("accordion__header");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  }
})();
// прокрутка по якорям
(() => {
  // // собираем все якоря; устанавливаем время анимации и количество кадров
// const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
//       animationTime = 300,
//       framesCount = 20;
// anchors.forEach(function(item) {
//   // каждому якорю присваиваем обработчик события
//   item.addEventListener('click', function(e) {
//     // убираем стандартное поведение
//     e.preventDefault();
//     // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
//     let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
//     // запускаем интервал, в котором
//     let scroller = setInterval(function() {
//       // считаем на сколько скроллить за 1 такт
//       let scrollBy = coordY / framesCount;
//       // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
//       // и дно страницы не достигнуто
//       if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//         // то скроллим на к-во пикселей, которое соответствует одному такту
//         window.scrollBy(0, scrollBy);
//       } else {
//         // иначе добираемся до элемента и выходим из интервала
//         window.scrollTo(0, coordY);
//         clearInterval(scroller);
//       }
//     // время интервала равняется частному от времени анимации и к-ва кадров
//     }, animationTime / framesCount);
//   });
// });
// function currentYPosition() {
//     // Firefox, Chrome, Opera, Safari
//     if (self.pageYOffset) return self.pageYOffset;
//     // Internet Explorer 6 - standards mode
//     if (document.documentElement && document.documentElement.scrollTop)
//         return document.documentElement.scrollTop;
//     // Internet Explorer 6, 7 and 8
//     if (document.body.scrollTop) return document.body.scrollTop;
//     return 0;
// }
// function elmYPosition(eID) {
//     var elm = document.getElementById(eID);
//     var y = elm.offsetTop;
//     var node = elm;
//     while (node.offsetParent && node.offsetParent != document.body) {
//         node = node.offsetParent;
//         y += node.offsetTop;
//     } return y;
// }
// function smoothScroll(eID) {
//     var startY = currentYPosition();
//     var stopY = elmYPosition(eID);
//     var distance = stopY > startY ? stopY - startY : startY - stopY;
//     if (distance < 100) {
//         scrollTo(0, stopY); return;
//     }
//     var speed = Math.round(distance / 100);
//     if (speed >= 20) speed = 20;
//     var step = Math.round(distance / 25);
//     var leapY = stopY > startY ? startY + step : startY - step;
//     var timer = 0;
//     if (stopY > startY) {
//         for ( var i=startY; i<stopY; i+=step ) {
//             setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//             leapY += step; if (leapY > stopY) leapY = stopY; timer++;
//         } return;
//     }
//     for ( var i=startY; i>stopY; i-=step ) {
//         setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//         leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
//     }
// }
  const anchors = document.querySelectorAll('a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})();
(() => {
})();
//кнопка на вверх
// $(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() != 0)
//       $('#toTop').fadeIn();
//     else
//       $('#toTop').fadeOut();
//   });
//   $('#toTop').click(function () {
//     $('body,html').animate({
//       scrollTop: 0
//     }, 800);
//   });
// });
(function () {
  'use strict';

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    if (scrolled > coords) {
      goTopBtn.classList.add('topButton__show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('topButton__show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  let goTopBtn = document.querySelector('.topButton');
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
/*
// slider

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider2__item");
    let dots = document.getElementsByClassName("slider2__dot");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }


*/
// slider
(function () {
  class SlideShow {
    constructor(startIndex, element) {
      this.startIndex = startIndex;
      this.currentIndex = this.startIndex;
      this.element = element;
      this.slides = this.element.querySelectorAll('.slider__item');
      this.setActiveSlide();
      this.next();
      this.prev();
    }

    setActiveSlide() {
      this.slides.forEach((item, index) => {
        if (index === this.currentIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      })

    }

    next() {
      let nextBtn = this.element.querySelector('[data-way="next"]');
      nextBtn.addEventListener('click', () => {
        if (this.currentIndex === this.slides.length - 1) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
        this.setActiveSlide();
      })

    }

    prev() {
      let prevBtn = this.element.querySelector('[data-way="prev"]');
      prevBtn.addEventListener('click', () => {
        if (this.currentIndex === 0) {
          this.currentIndex = this.slides.length - 1;
        } else {
          this.currentIndex--;
        }
        this.setActiveSlide();
      })
    }
  }

  let slideShow = document.querySelectorAll('.slider');

  slideShow.forEach(item => {
    new SlideShow(0, item)
  })


}());