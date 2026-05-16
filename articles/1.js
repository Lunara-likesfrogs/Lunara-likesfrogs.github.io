fetch(`/articles/lunara/${id}.md`)
  .then((res) => res.text())
  .then((md) => {
    const parts = md.split("---");

    const content = parts[2] || md;

    document.getElementById("article").innerHTML = marked.parse(content);
  });
