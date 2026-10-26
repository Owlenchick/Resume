(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ROLE = { dev: "DEV", gd: "GD", "3d": "3D" };
  const isVideo = (p) => /\.(mp4|webm|mov)(\?|$)/i.test(p);

    const UI = {
    en: {
      "nav.summary": "Summary", "nav.work": "Projects", "nav.exp": "Experience", "nav.eng": "Tech", "nav.stack": "Stack", "nav.mobile": "Mobile", "nav.contact": "Contact",
      "hero.open": "Open to work · remote · full-time / part-time / contract",
      "hero.title": 'I build games<br /><span class="accent">end to end</span> —<br />code first.',
      "hero.lead": "Full-cycle Unity developer. I've taken projects from prototype to Steam release: code, game design, 3D, VFX and publisher pitches. Looking to commit to one big project with a strong team.",
      "hero.dev": "Unity / C# — main focus", "hero.gd": "Game design", "hero.3d": "3D / VFX", "hero.see": "See projects",
      "cv.download": "Download CV", "cv.pdf": "CV · PDF",
      "sum.title": "// at a glance", "sum.jump": "jump to:",
      "g.role": "Role", "g.roleV": "<b>Unity Developer</b> (senior) — also covers game design, 3D / VFX, level design",
      "g.stack": "Core stack", "g.stackV": "C#, Unity 6, URP, Netcode for GameObjects, HLSL / Shader Graph, Blender",
      "g.format": "Work format", "g.tz": "Location & time zone", "g.lang": "Languages", "g.edu": "Education", "g.contacts": "Contacts",
      "stat.years": "years in gamedev", "stat.released": "Steam game released solo", "stat.indev": "Steam games in development", "stat.mobile": "mobile titles",
      "work.title": "Selected work", "work.sub": "PC games I built or am building. Hover a card for a preview, click for details, tech, video and gallery.",
      "exp.title": "Experience", "exp.sub": "Employment and my own projects are listed separately — the own projects ran in parallel with the main job.",
      "exp.jobs": "// employment", "exp.own": "// own projects (in parallel)",
      "eng.title": "How I build", "eng.sub": "Concrete engineering decisions from my projects. Click a card to open the project.",
      "stack.title": "Stack",
      "mobile.title": "Mobile games", "mobile.sub": "Hyper-casual & idle titles at VA Gamedev, 2021–2024, tested with publishers Freeplay and Moonee. The studio has closed, so most games are no longer on Google Play — links lead to AppMagic / TapTap / APKPure.",
      "mx.cpi": "average CPI", "mx.ret": "average retention", "mx.titles": "titles shipped",
      "contact.eyebrow": "Let's get in touch", "contact.title": "Need a Unity developer<br />who also thinks like a designer?",
      "contact.roles": "<b>Main role:</b> Unity Developer (senior). <b>Can also cover:</b> game design, 3D / VFX, level design.",
      "contact.tg": "Write on Telegram", "footer": "built by hand · no engine required",
      "f.location": "Location", "f.languages": "Languages", "f.education": "Education", "f.format": "Format",
      "m.work": "// my work", "m.gallery": "// gallery", "m.role": "Role", "m.team": "Team", "m.when": "When", "m.status": "Status",
      "m.genre": "Genre", "m.year": "Year", "m.studio": "Studio", "m.platform": "Platform", "open": "Open", "eng.open": "Open project →",
    },
    ru: {
      "nav.summary": "Кратко", "nav.work": "Проекты", "nav.exp": "Опыт", "nav.eng": "Техника", "nav.stack": "Стек", "nav.mobile": "Мобайл", "nav.contact": "Контакты",
      "hero.open": "Открыт к работе · удалённо · full-time / part-time / контракт",
      "hero.title": 'Делаю игры<br /><span class="accent">от и до</span> —<br />код в приоритете.',
      "hero.lead": "Разработчик полного цикла на Unity. Вёл проекты от прототипа до релиза в Steam: код, геймдизайн, 3D, VFX и работа с издателями. Хочу вкладываться в один большой проект с сильной командой.",
      "hero.dev": "Unity / C# — основной фокус", "hero.gd": "Геймдизайн", "hero.3d": "3D / VFX", "hero.see": "Смотреть проекты",
      "cv.download": "Скачать резюме", "cv.pdf": "Резюме · PDF",
      "sum.title": "// коротко", "sum.jump": "перейти:",
      "g.role": "Роль", "g.roleV": "<b>Unity-разработчик</b> (senior) — также геймдизайн, 3D / VFX, левел-дизайн",
      "g.stack": "Основной стек", "g.stackV": "C#, Unity 6, URP, Netcode for GameObjects, HLSL / Shader Graph, Blender",
      "g.format": "Формат работы", "g.tz": "Город и часовой пояс", "g.lang": "Языки", "g.edu": "Образование", "g.contacts": "Контакты",
      "stat.years": "лет в геймдеве", "stat.released": "игра в Steam, выпущена соло", "stat.indev": "игры в Steam в разработке", "stat.mobile": "мобильных игр",
      "work.title": "Избранные проекты", "work.sub": "PC-игры, которые я сделал или делаю сейчас. Наведи на карточку — превью, кликни — подробности, технологии, видео и галерея.",
      "exp.title": "Опыт работы", "exp.sub": "Работа в компаниях и свои проекты разделены — свои проекты шли параллельно с основной работой.",
      "exp.jobs": "// работа", "exp.own": "// свои проекты (параллельно)",
      "eng.title": "Как я строю игры", "eng.sub": "Конкретные технические решения из моих проектов. Кликни на карточку, чтобы открыть проект.",
      "stack.title": "Стек",
      "mobile.title": "Мобильные игры", "mobile.sub": "Гиперказуальные и idle-игры VA Gamedev, 2021–2024, тестировались с издателями Freeplay и Moonee. Студия закрылась, поэтому большинства игр больше нет в Google Play — ссылки ведут на AppMagic / TapTap / APKPure.",
      "mx.cpi": "средний CPI", "mx.ret": "средний retention", "mx.titles": "игр выпущено",
      "contact.eyebrow": "Давай пообщаемся", "contact.title": "Нужен Unity-разработчик,<br />который думает как геймдизайнер?",
      "contact.roles": "<b>Основная роль:</b> Unity-разработчик (senior). <b>Также могу закрыть:</b> геймдизайн, 3D / VFX, левел-дизайн.",
      "contact.tg": "Написать в Telegram", "footer": "сделано руками · без движка",
      "f.location": "Где я", "f.languages": "Языки", "f.education": "Образование", "f.format": "Формат",
      "m.work": "// что я делал", "m.gallery": "// галерея", "m.role": "Роль", "m.team": "Команда", "m.when": "Когда", "m.status": "Статус",
      "m.genre": "Жанр", "m.year": "Год", "m.studio": "Студия", "m.platform": "Платформа", "open": "Открыть", "eng.open": "Открыть проект →",
    },
    es: {
      "nav.summary": "Resumen", "nav.work": "Proyectos", "nav.exp": "Experiencia", "nav.eng": "Técnica", "nav.stack": "Stack", "nav.mobile": "Móvil", "nav.contact": "Contacto",
      "hero.open": "Disponible · remoto · tiempo completo / parcial / contrato",
      "hero.title": 'Creo juegos<br /><span class="accent">de principio a fin</span> —<br />código primero.',
      "hero.lead": "Desarrollador Unity de ciclo completo. He llevado proyectos del prototipo al lanzamiento en Steam: código, diseño de juego, 3D, VFX y presentaciones a editores. Busco comprometerme con un gran proyecto junto a un equipo fuerte.",
      "hero.dev": "Unity / C# — enfoque principal", "hero.gd": "Diseño de juegos", "hero.3d": "3D / VFX", "hero.see": "Ver proyectos",
      "cv.download": "Descargar CV", "cv.pdf": "CV · PDF",
      "sum.title": "// en resumen", "sum.jump": "ir a:",
      "g.role": "Rol", "g.roleV": "<b>Desarrollador Unity</b> (senior) — también diseño de juegos, 3D / VFX, diseño de niveles",
      "g.stack": "Stack principal", "g.stackV": "C#, Unity 6, URP, Netcode for GameObjects, HLSL / Shader Graph, Blender",
      "g.format": "Modalidad", "g.tz": "Ubicación y zona horaria", "g.lang": "Idiomas", "g.edu": "Educación", "g.contacts": "Contacto",
      "stat.years": "años en gamedev", "stat.released": "juego en Steam lanzado en solitario", "stat.indev": "juegos de Steam en desarrollo", "stat.mobile": "juegos móviles",
      "work.title": "Proyectos destacados", "work.sub": "Juegos de PC que hice o estoy haciendo. Pasa el cursor para ver un avance, haz clic para detalles, tecnología, vídeo y galería.",
      "exp.title": "Experiencia", "exp.sub": "El empleo y los proyectos propios aparecen por separado — los proyectos propios fueron en paralelo al trabajo principal.",
      "exp.jobs": "// empleo", "exp.own": "// proyectos propios (en paralelo)",
      "eng.title": "Cómo construyo", "eng.sub": "Decisiones técnicas concretas de mis proyectos. Haz clic en una tarjeta para abrir el proyecto.",
      "stack.title": "Stack",
      "mobile.title": "Juegos móviles", "mobile.sub": "Juegos hipercasuales e idle de VA Gamedev, 2021–2024, probados con los editores Freeplay y Moonee. El estudio cerró, por eso la mayoría ya no están en Google Play — los enlaces llevan a AppMagic / TapTap / APKPure.",
      "mx.cpi": "CPI medio", "mx.ret": "retención media", "mx.titles": "juegos publicados",
      "contact.eyebrow": "Hablemos", "contact.title": "¿Necesitas un desarrollador Unity<br />que también piense como diseñador?",
      "contact.roles": "<b>Rol principal:</b> desarrollador Unity (senior). <b>También puedo cubrir:</b> diseño de juegos, 3D / VFX, diseño de niveles.",
      "contact.tg": "Escribir por Telegram", "footer": "hecho a mano · sin motor",
      "f.location": "Ubicación", "f.languages": "Idiomas", "f.education": "Educación", "f.format": "Modalidad",
      "m.work": "// mi trabajo", "m.gallery": "// galería", "m.role": "Rol", "m.team": "Equipo", "m.when": "Cuándo", "m.status": "Estado",
      "m.genre": "Género", "m.year": "Año", "m.studio": "Estudio", "m.platform": "Plataforma", "open": "Abrir", "eng.open": "Abrir proyecto →",
    },
  };
  const LANGS = ["en", "ru", "es"];
  let lang = "en";
  try { lang = localStorage.getItem("lang") || ""; } catch (e) { lang = ""; }
  if (!LANGS.includes(lang)) {
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    lang = LANGS.includes(nav) ? nav : "en";
  }
  const u = (k) => UI[lang][k] ?? UI.en[k] ?? k;
    const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.en : v ?? "");

    const localMedia = (list = []) => list.map((p) => (isVideo(p) ? { type: "video", src: p } : { type: "img", src: p, thumb: p }));
  const allMedia = (p) => [...localMedia(p.local), ...(p.media || [])];
  const chips = (roles) => roles.map((r) => `<span class="chip chip-${r}">${ROLE[r]}</span>`).join("");

    const P = window.PROFILE;
  const tg = `https://t.me/${P.telegram}`;
  $$(".tg-link").forEach((a) => (a.href = tg));
  $$(".li-link").forEach((a) => (a.href = P.linkedin));
  $$(".gh-link").forEach((a) => (a.href = P.github));
  if (P.email) { const m = $("#mail-link"); m.href = "mailto:" + P.email; m.hidden = false; }
  $("#year").textContent = new Date().getFullYear();

    function render() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => (el.textContent = u(el.dataset.i18n)));
    $$("[data-i18n-html]").forEach((el) => (el.innerHTML = u(el.dataset.i18nHtml)));
    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));

    $("#p-title").textContent = t(P.title);
    $("#p-also").textContent = t(P.also);
    $$(".cv-link").forEach((a) => { a.href = P.cv[lang] || P.cv.en; a.setAttribute("download", ""); });

    const links = `<a href="${tg}" target="_blank" rel="noopener">Telegram @${esc(P.telegram)}</a> · <a href="${esc(P.linkedin)}" target="_blank" rel="noopener">LinkedIn</a> · <a href="${esc(P.github)}" target="_blank" rel="noopener">GitHub</a>${P.email ? ` · <a href="mailto:${esc(P.email)}">${esc(P.email)}</a>` : ""}`;
    $("#glance").innerHTML = [
      [u("g.role"), u("g.roleV")],
      [u("g.stack"), esc(u("g.stackV"))],
      [u("g.format"), esc(t(P.format))],
      [u("g.tz"), esc(t(P.location)) + " · " + esc(t(P.timezone))],
      [u("g.lang"), esc(t(P.languages))],
      [u("g.contacts"), links],
    ].map(([k, v]) => `<div><dt class="mono">${k}</dt><dd>${v}</dd></div>`).join("");

    $("#facts").innerHTML = [
      [u("f.location"), esc(t(P.location)) + " · UTC−3"], [u("f.format"), esc(t(P.format))],
      [u("f.languages"), esc(t(P.languages))], [u("f.education"), esc(t(P.education))],
    ].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

        $("#featured").innerHTML = window.FEATURED.map((p, i) => {
      const cover = p.cover || (allMedia(p).find((m) => m.type === "img") || {}).src;
      return `
      <article class="fcard ${i === 0 ? "fcard-lg" : ""}" data-slug="${p.slug}" tabindex="0" role="button" aria-label="${u("open")}: ${esc(p.title)}">
        <div class="fcard-media">
          <img src="${esc(cover)}" alt="${esc(p.title)}" loading="lazy" referrerpolicy="no-referrer" />
          ${p.preview ? `<video muted loop playsinline preload="none" data-src="${esc(p.preview)}"></video>` : ""}
          <span class="fcard-status mono">${esc(t(p.status))}</span>
        </div>
        <div class="fcard-info">
          <div class="fcard-top"><div class="chips">${chips(p.roles)}</div><span class="mono muted">${esc(t(p.period))}</span></div>
          <h3>${esc(p.title)}</h3>
          <p class="fcard-tag">${esc(t(p.tagline))}</p>
          <p class="fcard-meta mono">${esc(t(p.position))} · ${esc(t(p.studio))}</p>
        </div>
      </article>`;
    }).join("");

    $$(".fcard").forEach((card) => {
      const v = card.querySelector("video");
      if (v && matchMedia("(hover: hover)").matches) {
        card.addEventListener("mouseenter", () => {
          if (!v.src) v.src = v.dataset.src;
          v.play().then(() => card.classList.add("playing")).catch(() => {});
        });
        card.addEventListener("mouseleave", () => { v.pause(); card.classList.remove("playing"); });
      }
      bindOpen(card, () => openProject(window.FEATURED.find((p) => p.slug === card.dataset.slug)));
    });

        $("#mobile-grid").innerHTML = window.MOBILE.map((g) => `
      <article class="mcard" data-slug="${g.slug}" tabindex="0" role="button" aria-label="${u("open")}: ${esc(g.title)}">
        <div class="mcard-media"><img src="${esc(g.cover)}" alt="${esc(g.title)}" loading="lazy" referrerpolicy="no-referrer" /></div>
        <div class="mcard-info">
          <h3>${esc(g.title)}</h3>
          <p class="mono muted">${esc(t(g.genre))} · ${esc(g.date)}</p>
        </div>
      </article>`).join("");
    $$(".mcard").forEach((card) => bindOpen(card, () => openMobile(window.MOBILE.find((g) => g.slug === card.dataset.slug))));

        const tl = (e) => `
      <li class="tl-item">
        <div class="tl-when mono">${esc(t(e.period))}</div>
        <div class="tl-body">
          <h3>${esc(t(e.role))} <span class="at">@</span> <a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.company)}</a></h3>
          <p class="mono muted">${esc(t(e.meta))}${e.project ? " · " + esc(t(e.project)) : ""}</p>
          <p>${esc(t(e.text))}</p>
          ${e.note ? `<p class="tl-note">${esc(t(e.note))}</p>` : ""}
        </div>
      </li>`;
    $("#timeline-jobs").innerHTML = window.EXPERIENCE.filter((e) => e.type !== "own").map(tl).join("");
    $("#timeline-own").innerHTML = window.EXPERIENCE.filter((e) => e.type === "own").map(tl).join("");

        $("#eng-grid").innerHTML = window.ENGINEERING.map((c) => {
      const p = window.FEATURED.find((f) => f.slug === c.project);
      return `
      <article class="eng-card" data-slug="${c.project}" tabindex="0" role="button">
        <div class="eng-top"><span class="eng-icon">${c.icon}</span><span class="mono muted">${esc(p ? p.title : "")}</span></div>
        <h3>${esc(t(c.title))}</h3>
        <p>${esc(t(c.text))}</p>
        <div class="eng-tags">${c.tags.map((x) => `<span>${esc(t(x))}</span>`).join("")}</div>
        <span class="eng-open mono">${u("eng.open")}</span>
      </article>`;
    }).join("");
    $$(".eng-card").forEach((card) => bindOpen(card, () => openProject(window.FEATURED.find((p) => p.slug === card.dataset.slug))));

        $("#metrics").innerHTML = [["≈ $0.30", u("mx.cpi")], ["27–30%", u("mx.ret")], ["12", u("mx.titles")]]
      .map(([v, k]) => `<div class="metric"><b>${v}</b><span>${k}</span></div>`).join("");

        $("#stack-grid").innerHTML = window.STACK.map((s) => `
      <div class="stack-card${s.main ? " main" : ""}">
        <h3 class="mono">${esc(t(s.group))}</h3>
        <ul>${s.items.map((i) => `<li>${esc(t(i))}</li>`).join("")}</ul>
      </div>`).join("");

    revealAll();
  }

  function bindOpen(card, fn) {
    card.addEventListener("click", fn);
    card.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), fn()));
  }

    const modal = $("#modal");
  const body = $("#modal-body");
  let current = null;

  const thumbHTML = (m, i) => {
    if (m.type === "yt") return `<button class="g-item g-yt" data-i="${i}"><img src="https://i.ytimg.com/vi/${m.id}/hqdefault.jpg" alt="" loading="lazy" /><span class="g-play">▶</span></button>`;
    if (m.type === "video") return `<button class="g-item g-vid" data-i="${i}"><video muted loop playsinline preload="metadata" src="${esc(m.src)}#t=0.5"></video><span class="g-play">▶</span></button>`;
    return `<button class="g-item" data-i="${i}"><img src="${esc(m.thumb || m.src)}" alt="" loading="lazy" referrerpolicy="no-referrer" /></button>`;
  };

  function renderModal({ title, tagline, metaRows, about, work, tech, links, media, chipsHTML }) {
    const ytMain = media.find((m) => m.type === "yt");
    const gallery = media.filter((m) => m !== ytMain);
    const workList = (work || []).map(t).filter(Boolean);
    body.innerHTML = `
      <header class="m-head">
        ${chipsHTML ? `<div class="chips">${chipsHTML}</div>` : ""}
        <h2>${esc(title)}</h2>
        ${tagline ? `<p class="m-tag">${esc(t(tagline))}</p>` : ""}
      </header>
      ${ytMain ? `<div class="m-video"><iframe src="https://www.youtube-nocookie.com/embed/${ytMain.id}?rel=0" title="${esc(title)}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>` : ""}
      <div class="m-grid">
        <div>
          ${about ? `<p class="m-about">${esc(t(about))}</p>` : ""}
          ${workList.length ? `<h4 class="mono">${u("m.work")}</h4><ul class="m-work">${workList.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>` : ""}
        </div>
        <aside class="m-side">
          ${metaRows.map(([k, v]) => `<div><span class="mono muted">${u(k)}</span><b>${esc(t(v))}</b></div>`).join("")}
          ${tech && tech.length ? `<div class="m-tech">${tech.map((x) => `<span>${esc(t(x))}</span>`).join("")}</div>` : ""}
          ${links && links.length ? `<div class="m-links">${links.map((l) => `<a class="btn btn-sm" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(t(l.label))} ↗</a>`).join("")}</div>` : ""}
        </aside>
      </div>
      ${gallery.length ? `<h4 class="mono">${u("m.gallery")} · ${gallery.length}</h4><div class="m-gallery">${gallery.map(thumbHTML).join("")}</div>` : ""}
    `;
    $$(".g-item", body).forEach((b) => b.addEventListener("click", () => openLightbox(gallery, +b.dataset.i)));
    $$(".g-vid", body).forEach((b) => {
      const v = b.querySelector("video");
      b.addEventListener("mouseenter", () => v.play().catch(() => {}));
      b.addEventListener("mouseleave", () => v.pause());
    });
    if (!modal.open) { modal.showModal(); modal.scrollTop = 0; }
    document.body.classList.add("locked");
  }

  function openProject(p) {
    current = () => openProject(p);
    history.replaceState(null, "", "#" + p.slug);
    renderModal({
      title: p.title, tagline: p.tagline, about: p.about, work: p.work, tech: p.tech, links: p.links,
      media: allMedia(p), chipsHTML: chips(p.roles),
      metaRows: [["m.role", p.position], ["m.team", p.studio], ["m.when", p.period], ["m.status", p.status]],
    });
  }
  function openMobile(g) {
    current = () => openMobile(g);
    history.replaceState(null, "", "#" + g.slug);
    renderModal({
      title: g.title, tagline: g.about, about: "", work: g.work ? [g.work] : [], tech: [], links: g.links,
      media: [...localMedia(g.local), ...g.media],
      metaRows: [["m.genre", g.genre], ["m.year", g.date], ["m.studio", "VA Gamedev"], ["m.platform", "Android"]],
    });
  }
  function closeModal() { modal.close(); }
  modal.addEventListener("close", () => {
    current = null;
    document.body.classList.remove("locked");
    history.replaceState(null, "", location.pathname + location.search);
    body.innerHTML = "";
  });
  $(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

    const lb = $("#lightbox"), stage = $("#lb-stage"), count = $("#lb-count");
  let lbItems = [], lbI = 0;
  function showLb() {
    const m = lbItems[lbI];
    stage.innerHTML = m.type === "yt"
      ? `<iframe src="https://www.youtube-nocookie.com/embed/${m.id}?autoplay=1&rel=0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
      : m.type === "video"
        ? `<video src="${esc(m.src)}" controls autoplay loop playsinline></video>`
        : `<img src="${esc(m.src)}" alt="" referrerpolicy="no-referrer" />`;
    count.textContent = `${lbI + 1} / ${lbItems.length}`;
    const multi = lbItems.length > 1;
    $$(".lb-nav").forEach((b) => (b.hidden = !multi));
  }
  function openLightbox(items, i) { lbItems = items; lbI = i; showLb(); if (!lb.open) lb.showModal(); }
  function closeLb() { lb.close(); }
  lb.addEventListener("close", () => (stage.innerHTML = ""));
  const step = (d) => { lbI = (lbI + d + lbItems.length) % lbItems.length; showLb(); };
  $(".lb-close").addEventListener("click", closeLb);
  $(".lb-prev").addEventListener("click", () => step(-1));
  $(".lb-next").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target === stage) closeLb(); });
  lb.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
  let tx = 0;
  lb.addEventListener("touchstart", (e) => (tx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); });

    $$(".lang button").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
    if (current && modal.open) { const y = modal.scrollTop; current(); modal.scrollTop = y; }
  }));

    const io = "IntersectionObserver" in window
    ? new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 })
    : null;
  let firstRender = true;
  function revealAll() {
    $$(".fcard, .mcard, .tl-item, .stack-card, .eng-card, .section-head, .stat, .metric").forEach((el) => {
      if (el.classList.contains("reveal")) return;
      el.classList.add("reveal");
      if (io && firstRender) io.observe(el); else el.classList.add("in");
    });
    firstRender = false;
  }

  render();

    const navLinks = $$("#nav a");
  const sections = navLinks.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  const bar = $("#progress"), toTop = $("#to-top");
  function onScroll() {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    toTop.classList.toggle("show", y > 900);
    let cur = null;
    for (const sec of sections) if (sec.getBoundingClientRect().top < innerHeight * 0.35) cur = sec;
    if (innerHeight + y >= document.documentElement.scrollHeight - 4) cur = sections[sections.length - 1];
    const id = cur ? cur.id : "";
    if (id === lastId) return;
    lastId = id;
    navLinks.forEach((a) => {
      const on = a.getAttribute("href") === "#" + id;
      a.classList.toggle("active", on);
      if (on) { const n = $("#nav"); n.scrollTo({ left: a.offsetLeft - n.clientWidth / 2 + a.clientWidth / 2, behavior: "smooth" }); }
    });
  }
  let lastId = null;
  let ticking = false;
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { onScroll(); ticking = false; }); } }, { passive: true });
  onScroll();

    const s = location.hash.slice(1);
  const f = window.FEATURED.find((p) => p.slug === s);
  const m = window.MOBILE.find((g) => g.slug === s);
  if (f) openProject(f); else if (m) openMobile(m);
})();
