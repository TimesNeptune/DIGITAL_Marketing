// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar scroll effects
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

// Scroll reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for scroll reveal
document.querySelectorAll('.feature-card, .why-card, .testimonial-card, .pricing-card, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Equalizer animation toggle on scroll
const soundSection = document.querySelector('.sound-experience');
const eqBars = document.querySelectorAll('.eq-bar');

const soundObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      eqBars.forEach(bar => bar.style.animationPlayState = 'running');
    } else {
      eqBars.forEach(bar => bar.style.animationPlayState = 'paused');
    }
  });
}, { threshold: 0.3 });

soundObserver.observe(soundSection);

// Parallax effect for hero image
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    const speed = scrolled * -0.5;
    heroImage.style.transform = `translateY(${speed}px)`;
  }
});

// Button hover effects
document.querySelectorAll('.btn-primary, .cta-button, .pricing-cta').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px) scale(1.02)';
  });
  
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Feature card hover icons
document.querySelectorAll('.feature-card').forEach(card => {
  const icon = card.querySelector('.feature-icon');
  card.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.15) rotate(5deg)';
  });
  
  card.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1) rotate(0deg)';
  });
});

// Continuous floating animation for product showcase
const productPoster = document.querySelector('.product-poster');
if (productPoster) {
  productPoster.style.animation = 'float-hero 8s ease-in-out infinite';
}

// Performance optimization - throttle scroll events
let ticking = false;
function updateScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      // Scroll updates here
      ticking = false;
    });
    ticking = true;
  }
}