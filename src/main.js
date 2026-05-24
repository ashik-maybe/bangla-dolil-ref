document.addEventListener("DOMContentLoaded", () => {
  const listEl = document.getElementById("wordList");
  const searchEl = document.getElementById("search");
  const emptyEl = document.getElementById("emptyState");

  const words = (window.DOLIL_WORDS || []).sort((a, b) =>
    a.w.localeCompare(b.w, "bn")
  );

  const render = (data) => {
    listEl.innerHTML = "";
    emptyEl.classList.toggle("hidden", data.length > 0);

    data.forEach((item, i) => {
      const li = document.createElement("li");
      li.className = "entry";
      li.style.setProperty("--delay", `${i * 0.018}s`);
      li.innerHTML = `<strong>${item.w}</strong><p>${item.m}</p>`;
      listEl.appendChild(li);
    });
  };

  searchEl.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const filtered = q
      ? words.filter(w => w.w.toLowerCase().includes(q) || w.m.toLowerCase().includes(q))
      : words;
    render(filtered);
  });

  render(words);
});
