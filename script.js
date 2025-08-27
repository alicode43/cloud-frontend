// JavaScript for Salesforce Learning Dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    initializeDropdowns();
    
    // Progress bar animations
    animateProgressBars();
    
    // Add click handlers for interactive elements
    initializeClickHandlers();
});

// Initialize dropdown functionality
function initializeDropdowns() {
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdown = this.parentElement;
            const content = dropdown.querySelector('.dropdown-content');
            const chevron = this.querySelector('.chevron');
            
            // Close all other dropdowns
            closeAllDropdowns();
            
            // Toggle current dropdown
            if (content.classList.contains('show')) {
                content.classList.remove('show');
                chevron.style.transform = 'rotate(0deg)';
            } else {
                content.classList.add('show');
                chevron.style.transform = 'rotate(180deg)';
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });
}

// Close all dropdowns
function closeAllDropdowns() {
    const dropdownContents = document.querySelectorAll('.dropdown-content');
    const chevrons = document.querySelectorAll('.chevron');
    
    dropdownContents.forEach(content => {
        content.classList.remove('show');
    });
    
    chevrons.forEach(chevron => {
        chevron.style.transform = 'rotate(0deg)';
    });
}

// Animate progress bars on load
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    // Use Intersection Observer to animate when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target;
                const width = progressFill.style.width;
                
                // Reset width and animate
                progressFill.style.width = '0%';
                progressFill.style.transition = 'width 1s ease-out';
                
                setTimeout(() => {
                    progressFill.style.width = width;
                }, 100);
                
                observer.unobserve(progressFill);
            }
        });
    }, {
        threshold: 0.1
    });
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize click handlers for interactive elements
function initializeClickHandlers() {
    // Navigation buttons
    const navButtons = document.querySelectorAll('.nav-button:not(.dropdown-trigger)');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification(`Navigating to ${this.textContent.trim()}...`);
        });
    });
    
    // Profile button
    const profileButton = document.querySelector('.profile-button');
    if (profileButton) {
        profileButton.addEventListener('click', function() {
            showNotification('Opening user profile...');
        });
    }
    
    // Continue learning button
    const continueButtons = document.querySelectorAll('.continue-button');
    continueButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('Continuing your learning journey...');
        });
    });
    
    // Course action buttons
    const primaryButtons = document.querySelectorAll('.primary-button');
    primaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            showNotification(`${action} course...`);
        });
    });
    
    // Course icon buttons
    const iconButtons = document.querySelectorAll('.icon-button');
    iconButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('Opening course details...');
        });
    });
    
    // Contact buttons
    const contactButtons = document.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            showNotification(`Opening ${action.toLowerCase()} interface...`);
        });
    });
    
    // Dropdown menu items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const action = this.textContent.trim();
            showNotification(`Navigating to ${action}...`);
            closeAllDropdowns();
        });
    });
}

// Show notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        padding: '12px 20px',
        borderRadius: 'var(--radius)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        zIndex: '9999',
        fontSize: '14px',
        fontWeight: '500',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Simulate learning progress updates
function simulateProgressUpdates() {
    setInterval(() => {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach(bar => {
            const currentWidth = parseInt(bar.style.width) || 0;
            if (currentWidth < 100 && Math.random() > 0.95) {
                const newWidth = Math.min(100, currentWidth + Math.floor(Math.random() * 5) + 1);
                bar.style.width = `${newWidth}%`;
                
                // Update associated text if it exists
                const progressText = bar.parentElement.parentElement.querySelector('.progress-text');
                if (progressText && progressText.textContent.includes('%')) {
                    progressText.textContent = `${newWidth}% complete`;
                }
            }
        });
    }, 30000); // Update every 30 seconds
}

// Add hover effects for course cards
function addHoverEffects() {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    const instructorCards = document.querySelectorAll('.instructor-card');
    
    instructorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Find your sections (we’ll grab the outer section, not just the div inside)
const sections = document.querySelectorAll("section");

// When scrolling, detect active section
window.addEventListener("scroll", () => {
    let currentSection = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
        }
    });

    // Remove highlight from all sections
    sections.forEach(section => section.classList.remove("active-section"));

    // Add highlight to the one in view
    if (currentSection) {
        currentSection.classList.add("active-section");
    }
});

// Smooth scroll when clicking nav links
document.querySelectorAll(".nav-element").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetDiv = document.getElementById(targetId);

        if (targetDiv) {
            window.scrollTo({
                top: targetDiv.getBoundingClientRect().top + window.scrollY - 50,
                behavior: "smooth"
            });
        }
    });
});


console.log('Salesforce Learning Dashboard loaded successfully!');




