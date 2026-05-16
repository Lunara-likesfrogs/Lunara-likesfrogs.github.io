fetch("articles.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("articles");

    data.forEach((article) => {
      const card = document.createElement("a");

      card.className = "article-card";
      card.href = article.file;

      card.innerHTML = `
                <h2 class="article-title">${article.title}</h2>
                <p class="aricle-info">Author: ${article.author}</p>
                <p class="aricle-info">Date: ${article.date}</p>
                <p class="aricle-info">Tags: ${article.tags.join(", ")}</p>
            `;

      container.appendChild(card);
    });
  });
