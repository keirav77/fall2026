<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Your Name – UX/UI Designer</title>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Public+Sans:wght@400;500;600&display=swap" rel="stylesheet">

<style>
:root{--bg:#F2F4F8;--surface:#fff;--ink:#131A3A;--muted:#58607F;--accent:#3347FF;--on-accent:#fff;--line:#D5DAE6;--mint:#BFF0D4;--blush:#FFD6E0;--sky:#CBDAFF;
box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#121528;--surface:#1B1F38;--ink:#EEF0FA;--muted:#A0A7C6;--accent:#8E9BFF;--on-accent:#121528;--line:#2E3354;--mint:#2C5A47;--blush:#6A3447;--sky:#2D3E7A}}
:root[data-theme="dark"]{--bg:#121528;--surface:#1B1F38;--ink:#EEF0FA;--muted:#A0A7C6;--accent:#8E9BFF;--on-accent:#121528;--line:#2E3354;--mint:#2C5A47;--blush:#6A3447;--sky:#2D3E7A}
html{scroll-padding-top:env(safe-area-inset-top,0px);scroll-behavior:smooth}
*,*::before,*::after{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:400 1.0625rem/1.6 "Public Sans",system-ui,sans-serif}
h1,h2,h3{font-family:"Bricolage Grotesque","Public Sans",system-ui,sans-serif;line-height:1.05;margin:0;letter-spacing:-.02em}
a{color:inherit}
:focus-visible{outline:3px solid var(--accent);outline-offset:3px;border-radius:4px}
.wrap{max-width:1080px;margin:0 auto;padding:0 24px}
header.top{display:flex;justify-content:space-between;align-items:center;padding:22px 0}
header.top strong{font-family:"Bricolage Grotesque",sans-serif;font-size:1.15rem}
nav{display:flex;gap:22px;font-weight:500;font-size:.95rem}
nav a{text-decoration:none;color:var(--muted)}nav a:hover{color:var(--ink)}
.hero{display:grid;grid-template-columns:1.15fr .85fr;gap:48px;align-items:center;padding:40px 0 88px}
.hero h1{font-size:clamp(2.6rem,6.4vw,5rem);font-weight:800}
.hero p{max-width:46ch;color:var(--muted);margin:24px 0 32px}
.btn{display:inline-block;background:var(--accent);color:var(--on-accent);padding:14px 24px;border-radius:999px;font-weight:600;text-decoration:none}
.btn.ghost{background:none;color:var(--ink);border:2px solid var(--line);margin-left:8px}
/* compare device */
.device{position:relative;width:100%;max-width:320px;aspect-ratio:9/17;margin:0 auto;border-radius:36px;border:8px solid var(--ink);overflow:hidden;background:var(--surface)}
.layer{position:absolute;inset:0;padding:22px 18px;display:flex;flex-direction:column;gap:14px}
.hi .t{font:800 1.5rem "Bricolage Grotesque",sans-serif}
.hi .card{border-radius:18px;padding:16px;font-weight:600;font-size:.9rem}
.hi .card small{display:block;font-weight:400;opacity:.75}
.hi .c1{background:var(--mint);color:#0E2A1E}.hi .c2{background:var(--blush);color:#3A0E1D}.hi .c3{background:var(--sky);color:#101C4A}
.hi .cta{margin-top:auto;background:var(--accent);color:var(--on-accent);text-align:center;padding:14px;border-radius:999px;font-weight:600}
.wire{background:#fff;color:#6b7280;clip-path:inset(0 calc(100% - var(--p,50%)) 0 0);border-right:3px solid var(--accent)}
.wire .b{border:2px dashed #9aa1b5;border-radius:6px;display:grid;place-items:center;font:500 .7rem "Public Sans",sans-serif}
.wire .tb{height:26px;width:60%}.wire .cb{height:84px}.wire .bt{height:44px;margin-top:auto}
.ctl{max-width:320px;margin:18px auto 0;text-align:center;font-size:.9rem;color:var(--muted)}
.ctl input{width:100%;accent-color:var(--accent)}
/* sections */
section{padding:72px 0;border-top:1px solid var(--line)}
section>.wrap>h2{font-size:clamp(1.9rem,4vw,2.9rem);margin-bottom:40px}
.work{display:grid;gap:56px}
.case{display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:center}
.case:nth-child(even) .shot{order:2}
.shot{border-radius:22px;aspect-ratio:4/3;display:grid;place-items:center;padding:24px}
.shot .mini{width:56%;height:84%;background:var(--surface);border-radius:18px;padding:14px;display:flex;flex-direction:column;gap:8px;box-shadow:0 10px 30px rgba(19,26,58,.18)}
.mini i{display:block;height:10px;border-radius:5px;background:var(--line)}.mini i.a{background:var(--accent);width:55%}.mini i.s{width:70%}
.mini b{display:block;flex:1;border-radius:10px;background:var(--bg)}
.case h3{font-size:1.9rem;margin-bottom:10px}
.case p{color:var(--muted);margin:0 0 16px}
.case dl{display:grid;grid-template-columns:auto 1fr;gap:4px 16px;margin:0 0 18px;font-size:.95rem}
.case dt{color:var(--muted)}.case dd{margin:0;font-weight:600}
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;list-style:none;padding:0;margin:0;counter-reset:s}
.steps li{counter-increment:s;border-top:4px solid var(--accent);padding-top:16px}
.steps li::before{content:counter(s);font:800 1.6rem "Bricolage Grotesque",sans-serif;color:var(--accent)}
.steps h3{font-size:1.25rem;margin:6px 0 8px}.steps p{margin:0;color:var(--muted);font-size:.95rem}
.about{display:grid;grid-template-columns:1fr 1fr;gap:48px}
.about p{margin:0 0 16px;max-width:60ch}
.tools{display:flex;flex-wrap:wrap;gap:10px;list-style:none;padding:0;margin:0}
.tools li{background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:6px 16px;font-size:.95rem}
.contact{padding-bottom:96px}
.contact h2{font-size:clamp(2.2rem,6vw,4.4rem)!important;max-width:14ch}
footer{padding:24px 0 40px;color:var(--muted);font-size:.9rem;border-top:1px solid var(--line)}
@media (max-width:820px){.hero,.case,.about{grid-template-columns:1fr}.case:nth-child(even) .shot{order:0}.steps{grid-template-columns:1fr 1fr}nav{gap:14px}}
@media (max-width:480px){.steps{grid-template-columns:1fr}.btn.ghost{margin:10px 0 0}}
</style>
</head>
<body>
<div class="wrap">
<header class="top"><strong>Your Name</strong><nav aria-label="Primary"><a href="#work">Work</a><a href="#process">Process</a><a href="#about">About</a><a href="#contact">Contact</a></nav></header>

<main>
<div class="hero">
  <div>
    <h1>I design products people finish using.</h1>
    <p>Senior UX/UI designer with 6 years across fintech, health, and consumer apps. I turn messy problems into clear flows, then into polished interfaces.</p>
    <a class="btn" href="#work">See my work</a><a class="btn ghost" href="#contact">Get in touch</a>
  </div>
  <div>
    <div class="device" id="dev" role="img" aria-label="A mobile screen shown as a wireframe on the left and a finished design on the right">
      <div class="layer hi">
        <div class="t">This week</div>
        <div class="card c1">Tue · Lemon chicken<small>25 min · serves 2</small></div>
        <div class="card c2">Wed · Miso aubergine<small>40 min · serves 2</small></div>
        <div class="card c3">Thu · Veg chili<small>35 min · serves 4</small></div>
        <div class="cta">Build shopping list</div>
      </div>
      <div class="layer wire" aria-hidden="true">
        <div class="b tb">Title</div><div class="b cb">Image + text</div><div class="b cb">Image + text</div><div class="b cb">Image + text</div><div class="b bt">Button</div>
      </div>
    </div>
    <div class="ctl"><label for="rng">Drag to compare wireframe and final UI</label><input id="rng" type="range" min="0" max="100" value="50"></div>
  </div>
</div>

<section id="work"><div class="wrap">
  <h2>Selected work</h2>
  <div class="work">
    <article class="case">
      <div class="shot" style="background:var(--mint)"><div class="mini"><i class="a"></i><i class="s"></i><b></b><i></i></div></div>
      <div>
        <h3>Project name one</h3>
        <p>One sentence on the problem you solved and for whom.</p>
        <dl><dt>Role</dt><dd>Lead product designer</dd><dt>Team</dt><dd>2 designers, 6 engineers</dd><dt>Result</dt><dd>+32% onboarding completion</dd></dl>
        <a class="btn ghost" style="margin:0" href="#contact">Read case study</a>
      </div>
    </article>
    <article class="case">
      <div class="shot" style="background:var(--blush)"><div class="mini"><i class="a"></i><i class="s"></i><b></b><i></i></div></div>
      <div>
        <h3>Project name two</h3>
        <p>One sentence on the problem you solved and for whom.</p>
        <dl><dt>Role</dt><dd>UX researcher and UI designer</dd><dt>Team</dt><dd>Solo, with 1 developer</dd><dt>Result</dt><dd>Support tickets down by half</dd></dl>
        <a class="btn ghost" style="margin:0" href="#contact">Read case study</a>
      </div>
    </article>
    <article class="case">
      <div class="shot" style="background:var(--sky)"><div class="mini"><i class="a"></i><i class="s"></i><b></b><i></i></div></div>
      <div>
        <h3>Project name three</h3>
        <p>One sentence on the problem you solved and for whom.</p>
        <dl><dt>Role</dt><dd>Design system lead</dd><dt>Team</dt><dd>4 designers, 12 engineers</dd><dt>Result</dt><dd>120 components shipped in 5 months</dd></dl>
        <a class="btn ghost" style="margin:0" href="#contact">Read case study</a>
      </div>
    </article>
  </div>
</div></section>

<section id="process"><div class="wrap">
  <h2>How I work</h2>
  <ol class="steps">
    <li><h3>Understand</h3><p>Interviews, analytics, and a clear problem statement everyone agrees on.</p></li>
    <li><h3>Explore</h3><p>Fast sketches and wireframes to test ideas before polishing anything.</p></li>
    <li><h3>Refine</h3><p>High-fidelity UI, prototypes, and usability tests with real users.</p></li>
    <li><h3>Ship</h3><p>Specs, design-system components, and QA alongside engineering.</p></li>
  </ol>
</div></section>

<section id="about"><div class="wrap">
  <h2>About</h2>
  <div class="about">
    <div>
      <p>Write two or three sentences about how you got into design and what you care about most. Keep it specific and human.</p>
      <p>Mention the kinds of teams and problems you do your best work on.</p>
    </div>
    <div>
      <p><strong>Tools</strong></p>
      <ul class="tools"><li>Figma</li><li>FigJam</li><li>Prototyping</li><li>User research</li><li>Design systems</li><li>Accessibility</li><li>HTML and CSS</li></ul>
    </div>
  </div>
</div></section>

<section id="contact" class="contact"><div class="wrap">
  <h2>Let's build something clear.</h2>
  <p style="margin:24px 0 28px;color:var(--muted)">Open to full-time roles and select freelance projects.</p>
  <a class="btn" href="mailto:hello@yourname.com">hello@yourname.com</a>
</div></section>
</main>
<footer><div class="wrap">© 2026 Your Name</div></footer>
</div>
<script>
var r=document.getElementById('rng'),d=document.getElementById('dev');
function u(){d.style.setProperty('--p',r.value+'%')}
r.addEventListener('input',u);u();
</script>
</body>
</html>