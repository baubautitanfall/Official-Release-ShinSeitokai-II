// ==========================================
// ANTI-CHEAT & SCREEN PROTECTION
// ==========================================
document.addEventListener('keydown', (e) => {
    const lang = gameState?.language || 'ja';
    const t = (translations[lang] || translations.ja);
    if (e.key === 'PrintScreen') {
        e.preventDefault();
        alert(t.antiCheatScreenshot || 'スクリーンショットは禁止されています！');
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        alert(t.antiCheatPrint || '印刷機能は禁止されています！');
    }
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        alert(t.antiCheatDevTools || '開発者ツールは禁止されています！/ Admin tools are disabled!');
    }
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const lang = gameState?.language || 'ja';
    const t = (translations[lang] || translations.ja);
    alert(t.antiCheatContextMenu || '右クリックは禁止されています！/ Mate, why were you doing a right click-ing performance eh???');
    return false;
});

const gameSvgIcons = {

    trophy_celebration: `<svg class="game-icon celebration-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Victory Trophy">
      <rect x="10" y="8" width="4" height="4" fill="#ff3b4e" transform="rotate(25 12 10)"/>
      <rect x="50" y="10" width="4" height="4" fill="#3577f1" transform="rotate(-30 52 12)"/>
      <circle cx="16" cy="22" r="2.5" fill="#ffcc33"/>
      <circle cx="48" cy="22" r="2.5" fill="#2ecc71"/>
      <path d="M18,12 H46 V26 C46,34 38,40 32,40 C26,40 18,34 18,26 Z" fill="#ffcc33" stroke="#1b1b1f" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M18,16 H12 C9.8,16 8,17.8 8,20 V22 C8,26 12,28 18,28" fill="none" stroke="#1b1b1f" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M46,16 H52 C54.2,16 56,17.8 56,20 V22 C56,26 52,28 46,28" fill="none" stroke="#1b1b1f" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="29" y="40" width="6" height="8" fill="#ff9416" stroke="#1b1b1f" stroke-width="2.5"/>
      <rect x="20" y="48" width="24" height="8" rx="2" fill="#ff3b4e" stroke="#1b1b1f" stroke-width="2.5"/>
      <polygon points="32,18 33.5,22 38,22 34.5,24.5 36,29 32,26.5 28,29 29.5,24.5 26,22 30.5,22" fill="#ffffff" stroke="#1b1b1f" stroke-width="1"/>
    </svg>`,

    stamp_star: `<svg class="stamp-star-icon" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#ff3b4e" stroke="#1b1b1f" stroke-width="2" stroke-linejoin="round"/></svg>`,

    icon_rules: `<svg class="ui-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,

    icon_lang: `<svg class="ui-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,

    // Placeholder "come find us" artwork shown on the final page until a
    // real photo of the student council room is dropped in. To use a real
    // photo instead, replace the call to getGameIconSvg('final_invite_door')
    // inside renderFinalCongratsContent() with:
    //   `<img src="生徒会室.jpg" alt="生徒会室" class="final-invite-photo">`
    // (put the image file next to index.html, any filename works).
    final_invite_door: `<svg class="game-icon final-invite-icon" viewBox="0 0 160 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="生徒会室への案内イラスト">
      <polygon points="16,30 20,40 30,42 20,46 16,58 12,46 2,42 12,40" fill="#ff3b4e" stroke="#1b1b1f" stroke-width="1.6" stroke-linejoin="round"/>
      <polygon points="150,14 153,22 161,24 153,27 150,36 147,27 139,24 147,22" fill="#57e6a1" stroke="#1b1b1f" stroke-width="1.4" stroke-linejoin="round"/>
      <polygon points="140,118 143,126 151,128 143,131 140,140 137,131 129,128 137,126" fill="#ff6fa5" stroke="#1b1b1f" stroke-width="1.4" stroke-linejoin="round"/>
      <rect x="24" y="20" width="112" height="22" rx="7" fill="#fffdf7" stroke="#1b1b1f" stroke-width="3.5"/>
      <text x="80" y="36" text-anchor="middle" font-size="13" font-weight="700" fill="#1b1b1f" font-family="var(--font-display)">生徒会室</text>
      <line x1="80" y1="42" x2="80" y2="54" stroke="#1b1b1f" stroke-width="3"/>
      <rect x="30" y="54" width="100" height="106" rx="8" fill="#3577f1" stroke="#1b1b1f" stroke-width="4"/>
      <rect x="40" y="64" width="80" height="88" rx="5" fill="#ffcc33" stroke="#1b1b1f" stroke-width="3"/>
      <rect x="46" y="70" width="68" height="76" fill="#fff9ec" stroke="#1b1b1f" stroke-width="2.5"/>
      <circle cx="102" cy="112" r="3.6" fill="#1b1b1f"/>
      <path d="M46,146 Q80,132 114,146" fill="none" stroke="#ff9416" stroke-width="3" stroke-linecap="round"/>
    </svg>`
};

function getGameIconSvg(name) {
    return gameSvgIcons[name] || '';
}

// ==========================================
// GAME DATA & SECRET CODES
// ==========================================

const ACTIVE_SECRET_CODE = 'SEITOKAI';
const SECRET_QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(ACTIVE_SECRET_CODE)}`;

const MAX_CLASS_COUNT = 8;

const questions = [
    {
        id: 1,
        category: "タイプA1",
        categoryName: "場所",
        type: "choice",
        photoKey: "dance",
        destination: "体育館",
        question: "□を「シカク」として考えてみる。🟢には英語を当てはめてみる。分かった答えを入力してね。",
        questionEn: "Think of the square as 'shikaku' and fit English into the green circle. Enter your answer.",
        answers: ["ダンス", "だんす", "DANCE", "dance"],
        hint1: "ヒント① □を「シカク」として考えてみる",
        hint1En: "Hint 1: Think of the square as 'shikaku'.",
        hint2: "ヒント② 🟢には英語を当てはめてみる",
        hint2En: "Hint 2: Fill the green circle with English."
    },
    {
        id: 2,
        category: "タイプB1",
        categoryName: "特徴",
        type: "riddle",
        puzzleKey: "typeb4",
        question: "画像の謎を解いて、答えを入力してね。",
        questionEn: "Solve the picture puzzle and enter your answer.",
        answers: ["くま", "クマ", "熊", "bear"],
        hint1: "ヒント① 文字に注目してみる",
        hint1En: "Hint 1: Pay attention to the letters.",
        hint2: "ヒント② マスに注目してみる",
        hint2En: "Hint 2: Pay attention to the squares."
    },
    {
        id: 3,
        category: "タイプA2",
        categoryName: "場所",
        type: "choice",
        photoKey: "ray",
        destination: "3-3",
        question: "フリガナを意識してみる。日本語以外の言語を使って答えよう。",
        questionEn: "Pay attention to the furigana and use a non-Japanese language to find the answer.",
        answers: ["RAY", "ray", "光線", "こうせん", "3-3"],
        hint1: "ヒント① フリガナを意識してみる",
        hint1En: "Hint 1: Pay attention to the furigana.",
        hint2: "ヒント② 日本語以外の言語を使う",
        hint2En: "Hint 2: Use a language other than Japanese."
    },
    {
        id: 4,
        category: "タイプB2",
        categoryName: "特徴",
        type: "riddle",
        puzzleKey: "typeb1",
        question: "画像の謎を解いて、答えを入力してね。",
        questionEn: "Solve the picture puzzle and enter your answer.",
        answers: ["マイクラ", "まいくら", "Minecraft", "minecraft"],
        hint1: "ヒント① キーボードに見立てて考える",
        hint1En: "Hint 1: Think of it like a keyboard.",
        hint2: "ヒント② 赤→青・青→赤の関係性を意識してみる",
        hint2En: "Hint 2: Pay attention to the red-to-blue and blue-to-red relationship."
    },
    {
        id: 5,
        category: "タイプA3",
        categoryName: "場所",
        type: "choice",
        photoKey: "dinosaur",
        destination: "1-4",
        grade: 1,
        classCount: MAX_CLASS_COUNT,
        correctClass: 4,
        question: "紙切れが何の破片なのか注目してみる。細部まで注目して、答えを入力してね。",
        questionEn: "Look at what the paper fragment is a piece of and pay attention to the details before entering your answer.",
        answers: ["恐竜", "きょうりゅう", "キョウリュウ", "dinosaur", "dinosaurs"],
        hint1: "ヒント① 紙切れが何の破片なのか注目してみる",
        hint1En: "Hint 1: Pay attention to what the paper fragment is a piece of.",
        hint2: "ヒント② 細部まで注目してみる",
        hint2En: "Hint 2: Pay attention to the details."
    },
    {
        id: 6,
        category: "タイプB3",
        categoryName: "特徴",
        type: "riddle",
        puzzleKey: "typeb3",
        question: "画像の謎を解いて、答えを入力してね。",
        questionEn: "Solve the picture puzzle and enter your answer.",
        answers: ["すみっこぐらし", "すみっコぐらし", "スミッコグラシ", "sumikkogurashi"],
        hint1: "ヒント① 動物の顔の向きに注目する",
        hint1En: "Hint 1: Pay attention to the direction the animals face.",
        hint2: "ヒント② 12が関係している動物のグループを考えてみる",
        hint2En: "Hint 2: Think about the animal group related to 12."
    },
    {
        id: 7,
        category: "タイプA4",
        categoryName: "場所",
        type: "choice",
        photoKey: "dumpling",
        destination: "中庭",
        question: "ある法則に則って矢印を繋いでみる。文字を文として捉えて、答えを入力してね。",
        questionEn: "Connect the arrows according to the pattern, regard the letters as a sentence, and enter your answer.",
        answers: ["すいぎょうざ", "水餃子", "水ぎょうざ", "餃子", "ぎょうざ", "dumpling", "dumplings"],
        hint1: "ヒント① ある法則に則って矢印を繋いでみる",
        hint1En: "Hint 1: Connect the arrows according to a pattern.",
        hint2: "ヒント② 文字を文として捉える",
        hint2En: "Hint 2: Regard the letters as a sentence."
    },
    {
        id: 8,
        category: "タイプB4",
        categoryName: "特徴",
        type: "riddle",
        puzzleKey: "typeb2",
        question: "画像の謎を解いて、答えを入力してね。",
        questionEn: "Solve the picture puzzle and enter your answer.",
        answers: ["ぼくとう", "木刀", "ぼくとー", "bokuto"],
        hint1: "ヒント① 文字と指の色を関連付けて考える",
        hint1En: "Hint 1: Connect the letters and finger colors.",
        hint2: "ヒント② 上下以外の向きを考える",
        hint2En: "Hint 2: Think about directions other than up and down."
    }
];

function preloadQuizImages() {
    // No-op: Type A puzzle art is now inline SVG (see quizPuzzleSvgs.js),
    // so there is no binary image asset to preload over the network.
}

function escapeHtml(str) {
    return String(str ?? '').replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

const FLOOR_INFO = {
    1: { tag: '南棟4F', tagEn: 'S.Bldg 4F', chipJa: 'コンピューター教室', chipEn: 'Computer Lab' },
    2: { tag: '南棟3F', tagEn: 'S.Bldg 3F', chipJa: '生物・物理教室',   chipEn: 'Science Labs' },
    3: { tag: '南棟2F', tagEn: 'S.Bldg 2F', chipJa: '社会科教室',       chipEn: 'Social Studies' }
};
const FLOOR_ORDER = [1, 2, 3]; // rendered top (4F) to bottom (2F), like the real sheet

// The pair the player just solved — its classroom-guess question is what
// "Previous Answer" is showing on the intermediate screen right now. This
// is the ONLY room the map ever shows — it must never look ahead to the
// next pair, or it would spoil the next puzzle.
function getPreviousMapQuestion() {
    const solvedPair = gameState.pairPage;
    const a = gameState.questionSequence[solvedPair * 2];
    const b = gameState.questionSequence[solvedPair * 2 + 1];
    return [a, b].find(q => q && q.type === 'choice') || null;
}

function buildFoundPinMarkup(isEn, cellH) {
    return `
        <text class="map-pin-label map-pin-label-confirmed" text-anchor="middle" y="-26">${escapeHtml(isEn ? 'FOUND!' : '見つけた！')}</text>
        <circle class="map-pin-ring map-pin-ring-confirmed" cx="0" cy="${cellH / 2}" r="16"></circle>
        <circle cx="0" cy="-8" r="11" fill="var(--green)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M-4,-8 L-1,-4 L6,-13" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
}

// marker: { classNum, classCount } for the room found on THIS floor, or
// null if this floor has nothing to show (dimmed, decorative only).
function buildFloorBand(y, gradeKey, marker, isEn) {
    const info = FLOOR_INFO[gradeKey];
    const bandX = 46, bandW = 344, cellH = 34, corridorH = 14;
    const isActive = !!marker;
    const n = isActive ? Math.max(marker.classCount || 1, 1) : 6;
    const cellW = bandW / n;

    let cells = '';
    let pin = '';
    for (let i = 0; i < n; i++) {
        const num = i + 1;
        const cx = bandX + i * cellW;
        const isFound = isActive && num === marker.classNum;
        const label = isActive ? `${gradeKey}-${num}` : '';
        const fill = isFound ? 'var(--green)' : (isActive ? '#fffdf7' : '#e9e3d4');
        cells += `
            <rect x="${cx.toFixed(1)}" y="${y}" width="${cellW.toFixed(1)}" height="${cellH}"
                  fill="${fill}" stroke="var(--ink)" stroke-width="${isFound ? 2.6 : 1.4}"
                  class="map-room-cell${isFound ? ' map-room-confirmed' : ''}"/>
            ${label ? `<text x="${(cx + cellW / 2).toFixed(1)}" y="${y + cellH / 2 + 4}" text-anchor="middle" font-size="9.5" font-weight="700" fill="${isFound ? '#ffffff' : 'var(--ink)'}" class="map-room-num">${label}</text>` : ''}`;

        if (isFound) {
            const px = cx + cellW / 2;
            pin = `
                <g class="map-pin map-pin-confirmed" transform="translate(${px.toFixed(1)}, ${y})">
                    ${buildFoundPinMarkup(isEn, cellH)}
                </g>`;
        }
    }

    const accent = isActive ? 'var(--green)' : 'var(--ink)';
    const bandBg = isActive ? 'rgba(46,204,113,0.10)' : 'transparent';
    const chipLabel = escapeHtml(isEn ? info.chipEn : info.chipJa);
    const tagLabel = escapeHtml(isEn ? info.tagEn : info.tag);

    return `
        <g class="map-floor-band${isActive ? ' map-floor-highlight' : ' map-floor-dim'}">
            <rect x="${bandX - 4}" y="${y - 20}" width="${bandW + 8}" height="${cellH + 26}" rx="6"
                  fill="${bandBg}"
                  stroke="${isActive ? accent : 'var(--ink)'}" stroke-width="${isActive ? 3 : 1.5}"
                  stroke-dasharray="${isActive ? '0' : '3 4'}"/>
            <!-- floor tag banner -->
            <g transform="translate(${bandX - 4}, ${y - 20})">
                <rect x="0" y="-2" width="70" height="17" fill="${isActive ? accent : 'var(--ink)'}" />
                <text x="35" y="10.5" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--panel)" font-family="var(--font-display)">${tagLabel}</text>
            </g>
            <!-- subject chip, decorative flavor like the reference sheet -->
            <text x="${bandX + bandW}" y="${y - 8}" text-anchor="end" font-size="8" fill="${isActive ? 'var(--ink)' : '#8a8272'}">${chipLabel}</text>
            <!-- windows strip -->
            <rect x="${bandX}" y="${y - 2}" width="${bandW}" height="4" fill="#cfc6ac"/>
            ${cells}
            <!-- corridor strip under the rooms -->
            <rect x="${bandX}" y="${y + cellH}" width="${bandW}" height="${corridorH}" fill="#e3d7b4" stroke="var(--ink)" stroke-width="1.2"/>
            ${pin}
        </g>`;
}

// question: the classroom just confirmed (green "FOUND!" pin) — pass null
// to show the building with no room highlighted. There is deliberately no
// second "next room" parameter — the map never previews what's ahead.
function buildFloorPlanSvg(question) {
    const isEn = gameState.language === 'en';
    const ariaLabel = isEn ? 'School building floor plan with the room you just found marked' : '見つけた教室を示す校舎の見取り図';

    const bandGap = 78;
    const startY = 46;
    const bands = FLOOR_ORDER.map((gradeKey, i) => {
        const marker = (question && question.grade === gradeKey)
            ? { classNum: question.correctClass, classCount: question.classCount }
            : null;
        return buildFloorBand(startY + i * bandGap, gradeKey, marker, isEn);
    }).join('');

    const groundY = startY + FLOOR_ORDER.length * bandGap + 6;
    const svgHeight = groundY + 92;

    // NOTE (bug fix): the roofline apex and the "N" compass badge used to
    // sit right at y≈0 / flush against the card's rounded top-right corner,
    // so the fullscreen viewport's `overflow:hidden` + border-radius would
    // clip them — that stray-looking half-cut circle in the corner. Both
    // are now pulled in from every edge (TOP_SAFE / compass position below)
    // so nothing ever touches the card's border or its rounded corner.
    const TOP_SAFE = 12;

    return `
    <svg class="game-map-svg" viewBox="0 0 400 ${svgHeight}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${ariaLabel}" preserveAspectRatio="xMidYMid meet">
        <rect x="4" y="4" width="392" height="${svgHeight - 8}" rx="14" fill="var(--panel)" stroke="var(--ink)" stroke-width="3"/>

        <!-- roofline, blueprint-style building outline -->
        <polygon points="16,${startY - 30} 200,${startY - 46 + TOP_SAFE} 384,${startY - 30}" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-linejoin="round"/>
        <line x1="16" y1="${startY - 30}" x2="16" y2="${groundY + 24}" stroke="var(--ink)" stroke-width="2.5"/>
        <line x1="384" y1="${startY - 30}" x2="384" y2="${groundY + 24}" stroke="var(--ink)" stroke-width="2.5"/>

        ${bands}

        <!-- ground floor: reception / staff entrance, decorative -->
        <g>
            <rect x="42" y="${groundY}" width="316" height="24" fill="#f1ead4" stroke="var(--ink)" stroke-width="1.5"/>
            <text x="200" y="${groundY + 16}" text-anchor="middle" font-size="9" fill="#8a8272">${escapeHtml(isEn ? '1F · Staff Room / Main Entrance' : '南棟1F・職員室・玄関')}</text>
        </g>
        <line x1="16" y1="${groundY + 24}" x2="384" y2="${groundY + 24}" stroke="var(--ink)" stroke-width="2.5"/>

        <g class="map-gym-annex">
            <polygon points="60,${groundY + 46} 200,${groundY + 34} 340,${groundY + 46}" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/>
            <rect x="60" y="${groundY + 46}" width="280" height="30" fill="#e9e3d4" stroke="var(--ink)" stroke-width="2"/>
            <text x="200" y="${groundY + 65}" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" font-family="var(--font-display)">${escapeHtml(isEn ? 'Gymnasium' : '体育館')}</text>
        </g>

        <g transform="translate(358, 34)">
            <circle r="11" fill="var(--panel)" stroke="var(--ink)" stroke-width="2"/>
            <polygon points="0,-7 3,0 0,7 -3,0" fill="var(--red)" stroke="var(--ink)" stroke-width="1"/>
            <text y="-16" text-anchor="middle" font-size="7" font-weight="700" fill="var(--ink)">N</text>
        </g>
    </svg>`;
}

// The real school floor-guide PDF, shown inline in the map modal. Kept as
// a relative path (no leading slash, no localhost/absolute URL) so it
// resolves the same way whether the project is opened straight from the
// filesystem or served from a GitHub Pages project subpath.
const MAP_PDF_PATH = 'floor_guide.pdf';

function renderGameMap() {
    const container = document.getElementById('mapContainer');
    if (!container) return;
    const t = translations[gameState.language] || translations.ja;
    const isEn = gameState.language === 'en';

    // Only ever shows the room tied to "Previous Answer" on this same
    // screen — never the upcoming pair's room, so nothing is spoiled.
    container.innerHTML = `
        <div class="map-modal-card">
            <div class="map-fullscreen-header">
                <span class="map-fullscreen-title">${escapeHtml(t.mapCaption)}</span>
                <button type="button" class="map-close-btn" onclick="toggleMap()" aria-label="${escapeHtml(t.mapCloseIconLabel)}">✕</button>
            </div>
            <div class="game-map-viewport game-map-viewport-pdf" id="gameMapViewport">
                <iframe
                    class="game-map-pdf"
                    id="gameMapPdfFrame"
                    src="${escapeHtml(MAP_PDF_PATH)}"
                    title="${escapeHtml(t.mapCaption)}"
                    loading="lazy"
                ></iframe>
                <a class="map-pdf-fallback-link" href="${escapeHtml(MAP_PDF_PATH)}" target="_blank" rel="noopener">
                    ${escapeHtml(isEn ? 'Open the PDF in a new tab' : 'PDFを新しいタブで開く')}
                </a>
            </div>
            <p class="map-note">${t.mapNote}</p>
        </div>
    `;
}

// NOTE: the map used to be a generated SVG floor plan with custom
// pinch/wheel/drag zoom-and-pan handling (attachMapZoomPan). It's now the
// real floor-guide PDF embedded in an <iframe>, and browsers' own built-in
// PDF viewers already provide zoom/scroll/pinch, so that custom zoom-pan
// controller was removed rather than fighting the iframe's own input
// handling for pointer/touch events.

// ==========================================
// "ROOM CONFIRMED" FLASH — fires the instant a classroom-code (Type A)
// answer is submitted correctly, showing the exact room they just found
// lit up green on the floor plan, instead of only revealing the map
// later as a static "go here" hint.
// ==========================================
function flashRoomConfirmation(question) {
    if (!question || question.type !== 'choice' || question.grade === undefined || question.correctClass === undefined) return;

    let overlay = document.getElementById('roomConfirmOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'roomConfirmOverlay';
        document.body.appendChild(overlay);
    }

    const isEn = gameState.language === 'en';
    const roomLabel = `${question.grade}-${question.correctClass}`;

    overlay.innerHTML = `
        <div class="room-confirm-card">
            <p class="room-confirm-title">${escapeHtml(isEn ? '✓ Room Confirmed!' : '✓ 教室を確認！')}</p>
            <div class="room-confirm-map">${buildFloorPlanSvg(question)}</div>
            <p class="room-confirm-room">${escapeHtml(roomLabel)}</p>
        </div>`;

    overlay.classList.remove('show');
    void overlay.offsetWidth;
    overlay.classList.add('show');

    clearTimeout(overlay._hideTimer);
    overlay._hideTimer = setTimeout(() => {
        overlay.classList.remove('show');
    }, 2000);
}

function toggleMap() {
    const container = document.getElementById('mapContainer');
    const btn = document.getElementById('mapToggleBtn');
    if (!container || !btn) return;
    const t = translations[gameState.language] || translations.ja;

    const isCurrentlyHidden = container.classList.contains('hidden');
    if (isCurrentlyHidden) {
        renderGameMap();
        container.classList.remove('hidden');
        container.classList.add('map-fullscreen');
        document.body.classList.add('map-open');
        btn.textContent = t.mapCloseBtn;
    } else {
        container.classList.add('hidden');
        container.classList.remove('map-fullscreen');
        document.body.classList.remove('map-open');
        btn.textContent = t.mapToggleBtn;
    }
}

function applyClassroomOptionData(question) {
    if (question.type !== 'choice' || question.grade === undefined) return question;

    question.classCount = Math.min(question.classCount || MAX_CLASS_COUNT, MAX_CLASS_COUNT);

    const codes = [];
    for (let n = 1; n <= question.classCount; n++) codes.push(`${question.grade}-${n}`);

    question.options = shuffleArray(codes);
    question.correctAnswer = `${question.grade}-${question.correctClass}`;
    question.answers = [question.correctAnswer];

    return question;
}

const englishQuestionText = {
    2: 'Solve the picture puzzle and enter your answer.',
    4: 'Solve the picture puzzle and enter your answer.',
    6: 'Solve the picture puzzle and enter your answer.',
    8: 'Solve the picture puzzle and enter your answer.'
};

const englishAnswersMap = {
    2: ['minecraft', 'mine craft'],
    4: ['bokuto', 'wooden sword'],
    6: ['sumikkogurashi', 'sumikko gurashi'],
    8: ['bear']
};

const englishCorrectAnswerMap = {};

const englishHintMap = {
    2: { hint1: 'Hint 1: Try treating it like a keyboard.', hint2: 'Hint 2: Try translating each part.' },
    4: { hint1: 'Hint 1: Think about directions besides left and right.', hint2: 'Hint 2: Think about the connection between the letters and the finger colors.' },
    6: { hint1: 'Hint 1: Pay attention to the direction the animals face.', hint2: 'Hint 2: It is not only about the first letters.' },
    8: { hint1: 'Hint 1: Pay attention to the letters.', hint2: 'Hint 2: Pay attention to the squares.' }
};

const translations = {
    ja: {
        pageTitle: '「シン・探せいとかい：II」',
        menuText: 'ようこそ！このゲームをプレイしますか？',
        rulesTitle: 'ゲームルール',
        rules: [
            '全4組の謎解きに挑戦！各組は「場所」と「特徴」のペアで固定されています🔍✨',
            '各問題に対して正しい答えを入力してください',
            '1ページに2問ずつ出題され、1問目を正解すると2問目が開きます',
            'ペア（1ページ2問）をクリアするごとにスタンプが1つ増えます（全部で4つ！）'
        ],
        menuDescription: '「場所」と「特徴」がペアになった4組の問題をすべて解いてみよう！',
        startGame: 'ゲーム開始！',
        startGameShort: 'スタート',
        language: 'Language',
        questionNumPrefix: '問題',
        answerPlaceholder: '答えを入力してください～',
        checkAnswerBtn: '答える！',
        resultEmpty: '答えを入力してください！',
        resultWrong: '不正解です。もう一度試してください！',
        resultCorrect: 'やったね！大正解！！',
        mistakeCountLabel: (n) => `失敗数: ${n}`,
        hint1Locked: 'ヒント１（3回失敗後に表示）',
        hint1Unlocked: 'ヒント１を見る',
        hint1Maxed: 'ヒント１は2回まで',
        hint2Locked: 'ヒント２（5回失敗後に表示）',
        hint2Unlocked: 'ヒント２を見る',
        hint2Maxed: 'ヒント２は2回まで',
        helpCardLocked: 'ヘルプミーカード（7回失敗で解放）',
        helpCardButton: '4択にする（教室クイズ専用・このゲーム中1回だけ使用可）',
        helpCardUsedUp: 'このヘルプはすでに使用済みです',
        intermediateTitle: '正解です！',
        intermediateDescription: '次の問題に進むため、シークレットコードを入力またはスキャンしてください。今見つけた教室の場所を確認したい時は地図を見てみて！',
        intermediateManualLabel: '手動でコードを入力:',
        intermediateInputPlaceholder: 'コードを入力してください',
        intermediateSubmitBtn: 'コード送信',
        intermediateQrLabel: 'またはQRコードをスキャン:',
        qrOpenBtn: 'QRスキャナーを開く',
        qrCloseBtn: 'スキャンを閉じる',
        qrStatusAccessing: 'カメラをアクセス中...',
        qrStatusScanning: 'カメラに向けてQRコードをスキャンしてください',
        qrStatusError: 'カメラにアクセスできませんでした',
        intermediateCodeEmpty: 'コードを入力してください！',
        intermediateCodeInvalid: 'コードが無効です。正しいコードを入力してください。',
        intermediateCodeSuccess: 'コードが認証されました！次の問題に進みます...',
        finalTitle: 'やったね！全問題をクリアしました！',
        finalDescription: '最後のステップです。最終シークレットコードを入力またはスキャンしてください',
        finalManualLabel: '手動でコードを入力:',
        finalInputPlaceholder: 'コードを入力してください',
        finalSubmitBtn: 'コード送信',
        finalQrLabel: 'またはQRコードをスキャン:',
        finalSuccess: 'コードが認証されました！おめでとうございます！',
        finalCodeInvalid: 'コードが無効です。正しいコードを入力してください。',
        finalCodeEmpty: 'コードを入力してください！',
        playAgainBtn: 'もう一度プレイ',
        personaCallouts: ['イケイケ！', 'どうだろうな！', '当たってMiiや！', 'せやで～'],
        personaCalloutRare: 'それちゃうわぼけw',
        antiCheatScreenshot: 'スクリーンショットは禁止されています！',
        antiCheatPrint: '印刷機能は禁止されています！',
        antiCheatDevTools: '開発者ツールは禁止されています！',
        antiCheatContextMenu: '右クリックは禁止されています！',
        mapToggleLabel: '地図を表示：',
        mapToggleBtn: '地図を見てみる、、、？！',
        mapCloseBtn: '地図を閉じる',
        mapCaption: '校舎見取り図',
        mapNote: '※PDF内でピンチ／スクロールして拡大・移動できるよ。',
        previousAnswerLabel: '前回の答え：',
        themeLabel: 'テーマ',
        themeDefault: 'デフォルト',
        themeMono: '白黒コミック',
        themeNeon: 'ネオン',
        mapCloseIconLabel: '地図を閉じる',
        mapGymChip: '体育館',
        finalCongratsTitle: '🎉 おめでとうございます！ 🎉',
        finalCongratsDescription: 'すべての謎を解き明かし、宝箱を見事に開けました！',
        finalInviteHeading: 'ここにきてね〜！',
        finalInviteSub: '生徒会室で待ってるよ✦'
    },
    es: {
        pageTitle: 'Shin Seitokai: II',
        menuText: '¡Bienvenido! ¿Quieres jugar?',
        rulesTitle: 'Reglas del juego',
        rules: [
            'Resuelve 4 pares fijos de enigmas. Cada par es un conjunto de "Lugar" + "Característica".',
            'Escribe la respuesta correcta para cada pregunta.',
            'Cada página tiene 2 preguntas; la segunda se desbloquea tras responder bien la primera.',
            'Ganas 1 sello por cada par resuelto.',
            'Resuelve todos los enigmas y códigos para abrir el tesoro.',
            'El orden cambia cada partida, pero cada par siempre sigue junto.'
        ],
        menuDescription: '¡Resuelve los 4 pares fijos con un problema de lugar y uno de característica!',
        startGame: '¡Empezar!',
        startGameShort: 'INICIAR',
        language: 'Idioma',
        questionNumPrefix: 'Pregunta',
        answerPlaceholder: 'Escribe tu respuesta…',
        checkAnswerBtn: '¡Responder!',
        resultEmpty: '¡Escribe una respuesta!',
        resultWrong: 'Incorrecto. ¡Inténtalo otra vez!',
        resultCorrect: '¡Correcto!',
        mistakeCountLabel: (n) => `Errores: ${n}`,
        hint1Locked: 'Pista 1 (se desbloquea tras 3 errores)',
        hint1Unlocked: 'Ver pista 1',
        hint1Maxed: 'Pista 1: máximo 2 usos',
        hint2Locked: 'Pista 2 (se desbloquea tras 5 errores)',
        hint2Unlocked: 'Ver pista 2',
        hint2Maxed: 'Pista 2: máximo 2 usos',
        helpCardLocked: 'Carta de ayuda (se desbloquea tras 7 errores)',
        helpCardButton: 'Cambiar a 4 opciones (solo para preguntas de aula; 2 usos por partida)',
        helpCardUsedUp: 'Esta ayuda ya se usó',
        intermediateTitle: '¡Correcto!',
        intermediateDescription: 'Introduce o escanea el código secreto para seguir.',
        intermediateManualLabel: 'Introducir código:',
        intermediateInputPlaceholder: 'Escribe el código',
        intermediateSubmitBtn: 'Enviar código',
        intermediateQrLabel: 'O escanea el QR:',
        qrOpenBtn: 'Abrir escáner QR',
        qrCloseBtn: 'Cerrar escáner',
        qrStatusAccessing: 'Accediendo a la cámara…',
        qrStatusScanning: 'Apunta la cámara al código QR',
        qrStatusError: 'No se pudo acceder a la cámara',
        intermediateCodeEmpty: '¡Escribe el código!',
        intermediateCodeInvalid: 'Código inválido. Inténtalo de nuevo.',
        intermediateCodeSuccess: '¡Código verificado! Siguiente pregunta…',
        finalTitle: '¡Lo lograste! Todas las preguntas están resueltas.',
        finalDescription: 'Último paso: ingresa o escanea el código final.',
        finalManualLabel: 'Introducir código final:',
        finalInputPlaceholder: 'Escribe el código',
        finalSubmitBtn: 'Enviar código',
        finalQrLabel: 'O escanea el QR:',
        finalSuccess: '¡Código verificado! ¡Felicidades!',
        finalCodeInvalid: 'Código inválido.',
        finalCodeEmpty: '¡Escribe el código!',
        playAgainBtn: 'Jugar otra vez',
        personaCallouts: ['¡ADELANTE!', '¡LO TENGO!', '¡SEGURO?', '¡VAMOS!'],
        personaCalloutRare: '¡ya te la sabes!',
        antiCheatScreenshot: '¡Las capturas están bloqueadas!',
        antiCheatPrint: '¡La impresión está bloqueada!',
        antiCheatDevTools: '¡Las herramientas de desarrollador están bloqueadas!',
        antiCheatContextMenu: '¡El clic derecho está bloqueado!',
        mapToggleLabel: 'Mostrar mapa:',
        mapToggleBtn: 'Abrir mapa',
        mapCloseBtn: 'Cerrar mapa',
        mapCaption: 'Plano del campus',
        mapNote: 'Puedes hacer zoom y desplazarte dentro del PDF.',
        previousAnswerLabel: 'Respuesta previa:',
        themeLabel: 'Tema',
        themeDefault: 'Predeterminado',
        themeMono: 'Cómic en blanco y negro',
        themeNeon: 'Neón',
        mapCloseIconLabel: 'Cerrar mapa',
        mapGymChip: 'Gimnasio',
        finalCongratsTitle: '🎉 ¡Felicidades! 🎉',
        finalCongratsDescription: '¡Resolvió todos los enigmas y abrió el tesoro!',
        finalInviteHeading: '¡Encuéntranos aquí!',
        finalInviteSub: 'Te esperamos en la sala del consejo estudiantil ✦'
    },
    fr: {
        pageTitle: 'Shin Seitokai: II',
        menuText: 'Bienvenue ! Voulez-vous jouer ?',
        rulesTitle: 'Règles du jeu',
        rules: [
            'Résolvez 4 paires d’énigmes fixes. Chaque paire est un ensemble "Lieu" + "Caractéristique".',
            'Saisissez la bonne réponse pour chaque question.',
            'Deux questions par page ; la seconde se déverrouille après la première bonne réponse.',
            'Vous gagnez 1 tampon par paire résolue.',
            'Résolvez tous les énigmes et codes pour ouvrir le trésor.',
            'L’ordre change chaque partie, mais chaque paire reste ensemble.'
        ],
        menuDescription: 'Résolvez les 4 paires fixes en combinant un lieu et une caractéristique !',
        startGame: 'Commencer !',
        startGameShort: 'DÉMARRER',
        language: 'Langue',
        answerPlaceholder: 'Tapez votre réponse…',
        checkAnswerBtn: 'Répondre !',
        resultEmpty: 'Veuillez saisir une réponse !',
        resultWrong: 'Mauvaise réponse. Réessayez !',
        resultCorrect: 'Bonne réponse !',
        mistakeCountLabel: (n) => `Erreurs : ${n}`,
        hint1Locked: 'Indice 1 (débloqué après 3 erreurs)',
        hint1Unlocked: 'Voir l’indice 1',
        hint1Maxed: 'Indice 1 : 2 utilisations max',
        hint2Locked: 'Indice 2 (débloqué après 5 erreurs)',
        hint2Unlocked: 'Voir l’indice 2',
        hint2Maxed: 'Indice 2 : 2 utilisations max',
        helpCardLocked: 'Carte d’aide (débloquée après 7 erreurs)',
        helpCardButton: 'Passer à 4 choix (questions de salle uniquement ; 2 utilisations par partie)',
        helpCardUsedUp: 'Cette aide a déjà été utilisée',
        intermediateTitle: 'Bonne réponse !',
        intermediateDescription: 'Saisissez ou scannez le code secret pour continuer.',
        intermediateManualLabel: 'Saisir le code :',
        intermediateInputPlaceholder: 'Écrivez le code',
        intermediateSubmitBtn: 'Valider le code',
        intermediateQrLabel: 'Ou scanner le QR :',
        qrOpenBtn: 'Ouvrir le scanner QR',
        qrCloseBtn: 'Fermer le scanner',
        qrStatusAccessing: 'Accès à la caméra…',
        qrStatusScanning: 'Pointez la caméra vers le QR code',
        qrStatusError: 'L’accès à la caméra a échoué',
        intermediateCodeEmpty: 'Veuillez saisir le code !',
        intermediateCodeInvalid: 'Code invalide. Réessayez.',
        intermediateCodeSuccess: 'Code vérifié ! Question suivante…',
        finalTitle: 'C’est terminé ! Toutes les questions sont faites.',
        finalDescription: 'Étape finale : saisissez ou scannez le code final.',
        finalManualLabel: 'Saisir le code final :',
        finalInputPlaceholder: ' Écrivez le code',
        finalSubmitBtn: 'Valider le code',
        finalQrLabel: 'Ou scanner le QR :',
        finalSuccess: 'Code vérifié ! Félicitations !',
        finalCodeInvalid: 'Code invalide.',
        finalCodeEmpty: 'Veuillez saisir le code !',
        playAgainBtn: 'Rejouer',
        personaCallouts: ['ALLEZ !', 'C’EST BON !', 'VRAIMENT ?', 'ON Y VA !'],
        personaCalloutRare: 'tu la connais !',
        antiCheatScreenshot: 'Les captures d’écran sont interdites !',
        antiCheatPrint: 'L’impression est interdite !',
        antiCheatDevTools: 'Les outils de dev sont interdits !',
        antiCheatContextMenu: 'Le clic droit est interdit !',
        mapToggleLabel: 'Afficher la carte :',
        mapToggleBtn: 'Ouvrir la carte',
        mapCloseBtn: 'Fermer la carte',
        mapCaption: 'Plan du campus',
        mapNote: 'Vous pouvez zoomer et faire défiler le PDF.',
        previousAnswerLabel: 'Réponse précédente :',
        themeLabel: 'Thème',
        themeDefault: 'Défaut',
        themeMono: 'Noir & Blanc',
        themeNeon: 'Néon',
        mapCloseIconLabel: 'Fermer la carte',
        mapGymChip: 'Gymnase',
        finalCongratsTitle: '🎉 Félicitations ! 🎉',
        finalCongratsDescription: 'Vous avez résolu chaque énigme et ouvert le trésor !',
        finalInviteHeading: 'Venez nous trouver ici !',
        finalInviteSub: 'Nous vous attendons dans la salle du conseil étudiant ✦'
    },
    ko: {
        pageTitle: '신 세이토카이: II',
        menuText: '환영합니다! 게임을 시작할까요?',
        rulesTitle: '게임 규칙',
        rules: [
            '4개의 고정된 퍼즐 쌍을 풀어보세요. 각 쌍은 "장소" + "특징" 조합입니다.',
            '각 문제의 정답을 입력해 주세요.',
            '한 페이지 당 2문제, 첫 문제를 맞추면 두 번째가 열립니다.',
            '한 쌍을 풀 때마다 스탬프 1개를 얻습니다.',
            '모든 퍼즐과 코드를 정리하면 보물을 열 수 있습니다.',
            '4쌍의 순서는 매번 바뀌지만 같은 쌍은 항상 함께 나옵니다.'
        ],
        menuDescription: '장소와 특징이 묶인 4쌍의 퍼즐을 모두 풀어보세요!',
        startGame: '게임 시작!',
        startGameShort: '시작',
        language: '언어',
        answerPlaceholder: '답을 입력하세요…',
        checkAnswerBtn: '답 제출!',
        resultEmpty: '답을 입력해 주세요!',
        resultWrong: '오답입니다. 다시 시도해 보세요!',
        resultCorrect: '정답입니다!',
        mistakeCountLabel: (n) => `실패 수: ${n}`,
        hint1Locked: '힌트 1 (3회 실패 후 해제)',
        hint1Unlocked: '힌트 1 보기',
        hint1Maxed: '힌트 1: 최대 2회',
        hint2Locked: '힌트 2 (5회 실패 후 해제)',
        hint2Unlocked: '힌트 2 보기',
        hint2Maxed: '힌트 2: 최대 2회',
        helpCardLocked: '도움 카드 (7회 실패 후 해제)',
        helpCardButton: '4지선다로 전환 (교실 문제 전용 · 1회당 2회 사용)',
        helpCardUsedUp: '이 도움은 이미 사용했습니다',
        intermediateTitle: '정답입니다!',
        intermediateDescription: '다음 문제로 넘어가려면 비밀 코드를 입력하거나 스캔하세요.',
        intermediateManualLabel: '코드를 직접 입력:',
        intermediateInputPlaceholder: '코드를 입력하세요',
        intermediateSubmitBtn: '코드 전송',
        intermediateQrLabel: '또는 QR 스캔:',
        qrOpenBtn: 'QR 스캐너 열기',
        qrCloseBtn: '스캐너 닫기',
        qrStatusAccessing: '카메라 연결 중…',
        qrStatusScanning: '카메라를 QR 코드에 맞춰 주세요',
        qrStatusError: '카메라 접근에 실패했습니다',
        intermediateCodeEmpty: '코드를 입력해 주세요!',
        intermediateCodeInvalid: '잘못된 코드입니다. 올바른 코드를 입력해 주세요.',
        intermediateCodeSuccess: '코드 확인 완료! 다음 문제로 이동합니다…',
        finalTitle: '모두 클리어했습니다!',
        finalDescription: '마지막 단계입니다. 최종 비밀 코드를 입력하거나 스캔하세요.',
        finalManualLabel: '최종 코드 입력:',
        finalInputPlaceholder: '코드를 입력하세요',
        finalSubmitBtn: '코드 전송',
        finalQrLabel: '또는 QR 스캔:',
        finalSuccess: '코드 확인 완료! 축하합니다!',
        finalCodeInvalid: '잘못된 코드입니다.',
        finalCodeEmpty: '코드를 입력해 주세요!',
        playAgainBtn: '다시 플레이',
        personaCallouts: ['GO GO!', '이거야!', '정말 그거야?', '가보자!'],
        personaCalloutRare: '그건 아니지~',
        antiCheatScreenshot: '스크린샷은 금지됩니다!',
        antiCheatPrint: '인쇄 기능은 금지됩니다!',
        antiCheatDevTools: '개발자 도구는 금지됩니다!',
        antiCheatContextMenu: '마우스 우클릭은 금지됩니다!',
        mapToggleLabel: '지도 보기:',
        mapToggleBtn: '지도 열기',
        mapCloseBtn: '지도 닫기',
        mapCaption: '캠퍼스 평면도',
        mapNote: 'PDF 안에서 확대하거나 스크롤할 수 있어요.',
        previousAnswerLabel: '이전 답안:',
        themeLabel: '테마',
        themeDefault: '기본',
        themeMono: '흑백 만화',
        themeNeon: '네온',
        mapCloseIconLabel: '지도 닫기',
        mapGymChip: '체육관',
        finalCongratsTitle: '🎉 축하합니다! 🎉',
        finalCongratsDescription: '모든 퍼즐을 풀고 보물 상자를 열었습니다!',
        finalInviteHeading: '여기서 만나요!',
        finalInviteSub: '학생회실에서 기다릴게요 ✦'
    },
    zh: {
        pageTitle: '新生徒会：II',
        menuText: '欢迎！想开始游戏吗？',
        rulesTitle: '游戏规则',
        rules: [
            '挑战 4 组固定谜题，每组都是“地点 + 特征”组合。',
            '每题都要输入正确答案。',
            '每页有 2 题，答对第 1 题后第 2 题才会解锁。',
            '每完成一组谜题即可获得 1 枚印章（共 4 枚）。',
            '解完所有谜题和代码后就能打开宝箱。',
            '每次出的 4 组顺序都有变化，但每组配对始终保持在一起。'
        ],
        menuDescription: '完成 4 组固定谜题，解出“地点 + 特征”组合吧！',
        startGame: '开始游戏！',
        startGameShort: '开始',
        language: '语言',
        answerPlaceholder: '输入你的答案…',
        checkAnswerBtn: '提交答案！',
        resultEmpty: '请输入答案！',
        resultWrong: '答错了，再试一次！',
        resultCorrect: '正确！',
        mistakeCountLabel: (n) => `错误次数：${n}`,
        hint1Locked: '提示 1（3 次错误后解锁）',
        hint1Unlocked: '查看提示 1',
        hint1Maxed: '提示 1：最多 2 次',
        hint2Locked: '提示 2（5 次错误后解锁）',
        hint2Unlocked: '查看提示 2',
        hint2Maxed: '提示 2：最多 2 次',
        helpCardLocked: '求救卡（7 次错误后解锁）',
        helpCardButton: '切换为 4 选项（仅教室题；每局最多 2 次）',
        helpCardUsedUp: '这张求救卡已经用过了',
        intermediateTitle: '答对了！',
        intermediateDescription: '输入或扫描密钥，继续下一组题。',
        intermediateManualLabel: '手动输入代码：',
        intermediateInputPlaceholder: '输入代码',
        intermediateSubmitBtn: '提交代码',
        intermediateQrLabel: '或扫描二维码：',
        qrOpenBtn: '打开 QR 扫描器',
        qrCloseBtn: '关闭扫描器',
        qrStatusAccessing: '访问摄像头中…',
        qrStatusScanning: '将相机对准二维码',
        qrStatusError: '无法访问摄像头',
        intermediateCodeEmpty: '请输入代码！',
        intermediateCodeInvalid: '代码无效，请重试。',
        intermediateCodeSuccess: '代码验证成功！前往下一题…',
        finalTitle: '全部通关！',
        finalDescription: '最后一步：输入或扫描最终密钥。',
        finalManualLabel: '手动输入最终代码：',
        finalInputPlaceholder: '输入代码',
        finalSubmitBtn: '提交代码',
        finalQrLabel: '或扫描二维码：',
        finalSuccess: '代码验证成功！恭喜！',
        finalCodeInvalid: '代码无效。',
        finalCodeEmpty: '请输入代码！',
        playAgainBtn: '再玩一次',
        personaCallouts: ['冲啊！', '赢定了！', '真的吗？', '出发！'],
        personaCalloutRare: '你早就知道了吧！',
        antiCheatScreenshot: '禁止截屏！',
        antiCheatPrint: '禁止打印！',
        antiCheatDevTools: '禁止使用开发者工具！',
        antiCheatContextMenu: '禁止右键点击！',
        mapToggleLabel: '显示地图：',
        mapToggleBtn: '打开地图',
        mapCloseBtn: '关闭地图',
        mapCaption: '校园平面图',
        mapNote: '你可以在PDF内放大和滚动查看。',
        previousAnswerLabel: '上一答案：',
        themeLabel: '主题',
        themeDefault: '默认',
        themeMono: '黑白漫画',
        themeNeon: '霓虹',
        mapCloseIconLabel: '关闭地图',
        mapGymChip: '体育馆',
        finalCongratsTitle: '🎉 恭喜！ 🎉',
        finalCongratsDescription: '你解开了每一个谜题，并打开了宝箱！',
        finalInviteHeading: '在这里等你！',
        finalInviteSub: '我们会在学生会室等你 ✦'
    },
    en: {
        pageTitle: 'Shin Seitokai: II',
        menuText: 'Welcome! Would you like to play this game?',
        rulesTitle: 'Game Rules',
        rules: [
            'Solve 4 fixed pairs of riddles! Each pair is a locked "Location" + "Feature" set 🔍✨',
            'Enter the correct answer for each question',
            'Two questions appear on each page; Question 2 unlocks after Question 1 is correct',
            'You earn 1 stamp every time you solve a pair page (4 stamps total!)',
            'Clear all riddles and secret codes to unlock the treasure!',
            'The order of the 4 pairs is randomized each time, but each pair (Location + Feature) always stays together'
        ],
        menuDescription: 'Solve all 4 fixed pairs, each combining a "Location" question with a "Feature" riddle!',
        startGame: 'Start Game!',
        startGameShort: 'START',
        language: 'Language',
        questionNumPrefix: 'Question',
        answerPlaceholder: 'Type your answer here...',
        checkAnswerBtn: 'Submit Answer!',
        resultEmpty: 'Please enter your answer!',
        resultWrong: 'Incorrect. Please try again!',
        resultCorrect: 'Awesome! That is correct!!',
        mistakeCountLabel: (n) => `Mistakes: ${n}`,
        hint1Locked: 'Hint 1 (unlocks after 3 mistakes)',
        hint1Unlocked: 'View Hint 1',
        hint1Maxed: 'Hint 1: max 2 views',
        hint2Locked: 'Hint 2 (unlocks after 5 mistakes)',
        hint2Unlocked: 'View Hint 2',
        hint2Maxed: 'Hint 2: max 2 views',
        helpCardLocked: 'Help Me Card (unlocks after 7 mistakes)',
        helpCardButton: 'Switch to 4 choices (classroom questions only — usable once for the whole run)',
        helpCardUsedUp: 'This help has already been used',
        intermediateTitle: 'Correct Answer!',
        intermediateDescription: 'Enter or scan the secret code to proceed to the next question set. Want to double-check the classroom you just found? Take a look at the map!',
        intermediateManualLabel: 'Enter code manually:',
        intermediateInputPlaceholder: 'Enter code here',
        intermediateSubmitBtn: 'Submit Code',
        intermediateQrLabel: 'Or scan the QR code:',
        qrOpenBtn: 'Open QR Scanner',
        qrCloseBtn: 'Close Scanner',
        qrStatusAccessing: 'Accessing camera...',
        qrStatusScanning: 'Point your camera at a QR code',
        qrStatusError: 'Could not access camera',
        intermediateCodeEmpty: 'Please enter the code!',
        intermediateCodeInvalid: 'Invalid code. Please enter the correct code.',
        intermediateCodeSuccess: 'Code verified! Moving to the next question...',
        finalTitle: 'You did it! All questions cleared!',
        finalDescription: 'Final step: enter or scan the secret code to complete the game',
        finalManualLabel: 'Enter code manually:',
        finalInputPlaceholder: 'Enter code here',
        finalSubmitBtn: 'Submit Code',
        finalQrLabel: 'Or scan the QR code:',
        finalSuccess: 'Code verified! Congratulations!',
        finalCodeInvalid: 'Invalid code. Please enter the correct code.',
        finalCodeEmpty: 'Please enter the code!',
        playAgainBtn: 'Play Again',
        personaCallouts: ['ANSWERING!', 'IM DOING IT~', 'ARE YOU SURE?', 'LETS GO!'],
        personaCalloutRare: 'thee does know ze way!',
        antiCheatScreenshot: 'Screenshots are disabled!',
        antiCheatPrint: 'Printing is disabled!',
        antiCheatDevTools: 'Developer tools are disabled!',
        antiCheatContextMenu: 'Right-click is disabled!',
        mapToggleLabel: 'Show Map:',
        mapToggleBtn: 'Open the Map with a button!',
        mapCloseBtn: 'Close Map',
        mapCaption: 'Campus Floor Plan',
        mapNote: 'You can zoom and scroll within the PDF.',
        previousAnswerLabel: 'Previous Answer:',
        themeLabel: 'Theme',
        themeDefault: 'Default',
        themeMono: 'B&W Comic',
        themeNeon: 'Neon',
        mapCloseIconLabel: 'Close Map',
        mapGymChip: 'Gymnasium',
        finalCongratsTitle: '🎉 Congratulations! 🎉',
        finalCongratsDescription: 'You solved every riddle and cracked open the treasure box!',
        finalInviteHeading: 'Come find us here~!',
        finalInviteSub: "We'll be waiting in the Student Council Room ✦"
    }
};

// ==========================================
// GAME STATE MANAGEMENT
// ==========================================
const SUPPORTED_LANGUAGES = ['ja', 'en', 'es', 'fr', 'ko', 'zh'];

let gameState = {
    currentQuestion: 0,
    pairPage: 0,
    q1Correct: false,
    completedQuestions: 0,
    stage: 'menu',
    questionSequence: [],
    mistakesCount: 0,
    hint1Shown: false,
    hint2Shown: false,
    hint1Attempts: {},
    hint2Attempts: {},
    easyModeUsed: false,
    answerLocked: false,
    isCooldown: false,
    language: 'ja',
    qrScannerActive: false,
    qrScannerStream: null,
    intermediateQrScannerActive: false,
    intermediateQrScannerStream: null,
    sessionUser: null
};

function getPreferredLanguage() {
    try {
        const saved = localStorage.getItem('selectedLanguage');
        if (saved && SUPPORTED_LANGUAGES.includes(saved)) return saved;
    } catch (e) {
        // storage unavailable; ignore and use browser locale fallback
    }

    return 'ja';
}

function safeLocalStorageGet(key, fallback = null) {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value;
    } catch (e) {
        return fallback;
    }
}

function safeLocalStorageSet(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        // ignore if browser storage is disabled
    }
}

function restoreBrowserState() {
    try {
        localStorage.removeItem('seitokai_quiz_browser_save_v2');
    } catch (e) {
        // storage unavailable; start with a fresh in-memory session
    }
    return false;
}

function populateBackgroundMarks() {
    const decor = document.querySelector('.bg-decor');
    if (!decor) return;
    const marks = ['✦', '✧', '＋', '◆', '×', '〰', '▲', '■', '●'];
    const colors = ['#ffcc33', '#3577f1', '#ff3b4e', '#ff6fa5', '#2ecc71', '#ff9416'];
    for (let index = decor.children.length; index < 180; index++) {
        const mark = document.createElement('span');
        mark.className = 'bg-shape bg-generated-mark';
        mark.textContent = marks[index % marks.length];
        mark.style.left = `${(index * 37) % 99}%`;
        mark.style.fontSize = `${10 + ((index * 13) % 18)}px`;
        mark.style.color = colors[index % colors.length];
        mark.style.animationDuration = `${62 + ((index * 17) % 30)}s`;
        mark.style.animationDelay = `-${(index * 29) % 88}s`;
        decor.appendChild(mark);
    }
}

function persistGameState() {
    // Quiz progress is session-only; no browser history is saved.
}

// Helper Functions
function getDisplayAnswer(question, rawAnswer) {
    return rawAnswer;
}

function formatPairAnswers() {
    const labelA = gameState.language === 'en' ? 'A' : 'A';
    const labelB = gameState.language === 'en' ? 'B' : 'B';
    const a = gameState.lastPairAnswerA || (gameState.language === 'en' ? '(no answer)' : '（未回答）');
    const b = gameState.lastPairAnswerB || (gameState.language === 'en' ? '(no answer)' : '（未回答）');
    return `${labelA}: ${a}　／　${labelB}: ${b}`;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function shufflePairsKeepingOrder(allQuestions) {
    // Group into fixed [A, B] pairs, then shuffle which pair comes first —
    // but always keep each pair's two questions glued together, in order.
    // Each question is shallow-cloned so per-game data (like the shuffled
    // classroom-code options generated in applyClassroomOptionData) never leaks
    // back into the shared `questions` source array between playthroughs.
    const pairs = [];
    for (let i = 0; i < allQuestions.length; i += 2) {
        pairs.push([{ ...allQuestions[i] }, { ...allQuestions[i + 1] }]);
    }
    return shuffleArray(pairs).flat();
}

const SCREEN_IDS = ['menuScreen', 'questionScreen', 'intermediateCodeScreen', 'codeScreen'];
const SCREEN_TRANSITION_MS = 260; // keep in sync with .screen transition-duration in CSS

// Animated screen swap: the currently-visible screen (if any) plays a quick
// "leave" transition, THEN gets hidden and the new one plays an "enter"
// transition. Every page-to-page move in the game (menu → questions →
// intermediate code → next pair → final page) goes through this one
// function, so they all get the same consistent animation for free.
function showScreen(screenName) {
    const secretDisplay = document.getElementById('secretCodeDisplay');
    if (secretDisplay) secretDisplay.classList.add('hidden');

    const target = document.getElementById(screenName);
    if (!target) return;

    const current = SCREEN_IDS
        .map(id => document.getElementById(id))
        .find(el => el && el !== target && !el.classList.contains('hidden'));

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const activateTarget = () => {
        SCREEN_IDS.forEach(id => {
            const el = document.getElementById(id);
            if (el && el !== target) {
                el.classList.add('hidden');
                el.classList.remove('screen-leave');
            }
        });
        target.classList.remove('hidden');
        if (!reduceMotion) {
            target.classList.remove('screen-enter'); // restart if it was mid-animation
            void target.offsetWidth; // force reflow so the animation replays
            target.classList.add('screen-enter');
            setTimeout(() => target.classList.remove('screen-enter'), SCREEN_TRANSITION_MS);
        }
    };

    if (!current || reduceMotion) {
        activateTarget();
        return;
    }

    current.classList.add('screen-leave');
    setTimeout(activateTarget, SCREEN_TRANSITION_MS);
}

function normalizeAnswer(value) {
    return String(value || '')
        .trim()
        .toLowerCase()
        .replace(/[\s\-_]/g, '')
        .replace(/[。！？.,!?:;'"“”]/g, '');
}

function getLocalizedHint(question, hintNumber) {
    const key = hintNumber === 1 ? 'hint1' : 'hint2';
    if (gameState.language === 'en') {
        const enKey = `${key}En`;
        if (question[enKey]) return question[enKey];
        if (englishHintMap[question.id]) return englishHintMap[question.id][key];
    }
    return question[key];
}

function getLocalizedQuestionText(question) {
    if (gameState.language === 'en') {
        return question.questionEn || englishQuestionText[question.id] || question.question;
    }
    return question.question;
}

function getAcceptedAnswers(question) {
    const answers = [...(question.answers || [])];
    answers.push(...(englishAnswersMap[question.id] || []));
    if (question.correctAnswer) answers.push(question.correctAnswer);
    if (englishCorrectAnswerMap[question.id]) answers.push(englishCorrectAnswerMap[question.id]);
    return [...new Set(answers.filter(Boolean))];
}

function getRiddlePrimaryAnswer(question, lang) {
    if (lang === 'en') {
        return (englishAnswersMap[question.id] && englishAnswersMap[question.id][0]) || question.answers[0];
    }
    return question.answers[0];
}

function buildEasyModeOptions(question, slot) {
    const lang = gameState.language;
    const riddlePool = questions.filter(q => q.type === 'riddle');
    const optionTexts = shuffleArray(riddlePool.map(q => getRiddlePrimaryAnswer(q, lang)));

    const container = document.createElement('div');
    container.className = 'options-container';
    optionTexts.forEach(optionText => {
        const label = document.createElement('label');
        label.className = 'choice-option';
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `easyAnswer-${slot}`;
        input.value = optionText;
        label.appendChild(input);
        label.appendChild(document.createTextNode(optionText));
        container.appendChild(label);
    });
    return container;
}

function activateEasyMode(slot) {
    if (gameState.easyModeUsed) return;
    const question = getPairQuestion(slot);
    if (!question || question.type !== 'riddle') return;
    const mistakes = gameState[`mistakes_${question.id}`] || 0;
    if (mistakes < 7) return;

    gameState.easyModeUsed = true;
    question.easyModeActive = true;

    const card = document.getElementById(`questionCard${slot}`);
    if (!card) return;

    const content = card.querySelector('.pair-question-content');
    if (content) {
        content.innerHTML = '';
        content.appendChild(buildEasyModeOptions(question, slot));
    }

    const btn = document.getElementById(`easyModeBtn-${slot}`);
    if (btn) btn.remove();

    // The help is used up game-wide, so grey out the offer on the paired question too, if present.
    const otherSlot = slot === 0 ? 1 : 0;
    const otherQuestion = getPairQuestion(otherSlot);
    if (otherQuestion && otherQuestion.type === 'riddle' && !otherQuestion.easyModeActive) {
        const otherBtn = document.getElementById(`easyModeBtn-${otherSlot}`);
        if (otherBtn) {
            const activeT = translations[gameState.language] || translations.ja;
            otherBtn.disabled = true;
            otherBtn.classList.remove('unlocked');
            otherBtn.textContent = activeT.easyModeUsedUp;
        }
    }
}

function buildFillBlankInput(slot) {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = `answer-${slot}`;
    input.className = 'pair-answer-input';
    input.placeholder = (translations[gameState.language] || translations.ja).answerPlaceholder;
    return input;
}

const VALID_THEMES = ['default', 'mono', 'neon'];

function applyTheme(theme) {
    const safeTheme = VALID_THEMES.includes(theme) ? theme : 'default';
    if (safeTheme === 'default') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', safeTheme);
    }
    try { localStorage.setItem('gameTheme', safeTheme); } catch (e) { /* storage unavailable, ignore */ }

    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) themeSelect.value = safeTheme;
}

function initTheme() {
    let savedTheme = 'default';
    try { savedTheme = localStorage.getItem('gameTheme') || 'default'; } catch (e) { /* storage unavailable, ignore */ }
    applyTheme(savedTheme);
}

function runThemeBubbleTransition(targetTheme, originEl) {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
        applyTheme(targetTheme);
        return;
    }

    try {
        const overlay = document.createElement('div');
        overlay.id = 'themeTransitionOverlay';
        overlay.className = 'theme-transition-wash';
        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('is-visible'));
        window.setTimeout(() => applyTheme(targetTheme), 70);
        window.setTimeout(() => overlay.classList.remove('is-visible'), 95);
        window.setTimeout(() => {
            overlay.remove();
        }, 210);
    } catch (e) {
        applyTheme(targetTheme);
    }
}

// ==========================================
// UI LOCALIZATION
// ==========================================
function applyLanguageUI() {
    const lang = gameState.language;
    const t = translations[lang] || translations.ja;

    document.documentElement.lang = lang;
    document.title = t.pageTitle;
    const pageTitleText = document.getElementById('pageTitleText');
    if (pageTitleText) pageTitleText.textContent = t.pageTitle;

    const menuText = document.getElementById('menuText');
    const rulesTitle = document.getElementById('rulesTitle');
    const rulesList = document.getElementById('rulesList');
    const menuDescription = document.getElementById('menuDescription');
    const startGameBtn = document.getElementById('startGameBtn');
    const startGameLabel = document.getElementById('startGameLabel');
    const languageLabel = document.querySelector('.language-label');
    const languageSelect = document.getElementById('languageSelect');

    if (menuText) menuText.textContent = t.menuText;
    if (rulesTitle) rulesTitle.innerHTML = `${getGameIconSvg('icon_rules')} <span>${t.rulesTitle}</span>`;
    if (rulesList && t.rules) rulesList.innerHTML = t.rules.map(item => `<li>${item}</li>`).join('');
    if (menuDescription) {
        const customJa = menuDescription.dataset.ja || t.menuDescription;
        const customEn = menuDescription.dataset.en || t.menuDescription;
        menuDescription.textContent = lang === 'en' ? customEn : customJa;
    }

    // short rotated label — set its aria-label (full text) and the visible
    // short label separately instead of overwriting its children.
    if (startGameBtn) startGameBtn.setAttribute('aria-label', t.startGame);
    if (startGameLabel) startGameLabel.textContent = t.startGameShort;
    if (languageLabel) languageLabel.innerHTML = `${getGameIconSvg('icon_lang')} <span>${t.language}</span>`;
    if (languageSelect) languageSelect.value = lang;

    if (gameState.stage === 'question' && gameState.questionSequence.length) {
        renderQuestionPair();
    }

    // Intermediate Screen UI
    const intTitle = document.getElementById('intermediateCodeTitle');
    if (intTitle) intTitle.textContent = t.intermediateTitle;
    const intDesc = document.getElementById('intermediateCodeDescription');
    if (intDesc) intDesc.textContent = t.intermediateDescription;
    const intManual = document.getElementById('intermediateManualLabel');
    if (intManual) intManual.textContent = t.intermediateManualLabel;
    const intInput = document.getElementById('intermediateCodeInput');
    if (intInput) intInput.placeholder = t.intermediateInputPlaceholder;
    const intSubBtn = document.getElementById('intermediateSubmitBtn');
    if (intSubBtn) intSubBtn.textContent = t.intermediateSubmitBtn;
    const intQrLabel = document.getElementById('intermediateQrLabel');
    if (intQrLabel) intQrLabel.textContent = t.intermediateQrLabel;
    const intQrToggle = document.getElementById('intermediateQrToggleBtn');
    if (intQrToggle) intQrToggle.textContent = t.qrOpenBtn;
    const intQrClose = document.getElementById('intermediateQrCloseBtn');
    if (intQrClose) intQrClose.textContent = t.qrCloseBtn;

    // Previous Answer & Map boxes (intermediate screen)
    const prevLabel = document.getElementById('previousAnswerLabel');
    if (prevLabel) prevLabel.textContent = t.previousAnswerLabel;
    const mapLabel = document.getElementById('mapToggleLabel');
    if (mapLabel) mapLabel.textContent = t.mapToggleLabel;
    const mapBtn = document.getElementById('mapToggleBtn');
    const mapContainer = document.getElementById('mapContainer');
    if (mapBtn && mapContainer) {
        const mapIsOpen = !mapContainer.classList.contains('hidden');
        mapBtn.textContent = mapIsOpen ? t.mapCloseBtn : t.mapToggleBtn;
        if (mapIsOpen) renderGameMap(); // re-render so pin labels match the new language
    }

    const finalTitle = document.getElementById('finalCodeTitle');
    if (finalTitle) finalTitle.textContent = t.finalCongratsTitle;
    const finalDesc = document.getElementById('finalCodeDescription');
    if (finalDesc) finalDesc.textContent = t.finalCongratsDescription;
    if (gameState.stage === 'finalCode') renderFinalCongratsContent();

    // Theme switcher UI
    const themeLabel = document.getElementById('themeLabel');
    if (themeLabel) themeLabel.textContent = t.themeLabel;
    const themeOptDefault = document.getElementById('themeOptionDefault');
    if (themeOptDefault) themeOptDefault.textContent = t.themeDefault;
    const themeOptMono = document.getElementById('themeOptionMono');
    if (themeOptMono) themeOptMono.textContent = t.themeMono;
    const themeOptNeon = document.getElementById('themeOptionNeon');
    if (themeOptNeon) themeOptNeon.textContent = t.themeNeon;
}

// ==========================================
// CORE GAME LOGIC
// ==========================================
function startGame() {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) gameState.language = languageSelect.value || 'ja';

    gameState.stage = 'question';
    gameState.currentQuestion = 0;
    gameState.pairPage = 0;
    gameState.q1Correct = false;
    gameState.completedQuestions = 0;
    gameState.answerLocked = false;
    gameState.isCooldown = false;

    const stampTray = document.getElementById('stampTray');
    if (stampTray) {
        stampTray.innerHTML = '';
        stampTray.classList.remove('hidden');
    }

    gameState.questionSequence = shufflePairsKeepingOrder(questions).map(applyClassroomOptionData); // pair order is randomized, but each pair's A+B stay glued together; Type-A choices get their classroom-code options shuffled fresh each game
    persistGameState();
    showScreen('questionScreen');
    renderQuestionPair();
}

function getPairQuestion(slot) {
    return gameState.questionSequence[gameState.pairPage * 2 + slot];
}

// I wished you didnt really shuffle mate.
function renderQuestionPair() {
    const pair = document.getElementById('questionPair');
    if (!pair) return;

    const q1 = getPairQuestion(0);
    const q2 = getPairQuestion(1);
    if (!q1 || !q2) return;

    const qNum = document.getElementById('questionNumber');
    if (qNum) {
        const page = gameState.pairPage + 1;
        qNum.textContent = gameState.language === 'en'
            ? `Page ${page} / 4 — Questions ${gameState.pairPage * 2 + 1}–${gameState.pairPage * 2 + 2}`
            : `ページ #${page} / 4 — 問題 ${gameState.pairPage * 2 + 1}・${gameState.pairPage * 2 + 2}`;
    }

    pair.innerHTML = '';
    pair.appendChild(buildQuestionCard(q1, 0));
    pair.appendChild(buildQuestionCard(q2, 1));

    const pFill = document.getElementById('progressFill');
    if (pFill) pFill.style.width = `${((gameState.pairPage + 1) / 4) * 100}%`;

    setQuestion2Locked(!gameState.q1Correct);
}

function buildQuestionCard(question, slot) {
    const card = document.createElement('section');
    card.className = `pair-question-card ${question.photoKey || question.puzzleKey ? 'photo-question-card' : ''} ${slot === 1 && !gameState.q1Correct ? 'question-locked' : ''}`;
    card.id = `questionCard${slot}`;

    const title = document.createElement('div');
    title.className = 'pair-question-title';
    title.textContent = gameState.language === 'en'
        ? `Question ${gameState.pairPage * 2 + slot + 1}`
        : `第${gameState.pairPage * 2 + slot + 1}問`;
    card.appendChild(title);

    const text = document.createElement('p');
    text.className = 'pair-question-text';
    text.textContent = getLocalizedQuestionText(question);
    card.appendChild(text);

    if (question.photoKey || question.puzzleKey) {
        const imageArea = document.createElement('div');
        imageArea.className = 'quiz-image-area';

        let image;
        if (question.photoKey) {
            image = createQuizPhoto(question.photoKey);
        } else {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = getTypeBPuzzleSvg(question.puzzleKey);
            image = wrapper.firstElementChild;
        }
        image.classList.add('quiz-source-image');
        image.setAttribute('aria-label', gameState.language === 'en' ? 'Picture puzzle' : '画像謎解き');

        const imageViewport = document.createElement('div');
        imageViewport.className = 'quiz-image-viewport';
        imageViewport.appendChild(image);
        imageArea.appendChild(imageViewport);

        const zoomControls = document.createElement('div');
        zoomControls.className = 'quiz-image-zoom-controls';
        let zoomLevel = 1;
        const updateZoom = () => {
            image.style.transform = `scale(${zoomLevel})`;
            image.classList.toggle('is-zoomed', zoomLevel > 1);
        };
        [
            ['−', 'Zoom out', () => { zoomLevel = Math.max(1, zoomLevel - 0.25); updateZoom(); }],
            ['Reset', 'Reset image zoom', () => { zoomLevel = 1; updateZoom(); }],
            ['+', 'Zoom in', () => { zoomLevel = Math.min(2.5, zoomLevel + 0.25); updateZoom(); }]
        ].forEach(([label, ariaLabel, action]) => {
            const zoomButton = document.createElement('button');
            zoomButton.type = 'button';
            zoomButton.className = 'quiz-image-zoom-button';
            zoomButton.textContent = label;
            zoomButton.setAttribute('aria-label', ariaLabel);
            zoomButton.onclick = action;
            zoomControls.appendChild(zoomButton);
        });
        imageArea.appendChild(zoomControls);
        card.appendChild(imageArea);
    }

    const controls = document.createElement('div');
    controls.className = 'question-controls';

    const content = document.createElement('div');
    content.className = 'pair-question-content';

    if (question.type === 'riddle') {
        if (question.easyModeActive) {
            content.appendChild(buildEasyModeOptions(question, slot));
        } else {
            content.appendChild(buildFillBlankInput(slot));
        }
    } else if (question.type === 'choice') {
        content.appendChild(buildFillBlankInput(slot));
    }

    controls.appendChild(content);

    const result = document.createElement('p');
    result.id = `result-${slot}`;
    result.className = 'pair-result';
    controls.appendChild(result);

    const button = document.createElement('button');
    button.className = 'btn-primary pair-answer-button';
    button.textContent = (translations[gameState.language] || translations.ja).checkAnswerBtn;
    button.onclick = () => checkAnswer(slot);
    controls.appendChild(button);

    const hint = document.createElement('div');
    hint.className = 'pair-hints';

    const mistake = document.createElement('p');
    mistake.id = `mistakeCount-${slot}`;
    mistake.className = 'pair-mistake-count';
    mistake.textContent = (translations[gameState.language] || translations.ja).mistakeCountLabel(0);
    hint.appendChild(mistake);

    const h1 = document.createElement('button');
    h1.id = `hint1Btn-${slot}`;
    h1.className = 'btn-hint';
    h1.textContent = (translations[gameState.language] || translations.ja).hint1Locked;
    h1.disabled = true;
    h1.onclick = () => showHint1(slot);
    hint.appendChild(h1);

    const h1box = document.createElement('div');
    h1box.id = `hint1Container-${slot}`;
    h1box.className = 'hint-box hidden';
    hint.appendChild(h1box);

    const h2 = document.createElement('button');
    h2.id = `hint2Btn-${slot}`;
    h2.className = 'btn-hint';
    h2.textContent = (translations[gameState.language] || translations.ja).hint2Locked;
    h2.disabled = true;
    h2.onclick = () => showHint2(slot);
    hint.appendChild(h2);

    const h2box = document.createElement('div');
    h2box.id = `hint2Container-${slot}`;
    h2box.className = 'hint-box hidden';
    hint.appendChild(h2box);

    if (question.type === 'riddle' && !question.easyModeActive) {
        const activeT = translations[gameState.language] || translations.ja;
        const mistakes = gameState[`mistakes_${question.id}`] || 0;
        const easyBtn = document.createElement('button');
        easyBtn.id = `easyModeBtn-${slot}`;
        easyBtn.className = 'btn-hint';
        easyBtn.onclick = () => activateEasyMode(slot);

        if (gameState.easyModeUsed) {
            easyBtn.textContent = activeT.easyModeUsedUp;
            easyBtn.disabled = true;
        } else if (mistakes >= 7) {
            easyBtn.textContent = activeT.easyModeButton;
            easyBtn.classList.add('unlocked');
            easyBtn.disabled = false;
        } else {
            easyBtn.textContent = activeT.easyModeLocked;
            easyBtn.disabled = true;
        }
        hint.appendChild(easyBtn);
    }

    controls.appendChild(hint);
    card.appendChild(controls);

    if (slot === 1 && !gameState.q1Correct) {
        const lock = document.createElement('div');
        lock.className = 'question-lock-overlay';
        lock.textContent = gameState.language === 'en'
            ? '🔒 Solve Question 1 first'
            : '🔒 第1問を正解すると開きます';
        card.appendChild(lock);
    }

    return card;
}

function setQuestion2Locked(locked) {
    const card = document.getElementById('questionCard1');
    if (!card) return;
    card.classList.toggle('question-locked', locked);

    card.querySelectorAll('input, button').forEach(el => {
        el.disabled = locked;
    });

    const overlay = card.querySelector('.question-lock-overlay');
    if (locked && !overlay) {
        const lock = document.createElement('div');
        lock.className = 'question-lock-overlay';
        lock.textContent = gameState.language === 'en'
            ? '🔒 Solve Question 1 first'
            : '🔒 第1問を正解すると開きます';
        card.appendChild(lock);
    } else if (!locked && overlay) {
        overlay.remove();
    }
}

function addStamp() {
    const stampTray = document.getElementById('stampTray');
    if (stampTray) {
        const stamp = document.createElement('span');
        stamp.className = 'stamp';
        const tilt = (Math.random() * 16 - 8).toFixed(1);
        stamp.style.setProperty('--stamp-tilt', `${tilt}deg`);
        stamp.innerHTML = `${getGameIconSvg('stamp_star')} <span>Stamp ${stampTray.children.length + 1}</span>`;
        stampTray.appendChild(stamp);
    }
}

// why the fuck are you a slot and not a qNum dude
function checkAnswer(slot) {
    if (slot === 1 && !gameState.q1Correct) return;

    const question = getPairQuestion(slot);
    if (!question) return;

    const questionId = question.id;
    const card = document.getElementById(`questionCard${slot}`);
    const resultElement = document.getElementById(`result-${slot}`);
    const submitBtn = card?.querySelector('.pair-answer-button');
    const activeT = translations[gameState.language] || translations.ja;

    let userAnswer = '';
    if (question.type === 'riddle' && question.easyModeActive) {
        userAnswer = card.querySelector(`input[name="easyAnswer-${slot}"]:checked`)?.value || '';
    } else {
        // Fill-in-the-blank: riddles (Type B) and Type A classroom-code questions.
        userAnswer = document.getElementById(`answer-${slot}`)?.value.trim() || '';
    }

    if (!userAnswer) {
        resultElement.textContent = activeT.resultEmpty;
        resultElement.style.color = 'orange';
        return;
    }

    const normalized = normalizeAnswer(userAnswer);
    const accepted = getAcceptedAnswers(question);
    const correct = accepted.some(answer => normalizeAnswer(answer) === normalized);

    if (correct) {
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.65';
        }

        resultElement.textContent = activeT.resultCorrect;
        resultElement.style.color = 'green';
        gameState.completedQuestions++;
        flashRoomConfirmation(question);

        if (slot === 0) {
            gameState.q1Correct = true;
            gameState.lastPairAnswerA = getDisplayAnswer(question, userAnswer);
            celebrateCorrectAnswer();
            setQuestion2Locked(false);
        } else {
            // Give a stamp mark upon completing the pair of quizzes
            addStamp();
            celebrateCorrectAnswer();
            gameState.lastPairAnswerB = getDisplayAnswer(question, userAnswer);

            setTimeout(() => {
                // Route to intermediate secret code screen before advancing to next pair
                gameState.stage = 'intermediateCode';
                showScreen('intermediateCodeScreen');
                applyLanguageUI();
                const prevEl = document.getElementById('previousAnswerText');
                if (prevEl) prevEl.textContent = formatPairAnswers();
            }, 900);
        }
        persistGameState();
        return;
    }

    const mistakeKey = `mistakes_${questionId}`;
    gameState[mistakeKey] = (gameState[mistakeKey] || 0) + 1;
    const mistakes = gameState[mistakeKey];

    resultElement.textContent = activeT.resultWrong;
    resultElement.style.color = 'red';

    const mistakeElement = document.getElementById(`mistakeCount-${slot}`);
    if (mistakeElement) mistakeElement.textContent = activeT.mistakeCountLabel(mistakes);

    if (mistakes >= 3) {
        const h1 = document.getElementById(`hint1Btn-${slot}`);
        if (h1) {
            h1.disabled = false;
            h1.classList.add('unlocked');
            h1.textContent = activeT.hint1Unlocked;
        }
    }
    if (mistakes >= 5) {
        const h2 = document.getElementById(`hint2Btn-${slot}`);
        if (h2) {
            h2.disabled = false;
            h2.classList.add('unlocked');
            h2.textContent = activeT.hint2Unlocked;
        }
    }
    if (mistakes >= 7 && !gameState.easyModeUsed) {
        const easyBtn = document.getElementById(`easyModeBtn-${slot}`);
        if (easyBtn) {
            easyBtn.disabled = false;
            easyBtn.classList.add('unlocked');
            easyBtn.textContent = activeT.easyModeButton;
        }
    }
    persistGameState();
}

function showHint1(slot) {
    const question = getPairQuestion(slot);
    if (!question) return;
    const id = question.id;
    const attempts = gameState.hint1Attempts[id] || 0;
    const mistakes = gameState[`mistakes_${id}`] || 0;
    if (mistakes < 3 || attempts >= 2) return;

    const box = document.getElementById(`hint1Container-${slot}`);
    if (box) {
        box.textContent = getLocalizedHint(question, 1);
        box.classList.remove('hidden');
    }
    gameState.hint1Attempts[id] = attempts + 1;
    persistGameState();

    if (gameState.hint1Attempts[id] >= 2) {
        const btn = document.getElementById(`hint1Btn-${slot}`);
        if (btn) {
            btn.disabled = true;
            btn.textContent = (translations[gameState.language] || translations.ja).hint1Maxed;
        }
    }
}

function showHint2(slot) {
    const question = getPairQuestion(slot);
    if (!question) return;
    const id = question.id;
    const attempts = gameState.hint2Attempts[id] || 0;
    const mistakes = gameState[`mistakes_${id}`] || 0;
    if (mistakes < 5 || attempts >= 2) return;

    const box = document.getElementById(`hint2Container-${slot}`);
    if (box) {
        box.textContent = getLocalizedHint(question, 2);
        box.classList.remove('hidden');
    }
    gameState.hint2Attempts[id] = attempts + 1;
    persistGameState();

    if (gameState.hint2Attempts[id] >= 2) {
        const btn = document.getElementById(`hint2Btn-${slot}`);
        if (btn) {
            btn.disabled = true;
            btn.textContent = (translations[gameState.language] || translations.ja).hint2Maxed;
        }
    }
}

//how the fuck do you work as a confetti???
function celebrateCorrectAnswer(containerId = 'questionScreen') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (getComputedStyle(container).position === 'static') {
        container.style.position = 'relative';
    }
    container.style.overflow = 'hidden';

    const colors = ['#ff3b4e', '#3577f1', '#ffcc33', '#ff6fa5'];
    const containerHeight = container.offsetHeight || window.innerHeight;

    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const size = 6 + Math.random() * 6;
        const startX = 50 + (Math.random() - 0.5) * 10;      // clustered near center, 45–55%
        const spread = (Math.random() - 0.5) * 2;             // -1 to 1, sign decides left/right
        const driftPx = spread * (100 + Math.random() * 150); // wide fan-out distance in real px
        const riseDistance = containerHeight * (0.7 + Math.random() * 0.3); // px, not %
        const duration = 1.8 + Math.random() * 1.4;
        const delay = Math.random() * 0.6;
        const rotation = 360 + Math.random() * 720;

        confetti.style.position = 'absolute';
        confetti.style.left = startX + '%';
        confetti.style.bottom = '0px';
        confetti.style.width = size + 'px';
        confetti.style.height = size * 0.4 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.setProperty('--drift', driftPx + 'px');
        confetti.style.setProperty('--rise', riseDistance + 'px');   // real pixels now
        confetti.style.setProperty('--rotation', rotation + 'deg');
        confetti.style.animation = `rise ${duration}s cubic-bezier(0.15, 0.6, 0.4, 1) ${delay}s forwards`;

        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), (duration + delay) * 1000 + 100);
    }
}
// gosh I hope the code above me works as a whole
// ==========================================
// CODE SUBMISSION
// ==========================================
function isCodeValid(inputCode) {
    const normalizedInput = inputCode.trim().toUpperCase();
    return normalizedInput === ACTIVE_SECRET_CODE;
}

// Builds the trophy banner + "come find us" invite card on the final page.
// Split out from showFinalCongrats() so applyLanguageUI() can call it again
// on a language switch without re-triggering the confetti/entrance animation.
function renderFinalCongratsContent() {
    const activeT = translations[gameState.language] || translations.ja;
    const codeResultElement = document.getElementById('codeResult');
    if (!codeResultElement) return;

    codeResultElement.innerHTML = `
        <div class="final-cover">
            <div class="celebration-banner">
                ${getGameIconSvg('trophy_celebration')}
                <span class="celebration-text">${activeT.finalCongratsTitle}</span>
            </div>
            <div class="final-cover-tag">COMIC ISSUE #2</div>
            <h2 class="final-cover-title">THE ROOM OF SECRETS</h2>
            <p class="final-cover-subtitle">STUDENT COUNCIL • LAST CHAPTER</p>
            <div class="final-invite-card">
                <div class="final-invite-photo-frame">
                    ${getGameIconSvg('final_invite_door')}
                </div>
                <p class="final-invite-heading">${escapeHtml(activeT.finalInviteHeading)}</p>
                <p class="final-invite-sub">${escapeHtml(activeT.finalInviteSub)}</p>
            </div>
        </div>
    `;
}

function showFinalCongrats() {
    gameState.stage = 'finalCode';
    showScreen('codeScreen');
    applyLanguageUI();
    renderFinalCongratsContent();
    celebrateCorrectAnswer('codeScreen');
    persistGameState();
}

function submitIntermediateCode() {
    // Guard against button-mashing: ignore new submits while a correct
    // code is already mid-transition to the next screen.
    if (gameState.isCooldown) return;

    const input = document.getElementById('intermediateCodeInput');
    const submitBtn = document.getElementById('intermediateSubmitBtn');
    const codeInput = input ? input.value.trim() : '';
    const codeResultElement = document.getElementById('intermediateCodeResult');
    const activeT = translations[gameState.language] || translations.ja;
    if (!codeResultElement) return;

    if (codeInput === '') {
        codeResultElement.textContent = activeT.intermediateCodeEmpty;
        codeResultElement.style.color = 'orange';
        return;
    }

    if (isCodeValid(codeInput)) {
        gameState.isCooldown = true;
        if (submitBtn) submitBtn.disabled = true;

        codeResultElement.textContent = activeT.intermediateCodeSuccess;
        codeResultElement.style.color = 'green';
        persistGameState();

        setTimeout(() => {
            if (input) input.value = '';
            codeResultElement.textContent = '';
            gameState.isCooldown = false;
            if (submitBtn) submitBtn.disabled = false;

            // Collapse the map so it starts fresh (closed) next time it's shown
            const mapContainer = document.getElementById('mapContainer');
            const mapBtn = document.getElementById('mapToggleBtn');
            if (mapContainer) {
                mapContainer.classList.add('hidden');
                mapContainer.classList.remove('map-fullscreen');
            }
            document.body.classList.remove('map-open');
            if (mapBtn) mapBtn.textContent = activeT.mapToggleBtn;

            if (gameState.pairPage < 3) {
                gameState.pairPage++;
                gameState.currentQuestion = gameState.pairPage * 2;
                gameState.q1Correct = false;
                gameState.stage = 'question';
                showScreen('questionScreen');
                renderQuestionPair();
            } else {
                showFinalCongrats();
            }
        }, 1000);
    } else {
        codeResultElement.textContent = activeT.intermediateCodeInvalid;
        codeResultElement.style.color = 'red';
    }
}

// ==========================================
// QR CODE SCANNERS
// ==========================================
function toggleIntermediateQRScanner() {
    const container = document.getElementById('intermediateQrScannerContainer');
    const video = document.getElementById('intermediateQrVideo');
    const canvas = document.getElementById('intermediateQrCanvas');
    const status = document.getElementById('intermediateQrScannerStatus');
    const activeT = translations[gameState.language] || translations.ja;

    if (!container || !video || !canvas) return;

    if (gameState.intermediateQrScannerActive) {
        stopIntermediateQRScanner();
        return;
    }

    container.classList.remove('hidden');
    if (status) status.textContent = activeT.qrStatusAccessing;
    gameState.intermediateQrScannerActive = true;

    navigator.mediaDevices?.getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
            gameState.intermediateQrScannerStream = stream;
            video.srcObject = stream;
            video.setAttribute('playsinline', true);
            video.play();
            if (status) status.textContent = activeT.qrStatusScanning;

            function scanFrame() {
                if (!gameState.intermediateQrScannerActive) return;
                if (video.readyState === video.HAVE_ENOUGH_DATA) {
                    canvas.height = video.videoHeight;
                    canvas.width = video.videoWidth;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    if (window.jsQR) {
                        const code = window.jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: 'dontInvert' });
                        if (code && code.data) {
                            const input = document.getElementById('intermediateCodeInput');
                            if (input) input.value = code.data;
                            stopIntermediateQRScanner();
                            submitIntermediateCode();
                            return;
                        }
                    }
                }
                requestAnimationFrame(scanFrame);
            }
            requestAnimationFrame(scanFrame);
        })
        .catch((err) => {
            console.error('Camera error:', err);
            if (status) status.textContent = activeT.qrStatusError;
            gameState.intermediateQrScannerActive = false;
        });
}

function stopIntermediateQRScanner() {
    const container = document.getElementById('intermediateQrScannerContainer');
    const video = document.getElementById('intermediateQrVideo');
    if (container) container.classList.add('hidden');
    if (video && video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
    if (gameState.intermediateQrScannerStream) {
        gameState.intermediateQrScannerStream.getTracks().forEach(track => track.stop());
        gameState.intermediateQrScannerStream = null;
    }
    gameState.intermediateQrScannerActive = false;
}

function resetGame() {
    stopIntermediateQRScanner();

    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer) {
        mapContainer.classList.add('hidden');
        mapContainer.classList.remove('map-fullscreen');
        mapContainer.innerHTML = '';
    }
    document.body.classList.remove('map-open');

    const stampTray = document.getElementById('stampTray');
    if (stampTray) {
        stampTray.innerHTML = '';
        stampTray.classList.add('hidden');
    }
    const previousLanguage = gameState.language || 'ja';
    const previousUser = gameState.sessionUser || null;
    gameState = {
        currentQuestion: 0,
        pairPage: 0,
        q1Correct: false,
        completedQuestions: 0,
        stage: 'menu',
        questionSequence: [],
        mistakesCount: 0,
        hint1Shown: false,
        hint2Shown: false,
        hint1Attempts: {},
        hint2Attempts: {},
        easyModeUsed: false,
        answerLocked: false,
        isCooldown: false,
        language: previousLanguage,
        qrScannerActive: false,
        qrScannerStream: null,
        intermediateQrScannerActive: false,
        intermediateQrScannerStream: null,
        sessionUser: previousUser
    };
    applyLanguageUI();
    showScreen('menuScreen');
    const startButton = document.getElementById('startGameBtn');
    if (startButton) startButton.disabled = false;
    persistGameState();
}

function clearProgressFromLaunchFlag() {
    const params = new URLSearchParams(window.location.search);
    if (!params.has('clearProgress')) return;

    ['seitokai_quiz_browser_save_v2', 'selectedLanguage', 'gameTheme'].forEach((key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            // storage unavailable; continue with a fresh in-memory session
        }
    });
}

// ==========================================
// INITIALIZATION & EASTER EGGS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    clearProgressFromLaunchFlag();
    preloadQuizImages();
    const languageSelect = document.getElementById('languageSelect');
    const preferredLanguage = getPreferredLanguage();
    if (languageSelect) {
        languageSelect.value = preferredLanguage;
    }
    gameState.language = preferredLanguage;
    safeLocalStorageSet('selectedLanguage', preferredLanguage);

    const restored = restoreBrowserState();
    if (restored) {
        const langValue = gameState.language || preferredLanguage;
        if (languageSelect) languageSelect.value = langValue;
        safeLocalStorageSet('selectedLanguage', langValue);
        if (gameState.stage === 'question') {
            showScreen('questionScreen');
            renderQuestionPair();
        } else if (gameState.stage === 'intermediateCode') {
            showScreen('intermediateCodeScreen');
            applyLanguageUI();
            const prevEl = document.getElementById('previousAnswerText');
            if (prevEl) prevEl.textContent = formatPairAnswers();
        } else if (gameState.stage === 'finalCode') {
            showScreen('codeScreen');
            renderFinalCongratsContent();
        } else {
            showScreen('menuScreen');
        }
    } else {
        showScreen('menuScreen');
    }

    if (languageSelect) {
        languageSelect.addEventListener('change', (event) => {
            const nextLanguage = event.target.value || 'ja';
            gameState.language = nextLanguage;
            safeLocalStorageSet('selectedLanguage', nextLanguage);
            applyLanguageUI();
            persistGameState();
        });
    }

    initTheme();
    populateBackgroundMarks();
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
        themeSelect.addEventListener('change', (event) => {
            runThemeBubbleTransition(event.target.value, themeSelect);
        });
    }

    applyLanguageUI();
    // Easter Egg Setup
    const callout = document.createElement('div');
    callout.id = 'easterEggCallout';
    document.body.appendChild(callout);

    let calloutTimeoutId = null;

    const personaCallouts = {
        en: { standard: ['ANSWERING!', 'IM DOING IT~', 'ARE YOU SURE?', 'LETS GO!'], rare: 'thee does know ze way!' },
        ja: { standard: ['イケイケ！', 'どうだろうな！', '当たってMiiや！', 'せやで～'], rare: 'それちゃうわぼけw' }
    };

    function triggerPersonaHover(target) {
        if (target.classList.contains('btn-hint') && !target.classList.contains('unlocked')) return;

        target.classList.remove('persona-hover');
        void target.offsetWidth;
        target.classList.add('persona-hover');

        const isEn = gameState?.language === 'en' || document.getElementById('languageSelect')?.value === 'en';
        const langConfig = isEn ? personaCallouts.en : personaCallouts.ja;
        const isRare = Math.random() < 0.1;

        let textToShow = isRare ? langConfig.rare : langConfig.standard[Math.floor(Math.random() * langConfig.standard.length)];

        if (isRare) {
            callout.classList.add('rare');
        } else {
            callout.classList.remove('rare');
        }

        callout.textContent = textToShow;

        const rect = target.getBoundingClientRect();
        callout.style.top = `${rect.top - 8}px`;
        callout.style.left = `${rect.left + (rect.width / 2)}px`;

        callout.classList.remove('show');
        void callout.offsetWidth;
        callout.classList.add('show');

        clearTimeout(calloutTimeoutId);
        calloutTimeoutId = setTimeout(() => {
            callout.classList.remove('show');
            callout.classList.remove('rare');
        }, 600);
    }

    document.body.addEventListener('mouseenter', (e) => {
        const target = e.target.closest('.btn-primary, .btn-secondary, .btn-hint, .choice-option');
        if (target) triggerPersonaHover(target);
    }, true);

    document.body.addEventListener('animationend', (e) => {
        if (e.animationName === 'personaSmoothPulse' || e.animationName === 'personaJitter') {
            e.target.classList.remove('persona-hover');
        }
    }, true);
});