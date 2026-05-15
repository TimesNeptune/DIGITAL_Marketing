// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (!href || href === '#') {
      return;
    }

    e.preventDefault();
    const target = document.querySelector(href);
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

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Cart and purchase flow
const addToCartBtn = document.getElementById('addToCartBtn');
const cartModal = document.getElementById('cartModal');
const cartClose = document.getElementById('cartClose');
const cartSuccessView = document.getElementById('cartSuccessView');
const continuePurchaseBtn = document.getElementById('continuePurchaseBtn');
const purchaseForm = document.getElementById('purchaseForm');
const orderConfirmed = document.getElementById('orderConfirmed');
const doneBtn = document.getElementById('doneBtn');

function openCartModal() {
  cartModal.classList.add('active');
  cartModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  cartSuccessView.hidden = false;
  purchaseForm.hidden = true;
  orderConfirmed.hidden = true;
}

function closeCartModal() {
  cartModal.classList.remove('active');
  cartModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (addToCartBtn && cartModal) {
  addToCartBtn.addEventListener('click', openCartModal);
}

if (cartClose) {
  cartClose.addEventListener('click', closeCartModal);
}

if (continuePurchaseBtn) {
  continuePurchaseBtn.addEventListener('click', () => {
    cartSuccessView.hidden = true;
    purchaseForm.hidden = false;
    orderConfirmed.hidden = true;
  });
}

if (purchaseForm) {
  purchaseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    purchaseForm.hidden = true;
    orderConfirmed.hidden = false;
  });
}

if (doneBtn) {
  doneBtn.addEventListener('click', closeCartModal);
}

if (cartModal) {
  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      closeCartModal();
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && cartModal && cartModal.classList.contains('active')) {
    closeCartModal();
  }
});

// Terms of service modal
const termsLink = document.getElementById('termsLink');
const termsModal = document.getElementById('termsModal');
const termsClose = document.getElementById('termsClose');
const termsAccept = document.getElementById('termsAccept');

function openTermsModal() {
  termsModal.classList.add('active');
  termsModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeTermsModal() {
  termsModal.classList.remove('active');
  termsModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (termsLink && termsModal) {
  termsLink.addEventListener('click', (e) => {
    e.preventDefault();
    openTermsModal();
  });
}

if (termsClose) {
  termsClose.addEventListener('click', closeTermsModal);
}

if (termsAccept) {
  termsAccept.addEventListener('click', closeTermsModal);
}

if (termsModal) {
  termsModal.addEventListener('click', (e) => {
    if (e.target === termsModal) {
      closeTermsModal();
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && termsModal && termsModal.classList.contains('active')) {
    closeTermsModal();
  }
});

// Privacy policy modal
const privacyLink = document.getElementById('privacyLink');
const privacyModal = document.getElementById('privacyModal');
const privacyClose = document.getElementById('privacyClose');
const privacyAccept = document.getElementById('privacyAccept');

function openPrivacyModal() {
  privacyModal.classList.add('active');
  privacyModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePrivacyModal() {
  privacyModal.classList.remove('active');
  privacyModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (privacyLink && privacyModal) {
  privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    openPrivacyModal();
  });
}

if (privacyClose) {
  privacyClose.addEventListener('click', closePrivacyModal);
}

if (privacyAccept) {
  privacyAccept.addEventListener('click', closePrivacyModal);
}

if (privacyModal) {
  privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal) {
      closePrivacyModal();
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && privacyModal && privacyModal.classList.contains('active')) {
    closePrivacyModal();
  }
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
      const button = item.querySelector('.faq-question');
      if (button) {
        button.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      faqItem.classList.add('active');
      question.setAttribute('aria-expanded', 'true');
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

if (soundSection) {
  soundObserver.observe(soundSection);
}

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
  const icon = card.querySelector('.feature-icon-large');
  if (!icon) return;

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
