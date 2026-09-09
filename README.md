# Seitokai Quiz

## Run locally

Open `index.html` in a browser. No server, Python installation, or database is required.

The game supports one local player per browser run. The player profile, quiz progress, previous answers, language, and theme are saved in browser `localStorage` under the quiz save key. Starting a new game replaces the current local run; using **Play Again** keeps the same local player profile.

The intermediate screen shows the answers from the pair just completed before the next code is entered. Clearing the browser's site data removes the local profile and saved progress.