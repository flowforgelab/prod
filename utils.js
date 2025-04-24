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

// Initialize modal functionality with iframe booking widget
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
            
            // Get the modal content container
            const modalContent = document.querySelector('.modal-content');
            
            // Check if the booking iframe exists
            let iframe = document.getElementById('bookingIframe');
            
            // If iframe doesn't exist, create it and add it to the modal
            if (!iframe) {
                // Clear any existing content except the header and close button
                const title = modalContent.querySelector('h2');
                const closeBtn = modalContent.querySelector('.modal-close');
                
                // Store these elements to reinsert them
                const tempElements = {
                    title: title ? title.cloneNode(true) : null,
                    closeBtn: closeBtn ? closeBtn.cloneNode(true) : null
                };
                
                // Clear the modal content
                modalContent.innerHTML = '';
                
                // Add back the title and close button
                if (tempElements.closeBtn) {
                    modalContent.appendChild(tempElements.closeBtn);
                }
                
                if (tempElements.title) {
                    modalContent.appendChild(tempElements.title);
                }
                
                // Create the iframe
                iframe = document.createElement('iframe');
                iframe.id = 'bookingIframe';
                iframe.src = 'https://api.leadconnectorhq.com/widget/booking/23wZMq8rZf755oQDesYy';
                iframe.style.width = '100%';
                iframe.style.height = '750px';
                iframe.style.border = 'none';
                iframe.scrolling = 'no';
                iframe.setAttribute('id', '23wZMq8rZf755oQDesYy_1745531168392');
                
                // Add the iframe to the modal
                modalContent.appendChild(iframe);
                
                // Add the script for the booking widget
                const script = document.createElement('script');
                script.src = 'https://link.msgsndr.com/js/form_embed.js';
                script.type = 'text/javascript';
                modalContent.appendChild(script);
            }
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