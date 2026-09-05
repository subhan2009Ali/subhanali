/* =========================================================
   DATA — mirrors the real content from the source portfolio.
   No invented clients, stats or achievements.
========================================================= */
const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    blurb: "Interfaces people actually use.",
    skills: [
      "React", "Next.js", "TypeScript", "Tailwind CSS",
      "JavaScript", "HTML5 / CSS3", "Framer Motion",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    blurb: "Logic, routes and data behind the interface.",
    skills: [
      "Node.js", "Express.js", "Next.js API Routes",
      "Python", "Flask", "REST APIs",
    ],
  },
  {
    id: "data",
    label: "Data & Infrastructure",
    blurb: "Where the state actually lives.",
    skills: [
      "PostgreSQL", "Prisma ORM", "SQL",
      "Cloudflare R2", "Vercel", "Git / GitHub",
    ],
  },
  {
    id: "ai",
    label: "AI & Python",
    blurb: "Local models, voice and automation.",
    skills: [
      "NumPy / Pandas", "Vosk", "Whisper / Faster-Whisper",
      "Ollama", "RAG", "Vector Databases", "Piper TTS",
    ],
  },
];

const projects = [
  {
    index: "01",
    name: "Let's Learn With Arsal",
    tagline: "Full-Stack Educational Platform",
    description:
      "A complete educational platform for English notes, with student authentication, premium and free note tiers, and a payment-ready architecture.",
    features: [
      "Student authentication",
      "Premium and free notes",
      "Admin dashboard & user management",
      "Analytics",
      "PDF management",
      "PostgreSQL database",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    glyph: "LLA",
    bg: "linear-gradient(135deg, #2A2320, #1a1512)",
  },
  {
    index: "02",
    name: "Ultra Voice Assistant",
    tagline: "Offline AI Voice Assistant",
    description:
      "A modular, offline-first AI assistant that listens, retrieves local context, and speaks back — without depending on a cloud API.",
    features: [
      "Offline speech recognition",
      "Speaker verification",
      "RAG over local files",
      "Local LLM integration",
      "Text-to-speech output",
      "Modular Python architecture",
    ],
    stack: ["Python", "Vosk", "Faster-Whisper", "Ollama", "Piper TTS", "RAG"],
    glyph: "UVA",
    bg: "linear-gradient(135deg, #17302c, #0e1c1a)",
  },
  {
    index: "03",
    name: "Python Arcade Game",
    tagline: "Interactive 2D Arcade Shooter",
    description:
      "A 2D shooter built with Pygame — player movement, boss battles, shields and power-ups, driven by hand-written game logic.",
    features: [
      "Player movement & shooting mechanics",
      "Multiple enemies & boss battles",
      "Health system & shields",
      "Power-ups & scoring",
      "Collision detection",
    ],
    stack: ["Python", "Pygame", "Game Logic"],
    glyph: "PAG",
    bg: "linear-gradient(135deg, #2b1c1c, #180f0f)",
  },
  {
    index: "04",
    name: "Admin Dashboard",
    tagline: "Management & Analytics System",
    description:
      "A management dashboard for users, notes, categories, payments and orders — the operational backend behind a product.",
    features: [
      "User & content management",
      "Payments & orders",
      "Analytics",
      "Admin permissions",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    glyph: "ADS",
    bg: "linear-gradient(135deg, #1c2430, #0f141c)",
  },
];

const journey = [
  { id: "01", year: "START", title: "Foundations", body: "Learning Python and core programming fundamentals alongside ICS studies — variables, logic, and the habit of building things to understand them." },
  { id: "02", year: "PYTHON", title: "Python Systems", body: "Writing structured, modular Python — from game logic and collision systems to small tools that actually run and do something." },
  { id: "03", year: "WEB", title: "Full-Stack Web", body: "Building production-style platforms with Next.js, TypeScript, Prisma and PostgreSQL — authentication, dashboards, and real data models." },
  { id: "04", year: "AI", title: "AI & Offline Systems", body: "Completing the Essentials of Artificial Intelligence course at Bano Qabil Institute, then building an offline voice assistant with local speech recognition and RAG." },
  { id: "05", year: "DATA", title: "Dashboards & Data", body: "Building admin systems for managing users, content, analytics and orders — the unglamorous backend work that makes a product operable." },
  { id: "06", year: "NOW", title: "Now", body: "Combining full-stack development, AI engineering and Python to build software that is production-focused, not just a demo." },
];

const techList = [
  "PYTHON", "NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND",
  "POSTGRESQL", "PRISMA", "FLASK", "OLLAMA", "VOSK",
  "WHISPER", "PYGAME", "GIT",
];

/* =========================================================
   HERO LIQUID TYPE
========================================================= */
(function liquidHeroType() {
  document.querySelectorAll(".liquid-word").forEach((word) => {
    const label = word.textContent.replace(/\u00a0/g, " ");
    const fragment = document.createDocumentFragment();

    Array.from(label).forEach((character, index) => {
      const letter = document.createElement("span");
      letter.className = "liquid-char";
      letter.style.setProperty("--char-index", index);
      letter.setAttribute("aria-hidden", "true");
      letter.textContent = character === " " ? "\u00a0" : character;
      fragment.appendChild(letter);
    });

    word.replaceChildren(fragment);
    word.classList.add("liquid-ready");
    word.setAttribute("aria-label", label);
  });
})();

/* =========================================================
   PRELOADER
========================================================= */
(function loader() {
  const loaderEl = document.getElementById("loader");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced) {
    loaderEl.classList.add("done");
    document.body.classList.add("hero-ready");
    return;
  }

  document.body.style.overflow = "hidden";
  setTimeout(() => {
    loaderEl.classList.add("done");
    document.body.classList.add("hero-ready");
  }, 1050);
  loaderEl.addEventListener("transitionend", () => {
    if (loaderEl.classList.contains("done")) document.body.style.overflow = "";
  });
})();

/* =========================================================
   CUSTOM CURSOR
========================================================= */
(function cursor() {
  const isFine = window.matchMedia("(pointer: fine)").matches;
  if (!isFine) return;

  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  let rx = window.innerWidth / 2, ry = window.innerHeight / 2, tx = rx, ty = ry;

  window.addEventListener("mousemove", (e) => {
    document.body.classList.add("cursor-active");
    tx = e.clientX; ty = e.clientY;
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    const hoverEl = e.target.closest("a, button, .skill-pill, input, textarea");
    ring.classList.toggle("hover", !!hoverEl);
  });

  function loop() {
    rx += (tx - rx) * 0.18;
    ry += (ty - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();

/* =========================================================
   CLOUD INTERACTION — independent from heading and portrait
========================================================= */
(function cloudInteraction() {
  const cloud = document.querySelector(".hero-cloud-scene");
  const hero = cloud?.closest(".hero");
  if (!cloud || !hero || window.matchMedia("(pointer: coarse)").matches) return;

  cloud.addEventListener("pointerenter", () => hero.classList.add("cloud-fog-mode"));
  cloud.addEventListener("pointerleave", () => hero.classList.remove("cloud-fog-mode"));
})();

/* =========================================================
   ROCK FIELD — gentle mouse gravity
========================================================= */
(function rockInteraction() {
  const field = document.getElementById("heroRockField");
  const hero = field?.closest(".hero");
  const rocks = field ? Array.from(field.querySelectorAll(".rock-item")) : [];
  if (!field || !hero || !rocks.length || window.matchMedia("(pointer: coarse)").matches) return;

  let nextX = 0;
  let nextY = 0;
  let ticking = false;

  function applyGravity() {
    rocks.forEach((rock) => {
      const depth = Number(rock.dataset.depth || 8);
      const spin = nextX * depth * .08;
      rock.style.transform = `translate3d(${nextX * depth}px, ${nextY * depth}px, 0) rotate(${spin}deg)`;
    });
    ticking = false;
  }

  function move(event) {
    const bounds = hero.getBoundingClientRect();
    nextX = Math.max(-.5, Math.min(.5, (event.clientX - bounds.left) / bounds.width - .5));
    nextY = Math.max(-.5, Math.min(.5, (event.clientY - bounds.top) / bounds.height - .5));
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(applyGravity);
    }
  }

  function reset() {
    nextX = 0;
    nextY = 0;
    rocks.forEach((rock) => { rock.style.transform = ""; });
  }

  hero.addEventListener("pointermove", move, { passive: true });
  hero.addEventListener("pointerleave", reset);
})();

/* =========================================================
   HERO 3D FRAME SEQUENCE — scroll-scrubbed reconstruction shot
   ---------------------------------------------------------
   How it works, end to end:

   1. FRAME LOADING — every real frame_001.jpg…frame_048.jpg is
      preloaded into an in-memory Image() object before the
      sequence is usable. A loading bar covers the canvas until
      100% of frames have loaded (or failed), so the user can
      never scroll onto a frame that hasn't arrived yet.

   2. FRAME CACHING — each Image object is kept in the `images`
      array for the life of the page. Frames are requested once,
      never re-fetched, and the browser's own decoded-image cache
      does the rest.

   3. SCROLL PROGRESS — #heroPinWrap is given extra height
      (the hero's own rendered height + frameCount * a per-frame
      px budget). #hero inside it is `position: sticky`, so while
      the user scrolls through that extra height the hero stays
      visually fixed on screen — that's the "pin". Progress
      through the pin is (scrollY - wrapTop) / (wrapHeight -
      heroHeight), clamped to [0, 1]. Using the hero's own
      measured height (rather than assuming it equals the
      viewport) keeps this correct even under the small-screen
      `min-height` override this design applies to `.hero`.

   4. FRAME SELECTION — progress * (frameCount - 1), rounded, is
      the frame index. It's recalculated on every scroll event
      (throttled to one calculation per animation frame) and only
      triggers a redraw when the index actually changes, so fast,
      slow, and backward scrolling all just fall out of the same
      formula. Frame 0 and frame (count - 1) are hit exactly at
      the top and bottom of the pin range.

   5. PINNING BEHAVIOR — handled natively by CSS position:sticky
      + the tall wrapper (see style.css). Once the wrapper's
      extra height is scrolled past, sticky releases on its own
      and normal page scrolling continues into the Stats section.
      Scrolling back up re-enters the pin and runs the sequence
      in reverse automatically, since progress is derived from
      absolute scroll position, not a stateful "direction".

   6. RESPONSIVE BEHAVIOR — canvas backing-store size is set from
      its actual on-screen box (getBoundingClientRect) times
      devicePixelRatio (capped at 2x) on load and on resize, and
      every frame is drawn with a manual "cover" fit so the
      object's aspect ratio is preserved and it's never stretched
      or cropped unpredictably. This sequence sits as its own
      layer next to .hero-visual (the orbit/energy halo) rather
      than inside it, so it stays fully visible even where
      .hero-visual itself fades into the background on mobile.
      prefers-reduced-motion drops the extra scroll height
      entirely (no pin, no scrub) and shows frame 1 as a static
      image.
========================================================= */
(function hero3D() {
  const wrap = document.getElementById("heroPinWrap");
  const hero = document.getElementById("hero");
  const stage = document.getElementById("hero3d");
  const canvas = document.getElementById("hero3dCanvas");
  const loaderEl = document.getElementById("hero3dLoader");
  const loaderFill = document.getElementById("hero3dLoaderFill");
  const loaderPct = document.getElementById("hero3dLoaderPct");
  if (!wrap || !hero || !stage || !canvas) return;

  const ctx = canvas.getContext("2d");

  // Detected from the supplied asset set: frame_001.jpg … frame_048.jpg
  // in /assets/3d-frames/. Update this single number if frames are
  // ever added or removed — everything else derives from it.
  const FRAME_COUNT = 48;
  const FRAME_DIR = "assets/3d-frames/";
  const frameSrc = (n) => FRAME_DIR + "frame_" + String(n).padStart(3, "0") + ".jpg";

  // How much extra scroll distance (px) buys one frame of progress.
  // Smaller on narrow viewports so mobile scrolling doesn't feel
  // like it takes forever to get through the sequence.
  const SCROLL_PER_FRAME = window.innerWidth <= 760 ? 14 : 24;
  const MIN_SCROLL_RANGE = 480;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const images = new Array(FRAME_COUNT);
  let loadedCount = 0;
  let allLoaded = false;
  let currentFrame = 0;
  let rafScheduled = false;
  let heroHeight = hero.offsetHeight;

  function setWrapHeight() {
    heroHeight = hero.offsetHeight || window.innerHeight;
    if (reducedMotion) {
      wrap.style.height = "auto";
      hero.style.position = "relative";
      return;
    }
    const extra = Math.max(FRAME_COUNT * SCROLL_PER_FRAME, MIN_SCROLL_RANGE);
    wrap.style.height = Math.round(heroHeight + extra) + "px";
  }

  function resizeCanvas() {
    const rect = stage.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawFrame(currentFrame, rect.width, rect.height);
  }

  // Draws the ORIGINAL frame image, preserving its aspect ratio
  // ("cover" fit — fills the box, centers, crops overflow evenly).
  // No transforms, no filters, no generated content — the pixels
  // on screen are exactly the supplied frame.
  function drawFrame(index, boxW, boxH) {
    const img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;
    const rect = boxW && boxH ? { width: boxW, height: boxH } : stage.getBoundingClientRect();
    const cw = rect.width, ch = rect.height;
    if (cw === 0 || ch === 0) return;
    ctx.clearRect(0, 0, cw, ch);
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;
    let dw, dh, dx, dy;
    if (ir > cr) {
      dh = ch; dw = dh * ir; dx = (cw - dw) / 2; dy = 0;
    } else {
      dw = cw; dh = dw / ir; dx = 0; dy = (ch - dh) / 2;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function onFrameLoaded() {
    loadedCount++;
    const pct = Math.round((loadedCount / FRAME_COUNT) * 100);
    if (loaderFill) loaderFill.style.width = pct + "%";
    if (loaderPct) loaderPct.textContent = "Loading 3D sequence… " + pct + "%";
    if (loadedCount === 1) resizeCanvas(); // paint frame 1 as soon as it's ready
    if (loadedCount >= FRAME_COUNT) {
      allLoaded = true;
      if (loaderEl) loaderEl.classList.add("done");
      stage.classList.add("is-ready");
      resizeCanvas();
    }
  }

  function preloadFrames() {
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      // A missing/broken frame still counts toward "loaded" so the
      // loader can never hang — drawFrame() simply skips undrawable
      // images and the previous good frame stays on screen instead
      // of a broken-image icon.
      img.onload = onFrameLoaded;
      img.onerror = onFrameLoaded;
      img.src = frameSrc(i + 1);
      images[i] = img;
    }
  }

  function updateFrameFromScroll() {
    rafScheduled = false;
    if (!allLoaded) return;
    const wrapRect = wrap.getBoundingClientRect();
    const wrapTop = window.scrollY + wrapRect.top;
    const scrollRange = wrap.offsetHeight - heroHeight;
    let progress = scrollRange > 0 ? (window.scrollY - wrapTop) / scrollRange : 0;
    progress = Math.min(1, Math.max(0, progress)); // clamp: 0 <= progress <= 1
    const target = Math.round(progress * (FRAME_COUNT - 1));
    if (target !== currentFrame) {
      currentFrame = target;
      drawFrame(currentFrame);
    }
  }

  function onScroll() {
    if (rafScheduled) return;
    rafScheduled = true;
    requestAnimationFrame(updateFrameFromScroll);
  }

  function onResize() {
    setWrapHeight();
    resizeCanvas();
    if (!reducedMotion) updateFrameFromScroll();
  }

  setWrapHeight();
  preloadFrames();

  if (reducedMotion) {
    // Respect the user's preference: no scroll-hijacked pin, just
    // show the first frame once it arrives.
    if (loaderEl) loaderEl.classList.add("done");
    window.addEventListener("resize", resizeCanvas, { passive: true });
    return;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("orientationchange", onResize, { passive: true });
})();

/* =========================================================
   PROJECT CARDS — moving light field
========================================================= */
(function projectSpotlight() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  document.addEventListener("pointermove", (event) => {
    const card = event.target.closest?.(".project-card");
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    card.style.setProperty("--spot-x", `${Math.max(0, Math.min(100, x))}%`);
    card.style.setProperty("--spot-y", `${Math.max(0, Math.min(100, y))}%`);
  }, { passive: true });
  document.addEventListener("pointerout", (event) => {
    const card = event.target.closest?.(".project-card");
    if (!card || card.contains(event.relatedTarget)) return;
    card.style.setProperty("--spot-x", "50%");
    card.style.setProperty("--spot-y", "50%");
  });
})();

/* =========================================================
   SCROLL PROGRESS
========================================================= */
(function scrollProgress() {
  const progress = document.querySelector("#scrollProgress span");
  if (!progress) return;
  let ticking = false;

  function update() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const amount = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.width = `${Math.min(1, Math.max(0, amount)) * 100}%`;
    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  requestUpdate();
})();

/* =========================================================
   NAV — scroll state, active link, mobile menu
========================================================= */
(function nav() {
  const navEl = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    navEl.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("mobile-open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  });

  function closeMenu() {
    links.classList.remove("mobile-open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // Close on outside tap/click, on Escape, and if the viewport is
  // resized past the mobile breakpoint while the menu is open —
  // otherwise a rotate/resize can leave it stuck open underneath
  // the now-restored desktop nav.
  document.addEventListener("click", (e) => {
    if (!links.classList.contains("mobile-open")) return;
    if (links.contains(e.target) || burger.contains(e.target)) return;
    closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });

  const sections = ["hero", "about", "offer", "work", "journey", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const navAnchors = Array.from(links.querySelectorAll("a"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navAnchors.forEach((a) => a.classList.remove("active"));
          const match = navAnchors.find((a) => a.getAttribute("href") === "#" + entry.target.id);
          if (match) match.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
})();

/* =========================================================
   SCROLL REVEALS
========================================================= */
(function reveals() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  items.forEach((el) => observer.observe(el));
})();

/* =========================================================
   ACCORDION — "What I Work With"
========================================================= */
(function accordion() {
  const wrap = document.getElementById("accordion");
  wrap.innerHTML = skillGroups
    .map(
      (group, i) => `
    <div class="accordion-item${i === 0 ? " open" : ""}" data-index="${i}">
      <button class="accordion-head" aria-expanded="${i === 0}">
        <h3>${group.label}<span class="blurb">${group.blurb}</span></h3>
        <span class="accordion-chevron">
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 1L8 8L15 1" stroke="currentColor" stroke-width="1.6"/></svg>
        </span>
      </button>
      <div class="accordion-panel">
        <div class="accordion-panel-inner">
          ${group.skills.map((s) => `<span class="skill-pill">${s}</span>`).join("")}
        </div>
      </div>
    </div>`
    )
    .join("");

  wrap.querySelectorAll(".accordion-item").forEach((item) => {
    item.querySelector(".accordion-head").addEventListener("click", () => {
      const willOpen = !item.classList.contains("open");
      item.classList.toggle("open", willOpen);
      item.querySelector(".accordion-head").setAttribute("aria-expanded", String(willOpen));
    });
  });
})();

/* =========================================================
   PROJECTS GRID + MODAL
========================================================= */
(function projectsGrid() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projects
    .map(
      (p, i) => `
    <div class="project-card reveal" data-delay="${i % 2}">
      <div class="project-visual" style="background:${p.bg}">
        <span class="idx">${p.index}</span>
        <span class="glyph">${p.glyph}</span>
      </div>
      <div class="project-body">
        <h3>${p.name}</h3>
        <p class="tagline">${p.tagline}</p>
        <p>${p.description}</p>
        <div class="project-tags">${p.stack.map((s) => `<span>${s}</span>`).join("")}</div>
        <button class="project-more" data-project="${i}">View Details</button>
      </div>
    </div>`
    )
    .join("");

  // re-observe newly injected reveal elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  grid.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const overlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");

  function openModal(p) {
    modalContent.innerHTML = `
      <p class="tagline">${p.tagline}</p>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <h5>Key Features</h5>
      <ul class="feature-list">${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
      <h5>Stack</h5>
      <div class="project-tags">${p.stack.map((s) => `<span>${s}</span>`).join("")}</div>
    `;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-project]");
    if (!btn) return;
    openModal(projects[Number(btn.dataset.project)]);
  });
  modalClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
})();

/* =========================================================
   PROJECTS — SPIRAL SCROLL PARALLAX
   Layered on top of the entrance animation in style.css
   (.project-card → .project-card.in-view), which handles the
   rotate-and-settle "spiral in" the first time a card appears.
   This module adds a continuous, gentle parallax on top of
   that: while the grid is on screen, each card drifts up/down
   by a small amount tied to its position in the viewport —
   alternating slightly by column so the whole grid has a soft
   counter-rotating, spiral-like sway as you scroll past it.
   Written to a CSS custom property (--spiral-y) rather than
   card.style.transform directly, so it composes with the
   entrance animation and the existing hover lift instead of
   overwriting them.
========================================================= */
(function projectSpiralParallax() {
  const cards = Array.from(document.querySelectorAll(".project-card"));
  if (!cards.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;

  function update() {
    const vh = window.innerHeight;
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) { ticking = false; return; }
      // -1 (card center above viewport center) … 1 (below), clamped
      const centered = (rect.top + rect.height / 2 - vh / 2) / (vh / 2);
      const depth = Math.max(-1, Math.min(1, centered));
      const dir = i % 2 === 0 ? 1 : -1;
      const offset = depth * 22 * dir; // px — kept subtle so it reads as sway, not jitter
      card.style.setProperty("--spiral-y", offset.toFixed(1) + "px");
    });
    ticking = false;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();

/* =========================================================
   TIMELINE
========================================================= */
(function timeline() {
  const wrap = document.getElementById("timeline");
  wrap.innerHTML = journey
    .map(
      (j, i) => `
    <div class="timeline-item reveal" data-delay="${i % 4}">
      <span class="t-idx">${j.id}</span>
      <span class="t-year">${j.year}</span>
      <div>
        <h4>${j.title}</h4>
        <p>${j.body}</p>
      </div>
    </div>`
    )
    .join("");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  wrap.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();

/* =========================================================
   TECH MARQUEE
========================================================= */
(function marquee() {
  const track = document.getElementById("marqueeTrack");
  const doubled = [...techList, ...techList];
  track.innerHTML = doubled.map((t) => `<span>${t}</span>`).join("");
})();

/* =========================================================
   CONTACT FORM — composes a mailto (no backend available)
========================================================= */
(function contactForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim() || "Project inquiry";
    const message = form.message.value.trim();

    const body = `From: ${name} (${email})%0D%0A%0D%0A${encodeURIComponent(message)}`;
    const mailto = `mailto:subhan.2009.com@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailto;
    note.textContent = "Opening your email app with this message pre-filled…";
    note.classList.add("success");
  });
})();
