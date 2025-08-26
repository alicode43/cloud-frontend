          // DOM Elements
        const loginBtn = document.getElementById('loginBtn');
        const authModal = document.getElementById('authModal');
        const closeModal = document.getElementById('closeModal');
        const showSignup = document.getElementById('showSignup');
        const showLogin = document.getElementById('showLogin');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const modalTitle = document.getElementById('modalTitle');
        
        // Password toggle functionality
        function setupPasswordToggle(passwordId, toggleId) {
            const passwordField = document.getElementById(passwordId);
            const toggleButton = document.getElementById(toggleId);
            
            toggleButton.addEventListener('click', function() {
                if (passwordField.type === 'password') {
                    passwordField.type = 'text';
                    toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
                } else {
                    passwordField.type = 'password';
                    toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
                }
            });
        }
        
        // Setup password toggles
        setupPasswordToggle('loginPassword', 'loginPasswordToggle');
        setupPasswordToggle('signupPassword', 'signupPasswordToggle');
        setupPasswordToggle('confirmPassword', 'confirmPasswordToggle');
        
        // Show modal when login button is clicked
        loginBtn.addEventListener('click', function() {
            authModal.style.display = 'block';
            setTimeout(() => {
                authModal.classList.add('active');
                loginForm.style.display = 'block';
                signupForm.style.display = 'none';
                modalTitle.textContent = 'Login to Your Account';
            }, 10);
        });
        
        // Close modal
        closeModal.addEventListener('click', function() {
            authModal.classList.remove('active');
            setTimeout(() => {
                authModal.style.display = 'none';
            }, 300);
        });
        
        // Switch to signup form
        showSignup.addEventListener('click', function() {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            modalTitle.textContent = 'Create an Account';
        });
        
        // Switch to login form
        showLogin.addEventListener('click', function() {
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
            modalTitle.textContent = 'Login to Your Account';
        });
        
        // Close modal if clicked outside of content
        window.addEventListener('click', function(event) {
            if (event.target === authModal) {
                authModal.classList.remove('active');
                setTimeout(() => {
                    authModal.style.display = 'none';
                }, 300);
            }
        });
        
        // Password strength meter
        const signupPassword = document.getElementById('signupPassword');
        const strengthMeter = document.getElementById('passwordStrengthMeter');
        const reqLength = document.getElementById('reqLength');
        const reqLowercase = document.getElementById('reqLowercase');
        const reqUppercase = document.getElementById('reqUppercase');
        const reqNumber = document.getElementById('reqNumber');
        const reqSpecial = document.getElementById('reqSpecial');
        
        signupPassword.addEventListener('input', function() {
            const password = signupPassword.value;
            let strength = 0;
            
            // Validate length
            if (password.length >= 8) {
                strength += 20;
                reqLength.classList.add('met');
                reqLength.innerHTML = '<i class="fas fa-check-circle"></i> At least 8 characters';
            } else {
                reqLength.classList.remove('met');
                reqLength.innerHTML = '<i class="fas fa-circle"></i> At least 8 characters';
            }
            
            // Validate lowercase letters
            if (/[a-z]/.test(password)) {
                strength += 20;
                reqLowercase.classList.add('met');
                reqLowercase.innerHTML = '<i class="fas fa-check-circle"></i> Contains lowercase letter';
            } else {
                reqLowercase.classList.remove('met');
                reqLowercase.innerHTML = '<i class="fas fa-circle"></i> Contains lowercase letter';
            }
            
            // Validate uppercase letters
            if (/[A-Z]/.test(password)) {
                strength += 20;
                reqUppercase.classList.add('met');
                reqUppercase.innerHTML = '<i class="fas fa-check-circle"></i> Contains uppercase letter';
            } else {
                reqUppercase.classList.remove('met');
                reqUppercase.innerHTML = '<i class="fas fa-circle"></i> Contains uppercase letter';
            }
            
            // Validate numbers
            if (/[0-9]/.test(password)) {
                strength += 20;
                reqNumber.classList.add('met');
                reqNumber.innerHTML = '<i class="fas fa-check-circle"></i> Contains number';
            } else {
                reqNumber.classList.remove('met');
                reqNumber.innerHTML = '<i class="fas fa-circle"></i> Contains number';
            }
            
            // Validate special characters
            if (/[^A-Za-z0-9]/.test(password)) {
                strength += 20;
                reqSpecial.classList.add('met');
                reqSpecial.innerHTML = '<i class="fas fa-check-circle"></i> Contains special character';
            } else {
                reqSpecial.classList.remove('met');
                reqSpecial.innerHTML = '<i class="fas fa-circle"></i> Contains special character';
            }
            
            // Update strength meter
            strengthMeter.style.width = strength + '%';
            
            if (strength < 40) {
                strengthMeter.style.background = '#e74c3c';
            } else if (strength < 80) {
                strengthMeter.style.background = '#f39c12';
            } else {
                strengthMeter.style.background = '#2ecc71';
            }
        });
        
        // Form validation
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Email validation
            const loginEmail = document.getElementById('loginEmail');
            const loginEmailError = document.getElementById('loginEmailError');
            if (!loginEmail.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail.value)) {
                loginEmailError.style.display = 'block';
                isValid = false;
            } else {
                loginEmailError.style.display = 'none';
            }
            
            // Password validation
            const loginPassword = document.getElementById('loginPassword');
            const loginPasswordError = document.getElementById('loginPasswordError');
            if (!loginPassword.value) {
                loginPasswordError.style.display = 'block';
                isValid = false;
            } else {
                loginPasswordError.style.display = 'none';
            }
            
            if (isValid) {
                // Here you would typically send the login request to your server
                alert('Login successful! (This is a demo)');
                authModal.classList.remove('active');
                setTimeout(() => {
                    authModal.style.display = 'none';
                }, 300);
            }
        });
        
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Username validation
            const signupUsername = document.getElementById('signupUsername');
            const signupUsernameError = document.getElementById('signupUsernameError');
            if (!signupUsername.value || signupUsername.value.length < 3) {
                signupUsernameError.style.display = 'block';
                isValid = false;
            } else {
                signupUsernameError.style.display = 'none';
            }
            
            // Email validation
            const signupEmail = document.getElementById('signupEmail');
            const signupEmailError = document.getElementById('signupEmailError');
            if (!signupEmail.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupEmail.value)) {
                signupEmailError.style.display = 'block';
                isValid = false;
            } else {
                signupEmailError.style.display = 'none';
            }
            
            // Password validation
            const signupPassword = document.getElementById('signupPassword');
            const signupPasswordError = document.getElementById('signupPasswordError');
            const password = signupPassword.value;
            
            // Check all requirements
            const hasLength = password.length >= 8;
            const hasLowercase = /[a-z]/.test(password);
            const hasUppercase = /[A-Z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
            const hasSpecial = /[^A-Za-z0-9]/.test(password);
            
            if (!hasLength || !hasLowercase || !hasUppercase || !hasNumber || !hasSpecial) {
                signupPasswordError.style.display = 'block';
                isValid = false;
            } else {
                signupPasswordError.style.display = 'none';
            }
            
            // Confirm password validation
            const confirmPassword = document.getElementById('confirmPassword');
            const confirmPasswordError = document.getElementById('confirmPasswordError');
            if (confirmPassword.value !== signupPassword.value) {
                confirmPasswordError.style.display = 'block';
                isValid = false;
            } else {
                confirmPasswordError.style.display = 'none';
            }
            
            if (isValid) {
                // Here you would typically send the signup request to your server
                alert('Account created successfully! (This is a demo)');
                authModal.classList.remove('active');
                setTimeout(() => {
                    authModal.style.display = 'none';
                }, 300);
            }
        });
       
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    const navLinks = document.querySelector('.nav-links');
                    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileMenuBtn.classList.remove('active');
                    }
                }
            });
        });

        // Intersection Observer for scroll animations
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

        // Observe elements for scroll animations
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.feature-card, .department-card, .section-header');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });

        // Add loading fallback for images
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('error', function() {
                    this.style.backgroundColor = '#f3f4f6';
                    this.style.display = 'flex';
                    this.style.alignItems = 'center';
                    this.style.justifyContent = 'center';
                    this.alt = 'Image not available';
                });
            });
        });
