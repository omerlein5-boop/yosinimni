/* =========================================================
   יוסי נמני שיפוצים ועבודות גמר — main.js
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Year ---------- */
  var yEl = document.getElementById("year");
  if (yEl) yEl.textContent = new Date().getFullYear();

  /* ---------- Header scroll state ---------- */
  var header = document.querySelector(".header");
  function onScroll() {
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById("hamburger");
  var mobileNav = document.getElementById("mobileNav");
  function closeNav() {
    burger.classList.remove("open");
    mobileNav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
  burger.addEventListener("click", function () {
    var open = mobileNav.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mobileNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeNav);
  });

  /* ---------- Services ---------- */
  var SERVICES = [
    { t: "שיפוץ דירות קומפלט", d: "ניהול וביצוע שיפוץ מקיף לדירה — מהריסה ועד מסירה, בתיאום מלא.", i: "home" },
    { t: "עבודות גמר עד מפתח", d: "סגירת כל שלבי הגמר עד שהבית מוכן למגורים, תחת פיקוח אחד.", i: "key" },
    { t: "שיפוץ חדרי רחצה", d: "חדרי רחצה ומקלחות בעיצוב נקי, עם איטום וחיפויים מדויקים.", i: "drop" },
    { t: "עבודות ריצוף וחיפוי", d: "ריצוף, חיפוי קירות ואבן בדיוק גבוה ובפינישים נקיים.", i: "grid" },
    { t: "עבודות איטום", d: "איטום מקצועי למניעת רטיבות ונזקי מים, עם אחריות על העבודה.", i: "shield" },
    { t: "טיח וצבע", d: "עבודות טיח וצבע פנים חלקות ואחידות לתוצאה נקייה.", i: "roller" },
    { t: "צביעת חוץ מבנים", d: "צביעה וחידוש חזיתות וקירות חוץ של מבנים.", i: "building" },
    { t: "שיפוץ משרדים", d: "התאמה ושדרוג של חללי משרד ומסחר בלוחות זמנים מסודרים.", i: "office" },
    { t: "עבודות גמר לווילות", d: "פינישים ברמה גבוהה לווילות ובתים פרטיים, כולל פרטי עיצוב.", i: "villa" },
    { t: "עבודות חוץ ופיתוח", d: "ריצוף חוץ, בטון, פיתוח חצר ועבודות מסביב לבית.", i: "tree" }
  ];

  var ICONS = {
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    key: '<circle cx="8" cy="8" r="4"/><path d="M11 11l9 9"/><path d="M16 16l2-2M19 19l2-2"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    shield: '<path d="M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-4z"/>',
    roller: '<rect x="3" y="4" width="13" height="6" rx="1"/><path d="M16 7h3a2 2 0 012 2v2a2 2 0 01-2 2h-7v3"/><rect x="10" y="16" width="4" height="6" rx="1"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01"/>',
    office: '<path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9h.01M9 13h.01M9 17h.01"/>',
    villa: '<path d="M3 21V10l9-6 9 6v11"/><path d="M3 10l9 6 9-6"/><path d="M10 21v-5h4v5"/>',
    tree: '<path d="M12 22v-7"/><path d="M12 15a5 5 0 005-5 5 5 0 00-1-3 4 4 0 00-8 0 5 5 0 00-1 3 5 5 0 005 5z"/>'
  };

  var sGrid = document.getElementById("servicesGrid");
  if (sGrid) {
    sGrid.innerHTML = SERVICES.map(function (s) {
      return '<article class="service reveal">' +
        '<div class="service__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[s.i] || "") + '</svg></div>' +
        '<h3>' + s.t + '</h3><p>' + s.d + '</p></article>';
    }).join("");
  }

  /* ---------- Gallery data ---------- */
  var P = "public/images/";
  var GALLERY = [
    { f: "img21.jpeg", c: "finish",    t: "קיר חיפוי עץ ומזנון בסלון" },
    { f: "img26.jpeg", c: "complete",  t: "מטבח פתוח — פינת אוכל ותאורה" },
    { f: "img08.jpeg", c: "bath",      t: "חדר רחצה בחיפוי שיש מלא" },
    { f: "img24.jpeg", c: "complete",  t: "מטבח פתוח עם ריצוף דמוי פרקט" },
    { f: "img27.jpeg", c: "exterior",  t: "בריכה ועמודי פסיפס בווילה" },
    { f: "img05.jpeg", c: "bath",      t: "מקלחון בחיפוי דמוי שיש" },
    { f: "img22.jpeg", c: "complete",  t: "מבואה ומדרגות לאחר שיפוץ" },
    { f: "img28.jpeg", c: "finish",    t: "חיפוי קיר אבן טרוורטין" },
    { f: "img11.jpeg", c: "bath",      t: "חדר רחצה עם ארון אמבט מרחף" },
    { f: "img13.jpeg", c: "complete",  t: "מטבח לבן בשיפוץ דירה קומפלט" },
    { f: "img02.jpeg", c: "floor",     t: "ריצוף קרמיקה 1.0×1.0 בסלון" },
    { f: "img07.jpeg", c: "bath",      t: "חדר רחצה בשיתוף מעצבת פנים" },
    { f: "img32.jpeg", c: "complete",  t: "סלון מואר לאחר שיפוץ" },
    { f: "img29.jpeg", c: "floor",     t: "קיר אבן מחופה — מבט גמר" },
    { f: "img06.jpeg", c: "bath",      t: "שיפוץ חדר אמבטיה — בני ברק" },
    { f: "img14.jpeg", c: "exterior",  t: "יציקת בטון — עבודות פיתוח" },
    { f: "img20.jpeg", c: "finish",    t: "גופי תאורה — פרט גמר" },
    { f: "img10.jpeg", c: "bath",      t: "חדר רחצה — גמר מלא" },
    { f: "img33.jpeg", c: "complete",  t: "מטבח לבן וריצוף דמוי פרקט" },
    { f: "img03.jpeg", c: "floor",     t: "ריצוף גרניט פורצלן בחדר" },
    { f: "img35.jpeg", c: "bath",      t: "חדר רחצה הורים עם אמבטיה" },
    { f: "img30.jpeg", c: "exterior",  t: "עמוד פסיפס בחצר הווילה" },
    { f: "img17.jpeg", c: "complete",  t: "משטח שיש במטבח" },
    { f: "img12.jpeg", c: "bath",      t: "פינת שירותים בעיצוב נקי" },
    { f: "img23.jpeg", c: "process",   t: "ריצוף דמוי פרקט בשלב העבודה" },
    { f: "img36.jpeg", c: "complete",  t: "חדר שינה לאחר שיפוץ" },
    { f: "img16.jpeg", c: "bath",      t: "שירותי אורחים — אריח דמוי עץ" },
    { f: "img15.jpeg", c: "exterior",  t: "הכנת רצפת בטון בחצר" },
    { f: "img18.jpeg", c: "bath",      t: "חדר רחצה — מבט נוסף" },
    { f: "img19.jpeg", c: "process",   t: "מטבח בשלבי גמר" },
    { f: "img31.jpeg", c: "process",   t: "התקנת חיפוי אבן עם שבלונות" },
    { f: "img04.jpeg", c: "process",   t: "חיפוי מקלחת דמוי עץ — תהליך" }
  ];

  var CATS = [
    { k: "all",      n: "הכל" },
    { k: "complete", n: "דירות קומפלט" },
    { k: "bath",     n: "חדרי רחצה" },
    { k: "finish",   n: "גמרים" },
    { k: "floor",    n: "ריצוף וחיפוי" },
    { k: "exterior", n: "חוץ ופיתוח" },
    { k: "process",  n: "תהליך עבודה" }
  ];
  var CATNAME = {};
  CATS.forEach(function (c) { CATNAME[c.k] = c.n; });

  /* ---------- Render filters ---------- */
  var filtersEl = document.getElementById("workFilters");
  if (filtersEl) {
    filtersEl.innerHTML = CATS.map(function (c, i) {
      return '<button class="filter' + (i === 0 ? " active" : "") + '" data-cat="' + c.k + '" role="tab">' + c.n + '</button>';
    }).join("");
  }

  /* ---------- Render gallery ---------- */
  var galleryEl = document.getElementById("galleryGrid");
  function buildGallery() {
    galleryEl.innerHTML = GALLERY.map(function (g, idx) {
      return '<figure class="gcard" data-cat="' + g.c + '" data-index="' + idx + '">' +
        '<img src="' + P + g.f + '" alt="' + g.t + '" loading="lazy" decoding="async" />' +
        '<figcaption class="gcard__overlay">' +
        '<span class="gcard__cat">' + CATNAME[g.c] + '</span>' +
        '<span class="gcard__title">' + g.t + '</span>' +
        '</figcaption></figure>';
    }).join("");
  }
  if (galleryEl) buildGallery();

  /* ---------- Filtering ---------- */
  if (filtersEl) {
    filtersEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;
      filtersEl.querySelectorAll(".filter").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var cat = btn.getAttribute("data-cat");
      galleryEl.querySelectorAll(".gcard").forEach(function (card) {
        var show = cat === "all" || card.getAttribute("data-cat") === cat;
        card.classList.toggle("hide", !show);
      });
    });
  }

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCap = document.getElementById("lbCap");
  var lbList = [];   // current visible list of {src, cap}
  var lbPos = 0;

  function openLb(list, pos) {
    lbList = list;
    lbPos = pos;
    showLb();
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function showLb() {
    var item = lbList[lbPos];
    lbImg.src = item.src;
    lbImg.alt = item.cap;
    lbCap.textContent = item.cap;
  }
  function closeLb() {
    lb.classList.remove("open");
    lbImg.src = "";
    document.body.style.overflow = "";
  }
  function nav(dir) {
    lbPos = (lbPos + dir + lbList.length) % lbList.length;
    showLb();
  }

  // gallery -> lightbox (respects current filter)
  if (galleryEl) {
    galleryEl.addEventListener("click", function (e) {
      var card = e.target.closest(".gcard");
      if (!card) return;
      var visible = Array.prototype.filter.call(
        galleryEl.querySelectorAll(".gcard"),
        function (c) { return !c.classList.contains("hide"); }
      );
      var list = visible.map(function (c) {
        var img = c.querySelector("img");
        return { src: img.getAttribute("src"), cap: img.getAttribute("alt") };
      });
      var pos = visible.indexOf(card);
      openLb(list, pos < 0 ? 0 : pos);
    });
  }

  // before/after pair images -> lightbox
  document.querySelectorAll("[data-lb]").forEach(function (img, i, all) {
    img.addEventListener("click", function () {
      var list = Array.prototype.map.call(all, function (el) {
        return { src: el.getAttribute("data-lb"), cap: el.getAttribute("data-cap") || el.alt };
      });
      openLb(list, i);
    });
  });

  document.getElementById("lbClose").addEventListener("click", closeLb);
  // In RTL: ‹ (lb-next button) goes forward, › (lb-prev button) goes back
  document.getElementById("lbNext").addEventListener("click", function () { nav(1); });
  document.getElementById("lbPrev").addEventListener("click", function () { nav(-1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") nav(1);   // visual left = next in RTL
    else if (e.key === "ArrowRight") nav(-1);
  });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
    // observe service cards added dynamically
    document.querySelectorAll("#servicesGrid .reveal").forEach(function (el) { io.observe(el); });
    // Safety net: ensure nothing stays hidden if the observer misses an element.
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.querySelectorAll(".reveal:not(.in)").forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.top < window.innerHeight) el.classList.add("in");
        });
      }, 600);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
})();
