document.addEventListener('DOMContentLoaded', () => {
    // ---- Elements ----
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const closeMenuBtn = document.querySelector('.close-menu');
    const drawerLinks = document.querySelectorAll('.drawer-links a');

    // ---- Sticky Navbar ----
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // Run on load to check scroll position
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // ---- Mobile Drawer Toggle ----
    const openMenu = () => {
        mobileDrawer.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeMenu = () => {
        mobileDrawer.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    hamburger.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);

    // Close mobile menu when a link is clicked
    drawerLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside (on the body behind the drawer)
    document.addEventListener('click', (e) => {
        if (mobileDrawer.classList.contains('active') &&
            !mobileDrawer.contains(e.target) &&
            !hamburger.contains(e.target)) {
            closeMenu();
        }
    });
});
