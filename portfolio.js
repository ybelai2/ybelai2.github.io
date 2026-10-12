/* Yohannes Belai: static site renderer; edit portfolio-config.js for content. */
(function () {
  "use strict";
  const data = window.PORTFOLIO_CONFIG;
  if (!data) return;

  const byId = (id) => document.getElementById(id);
  const el = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined && value !== null) node.textContent = String(value);
    return node;
  };
  const attach = (parent, ...children) => {
    for (const child of children) if (child) parent.appendChild(child);
    return parent;
  };
  const link = (href, label, className) => {
    const a = el("a", className, label);
    if (typeof href !== "string" || !/^(https:\/\/|mailto:|\/)/.test(href)) {
      throw new Error("Unsupported link URL");
    }
    a.href = href;
    if (href.startsWith("https://")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    return a;
  };


  // Keep publicly visible links and the hero introduction editable in one file.
  const socialMap = new Map((data.socials || []).map(s => [s.id, s]));
  for (const anchor of document.querySelectorAll("a[data-social]")) {
    const social = socialMap.get(anchor.dataset.social);
    if (!social || !social.href) continue;
    if (!/^(https:\/\/|mailto:)/.test(social.href)) continue;
    const current = anchor.getAttribute("href") || "";
    const suffix = anchor.dataset.social === "email" && current.includes("?")
      ? current.slice(current.indexOf("?")) : "";
    anchor.href = social.href + suffix;
    if (social.href.startsWith("https://")) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
  }
  for (const anchor of document.querySelectorAll("a[data-resume]"))
    if (data.resume && data.resume.startsWith("/")) anchor.href = data.resume;
  const heroText = document.querySelector(".hero-lede");
  if (heroText && data.profile?.introduction)
    heroText.textContent = data.profile.introduction;
  const meta = document.querySelector(".hero-meta");
  if (meta && data.profile?.location && data.profile?.age)
    meta.textContent = data.profile.age + ", " + data.profile.location;
  const location = document.querySelector(".header-location");
  if (location && data.profile?.location) location.textContent = data.profile.location;

  // The hero portrait is the real photo supplied by Yohannes.
  const portrait = byId("hero-portrait");
  if (portrait && data.profile?.portrait) {
    portrait.src = data.profile.portrait;
    portrait.alt = data.profile.portraitAlt || "Portrait of Yohannes Belai";
  }

  // Dated, editable list on the homepage.
  const nowList = byId("now-list");
  if (nowList) {
    nowList.replaceChildren();
    for (const item of data.now || []) {
      const li = el("li", "now-item" + (item.placeholder ? " is-placeholder" : ""));
      const left = el("div");
      const title = el("strong", "now-item-label", item.label);
      const date = el("span", "now-item-date", item.date);
      const value = el("div", "now-item-value", item.text);
      attach(left, title, date);
      attach(li, left, value);
      nowList.appendChild(li);
    }
  }

  // The person, not a set of scores or skill bars.
  const interests = byId("interests-grid");
  if (interests) {
    interests.replaceChildren();
    for (const item of data.interests || []) {
      const card = el("div", "interest-chip");
      attach(card, el("span", "interest-label", item.label));
      interests.appendChild(card);
    }
  }

  const hooks = byId("conversation-hooks");
  if (hooks) {
    hooks.replaceChildren();
    for (const line of data.conversationHooks || [])
      hooks.appendChild(el("li", "", line));
  }

  // Accessible conversation starters: one topic -> one specific question.
  const topics = byId("topic-list");
  const starterOutput = byId("starter-output");
  const copyButton = byId("copy-starter");
  let selectedQuestion = "";
  if (topics && starterOutput) {
    topics.replaceChildren();
    const buttons = [];
    for (const item of data.starters || []) {
      const button = el("button", "topic-button", item.topic);
      button.type = "button";
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => {
        for (const other of buttons) other.setAttribute("aria-pressed", "false");
        button.setAttribute("aria-pressed", "true");
        selectedQuestion = item.question;
        starterOutput.replaceChildren(el("span", "", item.question));
        if (copyButton) copyButton.hidden = false;
      });
      buttons.push(button);
      topics.appendChild(button);
    }
  }
  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      if (!selectedQuestion) return;
      try {
        await navigator.clipboard.writeText(selectedQuestion);
        copyButton.textContent = "Copied";
      } catch {
        copyButton.textContent = "Select the question above to copy";
      }
    });
  }

  // Photo slots display as clearly labeled placeholders until supplied.
  const photos = byId("photo-grid");
  if (photos) {
    photos.replaceChildren();
    for (const item of data.photos || []) {
      const figure = el("figure", "photo-card");
      const stage = el("div", "photo-stage");
      const hasRealPhoto = item.placeholder === false && typeof item.src === "string" &&
        item.src.length > 0 && typeof item.alt === "string" && item.alt.trim().length > 0;
      if (hasRealPhoto) {
        const img = el("img");
        img.src = item.src;
        img.alt = item.alt;
        img.loading = "lazy";
        img.decoding = "async";
        stage.appendChild(img);
      } else {
        const inner = el("div", "photo-placeholder-content");
        attach(inner, el("span", "", "Photo to come"));
        stage.appendChild(inner);
      }
      const caption = el("figcaption");
      caption.appendChild(el("strong", "", item.category));
      if (hasRealPhoto && item.caption) caption.appendChild(el("span", "", item.caption));
      attach(figure, stage, caption);
      photos.appendChild(figure);
    }
  }

  // Low-pressure ideas, not event promises.
  const plans = byId("plans-grid");
  if (plans) {
    plans.replaceChildren();
    for (const item of data.plans || []) {
      const article = el("article", "plan-card");
      attach(article, el("h3", "", item.title), el("p", "", item.detail));
      plans.appendChild(article);
    }
  }

  // Project stories use verified links only. A missing link remains text, not a fake CTA.
  const projects = byId("projects-grid");
  if (projects) {
    projects.replaceChildren();
    (data.projects || []).forEach((item, index) => {
      const article = el("article", "project-card");
      const story = el("dl", "project-story");
      for (const [label, value] of [["The problem", item.problem], ["The idea", item.approach]]) {
        const part = el("div");
        attach(part, el("dt", "", label), el("dd", "", value));
        story.appendChild(part);
      }
      const tech = el("div", "project-tech");
      for (const name of item.technologies || []) tech.appendChild(el("span", "tech-tag", name));
      const links = el("div", "project-links");
      if (item.github) links.appendChild(link(item.github, "Repository ↗"));
      if (item.live) links.appendChild(link(item.live, "Live demo ↗"));
      if (item.note) links.appendChild(el("span", "project-note", item.note));
      attach(article,
        el("span", "project-index", "Project " + (index + 1)),
        el("p", "project-eyebrow", item.eyebrow),
        el("h3", "", item.name),
        story, tech, links
      );
      projects.appendChild(article);
    });
  }

  // Compressed work history; résumé remains the source for detail.
  const experience = byId("experience-list");
  if (experience) {
    experience.replaceChildren();
    for (const item of data.experience || []) {
      const article = el("article", "experience-row");
      const meta = el("div");
      attach(meta, el("span", "experience-org", item.organization),
        el("span", "experience-date", item.dates));
      attach(article, el("h3", "", item.role), meta);
      if (item.location) article.appendChild(el("p", "experience-detail", item.location));
      experience.appendChild(article);
    }
  }

  const principles = byId("principles-list");
  if (principles) {
    principles.replaceChildren();
    for (const item of data.principles || [])
      principles.appendChild(el("li", "", item));
  }


})();
