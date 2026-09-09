/* Named, lossless JavaScript photo assets used by the Picture section. */
const QUIZ_PHOTO_ASSETS = Object.freeze({
    dinosaur: { answer: 'dinosaur' },
    dance: { answer: 'dance' },
    dumpling: { answer: 'dumpling' },
    ray: { answer: 'ray' }
});

function getQuizPhotoSource(photoKey) {
    return QUIZ_PHOTO_DATA[photoKey] || '';
}

function createQuizPhoto(photoKey) {
    const image = document.createElement('img');
    image.className = 'quiz-source-image';
    image.src = getQuizPhotoSource(photoKey);
    image.alt = 'Picture puzzle';
    image.decoding = 'async';
    image.loading = 'eager';
    return image;
}
