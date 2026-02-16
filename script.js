// Smooth Scrolling for Navigation Links
document.querySelectorAll('a.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animate Elements on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});

// 3D Interactive Card Effect
document.querySelectorAll('.interactive-3d').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});

// Tab Navigation
document.querySelectorAll('.nav-tabs a').forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Remove active class from all tabs and panes
    document.querySelectorAll('.nav-tabs li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('in', 'active'));
    
    // Add active class to clicked tab
    tab.parentElement.classList.add('active');
    
    // Show corresponding tab pane
    const target = document.querySelector(tab.getAttribute('href'));
    if (target) {
      target.classList.add('in', 'active');
    }
  });
});

// Highlight navbar link based on scroll position
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.parentElement.classList.add('active');
    }
  });
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form-box form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will respond shortly.');
    contactForm.reset();
  });
}

// Mobile Menu Collapse
document.querySelectorAll('.navbar-nav li a').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('in')) {
      document.querySelector('.navbar-toggle').click();
    }
  });
});

// Lazy Load Images (optional enhancement)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}