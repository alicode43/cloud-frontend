// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Close mobile menu if open
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
      }
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".feature-card, .department-card, .section-header"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Add loading fallback for images
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("error", function () {
      this.style.backgroundColor = "#f3f4f6";
      this.style.display = "flex";
      this.style.alignItems = "center";
      this.style.justifyContent = "center";
      this.alt = "Image not available";
    });
  });
});

// Modal functionality
const loginBtn = document.getElementById("loginBtn");
const startLearningBtn = document.getElementById('startLearningBtn');
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const switchToSignup = document.getElementById("switchToSignup");
const switchToLogin = document.getElementById("switchToLogin");
const closeButtons = document.querySelectorAll(".modal-close");
const loginForm = document.getElementById("loginForm");

// Open login modal
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  loginModal.classList.add("active");
});

// NEW: Handle Start Learning button click
        startLearningBtn.addEventListener('click', function (e) {
          e.preventDefault();
          signupModal.classList.add('active');
        });

// Switch to signup modal
switchToSignup.addEventListener("click", function () {
  loginModal.classList.remove("active");
  signupModal.classList.add("active");
});

// Switch to login modal
switchToLogin.addEventListener("click", function () {
  signupModal.classList.remove("active");
  loginModal.classList.add("active");
});

// Close modals
closeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    loginModal.classList.remove("active");
    signupModal.classList.remove("active");
  });
});

// Close modal when clicking outside
window.addEventListener("click", function (e) {
  if (e.target === loginModal) {
    loginModal.classList.remove("active");
  }
  if (e.target === signupModal) {
    signupModal.classList.remove("active");
  }
});

// ✅ Validation for Login Form
function validateLogin(event) {
  event.preventDefault();

  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value.trim();
  let emailError = document.getElementById("loginEmailError");
  let passwordError = document.getElementById("loginPasswordError");

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
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // If valid
  if (isValid) {
    // alert("Login Successful ✅");
    console.log("Validation Successful ✅");
    loginModal.classList.remove("active");
  }
}
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; Secure; SameSite=Strict";
  }
  
// Signup form validation
document.addEventListener("DOMContentLoaded", function () {
  
    


    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      validateLogin(e)

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      console.log("Email:", email);
      console.log("Password:", password);
      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      const requestBody = {
        email: email,
        password: password,
      };

      fetch("https://cloud-backend-5oi5.onrender.com/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
        redirect: "follow",
      })
        .then((response) => {
          if (!response.ok) {
            // Try to parse error message JSON if available
            return response.json().then(errData => {
              throw new Error(errData.message || "Login failed");
            });
          }
          return response.json();
        })
        .then((data) => {
          if (data.success) {
            alert(data.message);

            // Store tokens in cookies for 7 days
            setCookie("accessToken", data.data.accessToken, 7);
            setCookie("refreshToken", data.data.refreshToken, 7);

            console.log("User logged in:", data.data.user);
            // Optionally redirect or update UI here
          } else {
            throw new Error(data.message || "Login unsuccessful");
          }
        })
        .catch((error) => {
          alert("Error: " + error.message);
          console.error("Login error:", error);
        });
    });


  // Username validation
  document.getElementById("username").addEventListener("input", function () {
    let username = this.value.trim();
    let errorMsg = "";

    // Check if first letter is capital
    if (username.length > 0 && username[0] !== username[0].toUpperCase()) {
      errorMsg = "First letter must be capital.";
    }
    // Check if only letters (no numbers/special characters)
    else if (!/^[A-Za-z]*$/.test(username)) {
      errorMsg = "Username can only contain letters (no numbers or symbols).";
    }

    document.getElementById("usernameError").textContent = errorMsg;
  });

  // Email validation
  document.getElementById("email").addEventListener("input", function () {
    let email = this.value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // standard email format
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

    // Regex for strong password: at least 8 chars, 1 uppercase, 1 number, 1 special char
    let strongRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password === "") {
      errorMsg = "Password cannot be empty.";
    } else if (!strongRegex.test(password)) {
      errorMsg =
        "Password must be at least 8 characters, include 1 uppercase, 1 number, and 1 special character.";
    } else {
      errorMsg = ""; // ✅ No message if password is valid
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
      } else {
        errorMsg = ""; // ✅ No success message, just clear error
      }

      document.getElementById("confirmPasswordError").textContent = errorMsg;
    });

  // Form submission validation
  document.getElementById("signupForm").addEventListener("submit", function (event) {
      event.preventDefault();

      let username = document.getElementById("username").value.trim();
      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirmPassword").value;

      let usernameError = document.getElementById("usernameError").textContent;
      let emailError = document.getElementById("emailError").textContent;
      let passwordError = document.getElementById("passwordError").textContent;
      let confirmPasswordError = document.getElementById(
        "confirmPasswordError"
      ).textContent;

      // Check if any field has an error or is empty
      if (
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === "" ||
        usernameError !== "" ||
        emailError !== "" ||
        passwordError !== "" ||
        confirmPasswordError !== "" ||
        password !== confirmPassword // ✅ check directly if passwords don't match
      ) {
        alert("Please fix all errors before submitting.");
        return; // stop submission
      }
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        name: username,
        email: email,
        role: "user",
        password: password,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://cloud-backend-5oi5.onrender.com/api/v1/users/register",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          alert("✅ Account created successfully!");
          console.log(result);
          this.reset();
        })
        .catch((error) => console.error(error));


      // If everything is correct
      // clear the form
      signupModal.classList.remove("active");
    });
});
