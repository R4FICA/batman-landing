const navbar = document.querySelector('.navbar');
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        // Scroll handler
        window.addEventListener('scroll', () => {
            if (window.innerWidth > 768) { // Solo aplicar en desktop
                if (window.scrollY > 50) {
                    navbar.classList.add('navbar-scrolled');
                } else {
                    navbar.classList.remove('navbar-scrolled');
                }
            }
        });

        // Verificar también al redimensionar la ventana
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                navbar.classList.remove('navbar-scrolled');
            } else if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            }
        });

        // Hamburger menu handler
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });