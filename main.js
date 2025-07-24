
        // GitHub SVG Icon as a reusable function
        function createGitHubIcon() {
            return `<svg class="github-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>`;
        }

        // LinkedIn SVG Icon as a reusable function
        function createLinkedInIcon() {
            return `<svg class="linkedin-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>`;
        }

        // Initialize social links with proper icons after DOM is loaded
        function initializeSocialLinks() {
            // Update contact page social links
            const contactSocialLinks = document.querySelector('.contact-info .social-links');
            if (contactSocialLinks) {
                contactSocialLinks.innerHTML = `
                    <a href="https://github.com/Rishabhjain-92" class="social-link" target="_blank" rel="noopener noreferrer">
                        ${createGitHubIcon()}
                    </a>
                    <a href="https://www.linkedin.com/in/rishabh-jain-296235291/" class="social-link" target="_blank" rel="noopener noreferrer">
                        ${createLinkedInIcon()}
                    </a>
                    <a href="mailto:rishabhjain92148@gmail.com" class="social-link">
                        <i class="fas fa-envelope"></i>
                    </a>
                `;
            }

            // Update footer social links
            const footerSocialLinks = document.querySelector('.footer .social-links');
            if (footerSocialLinks) {
                footerSocialLinks.innerHTML = `
                    <a href="https://github.com/Rishabhjain-92" class="social-link" style="width: 40px; height: 40px;" target="_blank" rel="noopener noreferrer">
                        ${createGitHubIcon()}
                    </a>
                    <a href="https://www.linkedin.com/in/rishabh-jain-296235291/" class="social-link" style="width: 40px; height: 40px;" target="_blank" rel="noopener noreferrer">
                        ${createLinkedInIcon()}
                    </a>
                    <a href="mailto:rishabhjain92148@gmail.com" class="social-link" style="width: 40px; height: 40px;">
                        <i class="fas fa-envelope"></i>
                    </a>
                `;
            }
        }

        // Projects data with proper demo and GitHub links
        const projects = [
            {
                id: 1,
                title: "E-Commerce Platform",
                category: "Full Stack",
                description: "Modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
                tech: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
                demoUrl: "https://your-ecommerce-demo.netlify.app",
                githubUrl: "https://github.com/yourusername/ecommerce-platform",
                featured: true
            },
            {
                id: 2,
                title: "AI Dashboard",
                category: "Frontend",
                description: "Sophisticated data visualization dashboard with machine learning insights and predictive analytics.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                tech: ["React", "D3.js", "Python", "TensorFlow", "FastAPI"],
                demoUrl: "https://your-ai-dashboard.vercel.app",
                githubUrl: "https://github.com/yourusername/ai-dashboard",
                featured: true
            },
            {
                id: 3,
                title: "Social Media App",
                category: "Mobile",
                description: "Cross-platform social media application with real-time messaging and content sharing capabilities.",
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
                tech: ["React Native", "Firebase", "Redux", "Node.js"],
                demoUrl: "https://your-social-app.herokuapp.com",
                githubUrl: "https://github.com/yourusername/social-media-app",
                featured: false
            },
            {
                id: 4,
                title: "Blockchain Wallet",
                category: "Web3",
                description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration.",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
                tech: ["Web3.js", "Solidity", "React", "Ethereum", "IPFS"],
                demoUrl: "https://your-blockchain-wallet.netlify.app",
                githubUrl: "https://github.com/yourusername/blockchain-wallet",
                featured: false
            },
            {
                id: 5,
                title: "IoT Dashboard",
                category: "IoT",
                description: "Real-time monitoring system for IoT devices with predictive maintenance alerts.",
                image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
                tech: ["React", "MQTT", "InfluxDB", "Grafana", "Arduino"],
                demoUrl: "https://your-iot-dashboard.vercel.app",
                githubUrl: "https://github.com/yourusername/iot-dashboard",
                featured: false
            },
            {
                id: 6,
                title: "AR Shopping Experience",
                category: "AR/VR",
                description: "Augmented reality shopping platform allowing customers to try products virtually.",
                image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&h=400&fit=crop",
                tech: ["Three.js", "WebXR", "React", "TensorFlow.js"],
                demoUrl: "https://your-ar-shopping.netlify.app",
                githubUrl: "https://github.com/yourusername/ar-shopping",
                featured: true
            }
        ];

        // Global variables
        let currentFilter = 'all';
        let isMobileNavOpen = false;

        // Initialize the website
        document.addEventListener('DOMContentLoaded', function() {
            initializeStars();
            initializeProjects();
            initializeAnimations();
            initializeCursor();
            initializeScrollEffects();
            initializeContactForm();
            initializeSocialLinks(); // Initialize social links after DOM loads
        });

        // Page navigation with improved animations
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => {
                page.classList.remove('active');
                page.style.opacity = '0';
                page.style.transform = 'translateY(20px)';
            });
            
            // Show selected page with animation
            setTimeout(() => {
                document.getElementById(pageId).classList.add('active');
                const activePage = document.getElementById(pageId);
                
                setTimeout(() => {
                    activePage.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    activePage.style.opacity = '1';
                    activePage.style.transform = 'translateY(0)';
                }, 50);
            }, 100);
            
            // Update navigation
            updateNavigation(pageId);
            
            // Close mobile nav if open
            if (isMobileNavOpen) {
                toggleMobileNav();
            }
            
            // Trigger skill bars animation if resume page
            if (pageId === 'resume') {
                setTimeout(animateSkillBars, 600);
            }
        }

        // Update navigation active state
        function updateNavigation(activePageId) {
            // Desktop navigation
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.dataset.page === activePageId) {
                    item.classList.add('active');
                }
            });
            
            // Mobile navigation
            const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
            mobileNavItems.forEach(item => {
                item.classList.remove('active');
                if (item.dataset.page === activePageId) {
                    item.classList.add('active');
                }
            });
        }

        // Mobile navigation toggle with improved animation
        function toggleMobileNav() {
            const mobileNav = document.getElementById('mobileNav');
            isMobileNavOpen = !isMobileNavOpen;
            
            if (isMobileNavOpen) {
                mobileNav.classList.add('open');
                document.body.style.overflow = 'hidden';
                
                // Animate mobile nav items
                const items = mobileNav.querySelectorAll('.mobile-nav-item');
                items.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-20px)';
                    setTimeout(() => {
                        item.style.transition = 'all 0.3s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            } else {
                mobileNav.classList.remove('open');
                document.body.style.overflow = 'auto';
            }
        }

        // Initialize stars background with improved animation
        function initializeStars() {
            const starsContainer = document.getElementById('stars');
            const numberOfStars = 100;
            
            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (2 + Math.random() * 3) + 's';
                
                // Random star sizes
                const size = Math.random() * 3 + 1;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                
                starsContainer.appendChild(star);
            }
        }

        // Initialize projects
        function initializeProjects() {
            renderProjects(projects);
        }

        // Render projects with improved animations
        function renderProjects(projectsToRender) {
            const projectsGrid = document.getElementById('projectsGrid');
            projectsGrid.innerHTML = '';
            
            projectsToRender.forEach((project, index) => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.style.opacity = '0';
                projectCard.style.transform = 'translateY(30px)';
                
                const techBadges = project.tech.slice(0, 3).map(tech => 
                    `<span class="tech-badge">${tech}</span>`
                ).join('');
                
                const remainingTech = project.tech.length > 3 ? 
                    `<span class="tech-badge">+${project.tech.length - 3}</span>` : '';
                
                projectCard.innerHTML = `
                    <div class="project-image" style="background-image: url('${project.image}')">
                        <div class="project-category">${project.category}</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tech">
                            ${techBadges}
                            ${remainingTech}
                        </div>
                        <div class="project-links">
                            <a href="${project.demoUrl}" class="project-link link-primary" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-external-link-alt"></i>
                                Live Demo
                            </a>
                            <a href="${project.githubUrl}" class="project-link link-secondary" target="_blank" rel="noopener noreferrer">
                                ${createGitHubIcon()}
                                Code
                            </a>
                        </div>
                    </div>
                `;
                
                projectsGrid.appendChild(projectCard);
                
                // Animate card appearance
                setTimeout(() => {
                    projectCard.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    projectCard.style.opacity = '1';
                    projectCard.style.transform = 'translateY(0)';
                }, index * 150);
            });
        }

        // Filter projects with improved animations
        function filterProjects(category) {
            currentFilter = category;
            
            // Update filter buttons
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Animate out current projects
            const currentCards = document.querySelectorAll('.project-card');
            currentCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.transition = 'all 0.3s ease';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(-20px)';
                }, index * 50);
            });
            
            // Filter and render new projects
            setTimeout(() => {
                const filteredProjects = category === 'all' 
                    ? projects 
                    : projects.filter(project => project.category === category);
                
                renderProjects(filteredProjects);
            }, currentCards.length * 50 + 200);
        }

        // Initialize animations with improved performance
        function initializeAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                        
                        // Add stagger effect for multiple elements
                        if (element.parentElement?.classList.contains('stats')) {
                            const siblings = Array.from(element.parentElement.children);
                            const index = siblings.indexOf(element);
                            element.style.transitionDelay = `${index * 100}ms`;
                        }
                    }
                });
            }, observerOptions);
            
            // Observe elements with fade-in class
            setTimeout(() => {
                const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-in, .stat-item, .achievement-card, .skill-card, .timeline-item');
                elementsToAnimate.forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    observer.observe(el);
                });
            }, 100);
        }

        // Initialize custom cursor with improved performance
        function initializeCursor() {
            const cursor = document.querySelector('.cursor');
            const cursorDot = document.querySelector('.cursor-dot');
            
            if (window.innerWidth > 768) {
                let mouseX = 0, mouseY = 0;
                let cursorX = 0, cursorY = 0;
                
                document.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                });
                
                // Smooth cursor animation
                function animateCursor() {
                    cursorX += (mouseX - cursorX) * 0.1;
                    cursorY += (mouseY - cursorY) * 0.1;
                    
                    cursor.style.left = cursorX + 'px';
                    cursor.style.top = cursorY + 'px';
                    
                    cursorDot.style.left = mouseX + 'px';
                    cursorDot.style.top = mouseY + 'px';
                    
                    requestAnimationFrame(animateCursor);
                }
                animateCursor();
                
                // Cursor effects on interactive elements
                const interactiveElements = document.querySelectorAll('a, button, .nav-item, .project-card, .skill-card, .achievement-card');
                interactiveElements.forEach(el => {
                    el.addEventListener('mouseenter', () => {
                        cursor.style.transform = 'scale(1.5)';
                        cursorDot.style.transform = 'scale(2)';
                        cursor.style.borderColor = '#06b6d4';
                    });
                    
                    el.addEventListener('mouseleave', () => {
                        cursor.style.transform = 'scale(1)';
                        cursorDot.style.transform = 'scale(1)';
                        cursor.style.borderColor = '#8b5cf6';
                    });
                });
            }
        }

        // Initialize scroll effects with throttling
        function initializeScrollEffects() {
            let lastScrollY = window.scrollY;
            let ticking = false;
            
            function updateScrollEffects() {
                const navbar = document.getElementById('navbar');
                
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                // Parallax effect for background orbs
                const scrolled = window.pageYOffset;
                const orbs = document.querySelectorAll('.bg-orb');
                
                orbs.forEach((orb, index) => {
                    const speed = 0.3 + (index * 0.1);
                    orb.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
                });
                
                lastScrollY = window.scrollY;
                ticking = false;
            }
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(updateScrollEffects);
                    ticking = true;
                }
            });
        }

        // Initialize contact form with better UX
        function initializeContactForm() {
            const contactForm = document.getElementById('contactForm');
            
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form data
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                // Simulate form submission with better animation
                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                submitBtn.style.transform = 'scale(0.98)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    submitBtn.style.transform = 'scale(1)';
                    
                    // Show success animation
                    submitBtn.style.animation = 'pulse 0.5s ease';
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.background = 'linear-gradient(135deg, #8b5cf6, #06b6d4)';
                        submitBtn.disabled = false;
                        submitBtn.style.animation = '';
                        contactForm.reset();
                    }, 2000);
                }, 1500);
            });
            
            // Add focus effects to form controls
            const formControls = document.querySelectorAll('.form-control');
            formControls.forEach(control => {
                control.addEventListener('focus', () => {
                    control.parentElement.style.transform = 'translateY(-2px)';
                });
                
                control.addEventListener('blur', () => {
                    control.parentElement.style.transform = 'translateY(0)';
                });
            });
        }

        // Initialize skill bars animation with improved timing
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        const width = entry.target.style.width;
                        entry.target.style.width = '0%';
                        
                        setTimeout(() => {
                            entry.target.style.transition = 'width 1.8s cubic-bezier(0.4, 0, 0.2, 1)';
                            entry.target.style.width = width;
                        }, index * 200);
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            skillBars.forEach(bar => observer.observe(bar));
        }

        // Enhanced ripple effect
        function createRipple(event) {
            const button = event.currentTarget;
            const circle = document.createElement('span');
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;
            
            const rect = button.getBoundingClientRect();
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${event.clientX - rect.left - radius}px`;
            circle.style.top = `${event.clientY - rect.top - radius}px`;
            circle.classList.add('ripple');
            
            const ripple = button.getElementsByClassName('ripple')[0];
            if (ripple) {
                ripple.remove();
            }
            
            button.appendChild(circle);
            
            setTimeout(() => {
                circle.remove();
            }, 600);
        }

        // Add ripple effect to buttons
        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('.btn, .filter-btn, .submit-btn, .project-link');
            buttons.forEach(btn => {
                btn.addEventListener('click', createRipple);
                btn.style.position = 'relative';
                btn.style.overflow = 'hidden';
            });
        });

        // Preload images for better performance
        function preloadImages() {
            const imageUrls = projects.map(project => project.image);
            imageUrls.forEach(url => {
                const img = new Image();
                img.src = url;
            });
        }

        // Initialize preloading
        document.addEventListener('DOMContentLoaded', preloadImages);

        // Add smooth page loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Typing effect for hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        // Initialize typing effect on page load
        window.addEventListener('load', () => {
            const heroTitle = document.querySelector('.hero-title .gradient-text');
            if (heroTitle) {
                setTimeout(() => {
                    typeWriter(heroTitle, 'Rishabh Jain', 150);
                }, 1000);
            }
        });

        // Enhanced keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMobileNavOpen) {
                toggleMobileNav();
            }
        });

        // Add smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
   