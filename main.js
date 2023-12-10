document.addEventListener('DOMContentLoaded', function() {
    const shortlistButtons = document.querySelectorAll('.shortlist-btn');
    const shortlistFilter = document.querySelector('.shortlist-filter');
    let shortlistedOnly = false;

    // update listings
    function updateListingsDisplay() {
        document.querySelectorAll('.contact-info-box').forEach(box => {
            const isShortlisted = box.querySelector('.shortlist-btn').getAttribute('src').includes('vector7');
            if (shortlistedOnly && !isShortlisted) {
                box.style.display = 'none';
            } else {
                box.style.display = '';
            }
        });
    }

    shortlistButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Toggle 
            const isShortlisted = btn.getAttribute('src').includes('bookmarkheart');
            btn.setAttribute('src', isShortlisted ? './public/vector7.svg' : './public/bookmarkheart-1.svg');
            const shortlistSpan = btn.nextElementSibling;
            if (shortlistSpan) {
                shortlistSpan.textContent = isShortlisted ? 'Shortlisted' : 'Shortlist';
            }
            btn.closest('.contact-info-box').classList.toggle('shortlisted', !isShortlisted);

            // updte if shortlisted filter is active
            if (shortlistedOnly) {
                updateListingsDisplay();
            }
        });
    });

    shortlistFilter.addEventListener('click', function() {
        shortlistedOnly = !shortlistedOnly;
        updateListingsDisplay(); // update display whenever the filter is toggled
    });

    
    updateListingsDisplay();
});
