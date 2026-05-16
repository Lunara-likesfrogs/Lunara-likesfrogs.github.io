const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`/articles/lunara/${id}.md`)
  .then((res) => res.text())
  .then((md) => {
    // Split frontmatter safely
    const parts = md.split("---");

    const rawMeta = parts[1]; // metadata
    const content = parts.slice(2).join("---"); // article body

    // turn metadata into usable object
    const meta = {};
    rawMeta.split("\n").forEach((line) => {
      const [key, ...rest] = line.split(":");
      if (!key || !rest.length) return;

      meta[key.trim()] = rest.join(":").trim();
    });

    // render markdown content
    document.getElementById("article").innerHTML = `
        <h1>${meta.title || ""}</h1>
        <p><strong>${meta.author || ""}</strong> — ${meta.date || ""}</p>
        <hr>
        ${marked.parse(content)}
    `;
  });
