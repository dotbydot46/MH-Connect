// Premium SVG icon system for all <i data-icon="..."> elements.
const iconPaths = {
  pin: '<path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z"/>',
  whatsapp: '<path d="M20.5 11.8a8.3 8.3 0 0 1-12.1 7.4L4 20.4l1.3-4.1A8.3 8.3 0 1 1 20.5 11.8Z"/><path d="M8.6 7.8c.3 3.7 3.2 6.7 6.9 7.5"/><path d="M8.6 7.8 10 6.7l2 2-1.1 1.1c.7 1.4 1.7 2.4 3.2 3.2l1.1-1.1 2 2-1.4 1.4"/>',
  people: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/>',
  bolt: '<path d="M13 2 3 14h8l-1 8 11-13h-8l0-7Z"/>',
  tools: '<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.6 2.6-3-3 2.6-2.6Z"/><path d="m14 14 6 6"/><path d="m17 17 3-3 1 1-3 3"/>',
  store: '<path d="M3 9h18l-2-5H5L3 9Z"/><path d="M4 9v11h16V9"/><path d="M8 20v-6h8v6"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h4v6H6a2 2 0 0 1-2-2v-4Z"/><path d="M20 14h-4v6h2a2 2 0 0 0 2-2v-4Z"/><path d="M16 20c0 1-2 2-4 2"/>',
  watch: '<path d="M8 3h8l1 4H7l1-4Z"/><circle cx="12" cy="12" r="5"/><path d="M7 17h10l-1 4H8l-1-4Z"/><path d="M12 9v3l2 1"/>',
  diamond: '<path d="M6 3h12l4 6-10 12L2 9l4-6Z"/><path d="M2 9h20"/><path d="m6 3 6 18 6-18"/>',
  id: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c1-2 5-2 6 0"/><path d="M14 10h4"/><path d="M14 14h3"/>',
  vape: '<path d="M4 15h12a3 3 0 0 1 0 6H4z"/><path d="M16 18h5"/><path d="M7 11c0-2 2-2 2-4"/><path d="M12 11c0-2 2-2 2-4"/>',
  battery: '<rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 11v2"/><path d="M7 11h6"/>',
  plug: '<path d="M12 22v-5"/><path d="M9 7V2"/><path d="M15 7V2"/><path d="M7 7h10v4a5 5 0 0 1-10 0V7Z"/>',
  speaker: '<path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/>',
  crack: '<path d="M13 2 6 12h5l-1 10 8-12h-5l0-8Z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
  pound: '<path d="M18 19H6"/><path d="M8 12h7"/><path d="M14 5a4 4 0 0 0-6 3v11"/>',
  sparkle: '<path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/>',
  star: '<path d="m12 2 3 6 6.5.9-4.7 4.6 1.1 6.5L12 17l-5.8 3 1.1-6.5-4.7-4.6L9 8l3-6Z"/>',
  resize: '<path d="M8 3H3v5"/><path d="M21 8V3h-5"/><path d="M3 16v5h5"/><path d="M16 21h5v-5"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1"/>',
  bag: '<path d="M6 7h12l-1 14H7L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  tag: '<path d="M20 10 12 2H4v8l8 8 8-8Z"/><path d="M7.5 7.5h.01"/>',
  more: '<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',
  music: '<path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',
  case: '<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 6h6"/><path d="M9 18h6"/><circle cx="16" cy="8" r="1.3"/><circle cx="13" cy="8" r="1.1"/>',
  screen: '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M7 6h10"/><path d="m8 16 8-8"/><path d="m11 17 6-6"/>',
  charger: '<path d="M7 7V3"/><path d="M17 7V3"/><path d="M5 7h14v4a7 7 0 0 1-14 0V7Z"/><path d="M12 18v4"/><path d="M15 21H9"/>',
  earbuds: '<path d="M7 14a4 4 0 0 1-4-4V8a4 4 0 0 1 8 0v2a4 4 0 0 1-4 4Z"/><path d="M17 14a4 4 0 0 1-4-4V8a4 4 0 0 1 8 0v2a4 4 0 0 1-4 4Z"/><path d="M7 14v7"/><path d="M17 14v7"/><path d="M5 21h4"/><path d="M15 21h4"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/>',
  facebook: '<path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z"/>',
  powerbank: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h3"/><path d="M8 15h8"/><path d="M16 11l-2 3h3l-2 3"/>',
  print: '<path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/>'
};

function renderPremiumIcons() {
  document.querySelectorAll('i[data-icon]').forEach((icon) => {
    const name = icon.dataset.icon;
    const path = iconPaths[name] || iconPaths.sparkle;
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = `<svg viewBox="0 0 24 24" focusable="false" role="img"><g fill="none" stroke="currentColor" stroke-width="2.05" stroke-linecap="round" stroke-linejoin="round">${path}</g></svg>`;
  });
}
renderPremiumIcons();

const WHATSAPP_NUMBER = "447398770915";

const menuToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const header = document.querySelector("[data-header]");
const yearElement = document.querySelector("[data-year]");
const fillButtons = document.querySelectorAll("[data-fill-form]");
const whatsappForms = document.querySelectorAll("[data-whatsapp-form]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxButtons = document.querySelectorAll("[data-lightbox-src]");
const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
const sections = [...document.querySelectorAll("main section[id], footer[id]")];

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const closeMenu = () => {
  if (!menuToggle || !navLinks) return;
  const label = menuToggle.querySelector(".sr-only");
  menuToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  if (label) label.textContent = "Open menu";
};

if (menuToggle && navLinks) {
  const label = menuToggle.querySelector(".sr-only");
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
      return;
    }
    menuToggle.setAttribute("aria-expanded", "true");
    navLinks.classList.add("is-open");
    document.body.classList.add("menu-open");
    if (label) label.textContent = "Close menu";
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
}

const updateScrollState = () => {
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  document.body.classList.toggle("show-floating", window.scrollY > 520);

  let current = "home";
  const offset = window.innerHeight * 0.35;
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= offset && rect.bottom >= offset) {
      current = section.id;
      break;
    }
  }

  navAnchors.forEach((anchor) => {
    const href = anchor.getAttribute("href").replace("#", "");
    anchor.classList.toggle("active", href === current);
  });
};

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);
updateScrollState();

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeLightbox();
  }
});

// Smooth pre-fill buttons for repair/jewellery/contact enquiry flows.
fillButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const form = document.querySelector(button.dataset.fillForm);
    if (!form) return;

    const field = form.elements[button.dataset.field];
    const value = button.dataset.value || "";

    if (field) {
      if (field.tagName === "SELECT" && value) {
        const hasOption = [...field.options].some((option) => option.value === value);
        if (!hasOption) {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          field.append(option);
        }
      }
      field.value = value;
      field.dispatchEvent(new Event("change", { bubbles: true }));
    }

    form.scrollIntoView({ behavior: "smooth", block: "center" });
    const firstInput = form.querySelector("input, select, textarea");
    if (firstInput) setTimeout(() => firstInput.focus({ preventScroll: true }), 600);
  });
});

const fieldLabels = {
  name: "Name",
  phone: "Phone",
  model: "Phone model",
  issue: "Issue",
  service: "Service",
  item: "Item",
  quantity: "Quantity",
  preference: "Style / colour preference",
  contact_method: "Preferred contact method",
  message: "Message"
};

whatsappForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const title = form.dataset.formTitle || "General enquiry";
    const lines = [
      "Hi MH Connect, I would like to make an enquiry.",
      "",
      `Enquiry type: ${title}`
    ];

    for (const [key, value] of formData.entries()) {
      const cleaned = String(value).trim();
      if (cleaned) lines.push(`${fieldLabels[key] || key}: ${cleaned}`);
    }

    lines.push("", "I can send photos if that helps.");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });
});

// Gallery lightbox
function openLightbox(src, caption, altText) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  lightboxImage.src = src;
  lightboxImage.alt = altText || caption || "MH Connect gallery image";
  lightboxCaption.textContent = caption || "";
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  if (lightboxClose) lightboxClose.focus();
}

function closeLightbox() {
  if (!lightbox || lightbox.hidden) return;
  lightbox.hidden = true;
  document.body.style.overflow = "";
  if (lightboxImage) lightboxImage.src = "";
}

lightboxButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    openLightbox(button.dataset.lightboxSrc, button.dataset.lightboxCaption, img ? img.alt : "");
  });
});

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}
if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);

// Reveal animation with fallback.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}


// MH Connect launch-ready utilities: contact tracking, open status and lazy map.
function mhTrack(eventName, params = {}) {
  const payload = {
    event_category: "mh_connect",
    page_path: window.location.pathname,
    ...params
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link) return;

  const href = link.getAttribute("href") || "";
  const location = link.dataset.location || link.closest("section")?.id || "site";
  let eventName = link.dataset.track || "";

  if (!eventName) {
    if (href.startsWith("tel:")) eventName = "click_phone";
    else if (href.startsWith("mailto:")) eventName = "click_email";
    else if (href.includes("wa.me/")) eventName = "click_whatsapp";
    else if (href.includes("google.com/maps")) eventName = "click_directions";
  }

  if (eventName) {
    mhTrack(eventName, {
      cta_location: location,
      link_text: link.textContent.trim().replace(/\s+/g, " ").slice(0, 80)
    });
  }
});

document.querySelectorAll("[data-map-load]").forEach((button) => {
  button.addEventListener("click", () => {
    const shell = button.closest("[data-map-shell]");
    const frame = shell ? shell.querySelector("[data-map-frame]") : null;
    const src = button.dataset.mapSrc;
    if (frame && src && !frame.src) frame.src = src;
    if (shell) shell.classList.add("is-loaded");
    mhTrack("map_load", { cta_location: "contact_map" });
  });
});

function getLondonParts() {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  const parts = Object.fromEntries(formatter.formatToParts(new Date()).map(part => [part.type, part.value]));
  return { weekday: parts.weekday, hour: Number(parts.hour), minute: Number(parts.minute) };
}

function updateOpenStatus() {
  const targets = document.querySelectorAll("[data-open-status]");
  if (!targets.length) return;
  const { weekday, hour, minute } = getLondonParts();
  const minutes = hour * 60 + minute;
  const isSunday = weekday === "Sun";
  const open = isSunday ? 10 * 60 : 9 * 60;
  const close = isSunday ? 17 * 60 : 19 * 60;
  const isOpen = minutes >= open && minutes < close;
  const closingLabel = isSunday ? "5:00 PM" : "7:00 PM";
  const nextLabel = isSunday ? "Monday 9:00 AM" : "tomorrow 9:00 AM";

  const text = isOpen
    ? `Open now • Closes ${closingLabel}`
    : `Closed now • Opens ${nextLabel}`;

  targets.forEach((target) => {
    target.textContent = text;
    target.classList.toggle("is-open", isOpen);
  });
}
updateOpenStatus();
setInterval(updateOpenStatus, 60000);
