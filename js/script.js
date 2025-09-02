// js/script.js

// Función genérica para leer front matter
async function loadMarkdown(file) {
  const res = await fetch(file);
  const text = await res.text();

  const match = /^---\n([\s\S]+?)\n---/.exec(text);
  if (!match) return {};
  const yaml = match[1];

  const data = {};
  yaml.split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    data[key.trim()] = rest.join(':').trim().replace(/"/g, '');
  });

  return { data, body: text.replace(match[0], '').trim() };
}

// HERO
async function renderHero() {
  const { data } = await loadMarkdown('/content/home.md');
  document.getElementById('hero-title').textContent = data.title;
  document.getElementById('hero-description').textContent = data.description;
  document.getElementById('hero-cta').textContent = data.cta_text;
  document.getElementById('hero-cta').href = data.cta_link;
}

// SERVICIOS
async function renderServicios() {
  const { data, body } = await loadMarkdown('/content/servicios.md');
  document.getElementById('servicios-title').textContent = data.title;
  document.getElementById('servicios-description').textContent = data.description;

  const itemsMatch = body.match(/items:\n([\s\S]+)/);
  if (!itemsMatch) return;
  const itemsText = itemsMatch[1];
  const items = itemsText.split('- title:').slice(1).map(item => {
    const [titleLine, textLine, iconLine] = item.split('\n').map(l => l.replace(/^-?\s*/, '').trim());
    return {
      title: titleLine,
      text: textLine.replace('text: ', ''),
      icon: iconLine.replace('icon: ', '')
    };
  });

  const container = document.getElementById('servicios-items');
  container.innerHTML = '';
  items.forEach(i => {
    const card = document.createElement('article');
    card.className = 'service';
    card.innerHTML = `
      <div class="icon">${i.icon}</div>
      <h3>${i.title}</h3>
      <p>${i.text}</p>
    `;
    container.appendChild(card);
  });
}

// FAQ
async function renderFAQ() {
  const { data, body } = await loadMarkdown('/content/faq.md');
  document.getElementById('faq-title').textContent = data.title;

  const itemsMatch = body.match(/items:\n([\s\S]+)/);
  if (!itemsMatch) return;
  const itemsText = itemsMatch[1];
  const items = itemsText.split('- q:').slice(1).map(item => {
    const [qLine, aLine] = item.split('\n').map(l => l.replace(/^-?\s*/, '').trim());
    return { q: qLine, a: aLine.replace('a: ', '') };
  });

  const container = document.getElementById('faq-items');
  container.innerHTML = '';
  items.forEach(i => {
    const details = document.createElement('details');
    details.className = 'faq';
    details.innerHTML = `<summary>${i.q}</summary><div class="faq-body">${i.a}</div>`;
    container.appendChild(details);
  });
}

// CONTACTO
async function renderContacto() {
  const { data } = await loadMarkdown('/content/contacto.md');
  document.getElementById('contacto-title').textContent = data.title;
  document.getElementById('contacto-description').textContent = data.description;
}

// Ejecutar todas
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderServicios();
  renderFAQ();
  renderContacto();
});
