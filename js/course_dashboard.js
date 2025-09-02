// Application state
let appState = {
  selectedCourse: null,
  userProgress: {},
  currentQuiz: null,
  quizAnswers: {},
  quizSubmitted: false,
  currentVideoTopic: null,
  celebration: { isActive: false, topicName: '' }
};

// Utility functions
function loadProgress() {
  try {
    const stored = localStorage.getItem('cloud-odyssey-progress');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem('cloud-odyssey-progress', JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
}

function calculateCourseProgress(courseId, totalTopics) {
  const courseProgress = appState.userProgress[courseId];
  if (!courseProgress) return 0;
  
  const completedCount = Object.values(courseProgress).filter(Boolean).length;
  return Math.round((completedCount / totalTopics) * 100);
}

function isTopicCompleted(courseId, topicId) {
  return appState.userProgress[courseId]?.[topicId] || false;
}

// Toast notification system
function showToast(title, description, type = 'success', duration = 4000) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const randomMessage = celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)];
  
  toast.innerHTML = `
    <div class="toast-header">
      <div class="toast-icon">
        <i class="fas fa-check"></i>
      </div>
      <div class="toast-title">${title || randomMessage}</div>
      <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="toast-description">${description}</div>
    <button class="toast-action" onclick="this.parentElement.remove()">Keep Learning</button>
  `;
  
  container.appendChild(toast);
  
  // Auto remove after duration
  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.animation = 'toastSlideOut 0.3s ease-in forwards';
      setTimeout(() => {
        if (toast.parentElement) {
          toast.remove();
        }
      }, 300);
    }
  }, duration);
}

// Confetti animation
function createConfetti() {
  const container = document.getElementById('confetti-container');
  const colors = ['#27aadc', '#ffffff', '#f0f9ff', '#0ea5e9', '#38bdf8', '#22c55e', '#fbbf24'];
  
  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 3 + 's';
    piece.style.animationDuration = (Math.random() * 2 + 3) + 's';
    
    container.appendChild(piece);
    
    // Remove piece after animation
    setTimeout(() => {
      if (piece.parentElement) {
        piece.remove();
      }
    }, 6000);
  }
  
  // Clear all confetti after 6 seconds
  setTimeout(() => {
    container.innerHTML = '';
  }, 6000);
}

// Course rendering functions
function renderCourseGrid() {
  const grid = document.getElementById('course-grid');
  grid.innerHTML = '';
  
  courses.forEach((course, index) => {
    const progress = calculateCourseProgress(course.id, course.topics.length);
    const isCompleted = progress === 100;
    
    const card = document.createElement('div');
    card.className = `course-card ${isCompleted ? 'completed' : ''}`;
    card.style.animationDelay = `${index * 0.1}s`;
    card.onclick = () => selectCourse(course.id);
    
    const progressColor = isCompleted ? '#22c55e' : '#27aadc';
    
    card.innerHTML = `
      <div class="course-header">
        <div class="course-info">
          <div class="course-icon-container ${isCompleted ? 'completed' : ''}" 
               style="background-color: ${course.color}15; color: ${course.color}; box-shadow: 0 8px 25px ${course.color}25;">
            <i class="${course.icon}"></i>
          </div>
          <div class="course-details">
            <h3>${course.name}</h3>
            <div class="course-meta">
              <span class="course-topic-count">${course.topics.length} topics</span>
              <span class="course-progress-text ${isCompleted ? 'completed' : ''}">
                ${isCompleted ? '<i class="fas fa-sparkles"></i>' : ''} ${progress}% complete
              </span>
            </div>
          </div>
        </div>
        <div class="progress-circle">
          <svg width="64" height="64" viewBox="0 0 36 36" class="progress-svg">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" stroke="#e2e8f0" stroke-width="2"/>
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" stroke="${progressColor}" stroke-width="3" 
                  stroke-dasharray="${progress}, 100" 
                  stroke-linecap="round"
                  transform="rotate(-90 18 18)"
                  style="transition: stroke-dasharray 1s ease-out"/>
          </svg>
          <div class="progress-text ${isCompleted ? 'completed' : ''}">${progress}%</div>
        </div>
      </div>
      <p class="course-description">${course.description}</p>
      <div class="course-footer">
        <div class="course-features">
          <div class="feature-badge videos">
            <i class="fas fa-play-circle"></i>
            <span>Videos</span>
          </div>
          <div class="feature-badge docs">
            <i class="fas fa-file-text"></i>
            <span>Docs</span>
          </div>
          <div class="feature-badge quizzes">
            <i class="fas fa-question-circle"></i>
            <span>Quizzes</span>
          </div>
        </div>
        <div class="start-learning">
          ${isCompleted ? 'Review Course' : 'Start Learning'}
          <span class="start-learning-arrow">→</span>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  const topicList = document.getElementById('topic-list');
  const progressOverview = document.getElementById('progress-overview');
  const achievementSection = document.getElementById('achievement-section');
  const sidebarSubtitle = document.getElementById('sidebar-subtitle');
  
  if (!appState.selectedCourse) {
    progressOverview.style.display = 'none';
    achievementSection.style.display = 'none';
    topicList.innerHTML = '';
    sidebarSubtitle.textContent = 'Select a course';
    return;
  }
  
  const course = appState.selectedCourse;
  sidebarSubtitle.textContent = course.name;
  
  // Calculate progress
  const completedTopics = course.topics.filter(topic => 
    isTopicCompleted(course.id, topic.id)
  ).length;
  const progressPercentage = Math.round((completedTopics / course.topics.length) * 100);
  
  // Update progress overview
  progressOverview.style.display = 'block';
  document.getElementById('progress-percentage').textContent = `${progressPercentage}%`;
  document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
  document.getElementById('completed-count').textContent = `${completedTopics} completed`;
  document.getElementById('remaining-count').textContent = `${course.topics.length - completedTopics} remaining`;
  
  // Show achievement if completed
  if (progressPercentage === 100) {
    achievementSection.style.display = 'block';
  } else {
    achievementSection.style.display = 'none';
  }
  
  // Render topics
  topicList.innerHTML = '';
  course.topics.forEach((topic, index) => {
    const completed = isTopicCompleted(course.id, topic.id);
    
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.className = `topic-item ${completed ? 'completed' : ''}`;
    button.style.animationDelay = `${index * 0.1}s`;
    button.onclick = () => scrollToTopic(topic.id);
    
    button.innerHTML = `
      <div class="topic-info">
        <div class="topic-dot ${completed ? 'completed' : ''}"></div>
        <span class="topic-name">${topic.name}</span>
        ${completed ? '<div class="topic-checkmark">✓</div>' : ''}
      </div>
      <i class="fas fa-chevron-right topic-chevron"></i>
    `;
    
    li.appendChild(button);
    topicList.appendChild(li);
  });
}

function renderTopicDetail() {
  const detailView = document.getElementById('topic-detail');
  const detailTitle = document.getElementById('detail-title');
  const detailCourseIcon = document.getElementById('detail-course-icon');
  const tableBody = document.getElementById('topic-table-body');
  const completedStat = document.getElementById('completed-stat');
  const progressStat = document.getElementById('progress-stat');
  
  if (!appState.selectedCourse) {
    detailView.style.display = 'none';
    return;
  }
  
  const course = appState.selectedCourse;
  detailTitle.textContent = `${course.name} - Course Details`;
  detailCourseIcon.innerHTML = `<i class="${course.icon}"></i>`;
  detailCourseIcon.style.backgroundColor = `${course.color}15`;
  detailCourseIcon.style.color = course.color;
  detailCourseIcon.style.boxShadow = `0 8px 25px ${course.color}25`;
  
  // Calculate stats
  const completedTopics = course.topics.filter(topic => 
    isTopicCompleted(course.id, topic.id)
  ).length;
  const progressPercentage = Math.round((completedTopics / course.topics.length) * 100);

  completedStat.textContent = `${completedTopics} of ${course.topics.length} completed`;
  progressStat.textContent = `${progressPercentage}% progress`;

  // Only render table if it's empty (initial load) or if it needs a complete refresh
  if (tableBody.children.length === 0) {
    renderTopicTable();
  } else {
    // Just update the completion stats without re-rendering
    updateTopicCompletionDisplay();
  }
  
  detailView.style.display = 'block';
}

function renderTopicTable() {
  const tableBody = document.getElementById('topic-table-body');
  const course = appState.selectedCourse;
  
  tableBody.innerHTML = '';
  course.topics.forEach((topic, index) => {
    const completed = isTopicCompleted(course.id, topic.id);
    
    const row = document.createElement('tr');
    row.id = `topic-${topic.id}`;
    row.style.animationDelay = `${index * 0.1}s`;
    
    row.innerHTML = `
      <td>
        <div class="topic-name-cell">
          <div class="topic-status-dot ${completed ? 'completed' : ''}"></div>
          <span class="topic-name">${topic.name}</span>
          ${completed ? '<div class="topic-badge">🎉 Done</div>' : ''}
        </div>
      </td>
      <td>
        <button class="btn btn-primary" onclick="openVideoModal('${topic.videoId}', '${topic.name}', '${course.name}')">
          <i class="fas fa-play"></i>
          Watch Video
        </button>
      </td>
      <td>
        <a href="${topic.documentation}" target="_blank" class="btn-link">
          <i class="fas fa-external-link-alt"></i>
          View Docs
        </a>
      </td>
      <td>
        <button class="btn btn-outline" onclick="openQuizModal('${topic.id}')">
          <i class="fas fa-question-circle"></i>
          Take Quiz
        </button>
      </td>
      <td>
        <div class="progress-checkbox">
          <input type="checkbox" class="checkbox" ${completed ? 'checked' : ''} 
                 onchange="toggleTopicCompletion('${course.id}', '${topic.id}')"
                 data-topic-id="${topic.id}">
          <span class="progress-status ${completed ? 'completed' : 'Mark As Completed'}">
            ${completed ? '🎉 Completed' : 'Mark As Completed'}
          </span>
        </div>
      </td>
    `;
    
    tableBody.appendChild(row);
  });
}

function updateTopicCompletionDisplay() {
  const course = appState.selectedCourse;
  if (!course) return;
  
  course.topics.forEach(topic => {
    const row = document.getElementById(`topic-${topic.id}`);
    if (!row) return;
    
    const completed = isTopicCompleted(course.id, topic.id);
    const statusDot = row.querySelector('.topic-status-dot');
    const topicBadge = row.querySelector('.topic-badge');
    const checkbox = row.querySelector('.checkbox');
    const progressStatus = row.querySelector('.progress-status');
    
    // Update status dot
    if (completed) {
      statusDot.classList.add('completed');
    } else {
      statusDot.classList.remove('completed');
    }
    
    // Update topic badge
    if (completed && !topicBadge) {
      const badge = document.createElement('div');
      badge.className = 'topic-badge';
      badge.textContent = '🎉 Done';
      row.querySelector('.topic-name-cell').appendChild(badge);
    } else if (!completed && topicBadge) {
      topicBadge.remove();
    }
    
    // Update checkbox
    checkbox.checked = completed;
    
    // Update progress status
    if (completed) {
      progressStatus.className = 'progress-status completed';
      progressStatus.textContent = '🎉 Completed';
    } else {
      progressStatus.className = 'progress-status not-started';
      progressStatus.textContent = 'Mark As Completed';
    }
  });
}

// Navigation functions
function selectCourse(courseId) {
  document.getElementById("sidebar").style.display = "block"; 
  const course = courses.find(c => c.id === courseId);
  if (course) {
    appState.selectedCourse = course;
    
    document.getElementById('dashboard').style.display = 'none';
    renderSidebar();
    renderTopicDetail();
  }
}

function showDashboard() {
  appState.selectedCourse = null;
  
  document.getElementById("sidebar").style.display = "none";
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('topic-detail').style.display = 'none';
  
  renderSidebar();
}

function scrollToTopic(topicId) {
  const element = document.getElementById(`topic-${topicId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Add highlight effect
    element.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))';
    setTimeout(() => {
      element.style.background = '';
    }, 2000);
  }
}

function toggleTopicCompletion(courseId, topicId) {
  if (!appState.userProgress[courseId]) {
    appState.userProgress[courseId] = {};
  }
  
  const wasCompleted = appState.userProgress[courseId][topicId];
  appState.userProgress[courseId][topicId] = !wasCompleted;
  
  saveProgress(appState.userProgress);
  
  // Trigger celebration if topic was just completed
  if (!wasCompleted && appState.userProgress[courseId][topicId]) {
    const topic = appState.selectedCourse?.topics.find(t => t.id === topicId);
    if (topic) {
      triggerCelebration(topic.name);
    }
  }
  
  // Update displays efficiently without full re-render
  renderCourseGrid();
  renderSidebar();
  
  // Update only the completion display in the table
  updateTopicCompletionDisplay();
  
  // Update the stats
  const completedTopics = appState.selectedCourse.topics.filter(topic => 
    isTopicCompleted(courseId, topic.id)
  ).length;
  const progressPercentage = Math.round((completedTopics / appState.selectedCourse.topics.length) * 100);
  
  document.getElementById('completed-stat').textContent = `${completedTopics} of ${appState.selectedCourse.topics.length} completed`;
  document.getElementById('progress-stat').textContent = `${progressPercentage}% progress`;
}

function triggerCelebration(topicName) {
  // Show confetti
  createConfetti();
  
  // Show toast notification
  const randomMessage = celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)];
  showToast(randomMessage, `"${topicName}" has been marked as completed!`);
}

// Modal functions
function openVideoModal(videoId, title, courseName) {
  // Redirect to video gallery with course parameter
  window.location.href = `video_suggestions.html?course=${encodeURIComponent(courseName)}&topic=${encodeURIComponent(title)}`;
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  
  iframe.src = '';
  modal.classList.remove('active');
  
  // Restore body scroll
  document.body.style.overflow = '';
}

function openQuizModal(topicId) {
  const topic = appState.selectedCourse.topics.find(t => t.id === topicId);
  if (!topic) return;
  
  appState.currentQuiz = topic;
  appState.quizAnswers = {};
  appState.quizSubmitted = false;
  
  const modal = document.getElementById('quiz-modal');
  const title = document.getElementById('quiz-title');
  const content = document.getElementById('quiz-content');
  
  title.textContent = `${topic.name} - Quiz`;
  content.innerHTML = '';
  
  topic.quiz.forEach((question, questionIndex) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    
    questionDiv.innerHTML = `
      <h4 class="question-title">${questionIndex + 1}. ${question.question}</h4>
      <div class="quiz-options">
        ${question.options.map((option, optionIndex) => `
          <label class="quiz-option" onclick="selectQuizAnswer(${questionIndex}, ${optionIndex})">
            <input type="radio" name="question-${questionIndex}" value="${optionIndex}">
            <span>${option}</span>
          </label>
        `).join('')}
      </div>
    `;
    
    content.appendChild(questionDiv);
  });
  
  document.getElementById('submit-quiz-btn').style.display = 'inline-flex';
  document.getElementById('quiz-close-btn').textContent = 'Cancel';
  modal.classList.add('active');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

function selectQuizAnswer(questionIndex, optionIndex) {
  if (appState.quizSubmitted) return;
  
  appState.quizAnswers[questionIndex] = optionIndex;
  
  // Update UI
  const options = document.querySelectorAll(`input[name="question-${questionIndex}"]`);
  options.forEach((option, index) => {
    const label = option.parentElement;
    label.classList.remove('selected');
    if (index === optionIndex) {
      option.checked = true;
      label.classList.add('selected');
    }
  });
}

function submitQuiz() {
  if (!appState.currentQuiz) return;
  
  appState.quizSubmitted = true;
  const quiz = appState.currentQuiz.quiz;
  let score = 0;
  
  quiz.forEach((question, questionIndex) => {
    const userAnswer = appState.quizAnswers[questionIndex];
    const correctAnswer = question.correct;
    
    if (userAnswer === correctAnswer) {
      score++;
    }
    
    // Update UI to show results
    const options = document.querySelectorAll(`input[name="question-${questionIndex}"]`);
    options.forEach((option, optionIndex) => {
      const label = option.parentElement;
      option.disabled = true;
      
      if (optionIndex === correctAnswer) {
        label.classList.add('correct');
        const icon = document.createElement('i');
        icon.className = 'fas fa-check';
        icon.style.color = '#22c55e';
        icon.style.marginLeft = 'auto';
        label.appendChild(icon);
      } else if (optionIndex === userAnswer && userAnswer !== correctAnswer) {
        label.classList.add('incorrect');
        const icon = document.createElement('i');
        icon.className = 'fas fa-times';
        icon.style.color = '#ef4444';
        icon.style.marginLeft = 'auto';
        label.appendChild(icon);
      }
    });
  });
  
  const percentage = Math.round((score / quiz.length) * 100);
  
  // Show results with a delay for better UX
  setTimeout(() => {
    if (percentage >= 70) {
      showToast(
        '🎉 Great job!', 
        `You scored ${score} out of ${quiz.length} (${percentage}%). Excellent work!`,
        'success'
      );
      if (percentage === 100) {
        createConfetti();
      }
    } else {
      showToast(
        '📚 Keep learning!', 
        `You scored ${score} out of ${quiz.length} (${percentage}%). Review the material and try again!`,
        'info'
      );
    }
  }, 1000);
  
  document.getElementById('submit-quiz-btn').style.display = 'none';
  document.getElementById('quiz-close-btn').textContent = 'Close';
}

function closeQuizModal() {
  const modal = document.getElementById('quiz-modal');
  modal.classList.remove('active');
  appState.currentQuiz = null;
  appState.quizAnswers = {};
  appState.quizSubmitted = false;
  
  // Restore body scroll
  document.body.style.overflow = '';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    if (e.target.closest('#video-modal')) {
      closeVideoModal();
    } else if (e.target.closest('#quiz-modal')) {
      closeQuizModal();
    }
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.getElementById('video-modal').classList.contains('active')) {
      closeVideoModal();
    } else if (document.getElementById('quiz-modal').classList.contains('active')) {
      closeQuizModal();
    }
  }
});

// Initialize the application
function init() {
  // Load progress from localStorage
  appState.userProgress = loadProgress();
  
  // Render initial state
  renderCourseGrid();
  renderSidebar();
  
  // Add smooth scrolling to page
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Add loading animation
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '1';
  }, 100);
  
  console.log('Cloud Odyssey LMS initialized successfully! 🚀');
}

// Progressive enhancement - add additional animations after load
window.addEventListener('load', () => {
  // Add intersection observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  });
  
  // Observe course cards for scroll animations
  document.querySelectorAll('.course-card').forEach(card => {
    observer.observe(card);
  });
});

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
