/* Reels-inspired portfolio navigation.
   Uses native scrolling/snap; never blocks touch gestures or wheel scrolling. */
(() => {
  "use strict";

  const chapters = Array.from(document.querySelectorAll("main > section[data-reel-title]"));
  if (chapters.length < 2) return;

  const header = document.querySelector(".top");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktop = window.matchMedia("(min-width: 921px)");
  const root = document.documentElement;
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const titleOf = (section) => section.dataset.reelTitle || section.id;
  const countOf = (index) =>
    String(index + 1).padStart(2, "0") + " / " + String(chapters.length).padStart(2, "0");

  const progress = make("div", "reel-page-progress");
  progress.setAttribute("aria-hidden", "true");
  const progressFill = make("span");
  progress.append(progressFill);

  const rail = make("nav", "reel-rail");
  rail.setAttribute("aria-label", "Portfolio chapter navigation");
  rail.append(make("div", "reel-rail-heading", "CHAPTERS"));
  const list = make("ol", "reel-rail-list");
  const railLinks = chapters.map((section, index) => {
    const li = make("li");
    const a = make("a", "reel-rail-link");
    a.href = "#" + section.id;
    a.setAttribute("aria-label", "Chapter " + (index + 1) + ": " + titleOf(section));
    const label = make("span", "reel-rail-label", titleOf(section));
    label.setAttribute("aria-hidden", "true");
    const dot = make("span", "reel-rail-dot");
    dot.setAttribute("aria-hidden", "true");
    a.append(label, dot);
    li.append(a);
    list.append(li);
    return a;
  });
  rail.append(list);

  const mobile = make("nav", "reel-mobile-nav");
  mobile.setAttribute("aria-label", "Previous and next portfolio chapter");
  const meta = make("div", "reel-mobile-meta");
  const counter = make("span", "reel-mobile-count", countOf(0));
  const title = make("span", "reel-mobile-title", titleOf(chapters[0]));
  meta.append(counter, title);
  const actions = make("div", "reel-mobile-actions");
  const previous = make("button", "reel-mobile-arrow", "↑");
  const next = make("button", "reel-mobile-arrow", "↓");
  previous.type = "button";
  next.type = "button";
  previous.setAttribute("aria-label", "Previous chapter");
  next.setAttribute("aria-label", "Next chapter");
  actions.append(previous, next);
  mobile.append(meta, actions);

  document.body.append(progress, rail, mobile);

  let activeIndex = -1;
  let ticking = false;

  const headerHeight = () => desktop.matches && header ? header.getBoundingClientRect().height : 0;
  const updateHeader = () => {
    root.style.setProperty("--reel-header-height", Math.ceil(headerHeight()) + "px");
  };

  function activeFromScroll() {
    const marker = window.scrollY + Math.min(window.innerHeight * 0.46, 350);
    let index = 0;
    for (let i = 1; i < chapters.length; i++) {
      const top = chapters[i].getBoundingClientRect().top + window.scrollY;
      if (top <= marker) index = i;
      else break;
    }
    return index;
  }

  function update() {
    ticking = false;
    const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
    const ratio = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    progressFill.style.transform = "scaleX(" + ratio + ")";

    const index = activeFromScroll();
    if (index === activeIndex) return;
    activeIndex = index;
    counter.textContent = countOf(index);
    title.textContent = titleOf(chapters[index]);
    previous.disabled = index === 0;
    next.disabled = index === chapters.length - 1;
    for (let i = 0; i < railLinks.length; i++) {
      if (i === index) railLinks[i].setAttribute("aria-current", "location");
      else railLinks[i].removeAttribute("aria-current");
    }
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  function goTo(index) {
    if (index < 0 || index >= chapters.length) return;
    const behavior = reducedMotion.matches ? "auto" : "smooth";
    if (index === 0) {
      window.scrollTo({ top: 0, behavior });
      return;
    }
    const destination = chapters[index].getBoundingClientRect().top +
      window.scrollY - headerHeight() - (desktop.matches ? 12 : 0);
    window.scrollTo({ top: Math.max(0, Math.round(destination)), behavior });
  }

  previous.addEventListener("click", () => goTo(activeIndex - 1));
  next.addEventListener("click", () => goTo(activeIndex + 1));

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", () => { updateHeader(); requestUpdate(); }, { passive: true });
  window.addEventListener("hashchange", requestUpdate);
  if (typeof ResizeObserver !== "undefined" && header) {
    new ResizeObserver(() => { updateHeader(); requestUpdate(); }).observe(header);
  }

  updateHeader();
  requestUpdate();
})();
