function initModal() {
    console.log('Initializing modal...');
    
    const modal = document.getElementById('imageModal');
    console.log('Modal element:', modal);
    
    const modalImg = document.getElementById('modalImage');
    console.log('Modal image element:', modalImg);
    
    const closeBtn = document.querySelector('#imageModal button');
    console.log('Close button element:', closeBtn);
    
    const images = document.querySelectorAll('.group img');
    console.log('Found images:', images.length);

    if (!modal || !modalImg || !closeBtn) {
        console.error('Modal elements not found:', {
            modal: !!modal,
            modalImg: !!modalImg,
            closeBtn: !!closeBtn
        });
        return;
    }

    function isValidImageUrl(url) {
        try {
            const parsedUrl = new URL(url);
            return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
        } catch (e) {
            console.error('Invalid image URL:', url);
            return false;
        }
    }

    function openModal(imgSrc) {
        console.log('Opening modal with image:', imgSrc);
        
        if (!isValidImageUrl(imgSrc)) {
            console.error('Invalid image URL:', imgSrc);
            alert('Invalid image URL. Please contact support.');
            return;
        }

        // Create a new image to preload
        const preloadImg = new Image();
        
        preloadImg.onload = () => {
            console.log('Image loaded successfully');
            modalImg.src = imgSrc;
            modal.classList.remove('hidden');
            requestAnimationFrame(() => {
                modal.classList.remove('opacity-0');
            });
            document.body.style.overflow = 'hidden';
        };

        preloadImg.onerror = (error) => {
            console.error('Error loading image:', error);
            console.error('Failed image URL:', imgSrc);
            alert('Error loading image. Please try again or contact support.');
        };

        // Start loading the image
        preloadImg.src = imgSrc;
    }

    function closeModal() {
        console.log('Closing modal');
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            // Clear the image source when closing
            modalImg.src = '';
        }, 300);
    }

    // Add click event to all images
    images.forEach((img, index) => {
        console.log(`Adding click handler to image ${index}`);
        console.log(`Image ${index} URL:`, img.src);
        
        // Ensure the image is properly loaded before allowing clicks
        if (img.complete) {
            console.log(`Image ${index} already loaded`);
        } else {
            console.log(`Image ${index} loading...`);
            img.onload = () => console.log(`Image ${index} loaded`);
            img.onerror = (error) => {
                console.error(`Error loading image ${index}:`, error);
                console.error(`Failed image URL:`, img.src);
            };
        }

        img.addEventListener('click', (e) => {
            console.log(`Image ${index} clicked`);
            e.preventDefault();
            e.stopPropagation();
            openModal(img.src);
        });
    });

    // Close button click
    closeBtn.addEventListener('click', (e) => {
        console.log('Close button clicked');
        e.preventDefault();
        closeModal();
    });

    // Click outside image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            console.log('Clicked outside image');
            closeModal();
        }
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            console.log('Escape key pressed');
            closeModal();
        }
    });

    console.log('Modal initialization complete');
}

// Initialize when DOM is loaded
console.log('Setting up DOMContentLoaded listener');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    initModal();
}); 