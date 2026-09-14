// ==========================================================================
// PORTFOLIO CLIENT APPLICATION LOGIC
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initProfileData();
  initTypewriter();
  initAchievements();
  initCertificates();
  initStatsCounter();
  initSkillsMarquee();
  initProjectsAndModal();
  initContactForm();
  initScrollSpyAndNav();
});

// Helper for Social SVG Icons
function getSocialSvg(iconName) {
  switch (iconName) {
    case "github":
      return `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
    case "linkedin":
      return `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
    case "instagram":
      return `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;
    case "mail":
    default:
      return `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
  }
}

// --------------------------------------------------------------------------
// 1. POPULATE PROFILE & BIO DATA
// --------------------------------------------------------------------------
function initProfileData() {
  const { personal, stats, specializations, education } = PORTFOLIO_DATA;

  // Header & Hero
  document.getElementById("brand-badge").textContent = personal.initials;
  document.getElementById("availability-text").textContent = personal.availability;
  document.getElementById("hero-first-name").textContent = personal.headlineNameFirst;
  document.getElementById("hero-last-name").textContent = personal.headlineNameSecond;
  document.getElementById("hero-tagline-text").textContent = personal.tagline;

  // Contact Section: Redirection Tabs (Email, GitHub, LinkedIn, Instagram, Resume)
  const contactTabsContainer = document.getElementById("contact-redirection-tabs");
  if (contactTabsContainer && personal.contactTabs) {
    contactTabsContainer.innerHTML = personal.contactTabs.map(tab => `
      <a href="${tab.url}" ${tab.isExternal ? 'target="_blank" rel="noopener"' : ''} class="redirection-tab-btn" aria-label="${tab.type}">
        <div class="tab-left-content">
          <div class="tab-icon-box">${tab.icon}</div>
          <div>
            <div class="tab-type-label">${tab.type}</div>
            <div class="tab-target-val">${tab.label}</div>
          </div>
        </div>
        <div class="tab-arrow-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </div>
      </a>
    `).join("");
  }

  document.getElementById("footer-credits").textContent = `Designed & Built for ${personal.name} · © ${new Date().getFullYear()}`;

  // About Section Narrative
  const aboutNarrative = document.getElementById("about-narrative-content");
  let bioHtml = `<p class="about-lead">${personal.bioShort}</p>`;
  personal.bioExtended.forEach(paragraph => {
    bioHtml += `<p class="about-paragraph">${paragraph}</p>`;
  });
  aboutNarrative.innerHTML = bioHtml;

  // Stats Grid
  const statsContainer = document.getElementById("stats-grid-container");
  statsContainer.innerHTML = stats.map(stat => `
    <div class="stat-card">
      <div class="stat-number-wrapper">
        <span class="stat-number" data-target="${stat.value}">0</span>
        <span class="stat-suffix">${stat.suffix}</span>
      </div>
      <div class="stat-label">${stat.label}</div>
      <div class="stat-desc">${stat.desc}</div>
    </div>
  `).join("");

  // Skills Categories Grid
  const skillsContainer = document.getElementById("skills-categories-container");
  skillsContainer.innerHTML = PORTFOLIO_DATA.skillsCategories.map(cat => `
    <div class="skill-category-card">
      <div class="skill-cat-header">
        <h3 class="skill-cat-title">${cat.category}</h3>
        <span class="skill-cat-count">${cat.skills.length}</span>
      </div>
      <div class="skill-pill-list">
        ${cat.skills.map(skill => `
          <div class="skill-pill">
            <span class="skill-icon">${skill.icon}</span>
            <span>${skill.name}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  // Specializations & Core Strengths
  const specContainer = document.getElementById("specializations-timeline-items");
  if (specContainer && specializations) {
    specContainer.innerHTML = specializations.map(spec => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${spec.title}</h3>
            <span class="timeline-badge">${spec.badge}</span>
          </div>
          <div class="timeline-company">
            <span>${spec.subtitle}</span>
          </div>
          <ul class="timeline-bullets">
            ${spec.bullets.map(b => `<li>${b}</li>`).join("")}
          </ul>
          <div class="timeline-tags">
            ${spec.tags.map(t => `<span class="timeline-tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `).join("");
  }

  // Education: Single Diploma in Computer Engineering Card
  const eduContainer = document.getElementById("education-grid-container");
  if (eduContainer && education) {
    eduContainer.innerHTML = education.map(edu => `
      <div class="education-card">
        <div class="edu-top-row">
          <div class="edu-icon-circle">${edu.icon || '📖'}</div>
          <div class="edu-years-badge">${edu.years}</div>
        </div>
        <h3 class="edu-degree">${edu.degree}</h3>
        <div class="edu-institution">${edu.institution}</div>
        <div class="edu-location">${edu.location}</div>
        <div class="edu-score-pills">
          ${edu.scorePills ? edu.scorePills.map(pill => `<span class="edu-score-pill">${pill}</span>`).join("") : ''}
        </div>
        <p class="edu-desc">${edu.description}</p>
      </div>
    `).join("");
  }
}

// --------------------------------------------------------------------------
// 2. ACHIEVEMENTS SECTION
// --------------------------------------------------------------------------
function initAchievements() {
  const achContainer = document.getElementById("achievements-cards-container");
  const explContainer = document.getElementById("currently-exploring-container");
  const achievements = PORTFOLIO_DATA.achievements;

  if (achContainer && achievements) {
    achContainer.innerHTML = achievements.metrics.map(m => `
      <div class="achievement-metric-card">
        <div class="achievement-icon">${m.icon}</div>
        <div class="achievement-number">${m.value}${m.suffix}</div>
        <div class="achievement-title">${m.label}</div>
        <div class="achievement-desc">${m.desc}</div>
      </div>
    `).join("");
  }

  if (explContainer && achievements && achievements.currentlyExploring) {
    const exp = achievements.currentlyExploring;
    explContainer.innerHTML = `
      <div class="exploring-badge">${exp.badge}</div>
      <h3 class="exploring-title">${exp.title}</h3>
      <p class="exploring-desc">${exp.desc}</p>
    `;
  }
}

// --------------------------------------------------------------------------
// 3. CERTIFICATES SECTION (Reordered with direct certificate image links)
// --------------------------------------------------------------------------
function initCertificates() {
  const certsContainer = document.getElementById("certificates-grid-container");
  const certificates = PORTFOLIO_DATA.certificates;

  if (certsContainer && certificates) {
    certsContainer.innerHTML = certificates.map(cert => `
      <article class="certificate-card" data-cert-id="${cert.id}">
        <div>
          <div class="cert-top-row">
            <span class="cert-issuer-badge">
              <span>${cert.icon}</span>
              <span>${cert.issuer}</span>
            </span>
            <span class="cert-date">${cert.issuedDate}</span>
          </div>

          <h3 class="cert-title">${cert.title}</h3>
          <div class="cert-organization">
            <span>${cert.issuer} • ${cert.platform}</span>
            <span style="color: #10b981; font-size: 0.8rem; font-weight: 700;">✓ Verified</span>
          </div>

          <p class="cert-desc">${cert.description}</p>
        </div>

        <div class="cert-footer-meta">
          <div class="cert-action-row">
            <div class="cert-id-tag">${cert.verificationCode}</div>
            <a href="${cert.certImage}" target="_blank" rel="noopener" class="btn-view-cert">
              <span>View Certificate ↗</span>
            </a>
          </div>
          <div class="cert-tags-row">
            ${cert.tags.map(t => `<span class="cert-pill">${t}</span>`).join("")}
          </div>
        </div>
      </article>
    `).join("");
  }
}

// --------------------------------------------------------------------------
// 4. TYPEWRITER EFFECT
// --------------------------------------------------------------------------
function initTypewriter() {
  const target = document.getElementById("typewriter-target");
  const roles = PORTFOLIO_DATA.personal.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 85;
  const deleteSpeed = 40;
  const pauseDuration = 2200;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      target.textContent = currentRole.substring(0, charIndex);
    } else {
      charIndex++;
      target.textContent = currentRole.substring(0, charIndex);
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = pauseDuration;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

// --------------------------------------------------------------------------
// 5. STATS NUMBER COUNTER
// --------------------------------------------------------------------------
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute("data-target"), 10);
          const duration = 1400;
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              stat.textContent = target;
              clearInterval(timer);
            } else {
              stat.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.4 });

  const statsSection = document.getElementById("stats-grid-container");
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// --------------------------------------------------------------------------
// 6. INFINITE SKILLS MARQUEE
// --------------------------------------------------------------------------
function initSkillsMarquee() {
  const track = document.getElementById("marquee-track");
  const skills = PORTFOLIO_DATA.marqueeSkills;

  const htmlItems = skills.map(skill => `
    <div class="marquee-item">
      <span>${skill}</span>
      <span class="marquee-dot"></span>
    </div>
  `).join("");

  track.innerHTML = htmlItems + htmlItems;
}

// --------------------------------------------------------------------------
// 7. PROJECTS LIST & CASE STUDY MODAL
// --------------------------------------------------------------------------
function initProjectsAndModal() {
  const projectsContainer = document.getElementById("projects-list-container");
  const modal = document.getElementById("case-study-modal");
  const closeBtn = document.getElementById("modal-close-button");

  // Render Project Cards (Only KAISER AI & Digital Diary)
  projectsContainer.innerHTML = PORTFOLIO_DATA.projects.map(proj => `
    <article class="project-card" data-project-id="${proj.id}">
      <!-- Left: Mockup Visual -->
      <div class="project-preview-wrap" style="background: ${proj.imageTheme};">
        <div class="project-mockup-screen">
          <div class="screen-topbar">
            <div class="screen-dots">
              <span class="screen-dot"></span>
              <span class="screen-dot"></span>
              <span class="screen-dot"></span>
            </div>
            <div class="screen-url">github.com/ayushbarve9/${proj.id}</div>
          </div>
          <div class="screen-content-canvas">
            <div class="canvas-app-icon">${proj.icon}</div>
            <div class="canvas-app-title">${proj.title}</div>
            <span class="canvas-app-badge">${proj.tags.slice(0, 2).join(" • ")}</span>
          </div>
        </div>
      </div>

      <!-- Right: Project Description & Actions -->
      <div class="project-content-wrap">
        <div>
          <div class="project-meta-top">
            <span class="project-index">${proj.number}</span>
            <span class="project-status-tag">${proj.badge}</span>
          </div>

          <h3 class="project-title">${proj.title}</h3>
          <div class="project-subtitle">${proj.subtitle}</div>
          <p class="project-desc">${proj.description}</p>
        </div>

        <div>
          <div class="project-tech-tags">
            ${proj.tags.map(tag => `<span class="project-tech-pill">${tag}</span>`).join("")}
          </div>

          <div class="project-actions">
            <button class="btn-case-study" data-open-modal="${proj.id}">
              <span>View Case Study</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </button>

            ${proj.githubUrl ? `
              <a href="${proj.githubUrl}" target="_blank" rel="noopener" class="btn-icon-glass" title="View Source on GitHub">
                ${getSocialSvg("github")}
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </article>
  `).join("");

  // Modal Open Handler
  document.querySelectorAll("[data-open-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-open-modal");
      const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
      if (!project) return;

      document.getElementById("modal-badge-target").textContent = project.badge;
      document.getElementById("modal-title-target").textContent = project.title;
      document.getElementById("modal-subtitle-target").textContent = project.subtitle;
      document.getElementById("modal-summary-target").textContent = project.caseStudy.summary;

      // Highlights
      const highlightsContainer = document.getElementById("modal-highlights-target");
      highlightsContainer.innerHTML = project.caseStudy.highlights.map(h => `<li>${h}</li>`).join("");

      // Tech Stack
      const stackContainer = document.getElementById("modal-stack-target");
      stackContainer.innerHTML = project.caseStudy.stack.map(s => `<span class="modal-stack-tag">${s}</span>`).join("");

      // Link
      const liveLink = document.getElementById("modal-live-link");
      liveLink.href = project.githubUrl || project.liveUrl || "#";
      liveLink.textContent = "View on GitHub ↗";
      liveLink.style.display = "inline-flex";

      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  // Modal Close Handlers
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

// --------------------------------------------------------------------------
// 8. CONTACT FORM SUBMISSION WITH TOAST
// --------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const submitBtn = document.getElementById("form-submit-btn");
  const toast = document.getElementById("toast-notification");
  const toastMsg = document.getElementById("toast-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name").value;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending message...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Send Message</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      `;

      form.reset();

      toastMsg.textContent = `Thank you ${name}! Your message has been received.`;
      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 4000);
    }, 850);
  });
}

// --------------------------------------------------------------------------
// 9. SCROLL-SPY & BACK TO TOP
// --------------------------------------------------------------------------
function initScrollSpyAndNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTopBtn = document.getElementById("back-to-top");

  // Scroll Spy
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 180;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Back to Top Button
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
