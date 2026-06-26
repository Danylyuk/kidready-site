/* KidReady лендос — i18n + анімації. Чистий JS, без залежностей. */
(function () {
  "use strict";

  // ---------- Словник UA/EN ----------
  const I18N = {
    uk: {
      metaDesc: "KidReady — сімейний застосунок, що робить шкільне життя дитини простим: задачі, зірки, винагороди, розклад і календар. Безкоштовно, без реклами.",
      navFeatures: "Можливості", navHow: "Як працює", navGet: "Завантажити",
      heroBadge: "Сімейний застосунок",
      heroTitle: 'Шкільне життя дитини — <span class="accent">без хаосу</span>',
      heroSub: "KidReady перетворює ранкові «ти зібрав портфель?» на гру: задачі, зірки й винагороди, які дитина любить виконувати.",
      heroNote: "Безкоштовно · iOS та Android · українською та англійською",
      trust1: "Безкоштовно", trust2: "Без реклами", trust3: "Дві мови", trust4: "iOS та Android", trust5: "Дитячі дані захищені",

      problemEyebrow: "Знайомо?",
      problemTitle: "Ранок. «Ти зібрав портфель?» ×10",
      problemText: "Розклад у голові, доручення на папірцях, мотивація — на нулі. KidReady збирає це в одному місці й перетворює рутину на гру, де дитина сама хоче бути готовою.",

      howEyebrow: "Як це працює",
      howTitle: "Три кроки до спокійного ранку",
      step1t: "Створіть родину", step1d: "Зареєструйтесь і запросіть маму, тата чи няню за одним кодом. Дитина заходить за тим самим кодом — без пошти й паролів.",
      step2t: "Поставте задачі", step2d: "Зіркові задачі для дитини, доручення для всіх, розклад уроків і нагадування в календарі — усе за пару тапів.",
      step3t: "Дитина грає й росте", step3d: "За виконані справи дитина отримує зірки, оживляє свого Редіка й обмінює зірки на реальні винагороди від вас.",

      featEyebrow: "Можливості",
      featTitle: "Усе, щоб дитина була готова",
      f1t: "Метр готовності + Редік", f1d: "Дитина бачить свій прогрес у відсотках. Виконує справи — і її Редік оживає та радіє. Проста й чесна мотивація.",
      f2t: "Зірки та винагороди", f2d: "За кожну справу — зірки. Накопичені зірки дитина обмінює на винагороди, які ви самі придумали: морозиво, нова гра, прогулянка.",
      f3t: "Доручення для всіх", f3d: "Будь-хто в родині ставить доручення будь-кому — з виконавцем, датою й часом. Пуш прилітає кому треба, нагадування не загубиться.",
      f4t: "Розклад уроків", f4d: "Зручний тижневий розклад із часом початку уроків. Дитина завжди знає, що брати з собою завтра.",
      f5t: "Сімейний календар", f5d: "Постав нагадування на дату — і в потрібний час пуш отримають усі члени родини. Сімейна вечеря, лікар, день народження — ніхто не забуде.",
      f6t: "Колекція Редіків", f6d: "П'ять унікальних Редіків, яких дитина відкриває, заробляючи зірки. Чудовий стимул довести справи до кінця.",

      worldsEyebrow: "Два світи в одному застосунку",
      worldsTitle: "Командний пункт для вас — гра для дитини",
      parentsT: "Для батьків", parentsLi1: "Командний пункт з усіма зонами", parentsLi2: "Задачі, доручення, розклад, календар", parentsLi3: "Кілька дітей і кілька дорослих", parentsLi4: "Пуші про виконання справ",
      kidsT: "Для дитини", kidsLi1: "Власний дитячий екран", kidsLi2: "Метр готовності та зірки", kidsLi3: "Оживлення Редіка", kidsLi4: "Магазин винагород",

      collEyebrow: "Гейміфікація",
      collTitle: "Збирай усіх Редіків",
      collText: "Що більше справ виконано — то більше зірок і нових Редіків у колекції.",
      stat1n: "5", stat1l: "Редіків зібрати",
      stat2n: "2", stat2l: "мови (UA/EN)",
      stat3n: "0₴", stat3l: "Безкоштовно",

      privEyebrow: "Спокій батьків",
      privTitle: "Безпечно для дітей",
      privText: "Жодної реклами й трекінгу. Дитина заходить анонімно за сімейним кодом — без пошти й особистих контактів. Дані бачить лише ваша родина.",
      privP1: "Без реклами", privP2: "Без трекінгу", privP3: "Анонімний вхід дитини", privP4: "Дані лише в родині",
      privLink: "Політика конфіденційності",

      ctaEyebrow: "Готові спробувати?",
      ctaTitle: "Завантажте KidReady",
      ctaText: "Безкоштовно для iOS та Android. Скануй QR або тисни кнопку магазину.",
      soon: "Скоро", comingTo: "Незабаром у",

      footRights: "© 2026 KidReady. Усі права захищено.",
      footPrivacy: "Політика конфіденційності", footTerms: "Умови використання", footSupport: "Підтримка",
    },
    en: {
      metaDesc: "KidReady — a family app that makes a child's school routine simple: tasks, stars, rewards, schedule and calendar. Free, no ads.",
      navFeatures: "Features", navHow: "How it works", navGet: "Download",
      heroBadge: "Family app",
      heroTitle: 'A child\'s school life — <span class="accent">without the chaos</span>',
      heroSub: "KidReady turns the morning «did you pack your bag?» into a game: tasks, stars and rewards kids actually enjoy completing.",
      heroNote: "Free · iOS & Android · English and Ukrainian",
      trust1: "Free", trust2: "No ads", trust3: "Two languages", trust4: "iOS & Android", trust5: "Kids' data protected",

      problemEyebrow: "Sound familiar?",
      problemTitle: "Morning. «Did you pack your bag?» ×10",
      problemText: "Schedule in your head, chores on sticky notes, motivation at zero. KidReady brings it all together and turns routine into a game where the child wants to be ready.",

      howEyebrow: "How it works",
      howTitle: "Three steps to a calm morning",
      step1t: "Create a family", step1d: "Sign up and invite mom, dad or a nanny with one code. The child joins with the same code — no email or passwords.",
      step2t: "Set tasks", step2d: "Star tasks for the child, chores for everyone, a lesson schedule and calendar reminders — all in a couple of taps.",
      step3t: "The child plays & grows", step3d: "Completed tasks earn stars, bring their Redik to life, and turn into real rewards you set up.",

      featEyebrow: "Features",
      featTitle: "Everything to get your child ready",
      f1t: "Readiness meter + Redik", f1d: "The child sees their progress in percent. Complete tasks — and their Redik comes alive and cheers. Simple, honest motivation.",
      f2t: "Stars & rewards", f2d: "Every task earns stars. Saved stars are exchanged for rewards you invent: ice cream, a new game, a trip out.",
      f3t: "Chores for everyone", f3d: "Anyone in the family assigns chores to anyone — with assignee, date and time. The push reaches the right person, nothing gets lost.",
      f4t: "Lesson schedule", f4d: "A handy weekly schedule with lesson start times. The child always knows what to bring tomorrow.",
      f5t: "Family calendar", f5d: "Set a reminder on a date — at the right time every family member gets a push. Family dinner, doctor, birthday — no one forgets.",
      f6t: "Redik collection", f6d: "Five unique Rediks the child unlocks by earning stars. A great reason to see things through.",

      worldsEyebrow: "Two worlds in one app",
      worldsTitle: "A control panel for you — a game for the child",
      parentsT: "For parents", parentsLi1: "Control panel with every area", parentsLi2: "Tasks, chores, schedule, calendar", parentsLi3: "Multiple kids and adults", parentsLi4: "Push when tasks are done",
      kidsT: "For the child", kidsLi1: "Their own kid screen", kidsLi2: "Readiness meter and stars", kidsLi3: "Bringing the Redik to life", kidsLi4: "Rewards shop",

      collEyebrow: "Gamification",
      collTitle: "Collect all the Rediks",
      collText: "The more tasks done — the more stars and new Rediks in the collection.",
      stat1n: "5", stat1l: "Rediks to collect",
      stat2n: "2", stat2l: "languages (UA/EN)",
      stat3n: "$0", stat3l: "Free",

      privEyebrow: "Peace of mind",
      privTitle: "Safe for kids",
      privText: "No ads, no tracking. The child joins anonymously with a family code — no email or personal contacts. Only your family sees the data.",
      privP1: "No ads", privP2: "No tracking", privP3: "Anonymous child sign-in", privP4: "Data stays in the family",
      privLink: "Privacy Policy",

      ctaEyebrow: "Ready to try?",
      ctaTitle: "Download KidReady",
      ctaText: "Free for iOS and Android. Scan the QR or tap the store button.",
      soon: "Soon", comingTo: "Coming soon to",

      footRights: "© 2026 KidReady. All rights reserved.",
      footPrivacy: "Privacy Policy", footTerms: "Terms of Use", footSupport: "Support",
    },
  };

  let LANG = localStorage.getItem("kr_lang") ||
    ((navigator.language || "uk").toLowerCase().startsWith("uk") ? "uk" : "en");

  function applyLang(l) {
    LANG = l;
    localStorage.setItem("kr_lang", l);
    const d = I18N[l];
    document.documentElement.lang = l;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", d.metaDesc);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.dataset.i18n;
      if (d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const k = el.dataset.i18nHtml;
      if (d[k] != null) el.innerHTML = d[k];
    });
    document.querySelectorAll("#lang button").forEach((b) =>
      b.classList.toggle("active", b.dataset.lang === l));
    updateScreens();
  }

  // шлях до скріна з урахуванням мови (EN-скріни лежать у screens/en/)
  function screenPath(base) {
    return "assets/screens/" + (LANG === "en" ? "en/" : "") + base + ".png";
  }
  function updateScreens() {
    document.querySelectorAll("img[data-scr]").forEach((img) => {
      img.src = screenPath(img.dataset.scr);
    });
  }

  function initLang() {
    document.querySelectorAll("#lang button").forEach((b) =>
      b.addEventListener("click", () => applyLang(b.dataset.lang)));
    applyLang(LANG);
  }

  // ---------- Reveal при скролі (scroll-based: надійніше за IO на швидкому скролі) ----------
  function initReveal() {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!els.length) return;
    let pending = false;
    function check() {
      pending = false;
      const trigger = window.innerHeight * 0.9;
      for (let i = els.length - 1; i >= 0; i--) {
        const el = els[i];
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
          el.classList.add("in");
          els.splice(i, 1);
        }
      }
    }
    function onScroll() {
      if (pending) return;
      pending = true;
      requestAnimationFrame(check);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    check(); // одразу для того, що вже у в'юпорті
  }

  // ---------- Sticky-телефон: міняє скрін під активну фічу ----------
  function initStickyPhone() {
    const phoneImg = document.getElementById("sticky-screen");
    const blocks = document.querySelectorAll(".feature-block");
    if (!phoneImg || !blocks.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.intersectionRatio > 0.5) {
          const base = e.target.dataset.scr;
          if (base) {
            phoneImg.dataset.scr = base; // запамʼятати поточний (для зміни мови)
            const src = screenPath(base);
            if (phoneImg.getAttribute("src") !== src) phoneImg.src = src;
          }
        }
      });
    }, { threshold: [0.5] });
    blocks.forEach((b) => io.observe(b));
  }

  // ---------- Count-up ----------
  function initCountUp() {
    const nums = document.querySelectorAll("[data-count]");
    if (!nums.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        let cur = 0;
        const step = Math.max(1, Math.round(target / 30));
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) { cur = target; clearInterval(t); }
          el.textContent = cur + suffix;
        }, 30);
        io.unobserve(el);
      });
    }, { threshold: 0.6 });
    nums.forEach((n) => io.observe(n));
  }

  // ---------- Парралакс Редіків у hero ----------
  function initParallax() {
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const reds = document.querySelectorAll(".hero .redik");
    if (!reds.length) return;
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      reds.forEach((r, i) => {
        const k = (i % 2 === 0 ? 1 : -1) * (0.04 + i * 0.015);
        r.style.transform = `translateY(${y * k}px)`;
      });
    }, { passive: true });
  }

  // ---------- Фейкові заблюрені QR (м'які, світлі) ----------
  function fakeQR(seed) {
    const N = 25, cell = 100 / N;
    let s = seed >>> 0;
    const rnd = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
    let r = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#fffdf9"/>`;
    const finder = (x, y) => {
      r += `<rect x="${x * cell}" y="${y * cell}" width="${7 * cell}" height="${7 * cell}" fill="#9aa1ab"/>`;
      r += `<rect x="${(x + 1) * cell}" y="${(y + 1) * cell}" width="${5 * cell}" height="${5 * cell}" fill="#fffdf9"/>`;
      r += `<rect x="${(x + 2) * cell}" y="${(y + 2) * cell}" width="${3 * cell}" height="${3 * cell}" fill="#9aa1ab"/>`;
    };
    const inF = (i, j) => (i < 8 && j < 8) || (i < 8 && j >= N - 8) || (i >= N - 8 && j < 8);
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      if (inF(i, j)) continue;
      if (rnd() > 0.5) r += `<rect x="${i * cell}" y="${j * cell}" width="${cell}" height="${cell}" fill="#9aa1ab"/>`;
    }
    finder(0, 0); finder(N - 7, 0); finder(0, N - 7);
    return r + `</svg>`;
  }
  function initQR() {
    const ios = document.getElementById("qr-ios");
    const and = document.getElementById("qr-and");
    if (ios) ios.innerHTML = fakeQR(20260626);
    if (and) and.innerHTML = fakeQR(99887766);
  }

  // ---------- init ----------
  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    initReveal();
    initStickyPhone();
    initCountUp();
    initParallax();
    initQR();
  });
})();
