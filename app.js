/* ═══════════════════════════════════════════════════════════
   FUSION-KARP — Game Logic & Animation Engine v2
   Split-screen, Pokéball capture, Menu type BG, About modal
   ═══════════════════════════════════════════════════════════ */

// ═══════════ FUSION DATA ═══════════
const FUSIONS = [
    {
        id: 'normal', name: 'Magibland', type: 'Normal', color: '#A8A77A',
        image: 'assets/fusions/Magikarp normal.png',
        icon: 'assets/types/96px-Normal_icon_SwSh.png',
        desc: 'A perfectly unremarkable Magikarp. It has lost all elemental affinity and gained an overwhelming sense of mediocrity. Experts say it tastes like unseasoned tofu.',
    },
    {
        id: 'fire', name: 'Magiscorch', type: 'Fire', color: '#EE8130',
        image: 'assets/fusions/Magikarp fire.png',
        icon: 'assets/types/96px-Fire_icon_SwSh.png',
        desc: 'Its scales are superheated magma plates. This Magikarp can boil an entire lake just by splashing. Fishermen fear its arrival during summer.',
    },
    {
        id: 'water', name: 'Magikarp', type: 'Water', color: '#6390F0',
        image: 'assets/fusions/00 Magikarp original water.png',
        icon: 'assets/types/96px-Water_icon_SwSh.png',
        desc: 'The original, the legend, the one and only Magikarp. Famous for its incredible Splash attack, which does absolutely nothing. Truly iconic.',
    },
    {
        id: 'electric', name: 'Magivolt', type: 'Electric', color: '#F7D02C',
        image: 'assets/fusions/Magikarp electric.png',
        icon: 'assets/types/96px-Electric_icon_SwSh.png',
        desc: 'Crackling with thunderous energy, this Magikarp\'s whiskers act as lightning rods. Its Splash now creates an electrified shockwave across the water surface.',
    },
    {
        id: 'ice', name: 'Magifrost', type: 'Ice', color: '#96D9D6',
        image: 'assets/fusions/Magikarp ice.png',
        icon: 'assets/types/96px-Ice_icon_SwSh.png',
        desc: 'Frozen yet alive, this glacial Magikarp swims through icebergs like water. Its body temperature is −40°C. Do NOT attempt to hug it.',
    },
    {
        id: 'fighting', name: 'Magifist', type: 'Fighting', color: '#C22E28',
        image: 'assets/fusions/Magikarp fight.png',
        icon: 'assets/types/96px-Fighting_icon_SwSh.png',
        desc: 'This battle-hardened Magikarp has trained in the ancient art of Splash-Fu. Its fins can shatter concrete. It does 1000 splashes before breakfast.',
    },
    {
        id: 'ground', name: 'Magiquake', type: 'Ground', color: '#E2BF65',
        image: 'assets/fusions/Magikarp ground.png',
        icon: 'assets/types/96px-Ground_icon_SwSh.png',
        desc: 'Burrowing through the earth like a fish through water, Magiquake creates small tremors wherever it flops. It has never seen the ocean and doesn\'t miss it.',
    },
    {
        id: 'flying', name: 'Magifly', type: 'Flying', color: '#A98FF3',
        image: 'assets/fusions/Magikarp volador.png',
        icon: 'assets/types/96px-Flying_icon_SwSh.png',
        desc: 'Finally, a Magikarp that can Splash through the sky! Its wing-fins generate surprisingly powerful updrafts. Birds are confused and frankly concerned.',
    },
    {
        id: 'psychic', name: 'Magimind', type: 'Psychic', color: '#F95587',
        image: 'assets/fusions/Magikarp  psychic.png',
        icon: 'assets/types/96px-Psychic_icon_SwSh.png',
        desc: 'Possessing terrifying psychic powers, this Magikarp can levitate and read minds. Unfortunately, it mostly uses its powers to find the nearest puddle.',
    },
    {
        id: 'bug', name: 'Magibeetle', type: 'Bug', color: '#A6B91A',
        image: 'assets/fusions/Magikarp insect.png',
        icon: 'assets/types/96px-Bug_icon_SwSh.png',
        desc: 'An unsettling fusion with insectoid features. Its compound eyes see in all directions and its exoskeleton makes it surprisingly crunchy. Yes, someone tried.',
    },
    {
        id: 'rock', name: 'Magiite', type: 'Rock', color: '#B6A136',
        image: 'assets/fusions/Magikarp rock.png',
        icon: 'assets/types/96px-Rock_icon_SwSh.png',
        desc: 'Encased in ancient mineral formations, this Magikarp is basically a fossil that forgot to stop living. Its Splash can cause avalanches.',
    },
    {
        id: 'ghost', name: 'Magispook', type: 'Ghost', color: '#735797',
        image: 'assets/fusions/Magi Ghost.png',
        icon: 'assets/types/96px-Ghost_icon_SwSh.png',
        desc: 'The spirit of a Magikarp that was too stubborn to stay fainted. It haunts fishing spots and steals bait. Trainers report hearing distant splashing at midnight.',
    },
    {
        id: 'dark', name: 'Magishadow', type: 'Dark', color: '#705746',
        image: 'assets/fusions/Magikarp dark.png',
        icon: 'assets/types/96px-Dark_icon_SwSh.png',
        desc: 'This edgy Magikarp lurks in the deepest trenches. It has seen things that would break lesser Pokémon. Its golden crown is the last light in the abyss.',
    },
    {
        id: 'steel', name: 'Magiforge', type: 'Steel', color: '#B7B7CE',
        image: 'assets/fusions/Magikarp steel.png',
        icon: 'assets/types/96px-Steel_icon_SwSh.png',
        desc: 'Coated in gleaming chrome armor, this mechanical Magikarp is practically indestructible. Its Splash attack now sounds like a blacksmith\'s hammer.',
    },
    {
        id: 'fairy', name: 'Magicharm', type: 'Fairy', color: '#D685AD',
        image: 'assets/fusions/Magikarp hada.png',
        icon: 'assets/types/96px-Fairy_icon_SwSh.png',
        desc: 'Radiating pure enchantment and sparkles, this magical Magikarp grants wishes to those who witness its Splash. Sadly, the wishes are always more Splash.',
    },
];

const GLITCH_FUSION = {
    id: 'glitch', name: 'MAGI̷̢GLITCH', type: '???', color: '#00ff41',
    image: 'assets/fusions/Magikarp glitch.png', icon: null,
    desc: 'E̷͎̊R̵̢̈́R̶̰̔O̸͙͝R̷̬̊: Data corrupted. This entity exists between dimensions. It was never meant to be found. It whispers in binary. It knows your PokéDex PIN.',
};

const STORAGE_KEY = 'fusionkarp_unlocked';
const STORAGE_OUTRO = 'fusionkarp_outro_seen';
const STORAGE_FREE = 'fusionkarp_free_mode';
const TOTAL_REGULAR = FUSIONS.length;

// ═══════════ STATE ═══════════
let unlocked = loadUnlocked();
let currentScreen = 'menu';
let previousScreen = 'menu';
let isFusing = false;
let lastFusion = null;
let glitchReady = false;
let glitchJustUnlocked = false;
let freeMode = localStorage.getItem(STORAGE_FREE) === 'true';
let outroSeen = localStorage.getItem(STORAGE_OUTRO) === 'true';

// ═══════════ DOM REFS ═══════════
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const screens = { menu: $('#menuScreen'), fusion: $('#fusionScreen'), pokedex: $('#pokedexScreen'), outro: $('#outroScreen') };
const particleCanvas = $('#particleCanvas');
const ctx = particleCanvas.getContext('2d');

// ═══════════ INIT ═══════════
function init() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    createAmbientBubbles();
    createMenuTypeBackground();
    startAmbientParticles();
    bindEvents();
    updateBadges();
    createTypeRing();
    // Show menu reset button if in free mode
    if (freeMode) {
        const menuReset = $('#btnMenuReset');
        if (menuReset) menuReset.classList.remove('hidden');
    }
}

// ═══════════ LOCALSTORAGE ═══════════
function loadUnlocked() {
    try { const d = JSON.parse(localStorage.getItem(STORAGE_KEY)); return Array.isArray(d) ? d : []; }
    catch { return []; }
}
function saveUnlocked() { localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked)); }

function unlockFusion(id) {
    if (!unlocked.includes(id)) {
        unlocked.push(id);
        saveUnlocked();
        updateBadges();
        updateTypeRingUnlocked();
    }
}

// ═══════════ BADGES ═══════════
function updateBadges() {
    const reg = unlocked.filter(u => u !== 'glitch').length;
    const total = unlocked.includes('glitch') ? reg + 1 : reg;
    const max = unlocked.includes('glitch') ? TOTAL_REGULAR + 1 : TOTAL_REGULAR;
    const text = `${total}/${max}`;
    ['#pokedexBadge', '#pokedexBadgeSmall', '#progressText'].forEach(sel => {
        const el = $(sel); if (el) el.textContent = text;
    });
    const fill = $('#progressFill');
    if (fill) fill.style.width = `${(total / max) * 100}%`;
}

// ═══════════ SCREEN TRANSITIONS ═══════════
function goToScreen(name) {
    if (name === currentScreen) return;
    const outScreen = screens[currentScreen];
    const inScreen = screens[name];

    // Remember where we came from when entering the pokedex
    if (name === 'pokedex') previousScreen = currentScreen;

    // Show/hide menu type bg
    const typeBg = $('#menuTypeBg');
    typeBg.style.opacity = (name === 'menu') ? '1' : '0';

    outScreen.classList.remove('active');
    outScreen.classList.add('transitioning-out');
    setTimeout(() => {
        outScreen.classList.remove('transitioning-out');
        inScreen.classList.add('transitioning-in', 'active');
        setTimeout(() => inScreen.classList.remove('transitioning-in'), 500);
        currentScreen = name;
        if (name === 'pokedex') renderPokedex();
        if (name === 'fusion') resetFusionScreen();
    }, 400);
}

// ═══════════ EVENTS ═══════════
function bindEvents() {
    $('#btnStartFusion').addEventListener('click', () => goToScreen('fusion'));
    $('#btnFusionBack').addEventListener('click', () => {
        if (glitchJustUnlocked && !outroSeen) {
            glitchJustUnlocked = false;
            outroSeen = true;
            localStorage.setItem(STORAGE_OUTRO, 'true');
            goToScreen('outro');
        } else {
            goToScreen('menu');
        }
    });
    $('#btnFusionPokedex').addEventListener('click', () => goToScreen('pokedex'));
    $('#btnPokedexBack').addEventListener('click', () => goToScreen(previousScreen));
    $('#btnFuseAgain').addEventListener('click', () => handleFuseAgain());
    $('#detailClose').addEventListener('click', closeDetail);
    $('#detailBackdrop').addEventListener('click', closeDetail);

    // Center Magikarp click — triggers glitch when ready
    $('#fusionMagikarp').addEventListener('click', () => handleGlitchClick());

    // Outro screen buttons
    $('#btnFreeMode').addEventListener('click', () => enterFreeMode());
    $('#btnReset').addEventListener('click', () => resetProgress());

    // Menu reset button (visible in free mode)
    const menuReset = $('#btnMenuReset');
    if (menuReset) menuReset.addEventListener('click', () => resetProgress());

    // Menu Magikarp easter egg
    let menuClicks = 0;
    $('#menuMagikarp').addEventListener('click', () => {
        menuClicks++;
        if (menuClicks >= 10) {
            menuClicks = 0;
            const k = $('#menuMagikarp');
            k.style.transform = 'rotate(360deg) scale(1.3)';
            setTimeout(() => k.style.transform = '', 600);
        }
    });
}



// ═══════════ MENU TYPE BACKGROUND ═══════════
function createMenuTypeBackground() {
    const container = $('#menuTypeBg');
    const typeIcons = FUSIONS.map(f => f.icon);

    for (let i = 0; i < 30; i++) {
        const el = document.createElement('div');
        el.className = 'menu-type-float';

        const icon = typeIcons[i % typeIcons.length];
        const img = document.createElement('img');
        img.src = icon;
        el.appendChild(img);

        const scale = 0.5 + Math.random() * 1.2;
        const opacity = 0.12 + Math.random() * 0.2;
        const duration = 15 + Math.random() * 25;
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 50;
        const midX = startX + (Math.random() - 0.5) * 300;
        const endX = midX + (Math.random() - 0.5) * 200;

        el.style.cssText = `
            left: 0; top: 0;
            --start-x: ${startX}px; --start-y: ${startY}px;
            --mid-x: ${midX}px; --mid-y: ${startY - window.innerHeight * 0.6}px;
            --end-x: ${endX}px; --end-y: ${-80}px;
            --float-scale: ${scale}; --float-opacity: ${opacity};
            --drift-duration: ${duration}s;
            animation-delay: ${Math.random() * duration}s;
        `;

        // Kickstart with delay
        setTimeout(() => el.classList.add('animate'), 100 + i * 50);

        container.appendChild(el);
    }
}

// ═══════════ TYPE RING ═══════════
function createTypeRing() {
    const ring = $('#typeRing');
    ring.innerHTML = '';
    const angleStep = 360 / FUSIONS.length;
    const isMobile = window.innerWidth <= 600;
    const isSmall = window.innerWidth <= 400;
    const radius = isSmall ? 125 : isMobile ? 150 : 270;

    FUSIONS.forEach((fusion, i) => {
        const angle = (angleStep * i) - 90;
        const rad = (angle * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        const btn = document.createElement('button');
        btn.className = 'type-icon-btn';
        btn.style.cssText = `
            left: calc(50% + ${x}px - 28px);
            top: calc(50% + ${y}px - 28px);
            --glow-color: ${fusion.color};
            animation-delay: ${i * 0.05}s;
        `;
        btn.setAttribute('data-type', fusion.id);
        btn.setAttribute('title', fusion.type);

        const img = document.createElement('img');
        img.src = fusion.icon;
        img.alt = fusion.type;
        btn.appendChild(img);
        btn.addEventListener('click', () => startFusion(fusion));
        ring.appendChild(btn);
    });

    updateTypeRingUnlocked();

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => createTypeRing(), 250);
    });
}

function updateTypeRingUnlocked() {
    $$('.type-icon-btn').forEach(btn => {
        const typeId = btn.getAttribute('data-type');
        if (unlocked.includes(typeId)) {
            btn.classList.add('type-icon-unlocked');
        } else {
            btn.classList.remove('type-icon-unlocked');
        }
    });
}

// ═══════════ FUSION ANIMATION SEQUENCE ═══════════
async function startFusion(fusion) {
    if (isFusing) return;
    isFusing = true;
    lastFusion = fusion;

    const hint = $('#fusionHint');
    const magikarp = $('#fusionMagikarp');
    const glow = $('#fusionGlow');
    const flash = $('#fusionFlash');
    const arena = $('#fusionArena');
    const ring = $('#typeRing');
    const layout = $('#fusionLayout');
    const resultPanel = $('#resultPanel');
    const activeIcon = $('#activeTypeIcon');

    // Ensure clean state
    resultPanel.classList.add('hidden');
    resultPanel.classList.remove('visible');
    layout.classList.remove('split');
    activeIcon.classList.add('hidden');

    hint.textContent = `Fusing with ${fusion.type}...`;
    hint.style.color = fusion.color;

    // Highlight selected icon
    $$('.type-icon-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.getAttribute('data-type') === fusion.id) btn.classList.add('selected');
    });

    // Phase 1: Glow intensifies
    glow.style.background = `radial-gradient(circle, ${fusion.color}44, transparent 70%)`;
    glow.style.width = '300px';
    glow.style.height = '300px';
    await wait(300);

    // Phase 2: Energy rings
    spawnEnergyRings(fusion.color, 3);
    await wait(400);

    // Phase 3: Shake + particles
    arena.classList.add('shake');
    const center = getCenterPosition();
    spawnParticles(center.x, center.y, fusion.color, 35);
    spawnSparks(center.x, center.y, fusion.color, 20);
    await wait(200);

    // Phase 4: Magikarp fuses (shrinks)
    magikarp.style.setProperty('--fuse-color', fusion.color);
    magikarp.classList.add('fusing');
    await wait(900);

    // Phase 5: FLASH — hide magikarp completely, swap image while flash is opaque
    magikarp.classList.remove('fusing');
    magikarp.classList.add('pre-reveal'); // invisible!
    magikarp.src = fusion.image;
    magikarp.style.filter = `drop-shadow(0 8px 30px ${fusion.color}80)`;

    flash.classList.add('active'); // opaque for ~400ms
    await wait(500); // wait while flash is fully opaque

    // Phase 6: Hide ring, split layout, reveal magikarp WITH bounce
    ring.classList.add('hiding');
    arena.classList.remove('shake');

    // Particles on reveal
    const center2 = getCenterPosition();
    spawnParticles(center2.x, center2.y, fusion.color, 20);

    magikarp.classList.remove('pre-reveal');
    magikarp.classList.add('revealing');

    // Split layout + show result panel
    layout.classList.add('split');
    await wait(300);

    // Show active type icon near the magikarp
    activeIcon.classList.remove('hidden');
    activeIcon.style.setProperty('--glow-color', fusion.color);
    $('#activeTypeIconImg').src = fusion.icon;

    // Show result panel
    showResultPanel(fusion);

    await wait(700);
    magikarp.classList.remove('revealing');
    flash.classList.remove('active');

    // Update glow
    glow.style.background = `radial-gradient(circle, ${fusion.color}33, transparent 70%)`;
    glow.style.width = '260px';
    glow.style.height = '260px';

    // Deselect icons
    $$('.type-icon-btn').forEach(btn => btn.classList.remove('selected'));

    unlockFusion(fusion.id);

    hint.textContent = '';
    isFusing = false;
}

function showResultPanel(fusion) {
    const idx = FUSIONS.findIndex(f => f.id === fusion.id);
    const number = String(idx + 1).padStart(3, '0');

    $('#resultName').textContent = fusion.name;
    $('#resultTypeName').textContent = fusion.type;
    $('#resultTypeIcon').src = fusion.icon || '';
    $('#resultDesc').textContent = fusion.desc;
    $('#resultId').textContent = `#${number}`;

    const badge = $('#resultTypeBadge');
    badge.style.background = `${fusion.color}33`;
    badge.style.color = fusion.color;
    badge.style.border = `1px solid ${fusion.color}55`;

    const panel = $('#resultPanel');
    panel.classList.remove('hidden');
    panel.classList.add('visible');
}

// ═══════════ FUSE AGAIN — POKÉBALL CAPTURE ═══════════
async function handleFuseAgain() {
    if (isFusing) return;

    // If glitch was just unlocked, show outro instead of fusing again
    if (glitchJustUnlocked && !outroSeen) {
        glitchJustUnlocked = false;
        outroSeen = true;
        localStorage.setItem(STORAGE_OUTRO, 'true');
        goToScreen('outro');
        return;
    }

    isFusing = true;

    const magikarp = $('#fusionMagikarp');
    const pokeball = $('#pokeballCapture');
    const layout = $('#fusionLayout');
    const resultPanel = $('#resultPanel');
    const ring = $('#typeRing');
    const activeIcon = $('#activeTypeIcon');
    const glow = $('#fusionGlow');
    const hint = $('#fusionHint');

    // Phase 1: Capture — magikarp shrinks into pokéball
    magikarp.classList.add('capturing');
    await wait(400);

    // Show pokéball at magikarp position
    const rect = magikarp.getBoundingClientRect();
    pokeball.style.left = `${rect.left + rect.width / 2 - 24}px`;
    pokeball.style.top = `${rect.top + rect.height / 2 - 24}px`;
    pokeball.classList.remove('hidden');
    pokeball.classList.remove('shrinking');

    await wait(500);

    // Phase 2: Pokéball flies to the pokédex button
    const pokedexBtn = $('#btnFusionPokedex');
    const btnRect = pokedexBtn.getBoundingClientRect();
    const targetX = btnRect.left + btnRect.width / 2 - 24;
    const targetY = btnRect.top + btnRect.height / 2 - 24;

    pokeball.style.transition = 'left 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
    pokeball.style.left = `${targetX}px`;
    pokeball.style.top = `${targetY}px`;

    await wait(300);
    pokeball.classList.add('shrinking');

    await wait(500);

    // Flash the pokédex button
    pokedexBtn.style.boxShadow = '0 0 20px rgba(255, 216, 102, 0.6)';
    pokedexBtn.style.borderColor = 'var(--text-accent)';
    setTimeout(() => {
        pokedexBtn.style.boxShadow = '';
        pokedexBtn.style.borderColor = '';
    }, 600);

    // Clean up pokéball
    pokeball.classList.add('hidden');
    pokeball.style.transition = '';

    // Phase 3: Hide result panel, unsplit layout
    resultPanel.classList.remove('visible');
    resultPanel.classList.add('hidden');
    activeIcon.classList.add('hidden');
    layout.classList.remove('split');

    await wait(400);

    // Phase 4: Show ring again, new Magikarp enters
    ring.classList.remove('hiding');

    magikarp.classList.remove('capturing');
    magikarp.src = 'assets/fusions/00 Magikarp original water.png';
    magikarp.style.filter = 'drop-shadow(0 8px 30px rgba(99, 144, 240, 0.4))';
    magikarp.classList.add('entering');

    glow.style.background = 'radial-gradient(circle, rgba(99, 144, 240, 0.2), transparent 70%)';
    glow.style.width = '240px';
    glow.style.height = '240px';

    hint.textContent = 'Choose a type to begin fusion';
    hint.style.color = '';

    await wait(800);
    magikarp.classList.remove('entering');
    magikarp.className = 'fusion-magikarp';

    lastFusion = null;
    isFusing = false;

    // Check if all regular types are now unlocked — trigger exalted state
    if (unlocked.filter(u => u !== 'glitch').length >= TOTAL_REGULAR && !unlocked.includes('glitch')) {
        setTimeout(() => showGlitchUnlock(), 600);
    }
}

function resetFusionScreen() {
    const magikarp = $('#fusionMagikarp');
    const glow = $('#fusionGlow');
    const resultPanel = $('#resultPanel');
    const hint = $('#fusionHint');
    const ring = $('#typeRing');
    const layout = $('#fusionLayout');
    const activeIcon = $('#activeTypeIcon');

    magikarp.src = 'assets/fusions/00 Magikarp original water.png';
    magikarp.style.filter = 'drop-shadow(0 8px 30px rgba(99, 144, 240, 0.4))';
    magikarp.className = 'fusion-magikarp';
    magikarp.style.cursor = '';

    glow.style.background = 'radial-gradient(circle, rgba(99, 144, 240, 0.2), transparent 70%)';
    glow.style.width = '240px';
    glow.style.height = '240px';

    resultPanel.classList.add('hidden');
    resultPanel.classList.remove('visible');
    activeIcon.classList.add('hidden');
    layout.classList.remove('split');
    ring.classList.remove('hiding');

    hint.textContent = 'Choose a type to begin fusion';
    hint.style.color = '';
    lastFusion = null;
    isFusing = false;
    glitchReady = false;

    updateTypeRingUnlocked();

    // Check for pending glitch state or free mode
    const allRegular = unlocked.filter(u => u !== 'glitch').length >= TOTAL_REGULAR;
    if (freeMode && unlocked.includes('glitch')) {
        // Free mode: center Magikarp is clickable for Magiglitch
        magikarp.style.cursor = 'pointer';
        hint.textContent = 'Click Magikarp to see MAGI\u0337\u0322GLITCH or choose a type';
        hint.style.color = '#00ff41';
    } else if (allRegular && !unlocked.includes('glitch')) {
        // All regular unlocked but glitch not yet — trigger exalted
        setTimeout(() => showGlitchUnlock(), 600);
    }
}

// ═══════════ PARTICLE EFFECTS ═══════════
function spawnParticles(cx, cy, color, count) {
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'fusion-particle';
        const angle = Math.random() * Math.PI * 2;
        const dist = 80 + Math.random() * 200;
        const px = Math.cos(angle) * dist, py = Math.sin(angle) * dist;
        const dur = 0.6 + Math.random() * 0.8;
        const size = 3 + Math.random() * 6;
        p.style.cssText = `left:${cx}px;top:${cy}px;width:${size}px;height:${size}px;background:${color};box-shadow:0 0 ${size * 2}px ${color};--px:${px}px;--py:${py}px;--particle-duration:${dur}s;animation-delay:${Math.random() * 0.2}s;`;
        document.body.appendChild(p);
        setTimeout(() => p.remove(), (dur + 0.3) * 1000);
    }
}

function spawnSparks(cx, cy, color, count) {
    for (let i = 0; i < count; i++) {
        const s = document.createElement('div');
        s.className = 'fusion-spark';
        const angle = Math.random() * Math.PI * 2;
        const dist = 60 + Math.random() * 160;
        const sx = Math.cos(angle) * dist, sy = Math.sin(angle) * dist;
        const dur = 0.4 + Math.random() * 0.5;
        const sa = (Math.atan2(sy, sx) * 180 / Math.PI) + 90;
        s.style.cssText = `left:${cx}px;top:${cy}px;background:linear-gradient(to bottom,${color},transparent);--sx:${sx}px;--sy:${sy}px;--spark-angle:${sa}deg;--spark-duration:${dur}s;animation-delay:${Math.random() * 0.15}s;`;
        document.body.appendChild(s);
        setTimeout(() => s.remove(), (dur + 0.2) * 1000);
    }
}

function spawnEnergyRings(color, count) {
    const arena = $('#fusionArena');
    for (let i = 0; i < count; i++) {
        const r = document.createElement('div');
        r.className = 'energy-ring';
        r.style.borderColor = color;
        r.style.animationDelay = `${i * 0.2}s`;
        arena.appendChild(r);
        setTimeout(() => r.remove(), 1200);
    }
}

function getCenterPosition() {
    const m = $('#fusionMagikarp');
    const r = m.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

// ═══════════ POKÉDEX ═══════════
function renderPokedex() {
    const grid = $('#pokedexGrid');
    grid.innerHTML = '';
    const all = [...FUSIONS];
    const allReg = unlocked.filter(u => u !== 'glitch').length >= TOTAL_REGULAR;
    if (allReg || unlocked.includes('glitch')) all.push(GLITCH_FUSION);

    all.forEach((fusion, i) => {
        const isUnlocked = unlocked.includes(fusion.id);
        const isGlitch = fusion.id === 'glitch';
        const card = document.createElement('div');
        card.className = `pokedex-card ${isUnlocked ? 'unlocked' : 'locked'} ${isGlitch ? 'glitch-card' : ''}`;
        card.style.animationDelay = `${i * 0.05}s`;
        card.style.setProperty('--card-glow', fusion.color);

        const num = String(i + 1).padStart(3, '0');
        const dot = document.createElement('div');
        dot.className = 'pokedex-card-type-dot';
        if (fusion.icon) {
            const di = document.createElement('img'); di.src = fusion.icon; di.alt = fusion.type;
            dot.appendChild(di);
        } else if (isGlitch) {
            dot.innerHTML = '<span style="color:#00ff41;font-weight:bold;font-size:10px;">?</span>';
        }

        const numEl = document.createElement('span');
        numEl.className = 'pokedex-card-number'; numEl.textContent = `#${num}`;

        const imgW = document.createElement('div'); imgW.className = 'pokedex-card-image-wrap';
        const img = document.createElement('img'); img.className = 'pokedex-card-image';
        img.src = fusion.image; img.alt = isUnlocked ? fusion.name : '???';
        imgW.appendChild(img);

        const name = document.createElement('div');
        name.className = 'pokedex-card-name'; name.textContent = isUnlocked ? fusion.name : '???';

        card.appendChild(dot); card.appendChild(numEl); card.appendChild(imgW); card.appendChild(name);
        if (isUnlocked) card.addEventListener('click', () => showDetail(fusion));
        grid.appendChild(card);
    });
}

// ═══════════ DETAIL MODAL ═══════════
function showDetail(fusion) {
    const modal = $('#detailModal');
    const idx = [...FUSIONS, GLITCH_FUSION].findIndex(f => f.id === fusion.id);
    const num = String(idx + 1).padStart(3, '0');

    $('#detailImage').src = fusion.image;
    $('#detailImage').alt = fusion.name;
    $('#detailName').textContent = fusion.name;
    $('#detailTypeName').textContent = fusion.type;
    $('#detailDesc').textContent = fusion.desc;
    $('#detailNumber').textContent = `#${num}`;

    if (fusion.icon) { $('#detailTypeIcon').src = fusion.icon; $('#detailTypeIcon').style.display = ''; }
    else { $('#detailTypeIcon').style.display = 'none'; }

    const b = $('#detailTypeBadge');
    b.style.background = `${fusion.color}33`; b.style.color = fusion.color;
    b.style.border = `1px solid ${fusion.color}55`;

    $('#detailContent').style.setProperty('--card-glow', fusion.color);
    $('#detailImage').style.filter = `drop-shadow(0 4px 16px ${fusion.color}80)`;

    if (fusion.id === 'glitch') {
        $('#detailName').style.animation = 'glitchText 2s infinite';
        $('#detailName').style.color = '#00ff41';
        $('#detailImage').style.animation = 'glitchImage 3s infinite';
    } else {
        $('#detailName').style.animation = ''; $('#detailName').style.color = '';
        $('#detailImage').style.animation = '';
    }
    modal.classList.remove('hidden'); modal.classList.add('visible');
}

function closeDetail() {
    const m = $('#detailModal'); m.classList.add('hidden'); m.classList.remove('visible');
}

// ═══════════ GLITCH UNLOCK — EXALTED STATE ═══════════
function showGlitchUnlock() {
    // Don't show popup — instead make center Magikarp exalted
    glitchReady = true;
    const magikarp = $('#fusionMagikarp');
    magikarp.classList.add('exalted');
    magikarp.style.cursor = 'pointer';
    const hint = $('#fusionHint');
    hint.textContent = '⚠ Something is wrong... click Magikarp ⚠';
    hint.style.color = '#00ff41';
}

async function handleGlitchClick() {
    if (isFusing) return;

    // In free mode with glitch already unlocked — just show Magiglitch
    if (freeMode && unlocked.includes('glitch')) {
        startFusion(GLITCH_FUSION);
        return;
    }

    // Normal glitch ready path
    if (!glitchReady) return;
    glitchReady = false;
    isFusing = true;

    const magikarp = $('#fusionMagikarp');
    const glow = $('#fusionGlow');
    const flash = $('#fusionFlash');
    const arena = $('#fusionArena');
    const ring = $('#typeRing');
    const layout = $('#fusionLayout');
    const resultPanel = $('#resultPanel');
    const hint = $('#fusionHint');
    const activeIcon = $('#activeTypeIcon');

    // Phase 1: Corruption intensifies
    magikarp.classList.remove('exalted');
    magikarp.classList.add('corrupting');
    hint.textContent = 'E̷̢R̵̢R̶̰O̸͙R̷̬...';
    glow.style.background = 'radial-gradient(circle, rgba(0, 255, 65, 0.4), transparent 70%)';
    glow.style.width = '400px';
    glow.style.height = '400px';

    const center = getCenterPosition();
    spawnParticles(center.x, center.y, '#00ff41', 40);
    spawnSparks(center.x, center.y, '#ff0040', 25);
    arena.classList.add('shake');
    await wait(1200);

    // Phase 2: Flash + image swap
    magikarp.classList.remove('corrupting');
    magikarp.classList.add('pre-reveal');
    magikarp.src = GLITCH_FUSION.image;
    magikarp.style.filter = `drop-shadow(0 8px 30px ${GLITCH_FUSION.color}80)`;

    flash.classList.add('active');
    await wait(500);

    // Phase 3: Split layout + reveal (same as regular fusions)
    ring.classList.add('hiding');
    arena.classList.remove('shake');

    const center2 = getCenterPosition();
    spawnParticles(center2.x, center2.y, GLITCH_FUSION.color, 30);

    magikarp.classList.remove('pre-reveal');
    magikarp.classList.add('revealing');
    layout.classList.add('split');
    await wait(300);

    // Show active type icon (question mark style)
    activeIcon.classList.remove('hidden');
    activeIcon.style.setProperty('--glow-color', GLITCH_FUSION.color);
    $('#activeTypeIconImg').src = '';

    showResultPanel(GLITCH_FUSION);
    await wait(700);

    magikarp.classList.remove('revealing');
    flash.classList.remove('active');

    glow.style.background = `radial-gradient(circle, ${GLITCH_FUSION.color}33, transparent 70%)`;
    glow.style.width = '260px';
    glow.style.height = '260px';

    unlockFusion('glitch');
    hint.textContent = '';
    magikarp.style.cursor = '';
    isFusing = false;

    // Mark glitch as just unlocked — outro triggers on next fuse-again or menu
    if (!outroSeen) {
        glitchJustUnlocked = true;
    }
}

function enterFreeMode() {
    freeMode = true;
    localStorage.setItem(STORAGE_FREE, 'true');
    // Unlock all regular fusions + glitch
    FUSIONS.forEach(f => {
        if (!unlocked.includes(f.id)) {
            unlocked.push(f.id);
        }
    });
    if (!unlocked.includes('glitch')) unlocked.push('glitch');
    saveUnlocked();
    updateBadges();
    // Show menu reset button
    const menuReset = $('#btnMenuReset');
    if (menuReset) menuReset.classList.remove('hidden');
    goToScreen('fusion');
}

function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_OUTRO);
    localStorage.removeItem(STORAGE_FREE);
    location.reload();
}

// ═══════════ AMBIENT EFFECTS ═══════════
function createAmbientBubbles() {
    const c = $('#ambientBubbles');
    for (let i = 0; i < 15; i++) {
        const b = document.createElement('div'); b.className = 'bubble';
        const s = 20 + Math.random() * 60;
        b.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * 100}%;animation-duration:${12 + Math.random() * 18}s;animation-delay:${Math.random() * 15}s;`;
        c.appendChild(b);
    }
}

let ambientParticles = [];
function resizeCanvas() { particleCanvas.width = window.innerWidth; particleCanvas.height = window.innerHeight; }

function startAmbientParticles() {
    for (let i = 0; i < 40; i++) {
        ambientParticles.push({
            x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
            size: 0.5 + Math.random() * 1.5,
            speedX: (Math.random() - 0.5) * 0.3, speedY: (Math.random() - 0.5) * 0.3 - 0.2,
            opacity: 0.1 + Math.random() * 0.3, hue: 220 + Math.random() * 40,
        });
    }
    animateAmbient();
}

function animateAmbient() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    ambientParticles.forEach(p => {
        p.x += p.speedX; p.y += p.speedY;
        if (p.x < 0) p.x = particleCanvas.width;
        if (p.x > particleCanvas.width) p.x = 0;
        if (p.y < 0) p.y = particleCanvas.height;
        if (p.y > particleCanvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 60%, 70%, ${p.opacity})`;
        ctx.fill();
    });
    requestAnimationFrame(animateAmbient);
}

// ═══════════ UTILITIES ═══════════
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

// ═══════════ START ═══════════
document.addEventListener('DOMContentLoaded', init);
