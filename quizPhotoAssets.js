/* Renders the Type A puzzle art from inline SVG (see quizPuzzleSvgs.js)
   instead of loading a binary photo file — nothing here needs an
   image asset to be committed alongside the code. */
function createQuizPhoto(photoKey) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = getQuizPuzzleSvg(photoKey);
    const svg = wrapper.firstElementChild;
    if (!svg) {
        // Fallback empty element so callers can still safely set
        // classList/style without checking for null.
        return document.createElement('div');
    }
    svg.classList.add('quiz-source-image');
    svg.setAttribute('role', 'img');
    return svg;
}
