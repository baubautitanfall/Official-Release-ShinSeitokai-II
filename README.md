# Seitokai Quiz

## Run locally

Open `index.html` in a browser. No server, Python installation, or database is required.

The game supports one local player per browser run. The player profile, quiz progress, previous answers, language, and theme are saved in browser `localStorage` under the quiz save key. Starting a new game replaces the current local run; using **Play Again** keeps the same local player profile.

The intermediate screen shows the answers from the pair just completed before the next code is entered. Clearing the browser's site data removes the local profile and saved progress.

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

The quiz photos are stored in `Type A Problems with Text Content/` and are loaded by their original filenames with URL-safe paths.