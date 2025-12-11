document.addEventListener('DOMContentLoaded', function() {
    
    // Hamburger Menu
    const hamburger = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-nav');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.header__item a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax Effect for Hero Background
    const parallaxBg = document.getElementById('js-parallax-bg');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        if (parallaxBg) {
            parallaxBg.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
        }
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById('js-back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Image Placeholders (If images are missing, set defaults)
    // This is a fallback in case the HTML isn't updated with real URLs immediately
    const images = {
        'js-img-seminar': 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80',
        'js-img-photo': 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
        'js-img-party': 'https://images.unsplash.com/photo-1530103862676-de3c9a59af57?auto=format&fit=crop&w=800&q=80',
        'js-img-classroom': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
        'js-img-empty': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        'js-img-meeting': 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80'
    };

    for (const [className, url] of Object.entries(images)) {
        const imgElement = document.querySelector('.' + className);
        if (imgElement && !imgElement.getAttribute('src')) {
            imgElement.src = url;
        }
    }
});
