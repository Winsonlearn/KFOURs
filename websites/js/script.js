// MAIN
function navigateTo(sectionId) {
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';

    setTimeout(function() {
        var sections = document.querySelectorAll('.section');
        sections.forEach(function(section) {
            section.classList.remove('active');
        });

        document.getElementById(sectionId).classList.add('active');
        loadingScreen.style.display = 'none';
    }, 1500); 
}

window.onload = function() {
    var loadingScreen = document.getElementById('loadingScreen');
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 1500); 
}

// HOME

const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;
const totalSlides = slides.length;

function showSlide(newIndex) {
    index = (newIndex + totalSlides) % totalSlides;
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    showSlide(index + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(index - 1);
});

setInterval(() => {
    showSlide(index + 1);
}, 3000);

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
  });

  // Menutup menu saat item menu diklik
  navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          navList.classList.remove('active');
      });
  });

  // Menutup menu saat diklik di luar menu
  document.addEventListener('click', (event) => {
      const isClickInsideNav = navList.contains(event.target);
      const isClickOnMenuToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnMenuToggle && navList.classList.contains('active')) {
          navList.classList.remove('active');
      }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
  });

  navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          navList.classList.remove('active');
      });
  });

  document.addEventListener('click', (event) => {
      const isClickInsideNav = navList.contains(event.target);
      const isClickOnMenuToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnMenuToggle && navList.classList.contains('active')) {
          navList.classList.remove('active');
      }
  });
});