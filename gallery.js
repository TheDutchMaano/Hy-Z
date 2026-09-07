(function () {
    var images = Array.from(document.querySelectorAll('.gallery-grid .zoomable'));
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightboxImage');

    if (!images.length || !lightbox || !lightboxImage) {
        return;
    }

    var currentIndex = -1;
    var previousButton = document.createElement('button');
    var nextButton = document.createElement('button');

    previousButton.className = 'lightbox-nav lightbox-prev';
    previousButton.type = 'button';
    previousButton.setAttribute('aria-label', 'Previous gallery image');
    previousButton.textContent = '<';

    nextButton.className = 'lightbox-nav lightbox-next';
    nextButton.type = 'button';
    nextButton.setAttribute('aria-label', 'Next gallery image');
    nextButton.textContent = '>';

    lightbox.appendChild(previousButton);
    lightbox.appendChild(nextButton);

    function showImage(index) {
        currentIndex = (index + images.length) % images.length;
        lightboxImage.src = images[currentIndex].src;
        lightboxImage.alt = images[currentIndex].alt || 'Fullscreen image';
    }

    function openImage(image) {
        showImage(images.indexOf(image));
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function moveImage(offset) {
        if (lightbox.classList.contains('active')) {
            showImage(currentIndex + offset);
        }
    }

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            openImage(image);
        });
    });

    previousButton.addEventListener('click', function (event) {
        event.stopPropagation();
        moveImage(-1);
    });

    nextButton.addEventListener('click', function (event) {
        event.stopPropagation();
        moveImage(1);
    });

    document.addEventListener('keydown', function (event) {
        if (!lightbox.classList.contains('active')) {
            return;
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            moveImage(-1);
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            moveImage(1);
        }
    });
}());
