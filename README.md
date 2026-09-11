# Seitokai Quiz

## Puzzle pairs

The game is organized as four fixed pairs, matched by the top-left labels:

- A1 + B1
- A2 + B2
- A3 + B3
- A4 + B4

This keeps each location puzzle paired with its matching feature puzzle and makes the flow readable in GitHub or a static browser view.

## GitHub-safe setup

- This project is plain HTML, CSS, and JavaScript.
- No build step or package install is required.
- Type A artwork is inline SVG and Type B artwork is embedded as data URLs.
- The project can be opened directly from the repo and published to GitHub without extra asset files.

## Run locally

Open `index.html` in a browser. No server, Python installation, or database is required.

The game supports one local player per browser run. The player profile, quiz progress, previous answers, language, and theme are saved in browser `localStorage` under the quiz save key. Starting a new game replaces the current local run; using **Play Again** keeps the same local player profile.

The intermediate screen shows the answers from the pair just completed before the next code is entered. Clearing the browser's site data removes the local profile and saved progress.

## Clear progress

For a local copy, run this in PowerShell:

```powershell
Start-Process "file:///C:/Users/bauti/Downloads/seitokai-quiz-full/index.html?clearProgress=1"
```

For a public server, replace the URL with your deployed address:

```powershell
Start-Process "https://YOUR-DOMAIN.example/?clearProgress=1"
```

This clears the saved progress for the browser that opens the link. The project has no server database, so it cannot delete every player's history globally.

## Floor guide PDF

The intermediate screen's map button now opens `floor_guide.pdf` (the real school floor guide) in an embedded viewer instead of the old generated diagram. It's referenced by a plain relative filename in the code, so it works the same way whether you open `index.html` straight from disk or publish the folder to GitHub Pages — just make sure `floor_guide.pdf` stays in the same folder as `index.html`, and keep the filename's case exactly as-is (GitHub Pages' server is case-sensitive, unlike Windows).

## Publish to GitHub

Install Git, create an empty GitHub repository, then run these commands from this folder:

```powershell
git init
git add .
git commit -m "Initial quiz project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

The four "Type A" location puzzles (dinosaur / dance / dumpling / ray) are drawn as inline SVG code in `quizPuzzleSvgs.js`. The four "Type B" puzzles are self-contained in `quizTypeBSvgs.js` as SVGs with the supplied artwork embedded as data, so no separate Type B photo files are needed for the quiz to run or to publish to GitHub.