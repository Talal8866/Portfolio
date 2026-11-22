const TRACKER_URL = 'https://talal8866.github.io/Life-Tracker-App/'
const IMAGE = './Assets/Images/life-tracker.png';

const fs = require('fs');
if (!TRACKER_URL) { console.error('Set TRACKER_URL at the top of this file first.'); process.exit(1); }
if (!fs.existsSync(IMAGE)) console.warn('WARNING: ' + IMAGE + ' not found. Add the screenshot or the card image will be broken.');

if (!fs.existsSync('index.html.bak')) fs.copyFileSync('index.html', 'index.html.bak');
if (!fs.existsSync('main.js.bak')) fs.copyFileSync('main.js', 'main.js.bak');
let h = fs.readFileSync('index.html', 'utf8');
let j = fs.readFileSync('main.js', 'utf8');
if (h.includes('data-key="works.tracker"')) { console.log('Already added.'); process.exit(0); }

const card = `

        <a href="${TRACKER_URL}" target="_blank" rel="noopener noreferrer" class="proj-card" data-reveal="up">
          <span class="proj-num">08</span>
          <div class="proj-img">
            <img src="${IMAGE}" alt="Life Tracker" loading="lazy">
            <div class="proj-hover"><span data-key="works.view">View Project →</span></div>
          </div>
          <div class="proj-meta">
            <h3>Life Tracker</h3>
            <p data-key="works.tracker">Personal daily planner and habit tracker, built for phone use.</p>
            <div class="proj-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
          </div>
        </a>`;

const h2 = h.replace(/(<span class="proj-num">07<\/span>[\s\S]*?<\/a>)/, (m) => m + card);
if (h2 === h) { console.error('NO MATCH: project 07 card not found'); process.exit(1); }
h = h2.replace(/data-count="7"/, 'data-count="8"');

const txt = ['Personal daily planner and habit tracker, built for phone use.', 'مخطط يومي ومتتبع للعادات الشخصية، مصمم للاستخدام على الهاتف.'];
let i = 0;
const j2 = j.replace(/'works\.ads':/g, () => `'works.tracker': ${JSON.stringify(txt[i++])},\n      'works.ads':`);
if (i !== 2) { console.error('NO MATCH: works.ads keys (found ' + i + ', expected 2)'); process.exit(1); }

fs.writeFileSync('index.html', h);
fs.writeFileSync('main.js', j2);
console.log('Life Tracker added as project 08. Projects counter now 8.');
