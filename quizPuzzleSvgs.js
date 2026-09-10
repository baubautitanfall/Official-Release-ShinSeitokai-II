/* ==========================================================
   Type A puzzle art, recreated as inline vector (SVG) markup.
   These replace the original hand-drawn photo scans so no
   binary image files need to be committed to GitHub.
   Keys match the original photoKey values used in `questions`.
   ========================================================== */

// ---------- small shared helpers ----------

function svgNumCircle(cx, cy, r, num, color, filled, fontSize) {
    fontSize = fontSize || r * 1.15;
    const fill = filled ? color : '#ffffff';
    const textFill = filled ? '#ffffff' : color;
    return `
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${color}" stroke-width="${Math.max(2, r * 0.13)}"/>
        <text x="${cx}" y="${cy}" font-family="'M PLUS Rounded 1c', sans-serif" font-weight="700"
              font-size="${fontSize}" fill="${textFill}" text-anchor="middle" dominant-baseline="central">${num}</text>`;
}

function svgHatchCell(x, y, w, h) {
    const lines = [];
    const step = 10;
    for (let d = -h; d < w; d += step) {
        const x1 = x + Math.max(d, 0);
        const y1 = y + Math.max(-d, 0);
        const x2 = x + Math.min(d + h, w);
        const y2 = y + h - Math.max(0, (d + h) - w);
        lines.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#1a1a1a" stroke-width="2.5"/>`);
    }
    return `<g>
        <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#ffffff" stroke="#1a1a1a" stroke-width="2.5"/>
        <clipPath id="clip-${x}-${y}"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath>
        <g clip-path="url(#clip-${x}-${y})">${lines.join('')}</g>
        <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
    </g>`;
}

// ==========================================================
// 1) DINOSAUR — three torn cipher-grid scraps + emoji equations
//    (answers: 恐竜 / dinosaur / 1-4)
// ==========================================================
function buildDinosaurPuzzleSvg() {
    const INK = '#1a1a1a';
    let s = `<svg viewBox="0 0 1000 760" xmlns="http://www.w3.org/2000/svg" font-family="'M PLUS Rounded 1c', sans-serif">
        <rect x="0" y="0" width="1000" height="760" fill="#ffffff"/>`;

    // ---- Grid 1 (torn left edge), 3x3, cell 78px, origin (30,30) ----
    const g1x = 30, g1y = 30, cell = 78;
    // torn left edge as a jagged line
    let leftEdge = `M ${g1x},${g1y}`;
    for (let i = 0; i <= 3; i++) {
        const y = g1y + i * cell;
        leftEdge += ` L ${g1x - (i % 2 === 0 ? 14 : 2)},${y}`;
        if (i < 3) leftEdge += ` L ${g1x - (i % 2 === 0 ? 2 : 14)},${y + cell / 2}`;
    }
    s += `<path d="${leftEdge}" fill="none" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`;
    // grid lines (3 cols x 3 rows), straight right/top/bottom
    for (let r = 0; r <= 3; r++) s += `<line x1="${g1x}" y1="${g1y + r*cell}" x2="${g1x + 3*cell}" y2="${g1y + r*cell}" stroke="${INK}" stroke-width="3"/>`;
    for (let c = 0; c <= 3; c++) s += `<line x1="${g1x + c*cell}" y1="${g1y}" x2="${g1x + c*cell}" y2="${g1y + 3*cell}" stroke="${INK}" stroke-width="3"/>`;
    // hatched cells: col1 all rows, col3 row1 & row3
    s += svgHatchCell(g1x, g1y, cell, cell);
    s += svgHatchCell(g1x, g1y + cell, cell, cell);
    s += svgHatchCell(g1x, g1y + 2*cell, cell, cell);
    s += svgHatchCell(g1x + 2*cell, g1y, cell, cell);
    s += svgHatchCell(g1x + 2*cell, g1y + 2*cell, cell, cell);
    // circles: (row1,col2)=3 blue, (row2,col3)=4 red
    s += svgNumCircle(g1x + 1.5*cell, g1y + 0.5*cell, 24, '3', '#2f6fed', false);
    s += svgNumCircle(g1x + 2.5*cell, g1y + 1.5*cell, 24, '4', '#e0392b', false);

    // ---- Grid 2 (torn top+bottom), 6x2, origin (350,60), cell 60px ----
    const g2x = 350, g2y = 60, c2 = 60;
    let topEdge = `M ${g2x},${g2y}`;
    for (let i = 0; i <= 6; i++) topEdge += ` L ${g2x + i*c2},${g2y - (i % 2 === 0 ? 0 : 12)}`;
    s += `<path d="${topEdge}" fill="none" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`;
    let botEdge = `M ${g2x},${g2y + 2*c2}`;
    for (let i = 0; i <= 6; i++) botEdge += ` L ${g2x + i*c2},${g2y + 2*c2 + (i % 2 === 0 ? 0 : 12)}`;
    s += `<path d="${botEdge}" fill="none" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`;
    for (let r = 0; r <= 2; r++) s += `<line x1="${g2x}" y1="${g2y + r*c2}" x2="${g2x + 6*c2}" y2="${g2y + r*c2}" stroke="${INK}" stroke-width="3"/>`;
    for (let c = 0; c <= 6; c++) s += `<line x1="${g2x + c*c2}" y1="${g2y}" x2="${g2x + c*c2}" y2="${g2y + 2*c2}" stroke="${INK}" stroke-width="3"/>`;
    s += `<text x="${g2x + 6*c2 - 8}" y="${g2y - 20}" font-size="22" text-anchor="end" fill="${INK}" font-weight="700">5×11</text>`;
    s += svgHatchCell(g2x + 4*c2, g2y + c2, c2, c2);
    s += svgNumCircle(g2x + 4.5*c2, g2y + 0.5*c2, 20, '2', '#e0392b', false);
    s += svgNumCircle(g2x + 1.5*c2, g2y + 1.5*c2, 20, '2', '#2fa84f', false);

    // ---- Grid 3 (torn left edge, corner piece), 3x3, origin (760,30) ----
    const g3x = 760, g3y = 30;
    let leftEdge3 = `M ${g3x},${g3y}`;
    for (let i = 0; i <= 3; i++) {
        const y = g3y + i * cell;
        leftEdge3 += ` L ${g3x - (i % 2 === 0 ? 14 : 2)},${y}`;
        if (i < 3) leftEdge3 += ` L ${g3x - (i % 2 === 0 ? 2 : 14)},${y + cell / 2}`;
    }
    s += `<path d="${leftEdge3}" fill="none" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`;
    for (let r = 0; r <= 3; r++) s += `<line x1="${g3x}" y1="${g3y + r*cell}" x2="${g3x + 3*cell}" y2="${g3y + r*cell}" stroke="${INK}" stroke-width="3"/>`;
    for (let c = 0; c <= 3; c++) s += `<line x1="${g3x + c*cell}" y1="${g3y}" x2="${g3x + c*cell}" y2="${g3y + 3*cell}" stroke="${INK}" stroke-width="3"/>`;
    s += svgNumCircle(g3x + 1.5*cell, g3y + 0.5*cell, 22, '1', '#2fa84f', false);
    s += svgNumCircle(g3x + 1.5*cell, g3y + 1.5*cell, 22, '1', '#e0392b', false);
    s += svgNumCircle(g3x + 0.5*cell, g3y + 2.5*cell, 22, '2', '#2f6fed', false);
    s += svgNumCircle(g3x + 1.5*cell, g3y + 2.5*cell, 22, '1', '#2f6fed', false);
    s += svgNumCircle(g3x + 2.5*cell, g3y + 2.5*cell, 22, '3', '#e0392b', false);

    // divider line
    s += `<line x1="20" y1="330" x2="980" y2="330" stroke="${INK}" stroke-width="3"/>`;

    // ---- Equation row 1: green 1,2 = bell ----
    s += svgNumCircle(430, 400, 28, '1', '#2fa84f', false);
    s += svgNumCircle(500, 400, 28, '2', '#2fa84f', false);
    s += `<text x="560" y="400" font-size="40" fill="${INK}" text-anchor="middle" dominant-baseline="central">=</text>`;
    // simple bell icon
    s += `<g transform="translate(650,370)">
        <path d="M30,10 C10,10 4,30 4,48 C4,58 0,64 -4,68 L64,68 C60,64 56,58 56,48 C56,30 50,10 30,10 Z" fill="#f5b93d" stroke="#c98a12" stroke-width="2"/>
        <ellipse cx="30" cy="72" rx="34" ry="6" fill="#c98a12"/>
        <circle cx="30" cy="80" r="6" fill="#c98a12"/>
        <circle cx="18" cy="4" r="6" fill="#f5b93d" stroke="#c98a12" stroke-width="2"/>
    </g>`;

    // ---- Equation row 2: blue 1,2,3 = capsule ----
    s += svgNumCircle(410, 500, 28, '1', '#2f6fed', false);
    s += svgNumCircle(480, 500, 28, '2', '#2f6fed', false);
    s += svgNumCircle(550, 500, 28, '3', '#2f6fed', false);
    s += `<text x="610" y="500" font-size="40" fill="${INK}" text-anchor="middle" dominant-baseline="central">=</text>`;
    s += `<g transform="translate(650,470)">
        <rect x="0" y="14" width="70" height="28" rx="14" fill="#ffffff" stroke="${INK}" stroke-width="2.5" transform="rotate(-25 35 28)"/>
        <path d="M6,28 a14,14 0 0 1 14,-14 l16,0 l0,28 l-16,0 a14,14 0 0 1 -14,-14 Z" fill="#e0392b" transform="rotate(-25 35 28)"/>
        <circle cx="76" cy="46" r="10" fill="#ffffff" stroke="${INK}" stroke-width="2"/>
        <circle cx="60" cy="54" r="9" fill="#ffffff" stroke="${INK}" stroke-width="2"/>
    </g>`;

    // ---- Equation row 3: 1 2 3 3(blue) 4 3 = ? ----
    const seq = [['1','#e0392b',28],['2','#e0392b',20],['3','#e0392b',28],['3','#2f6fed',28],['4','#e0392b',20],['3','#e0392b',28]];
    let cx = 260;
    seq.forEach(([num, color, r]) => {
        s += svgNumCircle(cx, 620, r, num, color, false);
        cx += r * 2 + 20;
    });
    s += `<text x="${cx + 20}" y="620" font-size="40" fill="${INK}" text-anchor="middle" dominant-baseline="central">=</text>`;
    s += `<text x="${cx + 80}" y="628" font-size="64" fill="#e0392b" text-anchor="middle" dominant-baseline="central" font-weight="700">?</text>`;

    s += `</svg>`;
    return s;
}

// ==========================================================
// 2) DANCE — kanji + circle reading cipher
//    (answers: ダンス / dance / 体育館 / gym)
// ==========================================================
function buildDancePuzzleSvg() {
    const INK = '#1a1a1a';
    let s = `<svg viewBox="0 0 900 620" xmlns="http://www.w3.org/2000/svg" font-family="'M PLUS Rounded 1c', 'Zen Maru Gothic', sans-serif">
        <rect x="0" y="0" width="900" height="620" fill="#ffffff"/>
        <text x="450" y="70" font-size="46" font-weight="700" fill="${INK}" text-anchor="middle">□を足して○を読め</text>

        <text x="185" y="230" font-size="86" font-weight="700" fill="${INK}" text-anchor="middle">竜</text>
        <text x="450" y="230" font-size="86" font-weight="700" fill="${INK}" text-anchor="middle">免</text>
        <text x="715" y="230" font-size="86" font-weight="700" fill="${INK}" text-anchor="middle">厄</text>`;

    // 竜: filled red, outline
    s += svgNumCircle(150, 300, 26, '', '#e0392b', true);
    s += svgNumCircle(215, 300, 26, '', INK, false);
    // 免: outline, filled blue
    s += svgNumCircle(415, 300, 26, '', INK, false);
    s += svgNumCircle(480, 300, 26, '', '#2f6fed', true);
    // 厄: リ + filled green + outline
    s += `<text x="620" y="308" font-size="46" font-weight="700" fill="${INK}" text-anchor="middle">リ</text>`;
    s += svgNumCircle(690, 300, 26, '', '#2fa84f', true);
    s += svgNumCircle(755, 300, 26, '', INK, false);

    // bottom equation
    s += svgNumCircle(330, 460, 30, '', '#e0392b', true);
    s += svgNumCircle(405, 460, 30, '', '#2f6fed', true);
    s += svgNumCircle(480, 460, 30, '', '#2fa84f', true);
    s += `<text x="545" y="460" font-size="42" fill="${INK}" text-anchor="middle" dominant-baseline="central">=</text>`;
    s += `<text x="610" y="470" font-size="66" fill="#e0392b" text-anchor="middle" dominant-baseline="central" font-weight="700">?</text>`;

    s += `</svg>`;
    return s;
}

// ==========================================================
// 3) DUMPLING — kana path-tracing grid with directional clues
//    (answers: 水餃子 / dumpling / 中庭 / courtyard)
// ==========================================================
function buildDumplingPuzzleSvg() {
    const INK = '#1a1a1a';
    const grid = [
        ['こ','こ','か','ら','さ','き','は','ひ','と'],
        ['つ','と','ば','し','。','縦','す','と','言'],
        ['横','笑','に','座','ま','と','っ','わ','す'],
        ['あ','ぐ','て','行','ぱ','こ','間','う','水'],
        ['。','く','壁','な','に','い','ぶ','鉄','つ'],
        ['こ','か','脱','る','和','ま','ん','で','。']
    ];
    const ox = 90, oy = 80, cw = 92, ch = 92, cols = 9, rows = 6;

    let s = `<svg viewBox="0 0 1080 860" xmlns="http://www.w3.org/2000/svg" font-family="'M PLUS Rounded 1c', 'Zen Maru Gothic', sans-serif">
        <rect x="0" y="0" width="1080" height="860" fill="#ffffff"/>`;

    // thin grid + characters
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const x = ox + c * cw, y = oy + r * ch;
            s += `<rect x="${x}" y="${y}" width="${cw}" height="${ch}" fill="none" stroke="${INK}" stroke-width="1.5"/>`;
            s += `<text x="${x + cw/2}" y="${y + ch/2 + 2}" font-size="34" fill="${INK}" text-anchor="middle" dominant-baseline="central">${grid[r][c]}</text>`;
        }
    }

    // bold "torn puzzle" outline segments (stylised, approximating the original)
    const bold = (x1,y1,x2,y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${INK}" stroke-width="6" stroke-linecap="square"/>`;
    const gx = c => ox + c * cw, gy = r => oy + r * ch;
    s += bold(gx(0), gy(0), gx(2), gy(0));               // top, cols 0-2
    s += bold(gx(3), gy(0), gx(9), gy(0));               // top, cols 3-9
    s += bold(gx(2), gy(0), gx(2), gy(1));               // right side of か
    s += bold(gx(2), gy(1), gx(3), gy(1));               // below か
    s += bold(gx(4), gy(0), gx(4), gy(2));               // right of ら/し
    s += bold(gx(3), gy(2), gx(4), gy(2));               // below し
    s += bold(gx(0), gy(0), gx(0), gy(2));               // left, rows 0-2
    s += bold(gx(0), gy(3), gx(0), gy(6));               // left, rows 3-6
    s += bold(gx(0), gy(4), gx(1), gy(4));               // notch under 。
    s += bold(gx(3), gy(3), gx(3), gy(4));                // right of 行
    s += bold(gx(8), gy(2), gx(8), gy(4));               // box around す/水
    s += bold(gx(8), gy(3), gx(9), gy(3));
    s += bold(gx(7), gy(4), gx(7), gy(5));               // right of ん
    s += bold(gx(0), gy(6), gx(2), gy(6));               // bottom cols 0-1 (gap at col1 for arrow)
    s += bold(gx(2), gy(6), gx(9), gy(6));               // bottom cols 2-9
    s += bold(gx(9), gy(0), gx(9), gy(2));               // right rows 0-2
    s += bold(gx(9), gy(4), gx(9), gy(6));               // right rows 4-6

    // arrows
    const arrow = (x, y, angleDeg, color) => `
        <g transform="translate(${x},${y}) rotate(${angleDeg})">
            <line x1="-22" y1="0" x2="22" y2="0" stroke="${color}" stroke-width="7" stroke-linecap="round"/>
            <path d="M 22,0 L 8,-11 L 8,11 Z" fill="${color}"/>
        </g>`;
    s += arrow(gx(2) + cw/2, oy - 35, 90, '#2f6fed');            // top, pointing down, blue
    s += arrow(ox + cols*cw + 40, gy(0) + ch/2, 180, '#2fa84f'); // right row1, pointing left, green
    s += arrow(ox + cols*cw + 40, gy(1) + ch/2, 0, '#2f6fed');   // right row2, pointing right, blue
    s += arrow(ox - 40, gy(2) + ch/2, 180, '#e0392b');           // left row3, pointing left, red
    s += `<text x="${ox - 80}" y="${gy(2) + ch/2 + 12}" font-size="38" fill="#e0392b" text-anchor="middle" font-weight="700">?</text>`;
    s += arrow(gx(0) + cw/2, oy + rows*ch + 35, 90, '#2fa84f');  // bottom-left, pointing down, green
    s += arrow(gx(9) - 10, oy + rows*ch + 35, -90, '#e0392b');   // bottom-right, pointing up, red

    // mustard tube icon (near blue right arrow)
    s += `<g transform="translate(${ox + cols*cw + 90},${gy(1) - 30})">
        <rect x="0" y="20" width="70" height="34" rx="6" fill="#f2b03c" stroke="${INK}" stroke-width="2"/>
        <rect x="0" y="20" width="70" height="34" rx="6" fill="none" stroke="${INK}" stroke-width="2"/>
        <rect x="12" y="27" width="46" height="20" rx="3" fill="#ffffff" stroke="${INK}" stroke-width="1.5"/>
        <text x="35" y="41" font-size="12" fill="${INK}" text-anchor="middle" dominant-baseline="central">からし</text>
        <path d="M0,37 L-16,30 L-16,44 Z" fill="#f2b03c" stroke="${INK}" stroke-width="2"/>
    </g>`;

    // flashlight icon (near bottom-left green arrow)
    s += `<g transform="translate(${gx(0) + cw/2 - 22},${oy + rows*ch + 60})">
        <rect x="6" y="18" width="32" height="50" rx="4" fill="#2b2b2b"/>
        <rect x="0" y="0" width="44" height="20" rx="4" fill="#3a3a3a"/>
        <circle cx="22" cy="10" r="7" fill="#dfe6ee"/>
        <text x="22" y="92" font-size="14" fill="${INK}" text-anchor="middle" font-weight="700">FP</text>
    </g>`;

    s += `</svg>`;
    return s;
}

// ==========================================================
// 4) RAY — dot-code cipher + beach illustration
//    (answers: 光線 / ray / 3-3 / 3-1)
// ==========================================================
function buildRayPuzzleSvg() {
    const INK = '#1a1a1a';
    const RED = '#e0392b';
    let s = `<svg viewBox="0 0 1080 760" xmlns="http://www.w3.org/2000/svg" font-family="'M PLUS Rounded 1c', 'Zen Maru Gothic', sans-serif">
        <rect x="0" y="0" width="1080" height="760" fill="#ffffff"/>`;

    const dotRow = (y, pattern) => {
        let out = '';
        pattern.forEach((isRed, i) => {
            out += `<circle cx="${60 + i*46}" cy="${y}" r="16" fill="${isRed ? RED : INK}"/>`;
        });
        return out;
    };

    s += dotRow(70, [1,0,0,1,0,0,1]);
    s += `<text x="60" y="170" font-size="64" font-weight="700" fill="${INK}">作戦</text>`;
    s += `<line x1="260" y1="140" x2="380" y2="140" stroke="${RED}" stroke-width="5"/><path d="M380,140 L364,130 L364,150 Z" fill="${RED}"/>`;

    s += dotRow(280, [1,1,0,1,0,0,0]);
    s += `<text x="60" y="380" font-size="64" font-weight="700" fill="${INK}">正確</text>`;
    s += `<line x1="260" y1="350" x2="380" y2="350" stroke="${RED}" stroke-width="5"/><path d="M380,350 L364,340 L364,360 Z" fill="${RED}"/>`;

    s += dotRow(490, [1,1,0,0,1,0,0]);
    s += `<text x="60" y="590" font-size="64" font-weight="700" fill="${INK}">落葉</text>`;
    s += `<text x="270" y="580" font-size="46" fill="${INK}" text-anchor="middle">=</text>`;
    s += `<text x="330" y="592" font-size="66" fill="${RED}" text-anchor="middle" font-weight="700">?</text>`;

    // ---- simplified beach illustration ----
    s += `<clipPath id="beachClip"><rect x="430" y="20" width="620" height="700" rx="18"/></clipPath>`;
    s += `<g clip-path="url(#beachClip)">`;
    s += `<rect x="430" y="20" width="620" height="380" fill="#bfe3f7"/>`;
    s += `<rect x="430" y="330" width="620" height="180" fill="#3f9bd6"/>`;
    s += `<rect x="430" y="470" width="620" height="250" fill="#ecd6a4"/>`;
    // sun
    s += `<g transform="translate(700,150)">`;
    for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        s += `<line x1="${Math.cos(a)*55}" y1="${Math.sin(a)*55}" x2="${Math.cos(a)*75}" y2="${Math.sin(a)*75}" stroke="#f5a623" stroke-width="8" stroke-linecap="round"/>`;
    }
    s += `<circle cx="0" cy="0" r="48" fill="#ffcc4d"/>`;
    s += `</g>`;
    // clouds
    s += `<g fill="#ffffff">
        <ellipse cx="880" cy="120" rx="60" ry="30"/>
        <ellipse cx="930" cy="105" rx="42" ry="26"/>
        <ellipse cx="840" cy="105" rx="36" ry="22"/>
    </g>`;
    // palm tree
    s += `<g transform="translate(880,300)">
        <path d="M0,220 C10,140 -6,90 0,20" fill="none" stroke="#8a5a2b" stroke-width="16" stroke-linecap="round"/>
        <g fill="#2f9e44">
            <path d="M0,20 C-70,-10 -110,20 -130,60 C-80,50 -40,40 0,20 Z"/>
            <path d="M0,20 C60,-20 110,0 140,40 C90,40 40,40 0,20 Z"/>
            <path d="M0,20 C-40,-40 -30,-90 -10,-110 C-20,-60 -15,-20 0,20 Z"/>
            <path d="M0,20 C40,-40 30,-95 10,-115 C25,-60 18,-15 0,20 Z"/>
            <path d="M0,20 C-10,-30 10,-60 40,-70 C20,-40 10,-10 0,20 Z"/>
        </g>
    </g>`;
    // umbrella (4-wedge dome built from true pie slices, sitting on the sand)
    s += `<g transform="translate(610,640)">
        <path d="M0,0 L0,110" stroke="#8a5a2b" stroke-width="6"/>
        <path d="M0,0 L-70,0 A70,70 0 0 1 -49.5,-49.5 Z" fill="#e0392b"/>
        <path d="M0,0 L-49.5,-49.5 A70,70 0 0 1 0,-70 Z" fill="#f5c945"/>
        <path d="M0,0 L0,-70 A70,70 0 0 1 49.5,-49.5 Z" fill="#3f9bd6"/>
        <path d="M0,0 L49.5,-49.5 A70,70 0 0 1 70,0 Z" fill="#2f9e44"/>
        <path d="M-70,0 A70,70 0 0 0 70,0 Z" fill="none" stroke="#8a5a2b" stroke-width="3"/>
    </g>`;
    // hibiscus cluster
    s += `<g transform="translate(500,610)">
        <g fill="#2f9e44"><ellipse cx="-10" cy="20" rx="26" ry="14"/><ellipse cx="30" cy="26" rx="26" ry="14"/></g>
        <g fill="#e0392b">
            <circle cx="0" cy="0" r="16"/><circle cx="20" cy="6" r="16"/><circle cx="-4" cy="20" r="16"/><circle cx="24" cy="22" r="16"/>
        </g>
    </g>`;
    // crab
    s += `<g transform="translate(750,640)">
        <ellipse cx="0" cy="0" rx="28" ry="18" fill="#e0392b"/>
        <circle cx="-14" cy="-14" r="6" fill="#ffffff"/><circle cx="14" cy="-14" r="6" fill="#ffffff"/>
        <circle cx="-14" cy="-14" r="3" fill="#1a1a1a"/><circle cx="14" cy="-14" r="3" fill="#1a1a1a"/>
        <path d="M-30,-4 L-46,-14 M-32,6 L-50,4 M30,-4 L46,-14 M32,6 L50,4" stroke="#e0392b" stroke-width="5" stroke-linecap="round"/>
        <path d="M-34,-2 L-46,-16 L-38,-16 Z M34,-2 L46,-16 L38,-16 Z" fill="#e0392b"/>
    </g>`;
    s += `</g>`;
    s += `<rect x="430" y="20" width="620" height="700" rx="18" fill="none" stroke="${INK}" stroke-width="3"/>`;

    s += `</svg>`;
    return s;
}

const QUIZ_PUZZLE_SVG_BUILDERS = Object.freeze({
    dinosaur: buildDinosaurPuzzleSvg,
    dance: buildDancePuzzleSvg,
    dumpling: buildDumplingPuzzleSvg,
    ray: buildRayPuzzleSvg
});

function getQuizPuzzleSvg(photoKey) {
    const builder = QUIZ_PUZZLE_SVG_BUILDERS[photoKey];
    return builder ? builder() : '';
}
