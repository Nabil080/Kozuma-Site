// Homepage only: the journey list, the chevron on the timeline, the Rewind cards
// and the fade-in of sections. Loaded before site.js, which sets the language.

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  return element;
}

function langSpan(lang, text) {
  const span = createElement('span');
  span.lang = lang;
  span.textContent = text;
  return span;
}

// Title and description follow the language, so do the Rewind cards.
const pageTitles = {
  fr: 'Nabil Bellila, développeur indépendant · Kozuma',
  en: 'Nabil Bellila, independent developer · Kozuma',
};
const pageDescriptions = {
  fr: 'Nabil Bellila est développeur indépendant, en France. Sous le nom de Kozuma, il fabrique des applis, des sites, des outils et des jeux vidéo, avec le cœur.',
  en: 'Nabil Bellila is an independent developer in France. Under the name Kozuma, he makes apps, websites, tools and video games, with care.',
};

document.addEventListener('kozuma:lang', (event) => {
  const lang = event.detail;
  document.title = pageTitles[lang];
  document.querySelector('meta[name="description"]').content = pageDescriptions[lang];
  for (const img of document.querySelectorAll('img[data-card]')) {
    img.src = '/img/rewind/' + (lang === 'fr' ? 'fr/' : '') + img.dataset.card + '.webp';
  }
});

// Journey, built from js/journey.js. If that file fails to load, the section stays hidden.

function isValidEntry(entry) {
  return entry && (entry.fr || entry.title) && (entry.inProgress || !isNaN(new Date(entry.date + 'T12:00:00')));
}

function newestFirst(entries) {
  const sortKey = (entry) => (entry.inProgress ? '9999' : entry.date);
  return entries.sort((a, b) => (sortKey(a) < sortKey(b) ? -1 : sortKey(a) > sortKey(b) ? 1 : 0)).reverse();
}

function formatDate(entry, locale) {
  const format = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  const start = new Date(entry.date + 'T12:00:00');
  const end = new Date(entry.end + 'T12:00:00');
  const text = isNaN(end) ? format.format(start) : format.formatRange(start, end);
  return locale === 'fr-FR' ? text.replace(/^1 /, '1er ') : text;
}

function entryDate(entry) {
  if (entry.inProgress) {
    const status = createElement('span', 'journey-status');
    status.append(langSpan('fr', 'En cours'), langSpan('en', 'In progress'));
    return status;
  }
  const time = createElement('time');
  time.dateTime = entry.date;
  time.append(langSpan('fr', formatDate(entry, 'fr-FR')), langSpan('en', formatDate(entry, 'en-GB')));
  return time;
}

function entryText(entry, className) {
  const text = createElement('span', className);
  text.append(langSpan('fr', entry.fr), langSpan('en', entry.en || entry.fr));
  return text;
}

function entryLink(entry, className) {
  const host = new URL(entry.link).hostname;
  const link = createElement('a', className);
  let fr = 'Voir le site';
  let en = 'See the site';
  if (host.endsWith('github.com')) {
    fr = 'Voir sur GitHub';
    en = 'See on GitHub';
  } else if (host.endsWith('itch.io')) {
    fr = 'Jouer sur itch.io';
    en = 'Play on itch.io';
  }
  link.href = entry.link;
  link.rel = 'noopener';
  link.append(langSpan('fr', fr), langSpan('en', en));
  return link;
}

function renderJourney() {
  if (typeof JOURNEY === 'undefined') return;
  const list = document.querySelector('.journey-list');

  newestFirst(JOURNEY.filter(isValidEntry)).forEach((entry, index) => {
    const item = createElement('li', 'reveal');
    const body = createElement('div');
    const actions = createElement('div', 'journey-actions');
    if (entry.collapsed) item.dataset.collapsed = '';

    const title = createElement('span', 'journey-title');
    title.append(langSpan('fr', entry.title || entry.fr), langSpan('en', entry.titleEn || entry.title || entry.en || entry.fr));
    body.append(title);
    if (entry.title && entry.fr) body.append(entryText(entry, 'journey-text'));
    if (entry.link) actions.append(entryLink(entry, 'journey-link'));

    const steps = newestFirst((entry.steps || []).filter(isValidEntry));
    if (steps.length) {
      const fold = createElement('div', 'journey-fold');
      const stepList = createElement('ol', 'journey-steps');
      const toggle = createElement('button', 'journey-toggle');
      stepList.id = 'journey-steps-' + index;
      for (const step of steps) {
        const row = createElement('li');
        const text = entryText(step);
        if (step.link) text.append(' ', entryLink(step, 'step-link'));
        row.append(entryDate(step), text);
        stepList.append(row);
      }
      toggle.type = 'button';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', stepList.id);
      toggle.append(langSpan('fr', 'Voir le détail (' + steps.length + ')'), langSpan('en', 'Show details (' + steps.length + ')'));
      toggle.insertAdjacentHTML('beforeend', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>');
      toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') !== 'true';
        toggle.setAttribute('aria-expanded', String(open));
        fold.classList.toggle('open', open);
        setTimeout(updateChevronTarget, 260); // after the fold animation
      });
      actions.append(toggle);
      fold.append(stepList);
      body.append(actions, fold);
    } else if (entry.link) {
      body.append(actions);
    }

    item.append(entryDate(entry), body);
    list.append(item);
  });
  document.getElementById('journey').hidden = !list.children.length;

  // Collapsed entries wait behind a "Show more" button
  const collapsed = Array.from(list.querySelectorAll('[data-collapsed]'));
  if (!collapsed.length) return;
  const more = createElement('button', 'journey-toggle journey-more');
  more.type = 'button';
  more.append(langSpan('fr', 'Voir plus (' + collapsed.length + ')'), langSpan('en', 'Show more (' + collapsed.length + ')'));
  for (const item of collapsed) item.hidden = true;
  more.addEventListener('click', () => {
    for (const item of collapsed) item.hidden = false;
    more.remove();
    const first = collapsed[0].querySelector('.journey-toggle, a');
    if (first) first.focus({ preventScroll: true });
    updateChevronTarget();
  });
  list.after(more);
}

// Chevron on the timeline bar: it moves to the section being read, with a spring
// so a new target redirects it mid-way instead of making it jump.

const timeline = document.getElementById('timeline');
const chevron = document.getElementById('chevron');
const stops = Array.from(timeline.querySelectorAll('[data-stop]'));
let chevronY = 0;
let chevronSpeed = 0;
let chevronTarget = 0;
let lastFrame = 0;
let animating = false;

function moveChevron(y) {
  chevron.style.transform = 'translateY(' + y + 'px)';
}

function updateChevronTarget() {
  const readingLine = innerHeight * 0.42;
  const timelineTop = timeline.getBoundingClientRect().top + scrollY;
  let current = stops[0];
  for (const stop of stops) {
    if (stop.getBoundingClientRect().top <= readingLine) current = stop;
  }
  const box = current.getBoundingClientRect();
  // In a tall section, keep following the scroll down to its bottom
  const inside = Math.min(Math.max(readingLine - box.top, 0), Math.max(box.height - chevron.clientHeight, 0));
  chevronTarget = box.top + scrollY - timelineTop + inside;

  if (reducedMotion) {
    chevronY = chevronTarget;
    moveChevron(chevronY);
    return;
  }
  if (!animating) {
    animating = true;
    lastFrame = performance.now();
    requestAnimationFrame(animateChevron);
  }
}

function animateChevron(now) {
  const dt = Math.min((now - lastFrame) / 1000, 1 / 30);
  lastFrame = now;
  const stiffness = 170;
  const damping = 24;
  chevronSpeed += (-stiffness * (chevronY - chevronTarget) - damping * chevronSpeed) * dt;
  chevronY += chevronSpeed * dt;
  if (Math.abs(chevronY - chevronTarget) < 0.3 && Math.abs(chevronSpeed) < 0.3) {
    chevronY = chevronTarget;
    animating = false;
    moveChevron(chevronY);
    return;
  }
  moveChevron(chevronY.toFixed(2));
  requestAnimationFrame(animateChevron);
}

// Rewind cards: drag with the mouse, with a bit of momentum. Touch uses native scrolling.

const cards = document.getElementById('cards');
let dragging = false;
let dragStartX = 0;
let dragStartScroll = 0;
let lastPointerX = 0;
let dragSpeed = 0;
let glideFrame = 0;

cards.addEventListener('pointerdown', (event) => {
  if (event.pointerType !== 'mouse') return;
  dragging = true;
  dragStartX = lastPointerX = event.clientX;
  dragStartScroll = cards.scrollLeft;
  dragSpeed = 0;
  cancelAnimationFrame(glideFrame);
  cards.classList.add('dragging');
  cards.setPointerCapture(event.pointerId);
});

cards.addEventListener('pointermove', (event) => {
  if (!dragging) return;
  dragSpeed = event.clientX - lastPointerX;
  lastPointerX = event.clientX;
  cards.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
});

function endDrag() {
  if (!dragging) return;
  dragging = false;
  const glide = () => {
    if (Math.abs(dragSpeed) < 0.4 || reducedMotion) {
      cards.classList.remove('dragging');
      return;
    }
    cards.scrollLeft -= dragSpeed;
    dragSpeed *= 0.94;
    glideFrame = requestAnimationFrame(glide);
  };
  glide();
}

cards.addEventListener('pointerup', endDrag);
cards.addEventListener('pointercancel', endDrag);

renderJourney();

addEventListener('scroll', updateChevronTarget, { passive: true });
addEventListener('resize', updateChevronTarget);
updateChevronTarget();

// Sections fade in the first time they scroll into view
const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  }
}, { rootMargin: '0px 0px -8% 0px' });
for (const element of document.querySelectorAll('.reveal')) revealObserver.observe(element);
