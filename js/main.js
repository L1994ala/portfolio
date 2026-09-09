(function () {
  const grid = document.getElementById("project-grid");

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function renderMedia(project) {
    if (project.image) {
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title;
      img.loading = "lazy";
      const wrap = document.createElement("div");
      wrap.className = "frame-media";
      wrap.appendChild(img);
      return wrap;
    }
    const wrap = document.createElement("div");
    wrap.className = "frame-media placeholder";
    const label = document.createElement("p");
    label.className = "ph-label";
    label.textContent = "Visuel à ajouter";
    const path = document.createElement("p");
    path.className = "ph-path";
    path.textContent = project.expectedFile || "assets/img/...";
    wrap.appendChild(label);
    wrap.appendChild(path);
    return wrap;
  }

  (PROJECTS || []).forEach((project, i) => {
    const article = document.createElement("article");
    article.className = "frame";

    const num = document.createElement("span");
    num.className = "frame-num";
    num.textContent = pad(i + 1);
    article.appendChild(num);

    article.appendChild(renderMedia(project));

    const body = document.createElement("div");
    body.className = "frame-body";

    const title = document.createElement("h3");
    title.className = "frame-title";
    title.textContent = project.title;
    body.appendChild(title);

    const cat = document.createElement("p");
    cat.className = "frame-cat";
    cat.textContent = project.category;
    body.appendChild(cat);

    if (project.description) {
      const desc = document.createElement("p");
      desc.className = "frame-desc";
      desc.textContent = project.description;
      body.appendChild(desc);
    }

    if (project.tags && project.tags.length) {
      const tagList = document.createElement("ul");
      tagList.className = "frame-tags";
      project.tags.forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        tagList.appendChild(li);
      });
      body.appendChild(tagList);
    }

    article.appendChild(body);
    grid.appendChild(article);
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
