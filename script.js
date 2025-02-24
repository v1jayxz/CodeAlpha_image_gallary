const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('show');
        lightboxImg.src = img.src;
    });
});

function closeLightbox() {
    lightbox.classList.remove('show');
}

function filterImages() {
    let searchQuery = document.getElementById('search-box').value.toLowerCase();
    let imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        let img = container.querySelector('img');
        let title = container.querySelector('.image-title').textContent.toLowerCase();
        let altText = img.alt.toLowerCase();
        if (altText.includes(searchQuery) || title.includes(searchQuery)) {
            container.classList.remove('hidden');
        } else {
            container.classList.add('hidden');
        }
    });
}
