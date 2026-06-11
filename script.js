// Drawer menu elements
const openBtn = document.getElementById('open-drawer');
const closeBtn = document.getElementById('close-drawer');
const drawer = document.getElementById('drawer');

// Open drawer
if (openBtn && drawer) {
    openBtn.addEventListener('click', function () {
        drawer.classList.add('active');
    });
}

// Close drawer
if (closeBtn && drawer) {
    closeBtn.addEventListener('click', function () {
        drawer.classList.remove('active');
    });
}

// Close drawer when menu link is clicked
function closeMenu() {
    if (drawer) {
        drawer.classList.remove('active');
    }
}

// Close drawer when clicking outside
document.addEventListener('click', function (event) {
    if (!drawer || !openBtn) return;

    const isClickInsideDrawer = drawer.contains(event.target);
    const isClickOnOpenButton = openBtn.contains(event.target);

    if (!isClickInsideDrawer && !isClickOnOpenButton) {
        drawer.classList.remove('active');
    }
});

// Close drawer using Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && drawer) {
        drawer.classList.remove('active');
    }
});

// Smooth scroll fix for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId === '#') {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            e.preventDefault();

            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            closeMenu();
        }
    });
});