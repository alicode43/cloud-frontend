// // Mobile menu toggle
//         const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//         const navLinks = document.querySelector('.nav-links');

//         mobileMenuBtn.addEventListener('click', function () {
//             navLinks.classList.toggle('active');
//             mobileMenuBtn.classList.toggle('active');
//         });

//         // Smooth scrolling for navigation links
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 const target = document.querySelector(this.getAttribute('href'));
//                 if (target) {
//                     target.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start'
//                     });

//                     // Close mobile menu if open
//                     if (navLinks.classList.contains('active')) {
//                         navLinks.classList.remove('active');
//                         mobileMenuBtn.classList.remove('active');
//                     }
//                 }
//             });
//         });

//         // Intersection Observer for scroll animations
//         const observerOptions = {
//             threshold: 0.1,
//             rootMargin: '0px 0px -50px 0px'
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.style.opacity = '1';
//                     entry.target.style.transform = 'translateY(0)';
//                 }
//             });
//         }, observerOptions);

//         // Observe elements for scroll animations
//         document.addEventListener('DOMContentLoaded', function () {
//             const animatedElements = document.querySelectorAll('.feature-card, .department-card, .section-header');
//             animatedElements.forEach(el => {
//                 el.style.opacity = '0';
//                 el.style.transform = 'translateY(30px)';
//                 el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//                 observer.observe(el);
//             });
//         });

//         // Add loading fallback for images
//         document.addEventListener('DOMContentLoaded', function () {
//             const images = document.querySelectorAll('img');
//             images.forEach(img => {
//                 img.addEventListener('error', function () {
//                     this.style.backgroundColor = '#f3f4f6';
//                     this.style.display = 'flex';
//                     this.style.alignItems = 'center';
//                     this.style.justifyContent = 'center';
//                     this.alt = 'Image not available';
//                 });
//             });
//         });

//         // Modal functionality
//         const loginBtn = document.getElementById('loginBtn');
//         const loginModal = document.getElementById('loginModal');
//         const signupModal = document.getElementById('signupModal');
//         const switchToSignup = document.getElementById('switchToSignup');
//         const switchToLogin = document.getElementById('switchToLogin');
//         const closeButtons = document.querySelectorAll('.modal-close');

//         // Open login modal
//         loginBtn.addEventListener('click', function (e) {
//             e.preventDefault();
//             loginModal.classList.add('active');
//         });

//         // Switch to signup modal
//         switchToSignup.addEventListener('click', function () {
//             loginModal.classList.remove('active');
//             signupModal.classList.add('active');
//         });

//         // Switch to login modal
//         switchToLogin.addEventListener('click', function () {
//             signupModal.classList.remove('active');
//             loginModal.classList.add('active');
//         });

//         // Close modals
//         closeButtons.forEach(button => {
//             button.addEventListener('click', function () {
//                 loginModal.classList.remove('active');
//                 signupModal.classList.remove('active');
//             });
//         });

//         // Close modal when clicking outside
//         window.addEventListener('click', function (e) {
//             if (e.target === loginModal) {
//                 loginModal.classList.remove('active');
//             }
//             if (e.target === signupModal) {
//                 signupModal.classList.remove('active');
//             }
//         });

//         // ✅ Validation for Login Form
//         function validateLogin(event) {
//             event.preventDefault();

//             let email = document.getElementById("loginEmail").value.trim();
//             let password = document.getElementById("loginPassword").value.trim();
//             let emailError = document.getElementById("loginEmailError");
//             let passwordError = document.getElementById("loginPasswordError");

//             let isValid = true;
//             // API call for login
//             try {
//         const response = await fetch("https://cloud-backend-5oi5.onrender.com/api/v1/users/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email, password })
//         });

//         const result = await response.json();

//         if (response.ok) {
//             alert("✅ Login successful!");
//             console.log("User Token:", result.token || "No token returned");
//             loginModal.classList.remove('active');
//         } else {
//             alert("❌ " + (result.message || "Login failed."));
//         }
//     } catch (error) {
//         console.error("❌ Error logging in:", error);
//         alert("Something went wrong, please try again.");
//     }


//             // Reset errors
//             emailError.textContent = "";
//             passwordError.textContent = "";

//             // Email validation
//             if (email === "") {
//                 emailError.textContent = "Email cannot be empty.";
//                 isValid = false;
//             } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//                 emailError.textContent = "Enter a valid email address.";
//                 isValid = false;
//             }

//             // Password validation
//             if (password === "") {
//                 passwordError.textContent = "Password cannot be empty.";
//                 isValid = false;
//             } else if (password.length < 6) {
//                 passwordError.textContent = "Password must be at least 6 characters.";
//                 isValid = false;
//             }

//             // If valid
//             if (isValid) {
//                 alert("Login Successful ✅");
//                 loginModal.classList.remove('active');
//             }
//         }

//         // Signup form validation
//         document.addEventListener('DOMContentLoaded', function () {
//             // Username validation
//             document.getElementById("username").addEventListener("input", function () {
//                 let username = this.value.trim();
//                 let errorMsg = "";

//                 // Check if first letter is capital
//                 if (username.length > 0 && username[0] !== username[0].toUpperCase()) {
//                     errorMsg = "First letter must be capital.";
//                 }
//                 // Check if only letters (no numbers/special characters)
//                 else if (!/^[A-Za-z]*$/.test(username)) {
//                     errorMsg = "Username can only contain letters (no numbers or symbols).";
//                 }

//                 document.getElementById("usernameError").textContent = errorMsg;
//             });

//             // Email validation
//             document.getElementById("email").addEventListener("input", function () {
//                 let email = this.value.trim();
//                 let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // standard email format
//                 let errorMsg = "";

//                 if (email !== "" && !emailRegex.test(email)) {
//                     errorMsg = "Please enter a valid email address.";
//                 }

//                 document.getElementById("emailError").textContent = errorMsg;
//             });

//             // Password validation
//             document.getElementById("password").addEventListener("input", function () {
//                 let password = this.value;
//                 let errorMsg = "";

//                 // Regex for strong password: at least 8 chars, 1 uppercase, 1 number, 1 special char
//                 let strongRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//                 if (password === "") {
//                     errorMsg = "Password cannot be empty.";
//                 } else if (!strongRegex.test(password)) {
//                     errorMsg = "Password must be at least 8 characters, include 1 uppercase, 1 number, and 1 special character.";
//                 } else {
//                     errorMsg = ""; // ✅ No message if password is valid
//                 }

//                 document.getElementById("passwordError").textContent = errorMsg;
//             });

//             // Confirm password validation
//             document.getElementById("confirmPassword").addEventListener("input", function () {
//                 let confirmPassword = this.value;
//                 let password = document.getElementById("password").value;
//                 let errorMsg = "";

//                 if (confirmPassword === "") {
//                     errorMsg = "Confirm Password cannot be empty.";
//                 } else if (confirmPassword !== password) {
//                     errorMsg = "Passwords do not match.";
//                 } else {
//                     errorMsg = ""; // ✅ No success message, just clear error
//                 }

//                 document.getElementById("confirmPasswordError").textContent = errorMsg;
//             });

//             // Form submission validation
//             document.getElementById("signupForm").addEventListener("submit", function (event) {
//                 event.preventDefault(); // stop form from submitting by default

//                 let username = document.getElementById("username").value.trim();
//                 let email = document.getElementById("email").value.trim();
//                 let password = document.getElementById("password").value;
//                 let confirmPassword = document.getElementById("confirmPassword").value;

//                 let usernameError = document.getElementById("usernameError").textContent;
//                 let emailError = document.getElementById("emailError").textContent;
//                 let passwordError = document.getElementById("passwordError").textContent;
//                 let confirmPasswordError = document.getElementById("confirmPasswordError").textContent;

//                 // Check if any field has an error or is empty
//                 if (
//                     username === "" || email === "" || password === "" || confirmPassword === "" ||
//                     usernameError !== "" || emailError !== "" || passwordError !== "" || confirmPasswordError !== "" ||
//                     password !== confirmPassword   // ✅ check directly if passwords don't match
//                 ) {
//                     alert("Please fix all errors before submitting.");
//                     return; // stop submission
//                 }

//                 // If everything is correct
//                 alert("✅ Account created successfully!");
//                 this.reset(); // clear the form
//                 signupModal.classList.remove('active');
//             });
//         }
//         try {
//             const response = await fetch("https://cloud-backend-5oi5.onrender.com/api/v1/users/register", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ name: username, email, role: "student", password })
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 alert("✅ Account created successfully!");
//                 console.log("Registered User:", result);
//                 this.reset();
//                 signupModal.classList.remove('active');
//             } else {
//                 alert("❌ " + (result.message || "Registration failed."));
//             }
//         } catch (error) {
//             console.error("❌ Error registering:", error);
//             alert("Something went wrong, please try again.");
//         }
    
//     );
        
/* landing.js — Cloud Odyssey LP (with API auth) */
/* ===========================================================
   KEY IMPROVEMENTS
   - Made login handler truly async and moved API call AFTER validation
   - Fixed await-in-non-async error
   - Fixed broken/misaligned braces and stray characters in signup block
   - Kept your IDs, function names, and modals exactly the same
   - Prevented smooth scroll from breaking on href="#"
   - Optional: store token in localStorage if backend returns one
   =========================================================== */

const API_BASE = "https://cloud-backend-5oi5.onrender.com/api/v1";

/* ----------------- MOBILE MENU ----------------- */
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', function () {
  navLinks.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
});

/* ----------------- SMOOTH SCROLL -----------------
   Skip anchors with href="#" to avoid querySelector('#') errors */
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    }
  });
});

/* ----------------- SCROLL ANIMATIONS ----------------- */
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll('.feature-card, .department-card, .section-header');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

/* ----------------- IMAGE FALLBACK ----------------- */
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function () {
      this.style.backgroundColor = '#f3f4f6';
      this.style.display = 'flex';
      this.style.alignItems = 'center';
      this.style.justifyContent = 'center';
      this.alt = 'Image not available';
    });
  });
});

/* ----------------- MODALS ----------------- */
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');
const closeButtons = document.querySelectorAll('.modal-close');

loginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  loginModal.classList.add('active');
});

switchToSignup.addEventListener('click', function () {
  loginModal.classList.remove('active');
  signupModal.classList.add('active');
});

switchToLogin.addEventListener('click', function () {
  signupModal.classList.remove('active');
  loginModal.classList.add('active');
});

closeButtons.forEach(button => {
  button.addEventListener('click', function () {
    loginModal.classList.remove('active');
    signupModal.classList.remove('active');
  });
});

window.addEventListener('click', function (e) {
  if (e.target === loginModal) loginModal.classList.remove('active');
  if (e.target === signupModal) signupModal.classList.remove('active');
});

/* ----------------- LOGIN (Validation + API) -----------------
   NOTE: attached to window so your HTML onclick="validateLogin(event)" works */
window.validateLogin = async function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const emailError = document.getElementById("loginEmailError");
  const passwordError = document.getElementById("loginPasswordError");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  let isValid = true;

  // Reset errors
  emailError.textContent = "";
  passwordError.textContent = "";

  // Email validation
  if (email === "") {
    emailError.textContent = "Email cannot be empty.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Password validation
  if (password === "") {
    passwordError.textContent = "Password cannot be empty.";
    isValid = false;
  } else if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    isValid = false;
  }

  if (!isValid) return;

  // ---- API Call for login (only after validation passes) ----
  try {
    const res = await fetch(`${API_BASE}/users/login`, { //placed api in variable
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    // Try to parse JSON; fallback to text for unexpected responses
    let data;
    const text = await res.text();
    try { data = JSON.parse(text); } catch { data = { message: text }; }

    if (res.ok) {
      alert("✅ Login successful!");
      if (data.token) {
        // Optional: persist token for later authenticated requests
        localStorage.setItem("authToken", data.token);
      }
      loginModal.classList.remove('active');
    } else {
      alert("❌ " + (data.message || "Login failed."));
    }
  } catch (err) {
    console.error("❌ Error logging in:", err);
    alert("Something went wrong, please try again.");
  }
};

/* ----------------- SIGNUP (Validation + API) ----------------- */
document.addEventListener('DOMContentLoaded', function () {
  // Username validation
  document.getElementById("username").addEventListener("input", function () {
    let username = this.value.trim();
    let errorMsg = "";
    if (username.length > 0 && username[0] !== username[0].toUpperCase()) {
      errorMsg = "First letter must be capital.";
    } else if (!/^[A-Za-z]*$/.test(username)) {
      errorMsg = "Username can only contain letters (no numbers or symbols).";
    }
    document.getElementById("usernameError").textContent = errorMsg;
  });

  // Email validation
  document.getElementById("email").addEventListener("input", function () {
    let email = this.value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errorMsg = "";
    if (email !== "" && !emailRegex.test(email)) {
      errorMsg = "Please enter a valid email address.";
    }
    document.getElementById("emailError").textContent = errorMsg;
  });

  // Password validation
  document.getElementById("password").addEventListener("input", function () {
    let password = this.value;
    let errorMsg = "";
    let strongRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === "") {
      errorMsg = "Password cannot be empty.";
    } else if (!strongRegex.test(password)) {
      errorMsg = "Password must be at least 8 characters, include 1 uppercase, 1 number, and 1 special character.";
    }
    document.getElementById("passwordError").textContent = errorMsg;
  });

  // Confirm password validation
  document.getElementById("confirmPassword").addEventListener("input", function () {
    let confirmPassword = this.value;
    let password = document.getElementById("password").value;
    let errorMsg = "";
    if (confirmPassword === "") {
      errorMsg = "Confirm Password cannot be empty.";
    } else if (confirmPassword !== password) {
      errorMsg = "Passwords do not match.";
    }
    document.getElementById("confirmPasswordError").textContent = errorMsg;
  });

  // Submit handler (async because we use await fetch)
  document.getElementById("signupForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let usernameError = document.getElementById("usernameError").textContent;
    let emailError = document.getElementById("emailError").textContent;
    let passwordError = document.getElementById("passwordError").textContent;
    let confirmPasswordError = document.getElementById("confirmPasswordError").textContent;

    // Block submit if any error/empty
    if (
      username === "" || email === "" || password === "" || confirmPassword === "" ||
      usernameError !== "" || emailError !== "" || passwordError !== "" || confirmPasswordError !== "" ||
      password !== confirmPassword
    ) {
      alert("Please fix all errors before submitting.");
      return;
    }

    // ---- API Call for signup: Register ----
    try {
      const res = await fetch(`${API_BASE}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: username, email, role: "student", password })
      });

      // Parse robustly
      let data;
      const text = await res.text();
      try { data = JSON.parse(text); } catch { data = { message: text }; }

      if (res.ok) {
        alert("✅ Account created successfully!");
        console.log("Registered User:", data);
        this.reset();
        signupModal.classList.remove('active');
        // Optionally auto-open login modal
        loginModal.classList.add('active');
      } else {
        alert("❌ " + (data.message || "Registration failed."));
      }
    } catch (err) {
      console.error("❌ Error registering:", err);
      alert("Something went wrong, please try again.");
    }
  });
});
