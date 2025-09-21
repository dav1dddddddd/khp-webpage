// Timeline JavaScript for interactive elements and smooth scrolling

document.addEventListener('DOMContentLoaded', function() {
    // Header and timeline transition control
    const timelineHeader = document.querySelector('.timeline-header');
    const timelineContainer = document.querySelector('.timeline-container');
    let headerHidden = false;

    // Check if elements exist
    if (!timelineHeader || !timelineContainer) {
        console.error('Timeline elements not found!');
        return;
    }


    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll handler for header/timeline transition
    function handleScrollTransition() {
        const scrollY = window.scrollY;
        const triggerPoint = 200;

        // Make header scroll with page before disappearing
        if (scrollY > 0) {
            timelineHeader.style.transform = `translateY(${scrollY * 0.5}px)`;
        } else {
            timelineHeader.style.transform = 'translateY(0)';
        }

        if (scrollY > triggerPoint && !headerHidden) {
            timelineHeader.classList.add('scrolled');
            timelineContainer.classList.add('visible');
            headerHidden = true;
        } else if (scrollY <= triggerPoint && headerHidden) {
            timelineHeader.classList.remove('scrolled');
            timelineContainer.classList.remove('visible');
            headerHidden = false;
        }
    }

    // Throttled scroll listener
    let scrollTicking = false;
    window.addEventListener('scroll', function() {
        if (!scrollTicking) {
            requestAnimationFrame(function() {
                handleScrollTransition();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });

    // Intersection Observer for timeline animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                updateTimelineLine();
            }
        });
    }, observerOptions);

    // Observe all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineLine = document.querySelector('.timeline-line');
    let visibleItems = 0;

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Function to update timeline line based on visible items
    function updateTimelineLine() {
        visibleItems = document.querySelectorAll('.timeline-item.visible').length;
        const totalItems = timelineItems.length;
        const progress = visibleItems / totalItems;
        
        // Calculate the height based on progress
        const timelineContainer = document.querySelector('.timeline-container');
        const containerHeight = timelineContainer.offsetHeight;
        const lineHeight = containerHeight * progress;
        
        timelineLine.style.height = lineHeight + 'px';
    }

    // Also update timeline line on scroll for smoother effect
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateTimelineLine();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add hover effects to notecards
    const notecards = document.querySelectorAll('.notecard');
    notecards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(0deg) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            const isEven = this.closest('.timeline-item').classList.contains('even') || 
                          Array.from(timelineItems).indexOf(this.closest('.timeline-item')) % 2 === 1;
            this.style.transform = isEven ? 'rotate(1deg) scale(1)' : 'rotate(-1deg) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add hover effects to photo frames
    const photoFrames = document.querySelectorAll('.photo-frame');
    photoFrames.forEach(frame => {
        frame.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(0deg) scale(1.05)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
        });

        frame.addEventListener('mouseleave', function() {
            const isEven = this.closest('.timeline-item').classList.contains('even') || 
                          Array.from(timelineItems).indexOf(this.closest('.timeline-item')) % 2 === 1;
            this.style.transform = isEven ? 'rotate(-2deg) scale(1)' : 'rotate(2deg) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add click effects to timeline markers
    const timelineMarkers = document.querySelectorAll('.timeline-marker');
    timelineMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            // Add a pulse effect
            this.style.animation = 'none';
            this.offsetHeight; // Trigger reflow
            this.style.animation = 'pulse 0.6s ease';
            
            // Scroll to the associated timeline item
            const timelineItem = this.closest('.timeline-item');
            timelineItem.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });

    // Parallax effect for floating elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-elements img');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Add typing effect to timeline header
    const headerText = document.querySelector('.timeline-header h1');
    if (headerText) {
        const originalText = headerText.textContent;
        headerText.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                headerText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add sparkle effect on scroll
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.background = 'linear-gradient(45deg, #ff9a9e, #fecfef)';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.animation = 'sparkle 2s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }

    // Add sparkle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);

    // Create sparkles on scroll
    let sparkleTimeout;
    window.addEventListener('scroll', function() {
        if (Math.random() < 0.1) { // 10% chance on each scroll
            clearTimeout(sparkleTimeout);
            sparkleTimeout = setTimeout(createSparkle, 100);
        }
    });

    // Add heart animation on double click
    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'heartFloat 2s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }

    // Add heart float animation CSS
    const heartStyle = document.createElement('style');
    heartStyle.textContent = `
        @keyframes heartFloat {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-100px) scale(1.5);
            }
        }
    `;
    document.head.appendChild(heartStyle);

    // Add double click heart effect
    document.addEventListener('dblclick', function(e) {
        createHeart(e.clientX, e.clientY);
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === ' ') {
            e.preventDefault();
            window.scrollBy({
                top: window.innerHeight * 0.8,
                behavior: 'smooth'
            });
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            window.scrollBy({
                top: -window.innerHeight * 0.8,
                behavior: 'smooth'
            });
        }
    });

    // Photo modal functionality
    const photoModal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    // Define photos for each timeline item in order
    const timelinePhotos = [
        'https://lh3.googleusercontent.com/pw/AP1GczMcDmzjOFkq62TtGnhIUwwjGC9MMNoOb68e_6MpCiQda22zWYeUvQlaUFglTaQzB_Rm-jV0-wsq-JWGHiPd-jks-FOTGsL9ataiSPkCs_zxSTEYFNBUz-03VOky1QRMVhN709twotdqQPhL8b8r3TRRRA=w651-h869-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNTQ0fwJCIWWrOmvdd7ft76wi0X4owQoCggkMzVWsDoe39b_BW6L1RBd7Z-LRgGZxClFLy8YcpDx-B8LMYHrHkbYhWiF8uNB6fDWcRwjlaRUEM2uKPkkomioGIKES--065U0qevNBKIJd5n2VEkQeUF2w=w651-h869-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMKjh3pk9kmPigFycwMzsCWKtjIiqwjGuS_-oLY-cKyyUw-nGwNfsETF6kVAXVxNyKtpLK3DR6FKMV582llrsxtudnmgfoSxDuSyiqSDYsMYcd9I_THIJesAQQg1peNf4zsk7pvY8yG837z0kx8a549Iw=w651-h869-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMUkTKdKmvAQKMf4YoZQG-ieq6Bz2d6ngiK6ArdGf1luQBx1Ws9xlm7IFeyFtdMsXNR-Y_41r6XyrsPT65n_k1_yI3_S2oEJmeGTzWqTnZP8He2EJhNcIiM-3_wgGC94-kbolOEWk_URTTvBk4s6913rA=w869-h869-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczO-Px95QsJjRCRmYt5TTjQoHsdRsTJWagcGPq9L4rYwjABHI8fL09XcZeC6-DTCgNj9MUuvOOJojF3T_0cbaktt3t-cjC-mQEsmiA5P34hCzcRJKVVb8nw-FVVN2kXmFteyAmCOAixzcvKBdO-3-ZgS_A=w651-h869-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMPJIvyGdwK8Uft-_4U24_H2LDCO6BHsylb6Q3rcti1vnOCWEwkoG6Am549sFV-2BYVnzkBRliKX4WcI8eVfOFWR87KYXN_R_QREN5OJZqgwVuTO5_O2R1zI1OPM5fCijs01vyVSYjBhsTW0uV9U2XgJg=w651-h869-s-no-gm?authuser=0'
    ];

    // Make photo frames clickable
    photoFrames.forEach((frame, index) => {
        frame.addEventListener('click', function() {
            // Use the photo for this specific timeline item
            const photoIndex = Math.floor(index); // Each timeline item has 2 frames (notecard + photo)
            const photoToShow = timelinePhotos[photoIndex] || 'assets/images/placeholder.jpg';
            
            modalImage.src = photoToShow;
            photoModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal functionality
    function closePhotoModal() {
        photoModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Close modal when clicking the close button
    closeModal.addEventListener('click', closePhotoModal);

    // Close modal when clicking outside the image
    photoModal.addEventListener('click', function(e) {
        if (e.target === photoModal) {
            closePhotoModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && photoModal.classList.contains('active')) {
            closePhotoModal();
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});
