// Course data
const courses = [
  {
    id: "html",
    name: "HTML",
    icon: "fab fa-html5",
    color: "#e34c26",
    description:
      "Master the building blocks of web development with comprehensive HTML training",
    topics: [
      {
        id: "html-basics",
        name: "HTML Basics",
        videoId: "UB1O30fR-EE",
        documentation: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        quiz: [
          {
            question: "What does HTML stand for?",
            options: [
              "Hyper Text Markup Language",
              "High Tech Modern Language",
              "Home Tool Markup Language",
              "Hyperlink and Text Markup Language",
            ],
            correct: 0,
          },
          {
            question: "Which HTML element is used for the largest heading?",
            options: ["<h6>", "<h1>", "<header>", "<heading>"],
            correct: 1,
          },
        ],
      },
      {
        id: "html-forms",
        name: "HTML Forms",
        videoId: "fNcJuPIZ2WE",
        documentation:
          "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
        quiz: [
          {
            question: "Which input type is used for email addresses?",
            options: ["text", "email", "mail", "address"],
            correct: 1,
          },
        ],
      },
      {
        id: "html-semantic",
        name: "Semantic HTML",
        videoId: "bOUhq46fd5g",
        documentation:
          "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
        quiz: [
          {
            question: "Which element represents a section of a page?",
            options: ["<div>", "<section>", "<span>", "<p>"],
            correct: 1,
          },
        ],
      },
    ],
  },
  {
    id: "css",
    name: "CSS",
    icon: "fab fa-css3-alt",
    color: "#1572b6",
    description:
      "Learn to style beautiful and responsive web interfaces with CSS",
    topics: [
      {
        id: "css-basics",
        name: "CSS Fundamentals",
        videoId: "yfoY53QXEnI",
        documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        quiz: [
          {
            question: "What does CSS stand for?",
            options: [
              "Computer Style Sheets",
              "Cascading Style Sheets",
              "Creative Style Sheets",
              "Colorful Style Sheets",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "css-flexbox",
        name: "CSS Flexbox",
        videoId: "JJSoEo8JSnc",
        documentation:
          "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout",
        quiz: [
          {
            question: "Which property is used to create a flex container?",
            options: [
              "display: flex",
              "flex: container",
              "layout: flex",
              "position: flex",
            ],
            correct: 0,
          },
        ],
      },
      {
        id: "css-grid",
        name: "CSS Grid",
        videoId: "EFafSYg-PkI",
        documentation:
          "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
        quiz: [
          {
            question: "Which property defines the number of columns in a grid?",
            options: [
              "grid-columns",
              "grid-template-columns",
              "columns",
              "grid-cols",
            ],
            correct: 1,
          },
        ],
      },
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "fab fa-js-square",
    color: "#f7df1e",
    description:
      "Build interactive web applications with modern JavaScript programming",
    topics: [
      {
        id: "js-basics",
        name: "JavaScript Fundamentals",
        videoId: "PkZNo7MFNFg",
        documentation:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        quiz: [
          {
            question:
              "Which keyword is used to declare a variable in JavaScript?",
            options: ["var", "let", "const", "All of the above"],
            correct: 3,
          },
        ],
      },
      {
        id: "js-dom",
        name: "DOM Manipulation",
        videoId: "y17RuWkWdn8",
        documentation:
          "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
        quiz: [
          {
            question: "Which method is used to select an element by its ID?",
            options: [
              "getElementByClass",
              "getElementById",
              "querySelector",
              "selectElement",
            ],
            correct: 1,
          },
        ],
      },
    ],
  },
  {
    id: "sfmc",
    name: "Salesforce Marketing Cloud",
    icon: "fas fa-cloud",
    color: "#0078d4",
    description:
      "Master email marketing automation with Salesforce Marketing Cloud",
    topics: [
      {
        id: "sfmc-intro",
        name: "SFMC Introduction",
        videoId: "H7R1RTxYhvU",
        documentation:
          "https://help.salesforce.com/s/articleView?id=sf.mc_overview.htm",
        quiz: [
          {
            question: "What is Salesforce Marketing Cloud primarily used for?",
            options: [
              "CRM",
              "Digital Marketing",
              "Sales Analytics",
              "Project Management",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "sfmc-email-studio",
        name: "Email Studio",
        videoId: "kX3wJyiYhgI",
        documentation:
          "https://help.salesforce.com/s/articleView?id=sf.mc_es_email_studio.htm",
        quiz: [
          {
            question: "Which studio is used for email marketing in SFMC?",
            options: [
              "Journey Builder",
              "Email Studio",
              "Content Builder",
              "Automation Studio",
            ],
            correct: 1,
          },
        ],
      },
    ],
  },
  {
    id: "ampscript",
    name: "AMPscript",
    icon: "fas fa-code",
    color: "#ff6b6b",
    description:
      "Dynamic personalization scripting language for marketing automation",
    topics: [
      {
        id: "ampscript-basics",
        name: "AMPscript Fundamentals",
        videoId: "H7R1RTxYhvU",
        documentation:
          "https://help.salesforce.com/s/articleView?id=sf.mc_es_ampscript.htm",
        quiz: [
          {
            question: "What syntax is used to start an AMPscript block?",
            options: ["<%", "%%[", "{{", "<script>"],
            correct: 1,
          },
        ],
      },
      {
        id: "ampscript-functions",
        name: "AMPscript Functions",
        videoId: "kX3wJyiYhgI",
        documentation:
          "https://help.salesforce.com/s/articleView?id=sf.mc_es_ampscript_functions.htm",
        quiz: [
          {
            question: "Which function is used to format dates in AMPscript?",
            options: ["DateFormat", "FormatDate", "Format", "DateString"],
            correct: 0,
          },
        ],
      },
    ],
  },
  {
    id: "sql",
    name: "SQL",
    icon: "fas fa-database",
    color: "#336791",
    description:
      "Query and manage database systems effectively for data-driven marketing",
    topics: [
      {
        id: "sql-basics",
        name: "SQL Fundamentals",
        videoId: "HXV3zeQKqGY",
        documentation: "https://www.w3schools.com/sql/",
        quiz: [
          {
            question: "Which SQL statement is used to retrieve data?",
            options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
            correct: 1,
          },
        ],
      },
      {
        id: "sql-joins",
        name: "SQL Joins",
        videoId: "9yeOJ0ZMUYw",
        documentation: "https://www.w3schools.com/sql/sql_join.asp",
        quiz: [
          {
            question: "Which join returns all records from both tables?",
            options: [
              "INNER JOIN",
              "LEFT JOIN",
              "RIGHT JOIN",
              "FULL OUTER JOIN",
            ],
            correct: 3,
          },
        ],
      },
    ],
  },
];

// Application state
let currentState = {
  selectedCourse: null,
  userProgress: loadProgress(),
  currentQuiz: null,
  quizAnswers: {},
  quizSubmitted: false,
};

// Progress management
function loadProgress() {
  try {
    const stored = localStorage.getItem("lms-progress");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem(
      "lms-progress",
      JSON.stringify(currentState.userProgress)
    );
  } catch (error) {
    console.error("Failed to save progress:", error);
  }
}

function isTopicCompleted(courseId, topicId) {
  return currentState.userProgress[courseId]?.[topicId] || false;
}

function toggleTopicCompletion(courseId, topicId) {
  if (!currentState.userProgress[courseId]) {
    currentState.userProgress[courseId] = {};
  }
  currentState.userProgress[courseId][topicId] =
    !currentState.userProgress[courseId][topicId];
  saveProgress();

  // Update UI
  if (currentState.selectedCourse) {
    renderTopicDetail();
    renderSidebar();
  }
}

function calculateCourseProgress(courseId, totalTopics) {
  const courseProgress = currentState.userProgress[courseId];
  if (!courseProgress) return 0;

  const completedCount = Object.values(courseProgress).filter(Boolean).length;
  return Math.round((completedCount / totalTopics) * 100);
}

// UI rendering functions
function renderCourseGrid() {
  const grid = document.getElementById("course-grid");
  grid.innerHTML = "";

  courses.forEach((course) => {
    const progress = calculateCourseProgress(course.id, course.topics.length);

    const card = document.createElement("div");
    card.className = "course-card";
    card.onclick = () => selectCourse(course.id);

    card.innerHTML = `
                    <div class="course-header">
                        <div class="course-info">
                            <div class="course-icon-container" style="background-color: ${course.color}20;">
                                <i class="${course.icon} course-icon" style="color: ${course.color};"></i>
                            </div>
                            <div class="course-details">
                                <h3>${course.name}</h3>
                                <div class="course-meta">
                                    <span>${course.topics.length} topics</span>
                                    <span>•</span>
                                    <span style="color: var(--primary); font-weight: 600;">${progress}% complete</span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-circle">
                            <svg width="48" height="48" viewBox="0 0 36 36">
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                                      fill="none" stroke="var(--very-light-gray)" stroke-width="2"/>
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                                      fill="none" stroke="var(--primary)" stroke-width="2" 
                                      stroke-dasharray="${progress}, 100" 
                                      transform="rotate(-90 18 18)"/>
                            </svg>
                            <div class="progress-text">${progress}%</div>
                        </div>
                    </div>
                    <p class="course-description">${course.description}</p>
                    <div class="course-footer">
                        <div class="course-features">
                            <span><i class="fas fa-play-circle"></i> Videos</span>
                            <span><i class="fas fa-file-alt"></i> Docs</span>
                            <span><i class="fas fa-question-circle"></i> Quizzes</span>
                        </div>
                        <a href="#" class="start-learning">Start Learning →</a>
                    </div>
                `;

    grid.appendChild(card);
  });
}

function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  const topicList = document.getElementById("topic-list");
  const sidebarTitle = document.getElementById("sidebar-title");

  if (!currentState.selectedCourse) {
    sidebar.classList.add("hidden");
    return;
  }

  sidebar.classList.remove("hidden");
  sidebarTitle.textContent = `${currentState.selectedCourse.name} Topics`;
  topicList.innerHTML = "";

  currentState.selectedCourse.topics.forEach((topic) => {
    const completed = isTopicCompleted(
      currentState.selectedCourse.id,
      topic.id
    );
    const li = document.createElement("li");
    li.className = "topic-item";
    li.onclick = () => selectTopic(topic);

    li.innerHTML = `
                    <div class="topic-info">
                        <div class="topic-dot ${
                          completed ? "completed" : ""
                        }"></div>
                        <span class="topic-name">${topic.name}</span>
                    </div>
                    <i class="fas fa-chevron-right" style="color: var(--medium-gray); font-size: 0.75rem;"></i>
                `;

    topicList.appendChild(li);
  });
}

function renderTopicDetail() {
  const detailView = document.getElementById("topic-detail");
  const detailTitle = document.getElementById("detail-title");
  const tableBody = document.getElementById("detail-table-body");

  if (!currentState.selectedCourse) {
    detailView.classList.remove("active");
    return;
  }

  detailTitle.textContent = `${currentState.selectedCourse.name} - Course Details`;
  tableBody.innerHTML = "";

  currentState.selectedCourse.topics.forEach((topic) => {
    const completed = isTopicCompleted(
      currentState.selectedCourse.id,
      topic.id
    );
    const row = document.createElement("tr");

    row.innerHTML = `
                    <td>
                        <div class="table-topic">
                            <div class="table-topic-dot ${
                              completed ? "completed" : ""
                            }"></div>
                            <span style="font-weight: 500; color: var(--dark);">${
                              topic.name
                            }</span>
                        </div>
                    </td>
                    <td>
                        <button class="btn btn-primary" onclick="openVideoModal('${
                          topic.videoId
                        }', '${topic.name}')">
                            <i class="fas fa-play"></i>
                            Watch Video
                        </button>
                    </td>
                    <td>
                        <a href="${
                          topic.documentation
                        }" target="_blank" class="btn-link">
                            <i class="fas fa-external-link-alt"></i>
                            View Docs
                        </a>
                    </td>
                    <td>
                        <button class="btn btn-outline" onclick="openQuizModal('${
                          topic.id
                        }')">
                            <i class="fas fa-question-circle"></i>
                            Take Quiz
                        </button>
                    </td>
                    <td>
                        <div class="progress-checkbox">
                            <input type="checkbox" class="checkbox" ${
                              completed ? "checked" : ""
                            } 
                                   onchange="toggleTopicCompletion('${
                                     currentState.selectedCourse.id
                                   }', '${topic.id}')">
                            <span class="progress-status ${
                              completed ? "completed" : "not-started"
                            }">
                                ${completed ? "Completed" : "Not Started"}
                            </span>
                        </div>
                    </td>
                `;

    tableBody.appendChild(row);
  });
}

// Navigation functions
function selectCourse(courseId) {
  const course = courses.find((c) => c.id === courseId);
  if (course) {
    currentState.selectedCourse = course;
    document.getElementById("selected-course").textContent = course.name;
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("topic-detail").classList.add("active");
    renderSidebar();
    renderTopicDetail();
  }
}

function selectTopic(topic) {
  // For now, just scroll to the topic in the table
  // You could implement a more detailed topic view here
}

function showDashboard() {
  currentState.selectedCourse = null;
  document.getElementById("selected-course").textContent = "Select a Course";
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("topic-detail").classList.remove("active");
  renderSidebar();
}

// Modal functions
function openVideoModal(videoId, title) {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-iframe");
  const titleElement = document.getElementById("video-title");

  titleElement.textContent = title;
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  modal.classList.add("active");
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-iframe");

  iframe.src = "";
  modal.classList.remove("active");
}

function openQuizModal(topicId) {
  const topic = currentState.selectedCourse.topics.find(
    (t) => t.id === topicId
  );
  if (!topic) return;

  currentState.currentQuiz = topic;
  currentState.quizAnswers = {};
  currentState.quizSubmitted = false;

  const modal = document.getElementById("quiz-modal");
  const title = document.getElementById("quiz-title");
  const content = document.getElementById("quiz-content");

  title.textContent = `${topic.name} - Quiz`;
  content.innerHTML = "";

  topic.quiz.forEach((question, questionIndex) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "quiz-question";

    questionDiv.innerHTML = `
                    <h4 class="question-title">${questionIndex + 1}. ${
      question.question
    }</h4>
                    <div class="quiz-options">
                        ${question.options
                          .map(
                            (option, optionIndex) => `
                            <label class="quiz-option" onclick="selectQuizAnswer(${questionIndex}, ${optionIndex})">
                                <input type="radio" name="question-${questionIndex}" value="${optionIndex}">
                                <span>${option}</span>
                            </label>
                        `
                          )
                          .join("")}
                    </div>
                `;

    content.appendChild(questionDiv);
  });

  document.getElementById("submit-quiz-btn").style.display = "inline-flex";
  document.getElementById("quiz-close-btn").textContent = "Cancel";
  modal.classList.add("active");
}

function selectQuizAnswer(questionIndex, optionIndex) {
  if (currentState.quizSubmitted) return;

  currentState.quizAnswers[questionIndex] = optionIndex;

  // Update UI
  const options = document.querySelectorAll(
    `input[name="question-${questionIndex}"]`
  );
  options.forEach((option, index) => {
    const label = option.parentElement;
    label.classList.remove("selected");
    if (index === optionIndex) {
      option.checked = true;
      label.classList.add("selected");
    }
  });
}

function submitQuiz() {
  if (!currentState.currentQuiz) return;

  currentState.quizSubmitted = true;
  const quiz = currentState.currentQuiz.quiz;
  let score = 0;

  quiz.forEach((question, questionIndex) => {
    const userAnswer = currentState.quizAnswers[questionIndex];
    const correctAnswer = question.correct;

    if (userAnswer === correctAnswer) {
      score++;
    }

    // Update UI to show results
    const options = document.querySelectorAll(
      `input[name="question-${questionIndex}"]`
    );
    options.forEach((option, optionIndex) => {
      const label = option.parentElement;
      option.disabled = true;

      if (optionIndex === correctAnswer) {
        label.classList.add("correct");
        const icon = document.createElement("i");
        icon.className = "fas fa-check";
        icon.style.color = "#22c55e";
        icon.style.marginLeft = "auto";
        label.appendChild(icon);
      } else if (optionIndex === userAnswer && userAnswer !== correctAnswer) {
        label.classList.add("incorrect");
        const icon = document.createElement("i");
        icon.className = "fas fa-times";
        icon.style.color = "#ef4444";
        icon.style.marginLeft = "auto";
        label.appendChild(icon);
      }
    });
  });

  const percentage = Math.round((score / quiz.length) * 100);
  alert(
    `Quiz completed! You scored ${score} out of ${quiz.length} (${percentage}%)`
  );

  document.getElementById("submit-quiz-btn").style.display = "none";
  document.getElementById("quiz-close-btn").textContent = "Close";
}

function closeQuizModal() {
  const modal = document.getElementById("quiz-modal");
  modal.classList.remove("active");
  currentState.currentQuiz = null;
  currentState.quizAnswers = {};
  currentState.quizSubmitted = false;
}

// Initialize the application
function init() {
  renderCourseGrid();
  renderSidebar();
}

// Start the application when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
