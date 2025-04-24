// Function to load HTML components
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading component: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
            
            // Re-initialize mobile menu if header was loaded
            if (elementId === 'header-container') {
                initMobileMenu();
            }
            
            // Initialize Feather icons after components are loaded
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        })
        .catch(error => {
            console.error(`Failed to load ${url}: ${error.message}`);
        });
}

// Initialize mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize modal functionality
function initModal() {
    // Get the modal
    const modal = document.getElementById("bookingModal");
    
    // Get the button that opens the modal
    const bookDemoBtn = document.getElementById("openBookingModal");
    
    // Get the <span> element that closes the modal
    const closeBtn = document.getElementsByClassName("modal-close")[0];
    
    if (bookDemoBtn && modal && closeBtn) {
        // When the user clicks the button, open the modal 
        bookDemoBtn.onclick = function(e) {
            e.preventDefault();
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        }
        
        // When the user clicks on <span> (x), close the modal
        closeBtn.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Re-enable scrolling
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto"; // Re-enable scrolling
            }
        }
    }
}

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    // Load components
    if (document.getElementById('header-container')) {
        loadComponent('header.html', 'header-container');
    }
    
    if (document.getElementById('footer-container')) {
        loadComponent('footer.html', 'footer-container');
    }
    
    // Initialize modal if exists on the page
    if (document.getElementById('bookingModal')) {
        initModal();
    }
    
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});