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

        // Mouse parallax effect for the text
        const parallaxText = document.querySelector('.parallax-text');
        const hero = document.querySelector('.hero');

        hero.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            parallaxText.style.transform = `
                translate(calc(-50% + ${mouseX * 50}px), calc(-50% + ${mouseY * 50}px))
            `;
        });

        hero.addEventListener('mouseleave', () => {
            parallaxText.style.transform = 'translate(-50%, -50%)';
        });