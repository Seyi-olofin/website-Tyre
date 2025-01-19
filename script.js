// Responsive menu toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const introContainer = document.querySelector('.intro-container');
    introContainer.style.opacity = '1';
});

// Counter animation
const counters = document.querySelectorAll('.counter h3');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 2000; // Speed of animation
        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 40);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// FAQ accordion
document.querySelectorAll('.faq-item h4').forEach(faq => {
    faq.addEventListener('click', () => {
        faq.nextElementSibling.classList.toggle('show');
    });
});

// Add a slight delay before fading in the background
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector('.background-overlay');
    setTimeout(() => {
        overlay.style.animation = 'fadeIn 3s ease-in-out forwards';
    }, 500); // Delay of 500ms
});

// Why Us section fade-in effect
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('.why-us');
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                section.classList.add('fade-in');
            }
        },
        { threshold: 0.5 }
    );
    observer.observe(section);
});

// Dynamically set the year in the footer
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = new Date().getFullYear();
    const footerRights = document.querySelector(".footer-rights p");
    footerRights.innerHTML = `&copy; ${yearSpan} TYREPLUG. All rights reserved.`;
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

// Change social media icon colors on hover
const socialLinks = document.querySelectorAll(".footer-socials .social-link");
socialLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.2)";
    });
    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });
});

// WhatsApp button functionality
document.querySelector('.whatsapp-btn').addEventListener('click', function () {
    const phoneNumber = '0777 123 40 40'; // Replace with your WhatsApp number
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`, '_blank');
});
