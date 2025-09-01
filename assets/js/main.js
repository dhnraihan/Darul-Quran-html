    // license section Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.particles-container');
        
        if (parallax) {
            const speed = 0.5;
            parallax.style.transform = `translateY(${scrolled * speed}px)`;
        }
        
        // Individual particle parallax
        document.querySelectorAll('.particle').forEach((particle, index) => {
            const speed = 0.2 + (index * 0.1);
            particle.style.transform = `translateY(${-scrolled * speed}px)`;
        });
        
        // Stars parallax
        document.querySelectorAll('.star').forEach((star, index) => {
            const speed = 0.3 + (index * 0.05);
            star.style.transform = `translateY(${-scrolled * speed}px) rotate(${scrolled * 0.5}deg)`;
        });
        
        // Dots parallax
        document.querySelectorAll('.floating-dot').forEach((dot, index) => {
            const speed = 0.1 + (index * 0.08);
            dot.style.transform = `translateY(${-scrolled * speed}px) translateX(${Math.sin(scrolled * 0.01) * 20}px)`;
        });
    });

    // licence readmore toggle
    function toggleReadMore() {
        const moreContent = document.getElementById('moreContent');
        const readMoreBtn = document.getElementById('readMoreBtn');
        const readLessBtn = document.getElementById('readLessBtn');
        
        if (moreContent.classList.contains('hidden')) {
            moreContent.classList.remove('hidden');
            readMoreBtn.classList.add('hidden');
            readLessBtn.classList.remove('hidden');
        } else {
            moreContent.classList.add('hidden');
            readMoreBtn.classList.remove('hidden');
            readLessBtn.classList.add('hidden');
        }
    }

    // Quote Slider
    let currentQuote = 0;
    const totalQuotes = 2; // Only 2 quotes now
    let quoteInterval;

    function updateQuoteDots() {
        const dots = document.querySelectorAll('.quote-dot');
        dots.forEach((dot, index) => {
            if (index === currentQuote) {
                dot.classList.remove('bg-emerald-600/50');
                dot.classList.add('bg-emerald-400');
                dot.style.width = '24px';
            } else {
                dot.classList.remove('bg-emerald-400');
                dot.classList.add('bg-emerald-600/50');
                dot.style.width = '8px';
            }
        });
    }

    function goToQuote(index) {
        currentQuote = index;
        const track = document.getElementById('quoteTrack');
        if (track) {
            track.style.transform = `translateX(-${index * 100}%)`;
            updateQuoteDots();
        }
        // Reset auto-play
        clearInterval(quoteInterval);
        startQuoteAutoPlay();
    }

    function nextQuote() {
        currentQuote = (currentQuote + 1) % totalQuotes;
        goToQuote(currentQuote);
    }

    function prevQuote() {
        currentQuote = (currentQuote - 1 + totalQuotes) % totalQuotes;
        goToQuote(currentQuote);
    }

    function startQuoteAutoPlay() {
        quoteInterval = setInterval(() => {
            nextQuote();
        }, 5000); // Change quote every 5 seconds
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', () => {
        updateQuoteDots();
        startQuoteAutoPlay();
    });

    // Pause on hover
    const carousel = document.querySelector('.quote-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(quoteInterval));
        carousel.addEventListener('mouseleave', () => startQuoteAutoPlay());
    }


    // pillar of islam section
    let currentPillar = 0;
    let autoPlayInterval;
    const totalPillars = 5;

    function showPillarDetail(index) {
        // Clear auto-play when user clicks
        clearInterval(autoPlayInterval);
        
        // Update active quote
        const quotes = document.querySelectorAll('.pillar-quote');
        quotes.forEach((quote, i) => {
            if (i === index) {
                quote.style.opacity = '1';
                quote.style.transform = 'translateX(0)';
            } else {
                quote.style.opacity = '0';
                quote.style.transform = i < index ? 'translateX(-100%)' : 'translateX(100%)';
            }
        });
        
        // Update dots
        const dots = document.querySelectorAll('.pillar-dot');
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.remove('bg-emerald-600/50');
                dot.classList.add('bg-emerald-400');
                dot.style.width = '24px';
            } else {
                dot.classList.remove('bg-emerald-400');
                dot.classList.add('bg-emerald-600/50');
                dot.style.width = '8px';
            }
        });
        
        // Update progress bar
        const progressBar = document.getElementById('progressBar');
        progressBar.style.width = `${((index + 1) / totalPillars) * 100}%`;
        
        // Update pillar cards highlighting
        const cards = document.querySelectorAll('.pillar-card');
        cards.forEach((card, i) => {
            if (i === index) {
                card.querySelector('div').style.transform = 'scale(1.05)';
                card.querySelector('div').style.borderColor = 'rgba(52, 211, 153, 0.5)';
            } else {
                card.querySelector('div').style.transform = 'scale(1)';
                card.querySelector('div').style.borderColor = '';
            }
        });
        
        currentPillar = index;
        
        // Restart auto-play after 10 seconds
        setTimeout(() => {
            startAutoPlay();
        }, 10000);
    }

    function nextPillar() {
        currentPillar = (currentPillar + 1) % totalPillars;
        showPillarDetail(currentPillar);
    }

    function startAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextPillar, 5000);
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', () => {
        showPillarDetail(0);
        startAutoPlay();
    });
    
    // Pause auto-play on hover
    const sliderContainer = document.getElementById('pillarQuoteSlider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        sliderContainer.addEventListener('mouseleave', () => startAutoPlay());
    }

    // main section
    // Initialize intl-tel-input
    // const phoneInput = document.querySelector("#phone");

    // const iti = window.intlTelInput(phoneInput, {
    //     preferredCountries: ['in', 'pk', 'sa', 'ae', 'us', 'gb'],
    //     separateDialCode: true,
    //     onlyCountries: [],
    //     utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/25.5.2/build/js/utils.min.js",
    //     nationalMode: false,
    //     autoPlaceholder: "aggressive",
    //     formatOnDisplay: true,

    //     geoIpLookup: function (success, failure) {
    //         fetch("https://ipapi.co/json/") // Free IP lookup API
    //             .then(res => res.json())
    //             .then(data => success(data.country_code.toLowerCase()))
    //             .catch(() => success("bd")); // fallback country যদি detect না হয়
    //     }
    // });
    





    // Parallax effect for Hero Section geometric shapes
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-shape');
        
        parallaxElements.forEach((element) => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

    // Intersection Observer for Hero Section animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe all animated elements in Hero Section
    document.querySelectorAll('.fade-in, .fade-up, .slide-left, .slide-right, .scale-in').forEach(el => {
        observer.observe(el);
    });

    // Optional: Mouse move parallax effect for Hero Section
    document.addEventListener('mousemove', (e) => {
        const parallaxContainer = document.getElementById('parallaxContainer');
        if (parallaxContainer) {
            const shapes = parallaxContainer.querySelectorAll('.parallax-shape');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 2;
                const xPos = (x - 0.5) * speed;
                const yPos = (y - 0.5) * speed;
                shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
            });
        }
    });

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin, CustomEase, ScrollToPlugin);

    // Custom ease
    CustomEase.create("customEase", "0.25, 0.46, 0.45, 0.94");

    // Loading animation
    window.addEventListener('load', () => {
        const tl = gsap.timeline();
        
        // Rotate loader
        gsap.to('.loader', {
            rotation: 360,
            duration: 1,
            repeat: -1,
            ease: 'none'
        });

        // Loading text animation
        gsap.to('.loader-text', {
            opacity: 0.5,
            yoyo: true,
            repeat: -1,
            duration: 0.8
        });

        // Hide loading screen after content loads
        setTimeout(() => {
            tl.to('.loading-screen', {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    document.querySelector('.loading-screen').style.display = 'none';
                    initAnimations();
                }
            });
        }, 1500);
    });

    function initAnimations() {
        // Hero section animations
        const heroTl = gsap.timeline({ delay: 0.5 });

        // Floating shapes animation
        gsap.utils.toArray('.floating-shape').forEach((shape, i) => {
            gsap.to(shape, {
                y: gsap.utils.random(-20, 20),
                x: gsap.utils.random(-10, 10),
                rotation: gsap.utils.random(-15, 15),
                duration: gsap.utils.random(4, 6),
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: i * 0.2
            });
        });

        // Counter animation
        gsap.utils.toArray('.stat-number').forEach(counter => {
            const target = parseInt(counter.dataset.target);
            const obj = { value: 0 };
            
            gsap.to(obj, {
                value: target,
                duration: 2,
                delay: 1,
                onUpdate: () => {
                    counter.textContent = Math.floor(obj.value) + '+';
                }
            });
        });

        // ScrollTrigger animations for sections
        // Teachers section
        gsap.from('#teachers .fade-in', {
            scrollTrigger: {
                trigger: '#teachers',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2
        });

        gsap.from('#teachers .scale-in', {
            scrollTrigger: {
                trigger: '#teachers',
                start: 'top 70%'
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            stagger: 0.15
        });

        // Process section
        gsap.from('#process .slide-left', {
            scrollTrigger: {
                trigger: '#process',
                start: 'top 80%'
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            stagger: 0.2
        });

        gsap.from('#process .slide-right', {
            scrollTrigger: {
                trigger: '#process',
                start: 'top 80%'
            },
            opacity: 0,
            x: 50,
            duration: 0.8,
            stagger: 0.2
        });

        gsap.from('#process .fade-up', {
            scrollTrigger: {
                trigger: '#process',
                start: 'top 70%'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1
        });

        // Testimonials section
        gsap.from('#testimonials .scale-in', {
            scrollTrigger: {
                trigger: '#testimonials',
                start: 'top 80%'
            },
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            stagger: 0.2
        });


        // FAQ section
        gsap.from('#faq .fade-up', {
            scrollTrigger: {
                trigger: '#faq',
                start: 'top 80%'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1
        });

        // Hover animations
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        // Text split animation for headings
        gsap.utils.toArray('h2').forEach(heading => {
            gsap.from(heading, {
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 30,
                duration: 0.8
            });
        });

        // Refresh ScrollTrigger
        ScrollTrigger.refresh();
    }

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('show');
        
        if (!isOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('show');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300); // Animation duration
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });

    // Close on link click
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // FAQ Toggle with GSAP
    function toggleFAQ(button) {
        const content = button.nextElementSibling;
        const icon = button.querySelector('span:last-child');
        
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            gsap.from(content, {
                height: 0,
                opacity: 0,
                duration: 0.3
            });
            gsap.to(icon, {
                rotation: 45,
                duration: 0.3
            });
        } else {
            gsap.to(content, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    content.classList.add('hidden');
                }
            });
            gsap.to(icon, {
                rotation: 0,
                duration: 0.3
            });
        }
    }

    // Smooth scroll with GSAP
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });

