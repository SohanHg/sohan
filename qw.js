// State variables
let activeSection = 'home';
let isMenuOpen = false;
let isScrolled = false;

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  initializePortfolio();
});

function initializePortfolio() {
  // Handle scroll events
  window.addEventListener('scroll', handleScroll);
  
  // Setup navigation buttons
  setupNavigation();
  
  // Setup mobile menu
  setupMobileMenu();
  
  // Setup scroll indicator
  setupScrollIndicator();
  
  // Setup hero buttons
  setupHeroButtons();
}

function handleScroll() {
  isScrolled = window.scrollY > 50;
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (isScrolled) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
}

function scrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(elementId);
    setMenuOpen(false);
  }
}

function setActiveSection(sectionId) {
  activeSection = sectionId;
  updateActiveNavButton();
}

function updateActiveNavButton() {
  const navButtons = document.querySelectorAll('.nav-menu button');
  navButtons.forEach(button => {
    button.classList.remove('active');
    if (button.getAttribute('data-section') === activeSection) {
      button.classList.add('active');
    }
  });
}

function setMenuOpen(open) {
  isMenuOpen = open;
  const navMenu = document.querySelector('.nav-menu');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  
  if (navMenu) {
    if (isMenuOpen) {
      navMenu.classList.add('active');
    } else {
      navMenu.classList.remove('active');
    }
  }
  
  if (mobileBtn) {
    const icon = mobileBtn.querySelector('svg');
    if (icon) {
      // Toggle between menu and X icon (you'd need to implement icon switching)
      icon.innerHTML = isMenuOpen ? '×' : '☰';
    }
  }
}

function setupNavigation() {
  const navButtons = document.querySelectorAll('.nav-menu button');
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const section = this.getAttribute('data-section');
      if (section) {
        scrollTo(section);
      }
    });
  });
}

function setupMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      setMenuOpen(!isMenuOpen);
    });
  }
}

function setupScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      scrollTo('about');
    });
  }
}

function setupHeroButtons() {
  const viewWorkBtn = document.querySelector('.btn-primary');
  const contactBtn = document.querySelector('.btn-secondary');
  
  if (viewWorkBtn) {
    viewWorkBtn.addEventListener('click', function() {
      scrollTo('projects');
    });
  }
  
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      scrollTo('contact');
    });
  }
}

// Data arrays
const skills = [
  { category: 'Languages', items: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'PHP'] },
  { category: 'Frameworks & Libraries', items: ['React', 'Firebase', 'Node.js'] },
  { category: 'Tools & Platforms', items: ['Git', 'XAMPP', 'MySQL', 'VS Code'] }
];

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Built a full-featured e-commerce platform using React, Node.js, and MongoDB featuring product browsing, user authentication, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: ['Product Listings', 'Cart System', 'User Login', 'Payment Integration']
  },
  {
    title: 'Task Management App',
    description: 'Created a task management tool with drag-and-drop support, allowing users to track daily progress and team collaboration.',
    tech: ['React', 'Firebase', 'Material UI'],
    features: ['Task Categories', 'Drag-and-Drop', 'Realtime Updates']
  },
  {
    title: 'KED Online Portal',
    description: 'Developed a web portal for college departments using the XAMPP stack. The system manages internal documentation and notices.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'XAMPP'],
    features: ['Admin Panel', 'CRUD Operations', 'Document Uploads']
  }
];

// Function to dynamically generate skills HTML (if needed)
function generateSkillsHTML() {
  return skills.map(skillGroup => `
    <div class="skill-group">
      <h4>${skillGroup.category}</h4>
      <div class="skill-tags">
        ${skillGroup.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Function to dynamically generate projects HTML (if needed)
function generateProjectsHTML() {
  return projects.map(project => `
    <div class="project-card">
      <div class="project-header">
        <h3>${project.title}</h3>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m7 7 10 10-5 0 0-5"/>
          <path d="m13 3 4 4L7 17l-4-4L13 3z"/>
        </svg>
      </div>
      <p>${project.description}</p>
      <div class="project-features">
        <h4>Key Features:</h4>
        <ul>
          ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      <div class="tech-stack">
        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Cleanup function
function cleanup() {
  window.removeEventListener('scroll', handleScroll);
}
