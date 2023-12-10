function generateStarRating(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else if (i - rating < 1) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    return starsHtml;
}

fetch('https://jjk6hz2kxi.execute-api.us-west-2.amazonaws.com/listings') //put your deployment here
    .then(response => response.json())
    .then(listings => {
        const listingsContainer = document.getElementById('listings-container');

        listings.forEach(listing => {
            const listingElement = document.createElement('div');
            listingElement.className = 'contact-info-box';

            const starsHtml = generateStarRating(listing.rating);

            listingElement.innerHTML = `
                    <div class="info-content">
                        <h2 class="name">${listing.name}</h2>
                        <div class="ratings">${starsHtml}</div>
                        <p class="description">Description here...</p>
                        <div class="stats">
                            <div><span class="number">${listing.projects}</span><span class="label">Projects</span></div>
                            <div><span class="number">${listing.years}</span><span class="label">Years</span></div>
                            <div><span class="number">${listing.price}</span><span class="label">Price</span></div>
                        </div>
                        <div class="phone-numbers">
                            ${listing.phone_numbers.map(phone => `<div>${phone}</div>`).join('')}
                        </div>
                    </div>
                    <div class="action-icons">
                            <div class="vector-parent">
                                <img  alt="" src="./public/arrowrightshort-1.svg" />
                                <span>Details</span>
                            </div>
                            <div class="vector-parent">
                                <img  alt="" src="./public/eyeslash-1.svg" />
                                <span>Hide</span>
                            </div>
                            <div class="vector-parent">
                                <img class="shortlist-btn" alt="Shortlist" src="${listing.shortlisted ? './public/vector7.svg' : './public/bookmarkheart-1.svg'}" />
                                <span>${listing.shortlisted ? 'Shortlisted' : 'Shortlist'}</span>
                            </div>
                            <div class="vector-parent">
                                <img  alt="" src="./public/exclamationcircle-1.svg" />
                                <span>Report</span>
                            </div>
                    
                       
                        
                    </div>
                `;

            listingsContainer.appendChild(listingElement);
        });

        // Re-add the event listeners for the newly added shortlist buttons
        addShortlistEventListeners();
    })
    .catch(error => console.error('Error fetching listings:', error));

function addShortlistEventListeners() {
    document.querySelectorAll('.shortlist-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const isShortlisted = btn.getAttribute('src').includes('bookmarkheart');
            btn.setAttribute('src', isShortlisted ? './public/vector7.svg' : './public/bookmarkheart-1.svg');
            const shortlistSpan = btn.nextElementSibling;
            if (shortlistSpan) {
                shortlistSpan.textContent = isShortlisted ? 'Shortlisted' : 'Shortlist';
            }
            btn.closest('.contact-info-box').classList.toggle('shortlisted', !isShortlisted);
        });
    });
}
