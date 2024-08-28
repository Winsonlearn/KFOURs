document.addEventListener('DOMContentLoaded', function() {
    const EVENTS_CONTAINER = document.querySelector('.events-grid');
    const EVENT_CARDS = document.querySelectorAll('.event-card');
    const SEARCH_INPUT = document.getElementById('event-search');
    const SEARCH_BUTTON = document.getElementById('search-button');
    const CATEGORY_FILTER = document.getElementById('category-filter');
    const ITEMS_PER_PAGE = 6;
    let currentPage = 1;

    function filterEvents() {
        const searchTerm = SEARCH_INPUT.value.toLowerCase();
        const selectedCategory = CATEGORY_FILTER.value;

        EVENT_CARDS.forEach(card => {
            const title = card.querySelector('.event-title').textContent.toLowerCase();
            const description = card.querySelector('.event-description').textContent.toLowerCase();
            const category = card.dataset.category;

            const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });

        updatePagination();
    }

    function updatePagination() {
        const visibleCards = Array.from(EVENT_CARDS).filter(card => card.style.display !== 'none');
        const pageCount = Math.ceil(visibleCards.length / ITEMS_PER_PAGE);

        const pageNumbers = document.querySelector('.page-numbers');
        pageNumbers.innerHTML = '';
        for (let i = 1; i <= pageCount; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;
            if (i === currentPage) pageLink.classList.add('active');
            pageLink.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = i;
                showPage(currentPage);
            });
            pageNumbers.appendChild(pageLink);
        }

        showPage(currentPage);

        document.querySelector('.btn-prev').disabled = currentPage === 1;
        document.querySelector('.btn-next').disabled = currentPage === pageCount;
    }

    function showPage(page) {
        const visibleCards = Array.from(EVENT_CARDS).filter(card => card.style.display !== 'none');
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        visibleCards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });

        document.querySelectorAll('.page-numbers a').forEach(link => {
            link.classList.toggle('active', parseInt(link.textContent) === page);
        });
    }

    function openEventModal(eventId) {
        console.log(`Opening modal for event: ${eventId}`);
    }

    SEARCH_INPUT.addEventListener('input', filterEvents);
    SEARCH_BUTTON.addEventListener('click', filterEvents);
    CATEGORY_FILTER.addEventListener('change', filterEvents);

    document.querySelector('.btn-prev').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.querySelector('.btn-next').addEventListener('click', () => {
        const pageCount = Math.ceil(Array.from(EVENT_CARDS).filter(card => card.style.display !== 'none').length / ITEMS_PER_PAGE);
        if (currentPage < pageCount) {
            currentPage++;
            showPage(currentPage);
        }
    });

    EVENT_CARDS.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('btn-details')) return;
            e.preventDefault();
            const eventId = this.dataset.eventId;
            openEventModal(eventId);
        });
    });

    updatePagination();
});


// MODAL

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('event-modal');
    const closeButton = document.querySelector('.close-button');

    document.querySelectorAll('.btn-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const eventTitle = e.target.closest('.event-card').querySelector('.event-title').textContent;
            const eventImage = e.target.closest('.event-card').querySelector('img').src;
            const eventDescription = e.target.closest('.event-card').querySelector('.event-description').textContent;
            const eventTime = e.target.closest('.event-card').querySelector('.event-time').textContent;
            const eventLocation = e.target.closest('.event-card').querySelector('.event-location').textContent;

            modal.querySelector('.modal-event-title').textContent = eventTitle;
            modal.querySelector('.modal-event-image').src = eventImage;
            modal.querySelector('.modal-event-description').textContent = eventDescription;
            modal.querySelector('.modal-event-time').innerHTML = `<i class="far fa-clock"></i> ${eventTime}`;
            modal.querySelector('.modal-event-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${eventLocation}`;

            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
