// Run from your portfolio folder:  node patch-portfolio.js
// Backs up index.html and main.js to *.bak (first run only), then patches them.
const fs = require('fs');

const LEVELS = {
  'HTML5': 'advanced', 'CSS3': 'advanced', 'Bootstrap': 'advanced', 'Sass / SCSS': 'advanced', 'Git / GitHub': 'advanced',
  'JavaScript': 'intermediate', 'TypeScript': 'intermediate', 'Angular': 'intermediate', 'Angular Material': 'intermediate',
  'React': 'intermediate', 'SQL': 'intermediate', 'MongoDB': 'intermediate', 'Node.js': 'intermediate', 'C#': 'intermediate',
  'Figma': 'learning',
};
const LABEL = { advanced: 'Advanced', intermediate: 'Intermediate', learning: 'Learning' };

function load(file) {
  if (!fs.existsSync(file + '.bak')) fs.copyFileSync(file, file + '.bak');
  return fs.readFileSync(file + '.bak', 'utf8');
}
function must(src, pattern, replacement, label) {
  const before = src;
  const out = src.replace(pattern, replacement);
  if (out === before) { console.error('NO MATCH: ' + label); process.exitCode = 1; }
  return out;
}

/* ---------------- index.html ---------------- */
let h = load('index.html');

h = must(h, /<title>[^<]*<\/title>/, '<title>Talal Alsebai | Frontend Developer</title>', 'title');
h = must(h, /content="Talal Alsebai - Software Engineer Portfolio"/, 'content="Talal Alsebai - Frontend Developer Portfolio"', 'meta description');
h = must(h, /data-key="hero\.title">Software Engineer</, 'data-key="hero.title">Frontend Developer<', 'hero.title');
h = must(h, /data-key="hero\.role">Software Engineer</, 'data-key="hero.role">Frontend Developer<', 'hero.role');
h = must(h, /(<p class="hero-desc" data-key="hero\.desc">)[\s\S]*?(<\/p>)/, '$1I build fast, responsive web applications, from clean UI to REST API integration. Specialising in Angular, TypeScript &amp; React.$2', 'hero.desc');
h = must(h, /data-key="stat\.projects">Projects Shipped</, 'data-key="stat.projects">Projects Built<', 'stat.projects');
h = must(h, /(<p data-key="about\.p1">)[\s\S]*?(<\/p>)/, "$1I'm a Frontend Developer building dynamic, responsive web applications with Angular, React, TypeScript, and JavaScript. I integrate REST APIs, build reusable component libraries, and care about SEO and performance.$2", 'about.p1');
h = must(h, /(<p data-key="about\.p2">)[\s\S]*?(<\/p>)/, "$1Holding a B.Sc. in Information Technology Engineering (Software Development) from the Syrian Virtual University, I bring both theoretical grounding and hands-on experience. I'm actively seeking remote and freelance frontend opportunities.$2", 'about.p2');
h = must(h, /<div class="tag-row">[\s\S]*?<\/div>/, '<div class="tag-row"><span>Frontend</span><span>Angular</span><span>React</span><span>TypeScript</span><span>REST APIs</span><span>SEO</span><span>Git / GitHub</span><span>Agile</span></div>', 'tag-row');

// Golden Key card was using the Souk Plus translation key
h = must(h, /data-key="works\.souk">A full production website/, 'data-key="works.goldenkey">A full production website', 'golden key key');

// Skills: Material UI card is really Angular Material; drop the duplicate Angular Material card in Tools
h = must(h, /<div class="sk-icon UI"><img src="\.\/Assets\/SVG\/material-ui\.svg" alt="Material UI"/, '<div class="sk-icon angular"><img src="./Assets/SVG/angular-icon.svg" alt="Angular Material"', 'material card icon');
h = must(h, />Material UI<\/span>/, '>Angular Material</span>', 'material card name');
h = must(h, /\s*<div class="sk-card" data-cat="Tools & Platforms" data-reveal="up">\s*<div class="sk-icon angular">\s*<img src="\.\/Assets\/SVG\/angular-icon\.svg" alt="Angular Material"[\s\S]*?<div class="sk-fill"[^>]*><\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, '', 'duplicate Angular Material card');

// Skills: replace invented percentage bars with level badges
let n = 0;
h = h.replace(/<div class="sk-row"><span class="sk-name">([^<]+)<\/span><span class="sk-pct">\d+%<\/span><\/div>\s*<div class="sk-track">\s*<div class="sk-fill"[^>]*><\/div>\s*<\/div>/g, (m, name) => {
  const lvl = LEVELS[name.trim()];
  if (!lvl) { console.error('NO LEVEL for skill: ' + name); process.exitCode = 1; return m; }
  n++;
  return `<div class="sk-row"><span class="sk-name">${name}</span></div>\n            <span class="sk-badge ${lvl}" data-key="lv.${lvl}">${LABEL[lvl]}</span>`;
});
console.log('skill bars converted: ' + n + ' (expected 15)');

h = must(h, /(ads\.png" alt=")Wen Arkhas/, '$1Ads Wall', 'ads alt');
h = must(h, /<a href="https:\/\/github\.com\/Talal8866\/" class="proj-card"/, '<a href="https://github.com/Talal8866/" target="_blank" rel="noopener noreferrer" class="proj-card"', 'space link');
h = must(h, /© 2025 Talal Alsebai/, '© 2026 Talal Alsebai', 'footer html');
fs.writeFileSync('index.html', h);

/* ---------------- main.js ---------------- */
let j = load('main.js');
const STR = String.raw`(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')`;
function setKey(key, en, ar) {
  const vals = [en, ar]; let i = 0;
  j = must(j, new RegExp(`'${key.replace(/\./g, '\\.')}': ${STR},`, 'g'), () => `'${key}': ${JSON.stringify(vals[i++])},`, key);
}
setKey('hero.title', 'Frontend Developer', 'مطور واجهات أمامية');
setKey('hero.role', 'Frontend Developer', 'مطور واجهات أمامية');
setKey('hero.desc',
  'I build fast, responsive web applications, from clean UI to REST API integration. Specialising in Angular, TypeScript & React.',
  'أبني تطبيقات ويب سريعة ومتجاوبة، من واجهات مستخدم نظيفة إلى ربط الواجهات مع REST APIs. متخصص في Angular وTypeScript وReact.');
setKey('about.p1',
  "I'm a Frontend Developer building dynamic, responsive web applications with Angular, React, TypeScript, and JavaScript. I integrate REST APIs, build reusable component libraries, and care about SEO and performance.",
  'أنا مطور واجهات أمامية، أبني تطبيقات ويب ديناميكية ومتجاوبة باستخدام Angular وReact وTypeScript وJavaScript. أعمل على ربط REST APIs وبناء مكتبات مكوّنات قابلة لإعادة الاستخدام، وأهتم بتحسين محركات البحث والأداء.');
setKey('about.p2',
  "Holding a B.Sc. in Information Technology Engineering (Software Development) from the Syrian Virtual University, I bring both theoretical grounding and hands-on experience. I'm actively seeking remote and freelance frontend opportunities.",
  'حاصل على بكالوريوس هندسة تقانة المعلومات (تطوير البرمجيات) من الجامعة الافتراضية السورية، وأجمع بين الأساس النظري والخبرة العملية. أسعى للفرص عن بُعد والمشاريع الحرة.');
setKey('footer.copy', '© 2026 Talal Alsebai. All rights reserved.', '© 2026 طلال السبعي. جميع الحقوق محفوظة.');
j = must(j, /'stat\.projects': 'Projects Shipped'/, "'stat.projects': 'Projects Built'", 'stat.projects js');

// add works.goldenkey right before each works.souk entry (EN first, AR second)
const gk = ['A full production website for Golden Key Lock Repairing EST, built with Angular 20.', 'موقع إنتاجي متكامل لمؤسسة المفتاح الذهبي لإصلاح الأقفال، مبني بـ Angular 20.'];
let g = 0;
j = must(j, /'works\.souk':/g, () => `'works.goldenkey': ${JSON.stringify(gk[g++])},\n      'works.souk':`, 'works.goldenkey');

fs.writeFileSync('main.js', j);
console.log('done. Originals saved as index.html.bak and main.js.bak');
