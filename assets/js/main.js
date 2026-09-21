/* ============================================================
   MAR — Utilidades de la vista pública
   WhatsApp, navegación, animaciones de aparición, contadores.
   ============================================================ */

const MAR_WHATSAPP_NUMBER = "5492233003013"; // +54 9 223 300 3013

function waLink(message) {
  return `https://wa.me/${MAR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message || "")}`;
}

function qs(key) {
  return new URLSearchParams(window.location.search).get(key);
}

/* Botón flotante de WhatsApp */
function injectWhatsappFloat(message) {
  if (document.querySelector(".wsp-float")) return;
  const a = document.createElement("a");
  a.className = "wsp-float";
  a.href = waLink(message);
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label", "Escribinos por WhatsApp");
  a.innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.41-9.4 2.51 0 4.87.98 6.64 2.76a9.34 9.34 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.4 9.4zM20.52 3.49A11.76 11.76 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.59 5.93L0 24l6.35-1.67a11.8 11.8 0 0 0 5.69 1.45h.01c6.53 0 11.85-5.32 11.85-11.86 0-3.17-1.23-6.15-3.38-8.43z"/>
    </svg>
    <span>WhatsApp</span>`;
  document.body.appendChild(a);
}

/* Navegación: mobile toggle + estado al hacer scroll */
function setupNav(options = {}) {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }
  if (!nav) return;

  const overHero = options.overHero === true;
  function onScroll() {
    const scrolled = window.scrollY > 40;
    nav.classList.toggle("scrolled", scrolled);
    if (overHero) {
      // Transparente mientras estamos sobre el hero
      const threshold = window.innerHeight * 0.75;
      nav.classList.toggle("over-hero", window.scrollY < threshold);
    }
  }
  if (overHero) nav.classList.add("over-hero");
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* Animaciones de aparición al hacer scroll */
function setupReveal() {
  const els = document.querySelectorAll(".reveal, .reveal-stagger");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          if (entry.target.hasAttribute("data-count-group")) animateCounters(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

/* Contadores animados ([data-count]) */
function animateCounters(scope) {
  (scope || document).querySelectorAll("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count || 0);
    const suffix = el.dataset.suffix || "";
    const dur = 1200;
    const start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* Toast simple */
function toastPublic(msg) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2600);
}
