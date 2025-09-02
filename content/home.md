---
title: "Impulsa tu negocio con una web profesional"
description: "Creamos sitios modernos, rápidos y optimizados para que generes más clientes."
cta_text: "Hablemos"
cta_link: "#contacto"
---
<section id="hero">
  <h1 id="hero-title"></h1>
  <p id="hero-description"></p>
  <a id="hero-cta" href="#" class="btn"></a>
</section>

<script>
async function loadContent() {
  const res = await fetch('/content/home.md');
  const text = await res.text();

  // Parsear front matter (muy simple)
  const match = /^---\n([\s\S]+?)\n---/.exec(text);
  const yaml = match[1];
  const body = text.replace(match[0], '').trim();

  // Convertir YAML en objeto (acá rápido y manual)
  const data = {};
  yaml.split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    data[key.trim()] = rest.join(':').trim().replace(/"/g, '');
  });

  // Inyectar al DOM
  document.getElementById('hero-title').textContent = data.title;
  document.getElementById('hero-description').textContent = data.description;
  document.getElementById('hero-cta').textContent = data.cta_text;
  document.getElementById('hero-cta').href = data.cta_link;
}

loadContent();
</script>
