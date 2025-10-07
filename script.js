 Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () = {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

 Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n = n.addEventListener('click', () = {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

 Smooth scrolling for navigation links
document.querySelectorAll('a[href^=#]').forEach(anchor = {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior 'smooth',
                block 'start'
            });
        }
    });
});

 Navbar background change on scroll
window.addEventListener('scroll', () = {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY  100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

 Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
     Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
     Basic validation
    if (!data.name  !data.email  !data.grade  !data.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
     Email validation
    const emailRegex = ^[^s@]+@[^s@]+.[^s@]+$;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
     Simulate form submission
    showNotification('Thank you for your message! We'll get back to you within 24 hours.', 'success');
    contactForm.reset();
});

 Notification System
function showNotification(message, type = 'info') {
     Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
     Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        div class=notification-content
            span class=notification-message${message}span
            button class=notification-close&times;button
        div
    `;
    
     Add styles
    notification.style.cssText = `
        position fixed;
        top 100px;
        right 20px;
        background ${type === 'success'  '#10b981'  type === 'error'  '#ef4444'  '#2563eb'};
        color white;
        padding 1rem 1.5rem;
        border-radius 8px;
        box-shadow 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index 10000;
        max-width 400px;
        animation slideInRight 0.3s ease;
    `;
    
     Add to page
    document.body.appendChild(notification);
    
     Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () = {
        notification.remove();
    });
    
     Auto remove after 5 seconds
    setTimeout(() = {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

 Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform translateX(100%);
            opacity 0;
        }
        to {
            transform translateX(0);
            opacity 1;
        }
    }
    
    .notification-content {
        display flex;
        align-items center;
        justify-content space-between;
        gap 1rem;
    }
    
    .notification-close {
        background none;
        border none;
        color white;
        font-size 1.5rem;
        cursor pointer;
        padding 0;
        width 24px;
        height 24px;
        display flex;
        align-items center;
        justify-content center;
    }
    
    .notification-closehover {
        opacity 0.8;
    }
`;
document.head.appendChild(style);

 Intersection Observer for animations
const observerOptions = {
    threshold 0.1,
    rootMargin '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) = {
    entries.forEach(entry = {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

 Observe elements for animation
document.addEventListener('DOMContentLoaded', () = {
    const animatedElements = document.querySelectorAll('.service-card, .resource-card, .about-text, .about-image');
    
    animatedElements.forEach(el = {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

 Counter Animation for Credentials
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target  (duration  16);
    
    function updateCounter() {
        start += increment;
        if (start  target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

 Animate counters when they come into view
const counterObserver = new IntersectionObserver((entries) = {
    entries.forEach(entry = {
        if (entry.isIntersecting) {
            const text = entry.target.textContent;
            const number = parseInt(text.match(d+)[0]);
            animateCounter(entry.target, number);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold 0.5 });

 Observe credential counters
document.addEventListener('DOMContentLoaded', () = {
    const counters = document.querySelectorAll('.credential span');
    counters.forEach(counter = {
        if (counter.textContent.includes('+')) {
            counterObserver.observe(counter);
        }
    });
});

 Parallax effect for hero section
window.addEventListener('scroll', () = {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroGraphic = document.querySelector('.hero-graphic');
    
    if (hero && heroGraphic) {
        const rate = scrolled  -0.5;
        heroGraphic.style.transform = `translateY(${rate}px)`;
    }
});

 Add loading animation
window.addEventListener('load', () = {
    document.body.classList.add('loaded');
});

 Add CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity 0;
        transition opacity 0.5s ease;
    }
    
    body.loaded {
        opacity 1;
    }
`;
document.head.appendChild(loadingStyle);

 Service card hover effects
document.addEventListener('DOMContentLoaded', () = {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card = {
        card.addEventListener('mouseenter', () = {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () = {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

 Resource card click tracking
document.addEventListener('DOMContentLoaded', () = {
    const resourceLinks = document.querySelectorAll('.resource-link');
    
    resourceLinks.forEach(link = {
        link.addEventListener('click', (e) = {
            e.preventDefault();
            const resourceName = link.closest('.resource-card').querySelector('h3').textContent;
            showNotification(`Thank you for your interest in ${resourceName}! This feature will be available soon.`, 'info');
        });
    });
});

 Form field focus effects
document.addEventListener('DOMContentLoaded', () = {
    const formInputs = document.querySelectorAll('input, select, textarea');
    
    formInputs.forEach(input = {
        input.addEventListener('focus', () = {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () = {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
});

 Add CSS for form focus effects
const formStyle = document.createElement('style');
formStyle.textContent = `
    .form-group.focused label {
        color #2563eb;
        transform translateY(-2px);
    }
    
    .form-group label {
        transition color 0.3s ease, transform 0.3s ease;
    }
`;
document.head.appendChild(formStyle);

 Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = 'i class=fas fa-arrow-upi';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position fixed;
    bottom 30px;
    right 30px;
    width 50px;
    height 50px;
    background #2563eb;
    color white;
    border none;
    border-radius 50%;
    cursor pointer;
    font-size 1.2rem;
    opacity 0;
    visibility hidden;
    transition all 0.3s ease;
    z-index 1000;
    box-shadow 0 4px 12px rgba(37, 99, 235, 0.3);
`;

document.body.appendChild(backToTopButton);

 Showhide back to top button
window.addEventListener('scroll', () = {
    if (window.pageYOffset  300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

 Back to top functionality
backToTopButton.addEventListener('click', () = {
    window.scrollTo({
        top 0,
        behavior 'smooth'
    });
});

 Add hover effect for back to top button
backToTopButton.addEventListener('mouseenter', () = {
    backToTopButton.style.background = '#1d4ed8';
    backToTopButton.style.transform = 'translateY(-2px)';
});

backToTopButton.addEventListener('mouseleave', () = {
    backToTopButton.style.background = '#2563eb';
    backToTopButton.style.transform = 'translateY(0)';
});
