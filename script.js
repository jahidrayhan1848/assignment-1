
        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        mobileMenuButton.addEventListener('click', () => {
            const isActive = mobileMenu.classList.contains('active');
            if (isActive) {
                mobileMenu.classList.remove('active');
                menuIcon.classList.replace('fa-times', 'fa-bars');
            } else {
                mobileMenu.classList.add('active');
                menuIcon.classList.replace('fa-bars', 'fa-times');
            }
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuIcon.classList.replace('fa-times', 'fa-bars');
            });
        });

        // Navbar Scroll Styling
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('py-1');
            } else {
                nav.classList.remove('py-1');
            }
        });
  