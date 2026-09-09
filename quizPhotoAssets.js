/* JavaScript registry for the supplied puzzle photos. */
const QUIZ_PHOTO_ASSETS = Object.freeze({
    dinosaur: {
        file: '1788858320389.jpg',
        answer: 'dinosaur'
    },
    dance: {
        file: '1788858320574.jpg',
        answer: 'dance'
    },
    dumpling: {
        file: '1788858320018.jpg',
        answer: 'dumpling'
    },
    ray: {
        file: '1788858320768.jpg',
        answer: 'ray'
    }
});

function getQuizPhotoSource(photoKey) {
    const photo = QUIZ_PHOTO_ASSETS[photoKey];
    if (!photo) return '';
    return `Type A Problems with Text Content/${encodeURIComponent(photo.file)}`;
}
