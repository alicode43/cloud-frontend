// Client logos data
const clientLogos = [
    "Bitsdes", "Jio Bp", "Titan", "Pepperi", "Sany", "Sonata", "Yellow River", 
    "Orel", "SWSM", "Lavoie", "Izil Beauty", "Doors4UK", "Languageveda", "Kenja", 
    "Duratech", "Bright Spark", "Sunpower Electronics", "Shop Back", "Sewa Australia", 
    "Mobilise", "Zoltan Properties", "Klay", "Fintech Filings", "Houzbay", "Randstad", 
    "Vivanta", "Increff", "Medi Buddy", "Deverus", "Reva University"
];

// Testimonials data
const testimonials = [
    {
        text: "The Cloud Odyssey (CO) team understood the complex landscape quite well and helped us bring out a highly customized Salesforce rollout within a short span of 12 weeks.",
        company: "MediBuddy"
    },
    {
        text: "Cloud Odyssey's in-depth knowledge of Salesforce, coupled with their understanding of our specific industry needs, allowed them to tailor the implementation perfectly to our requirements.",
        company: "Increff"
    },
    {
        text: "Cloud Odyssey and Salesforce have been instrumental in helping us envision how we can transform our operation to support the next stage of growth and become a future-ready business.",
        company: "Fintech Filings"
    },
    {
        text: "Cloud Odyssey team in a shorter time was able to deliver the promise we had given to our business users and to end consumer. The delivery was up to our expectations and it made lot of difference for Titan.",
        company: "Titan"
    },
    {
        text: "Cloud Odyssey's deep technical knowledge and expertise in MuleSoft have been instrumental in our process. Ability to explain complex technical assessment in a way that our users can understand has greatly contributed to our success.",
        company: "Sany America"
    },
    {
        text: "Thanks to Cloud Odyssey who tried every possibility to propose the right proposal fitting our needs. Technically, the teams have experience and know what they are talking about. They helped us take over and fix Commerce Cloud project done by another partner.",
        company: "IZIL Beauty"
    },
    {
        text: "Cloud Odyssey partner is a growing company which has a good pool of Salesforce resources for providing support on time. They have started now in education sector and will be a good force to reckon with in near future.",
        company: "REVA"
    }
];

// DOM Elements
let currentSlide = 0;
let currentTestimonial = 0;
let testimonialInterval;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializeTestimonials();
    initializeNavigation();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Carousel functionality
function initializeCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!carouselTrack) return;
    
    // Create client logo slides (6 logos per slide)
    const logosPerSlide = window.innerWidth < 768 ? (window.innerWidth < 480 ? 1 : 2) : 3;
    const totalSlides = Math.ceil(clientLogos.length / logosPerSlide);
    
    // Generate slides
    for (let i = 0; i < totalSlides; i++) {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        
        const startIndex = i * logosPerSlide;
        const endIndex = Math.min(startIndex + logosPerSlide, clientLogos.length);
        
        for (let j = startIndex; j < endIndex; j++) {
            const logoDiv = document.createElement('div');
            logoDiv.className = 'client-logo';
            logoDiv.textContent = clientLogos[j];
            slide.appendChild(logoDiv);
        }
        
        carouselTrack.appendChild(slide);
    }
    
    // Carousel navigation
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
            updateCarousel();
        });
        
        nextBtn.addEventListener('click', function() {
            currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
            updateCarousel();
        });
    }
    
    // Auto-rotate carousel
    setInterval(function() {
        currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
        updateCarousel();
    }, 4000);
    
    function updateCarousel() {
        const translateX = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${translateX}%)`;
    }
}

// Testimonials functionality
function initializeTestimonials() {
    const featuredTestimonial = document.getElementById('featuredTestimonial');
    const testimonialIndicators = document.getElementById('testimonialIndicators');
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    
    if (!featuredTestimonial || !testimonialIndicators || !testimonialsGrid) return;
    
    // Create indicators
    testimonials.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', function() {
            currentTestimonial = index;
            updateFeaturedTestimonial();
            updateIndicators();
        });
        testimonialIndicators.appendChild(indicator);
    });
    
    // Create testimonials grid (first 6 testimonials)
    testimonials.slice(0, 6).forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <blockquote>"${testimonial.text}"</blockquote>
            <div style="text-align: right;">
                <div class="testimonial-company">${testimonial.company}</div>
            </div>
        `;
        testimonialsGrid.appendChild(card);
    });
    
    // Initialize featured testimonial
    updateFeaturedTestimonial();
    
    // Auto-rotate testimonials
    testimonialInterval = setInterval(function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateFeaturedTestimonial();
        updateIndicators();
    }, 5000);
    
    function updateFeaturedTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        featuredTestimonial.innerHTML = `
            <blockquote>"${testimonial.text}"</blockquote>
            <div style="text-align: center;">
                <div class="testimonial-company">${testimonial.company}</div>
            </div>
        `;
    }
    
    function updateIndicators() {
        const indicators = testimonialIndicators.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentTestimonial);
        });
    }
}

// Animation on scroll
function initializeAnimations() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe service cards
    document.querySelectorAll('.service-card, .reason-card, .platform-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

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

// Handle window resize for carousel
window.addEventListener('resize', function() {
    // Reinitialize carousel on resize to adjust for different screen sizes
    const carouselTrack = document.getElementById('carouselTrack');
    if (carouselTrack) {
        carouselTrack.innerHTML = '';
        currentSlide = 0;
        initializeCarousel();
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
    
    // Trigger hero animations
    setTimeout(function() {
        document.querySelectorAll('.animate-fade-up').forEach((element, index) => {
            setTimeout(function() {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
        
        setTimeout(function() {
            const scaleElement = document.querySelector('.animate-scale-up');
            if (scaleElement) {
                scaleElement.style.opacity = '1';
                scaleElement.style.transform = 'scale(1)';
            }
        }, 400);
    }, 500);
});

// Platform card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const platformCards = document.querySelectorAll('.platform-card');
    
    platformCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
});

// Add click handlers for buttons
document.addEventListener('DOMContentLoaded', function() {
    // CTA buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);