/**
 * ============================================================================
 * VISHAL PATIDAR - PERSONAL PORTFOLIO JAVASCRIPT
 * Modern, Vanilla JavaScript (ES6+) with Zero Framework Dependencies
 * Target: Ultra-fast performance, accessibility, and high Lighthouse score
 * Updated according to Vishal Patidar's Official Resume
 * ============================================================================
 */

"use strict";

/* ============================================================================
   1. PROJECTS DATA ARRAY (MATCHING OFFICIAL RESUME)
   ============================================================================ */
const PROJECTS_DATA = [
  {
    id: "project-1",
    slug: "atm-management-system",
    title: "ATM Management System using Java",
    category: "core-java",
    categoryLabel: "Core Java & OOP",
    description:
      "A console-based ATM simulation application developed using Java that replicates real-world ATM banking operations with high reliability and secure PIN verification. Engineered with modular Object-Oriented Programming (OOP) principles for clean architecture and maintainability.",
    highlights: [
      "Simulates real-world ATM operations: balance inquiry, cash withdrawal, deposit functionality, and secure PIN verification.",
      "Applied core Object-Oriented Programming (OOP) principles (Encapsulation, Abstraction, Polymorphism) to ensure modular and maintainable code.",
      "Engineered comprehensive balance constraints, input validation rules, and transaction feedback handling.",
      "Implemented a clean in-memory account ledger with security guardrails against invalid authentication attempts."
    ],
    techStack: ["Core Java", "OOP Principles", "PIN Authentication", "Data Structures", "Console UI"],
    githubUrl: "https://github.com/Vishal6377Patel/ATM-Project.git",
    liveUrl: null,
    isFeatured: true,
    bannerIcon: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><circle cx="6" cy="15" r="1.5"/><circle cx="10" cy="15" r="1.5"/><circle cx="14" cy="15" r="1.5"/></svg>`
  },
  {
    id: "project-2",
    slug: "hospital-management-system",
    title: "Hospital Management System using Java",
    category: "gui-swing",
    categoryLabel: "Java & Swing GUI",
    description:
      "A desktop GUI-based Hospital Management System engineered using Core Java and Swing to streamline hospital administration. Manages patient, doctor, and receptionist records through an interactive, user-friendly graphical interface with built-in data validation.",
    highlights: [
      "Developed a complete GUI-based management system using Core Java and Swing to coordinate patient, doctor, and receptionist records.",
      "Implemented comprehensive CRUD (Create, Read, Update, Delete) operations for seamless medical record handling.",
      "Integrated robust input validations and error dialogs to prevent data inconsistency and ensure smooth hospital workflow management.",
      "Designed an intuitive Swing desktop UI with categorized panels, tables, and responsive button listeners."
    ],
    techStack: ["Core Java", "Java Swing (GUI)", "CRUD Operations", "Input Validation", "Event Handling"],
    githubUrl: "https://github.com/Vishal6377Patel/Hospital.git",
    liveUrl: null,
    isFeatured: true,
    bannerIcon: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/><circle cx="12" cy="12" r="10"/></svg>`
  },
  {
    id: "project-3",
    slug: "java-web-application",
    title: "Java Web Application (Servlet & Hibernate)",
    category: "web-orm",
    categoryLabel: "Servlet & Hibernate",
    description:
      "A robust enterprise web application architecture utilizing Java Servlets for backend request dispatching and Hibernate ORM for object-relational database persistence with MySQL. Follows MVC design principles for clean modular separation.",
    highlights: [
      "Designed server-side request routing and session control using Java Servlets.",
      "Integrated Hibernate ORM to map Java entities to relational database tables, eliminating boilerplate SQL queries.",
      "Implemented structured exception handling, database transaction boundaries, and reusable DAO layers.",
      "Configured Apache Tomcat deployment descriptor and connection pooling for optimal database throughput."
    ],
    techStack: ["Java", "Servlet", "Hibernate ORM", "MySQL", "Apache Tomcat", "MVC"],
    githubUrl: "https://github.com/Vishal6377Patel/NoteTaker.git",
    liveUrl: null,
    isFeatured: true,
    bannerIcon: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`
  }
];

/* ============================================================================
   2. DOM READY & INITIALIZATION
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initTypewriter();
  initScrollProgress();
  initStickyNavbar();
  initScrollSpy();
  initMobileMenu();
  initProjects(PROJECTS_DATA);
  initProjectModal(PROJECTS_DATA);
  initImageLightbox();
  initContactForm();
  initCallButtons();
  initBackToTop();
  initScrollReveal();
  initAvatarFallback();
  initDynamicYear();
});

/* ============================================================================
   3. THEME TOGGLE (LIGHT NAVY & OFF-WHITE DEFAULT)
   Default: Light Navy Theme. Toggle switches to Dark Theme. Saved in localStorage.
   ============================================================================ */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (!themeToggleBtn) return;

  // Retrieve existing preference or default to 'light' (modern navy & off-white)
  const savedTheme = localStorage.getItem("vp-theme") || "light";
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("vp-theme", newTheme);
  });
}

function applyTheme(theme) {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-label", "Switch to light theme");
      toggleBtn.setAttribute("title", "Switch to light theme");
    }
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-label", "Switch to dark theme");
      toggleBtn.setAttribute("title", "Switch to dark theme");
    }
  }
}

/* ============================================================================
   4. HERO TYPEWRITER ANIMATION (MATCHING OFFICIAL RESUME)
   ============================================================================ */
function initTypewriter() {
  const targetElement = document.getElementById("typewriter-text");
  if (!targetElement) return;

  const words = [
    "Java Developer Intern",
    "Software Development Engineer",
    "Backend Enthusiast",
    "Problem Solver (70+ LeetCode)",
    "Servlet & Hibernate Developer"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseBetweenWords = 1800;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
      targetElement.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      targetElement.textContent = currentWord.substring(0, charIndex);
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    // Word completed
    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400; // brief pause before typing next word
    }

    setTimeout(type, delay);
  }

  // Start typing
  setTimeout(type, 500);
}

/* ============================================================================
   5. STICKY NAVBAR & SCROLL PROGRESS BAR
   ============================================================================ */
function initStickyNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress-bar");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

/* ============================================================================
   6. SCROLLSPY (ACTIVE NAV LINK HIGHLIGHTING)
   ============================================================================ */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
}

/* ============================================================================
   7. MOBILE HAMBURGER MENU & DRAWER
   ============================================================================ */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerBackdrop = document.getElementById("drawer-backdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!hamburgerBtn || !mobileDrawer || !drawerBackdrop) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains("open");
    if (isOpen) {
      mobileDrawer.classList.add("open");
      drawerBackdrop.classList.add("open");
      hamburgerBtn.classList.add("open");
      hamburgerBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    } else {
      mobileDrawer.classList.remove("open");
      drawerBackdrop.classList.remove("open");
      hamburgerBtn.classList.remove("open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  };

  hamburgerBtn.addEventListener("click", () => toggleMenu());
  drawerBackdrop.addEventListener("click", () => toggleMenu(false));

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
      toggleMenu(false);
    }
  });
}

/* ============================================================================
   8. DYNAMIC PROJECTS RENDERING & FILTERING
   ============================================================================ */
function initProjects(projects) {
  const container = document.getElementById("projects-container");
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (!container) return;

  function renderProjects(filterCategory = "all") {
    container.innerHTML = "";

    const filtered = filterCategory === "all"
      ? projects
      : projects.filter((p) => p.category === filterCategory);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: var(--text-muted);">
          <p>No projects found in this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((project, index) => {
      const card = document.createElement("article");
      card.className = "project-card reveal";
      card.style.transitionDelay = `${index * 0.1}s`;

      const tagsHtml = project.techStack
        .map((tag) => `<span class="tech-tag">${tag}</span>`)
        .join("");

      const highlightsHtml = project.highlights && project.highlights.length > 0
        ? `<ul style="margin-bottom: 18px; padding-left: 18px; font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; list-style-type: disc;">
            ${project.highlights.map(h => `<li style="margin-bottom: 6px;">${h}</li>`).join("")}
          </ul>`
        : "";

      card.innerHTML = `
        <div class="project-card-header">
          <span class="project-category-badge">${project.categoryLabel}</span>
          <div class="project-card-header-actions">
            <!-- Requirement 5: Dedicated Project Link Icon -->
            <button class="project-detail-icon-btn" data-project-id="${project.id}" aria-label="View dedicated details for ${project.title}" title="View Project Details (${project.title})">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </button>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-github-icon" aria-label="View source code on GitHub" title="View Source on GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="project-card-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          ${highlightsHtml}
          <div class="project-tech-stack" aria-label="Technologies used">
            ${tagsHtml}
          </div>
          <div class="project-card-footer">
            <button class="btn-project-link btn-project-detail-action" data-project-id="${project.id}" aria-label="Open detailed view for ${project.title}">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <span>View Details</span>
            </button>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-project-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>GitHub Code</span>
            </a>
            ${
              project.liveUrl
                ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-project-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span>View Demo</span>
                   </a>`
                : ""
            }
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    // Re-trigger scroll reveal for newly injected cards
    requestAnimationFrame(() => {
      container.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("active");
      });
    });
  }

  // Initial render
  renderProjects("all");

  // Filter button click handlers
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter") || "all";
      renderProjects(category);
    });
  });
}

/* ============================================================================
   8B. DEDICATED PROJECT DETAIL MODAL (REQUIREMENT 5)
   Opens a focused modal for the chosen project with URL slug & complete details
   ============================================================================ */
function initProjectModal(projects) {
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("project-modal-content");
  if (!modal || !modalContent) return;

  function openProject(projectId) {
    const project = projects.find(
      (p) => p.id === projectId || p.slug === projectId
    );
    if (!project) return;

    const highlightsList = project.highlights && project.highlights.length > 0
      ? `<ul class="project-modal-highlights">
          ${project.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>`
      : "";

    const tagsHtml = project.techStack
      .map((t) => `<span class="tech-tag">${t}</span>`)
      .join("");

    modalContent.innerHTML = `
      <button class="project-modal-close" id="project-modal-close-btn" aria-label="Close project modal (Esc)" title="Close (Esc)">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div class="project-modal-header">
        <span class="project-modal-badge">${project.categoryLabel}</span>
        <h2 class="project-modal-title">${project.title}</h2>
      </div>

      <div class="project-modal-banner" aria-hidden="true">
        <div class="project-modal-banner-icon">
          ${project.bannerIcon || ''}
        </div>
      </div>

      <p class="project-modal-desc">${project.description}</p>

      <div class="project-modal-section">
        <h3 class="project-modal-section-title">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Key Technical Highlights &amp; Architecture
        </h3>
        ${highlightsList}
      </div>

      <div class="project-modal-section">
        <h3 class="project-modal-section-title">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          Technologies &amp; Tools Used
        </h3>
        <div class="project-modal-tech">
          ${tagsHtml}
        </div>
      </div>

      <div class="project-modal-footer">
        <button class="btn btn-secondary" id="project-modal-back-btn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Projects</span>
        </button>

        <div class="project-modal-actions">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>GitHub Repository</span>
          </a>
          ${
            project.liveUrl
              ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>Live Demo</span>
                 </a>`
              : ""
          }
        </div>
      </div>
    `;

    modal.style.display = "flex";
    requestAnimationFrame(() => {
      modal.classList.add("active");
      document.body.classList.add("project-modal-open");
    });

    // Update URL hash
    try {
      history.pushState(null, "", `#${project.slug || project.id}`);
    } catch (_) {}

    // Hook modal internal buttons
    document.getElementById("project-modal-close-btn")?.addEventListener("click", closeProject);
    document.getElementById("project-modal-back-btn")?.addEventListener("click", closeProject);
  }

  function closeProject() {
    modal.classList.remove("active");
    document.body.classList.remove("project-modal-open");
    setTimeout(() => {
      modal.style.display = "none";
      modalContent.innerHTML = "";
    }, 250);

    // Reset URL hash back to projects without scrolling jump
    try {
      if (window.location.hash.includes("project")) {
        history.pushState(null, "", "#projects");
      }
    } catch (_) {}
  }

  // Delegate click for project detail buttons (works with filtered re-renders)
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".project-detail-icon-btn, .btn-project-detail-action");
    if (btn) {
      e.preventDefault();
      const pId = btn.getAttribute("data-project-id");
      if (pId) openProject(pId);
    }
  });

  // Close on backdrop click (outside dialog)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProject();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProject();
    }
  });

  // Check URL hash on page load
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const match = projects.find((p) => p.id === hash || p.slug === hash);
    if (match) {
      setTimeout(() => openProject(match.id), 300);
    }
  }

  // Handle browser back/forward buttons
  window.addEventListener("hashchange", () => {
    const currentHash = window.location.hash.replace("#", "");
    if (!currentHash) {
      if (modal.classList.contains("active")) closeProject();
      return;
    }
    const match = projects.find((p) => p.id === currentHash || p.slug === currentHash);
    if (match) {
      openProject(match.id);
    } else if (modal.classList.contains("active")) {
      closeProject();
    }
  });
}

/* ============================================================================
   8C. FULL-SCREEN IMAGE PREVIEW LIGHTBOX (REQUIREMENT 1)
   Displays ONLY the full image with zero text/distractions on dark overlay
   ============================================================================ */
function initImageLightbox() {
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close-btn");
  if (!lightbox || !lightboxImg) return;

  function openLightbox(imgSrc, imgAlt = "Full-screen preview") {
    if (!imgSrc) return;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = imgAlt;
    lightbox.style.display = "flex";
    requestAnimationFrame(() => {
      lightbox.classList.add("active");
      document.body.classList.add("lightbox-open");
    });
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.classList.remove("lightbox-open");
    setTimeout(() => {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }, 250);
  }

  // Event Delegation for clickable images across the entire website
  document.addEventListener("click", (e) => {
    // 1. Check data-lightbox attribute or .lightbox-clickable / .lightbox-trigger
    const trigger = e.target.closest("[data-lightbox='true'], .lightbox-clickable, .lightbox-trigger");
    if (trigger) {
      e.preventDefault();
      let src = trigger.getAttribute("data-lightbox-src");
      let alt = trigger.getAttribute("alt") || trigger.getAttribute("title");

      if (!src && trigger.tagName === "IMG") {
        src = trigger.currentSrc || trigger.src;
      } else if (!src && trigger.tagName === "A") {
        src = trigger.getAttribute("href");
      }

      if (src) {
        openLightbox(src, alt);
      }
      return;
    }

    // 2. Direct click on avatar image
    if (e.target.id === "hero-avatar-img") {
      e.preventDefault();
      openLightbox(e.target.currentSrc || e.target.src, e.target.alt);
      return;
    }
  });

  // Close handlers
  closeBtn?.addEventListener("click", closeLightbox);

  // Click on background overlay closes lightbox
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-content")) {
      closeLightbox();
    }
  });

  // Escape key closes lightbox
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}

/* ============================================================================
   9. CONTACT FORM WITH REAL-TIME VALIDATION & FORMSPREE SUBMISSION
   ============================================================================ */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");
  const statusBox = document.getElementById("form-status-message");
  const submitBtn = form.querySelector("button[type='submit']");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (input, isValid, errorText) => {
    const errorEl = input.parentElement.querySelector(".error-message");
    if (!isValid) {
      input.classList.add("error");
      if (errorEl) {
        errorEl.textContent = errorText;
        errorEl.classList.add("visible");
      }
      return false;
    } else {
      input.classList.remove("error");
      if (errorEl) {
        errorEl.classList.remove("visible");
      }
      return true;
    }
  };

  // Real-time blur validation
  nameInput?.addEventListener("blur", () => {
    validateField(nameInput, nameInput.value.trim().length >= 2, "Please enter your name (at least 2 characters).");
  });

  emailInput?.addEventListener("blur", () => {
    validateField(emailInput, emailRegex.test(emailInput.value.trim()), "Please enter a valid email address.");
  });

  subjectInput?.addEventListener("blur", () => {
    validateField(subjectInput, subjectInput.value.trim().length >= 3, "Please enter a subject (at least 3 characters).");
  });

  messageInput?.addEventListener("blur", () => {
    validateField(messageInput, messageInput.value.trim().length >= 10, "Please enter a detailed message (at least 10 characters).");
  });

  // Clear errors on input
  [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
    input?.addEventListener("input", () => {
      if (input.classList.contains("error")) {
        input.classList.remove("error");
        const errorEl = input.parentElement.querySelector(".error-message");
        if (errorEl) errorEl.classList.remove("visible");
      }
    });
  });

  // Handle Form Submission directly to Vishal's Gmail via FormSubmit
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2, "Please enter your name (at least 2 characters).");
    const isEmailValid = validateField(emailInput, emailRegex.test(emailInput.value.trim()), "Please enter a valid email address.");
    const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length >= 3, "Please enter a subject (at least 3 characters).");
    const isMsgValid = validateField(messageInput, messageInput.value.trim().length >= 10, "Please enter a detailed message (at least 10 characters).");

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMsgValid) {
      return;
    }

    // Set submitting state
    submitBtn?.classList.add("submitting");
    if (submitBtn) submitBtn.disabled = true;
    if (statusBox) {
      statusBox.className = "form-status";
      statusBox.textContent = "";
      statusBox.style.display = "none";
    }

    // Web3Forms payload with Vishal's connected access key
    const payload = {
      access_key: "0441d6b4-c4e6-4611-a901-023b29bc2ad3",
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
      from_name: `${nameInput.value.trim()} (Portfolio Inquiry)`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.success === true || result.success === "true")) {
        if (statusBox) {
          statusBox.className = "form-status success";
          statusBox.innerHTML = `
            <strong>Thank you, ${nameInput.value.trim()}!</strong> Your message has been sent directly to Vishal's Gmail inbox. You will receive a response shortly.
          `;
          statusBox.style.display = "block";
        }
        form.reset();
      } else {
        throw new Error(result.message || "Failed to deliver message via Web3Forms gateway");
      }
    } catch (err) {
      console.warn("Web3Forms submission error, offering direct mailto fallback:", err);
      const mailtoUrl = `mailto:vishlpatidar025@gmail.com?subject=${encodeURIComponent(
        `Portfolio Message: ${payload.subject}`
      )}&body=${encodeURIComponent(
        `Hi Vishal,\n\n${payload.message}\n\nFrom: ${payload.name}\nEmail: ${payload.email}`
      )}`;

      if (statusBox) {
        statusBox.className = "form-status error";
        statusBox.innerHTML = `
          <strong>Notice:</strong> Direct email gateway was not reachable from this network. 
          <br>
          <a href="${mailtoUrl}" class="btn btn-primary btn-sm" style="margin-top: 10px; display: inline-flex;">
            Click here to send directly via Gmail / Email App
          </a>
        `;
        statusBox.style.display = "block";
      }
    } finally {
      submitBtn?.classList.remove("submitting");
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

/* ============================================================================
   10. PROFILE AVATAR FALLBACK HANDLER
   ============================================================================ */
function initAvatarFallback() {
  const avatarImg = document.getElementById("hero-avatar-img");
  const avatarFallback = document.getElementById("hero-avatar-fallback");

  if (!avatarImg || !avatarFallback) return;

  const triggerFallback = () => {
    // If my.png.png fails, try vishal.jpg first
    if (!avatarImg.src.includes("vishal.jpg")) {
      avatarImg.src = "assets/images/vishal.jpg";
    } else {
      avatarImg.style.display = "none";
      avatarFallback.style.display = "flex";
    }
  };

  avatarImg.addEventListener("error", triggerFallback);

  if (avatarImg.complete && avatarImg.naturalWidth === 0) {
    triggerFallback();
  }
}

/* ============================================================================
   11. BACK-TO-TOP BUTTON
   ============================================================================ */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ============================================================================
   12. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ============================================================================ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => observer.observe(el));
}

/* ============================================================================
   13. DYNAMIC FOOTER YEAR
   ============================================================================ */
function initDynamicYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* ============================================================================
   14. CLICK-TO-CALL & WHATSAPP INTERACTION HELPER
   Ensures seamless dialing and logging for call buttons across mobile and desktop
   ============================================================================ */
function initCallButtons() {
  const callButtons = document.querySelectorAll('a[href^="tel:"]');
  callButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Natural OS dialer triggers via tel:+916377826445
      console.log("Dialing +91 6377826445");
    });
  });
}
