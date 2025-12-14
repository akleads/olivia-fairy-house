// Fairy animation on mouse/touch move
const fairy = document.getElementById('fairy');

if (fairy) {
    function handleFairyMove(e) {
        // Support both mouse and touch events
        const clientX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
        const clientY = e.clientY || (e.touches && e.touches[0]?.clientY) || 0;
        
        if (!clientX && !clientY) return;
        
        const mouseX = clientX / window.innerWidth;
        const mouseY = clientY / window.innerHeight;
        
        // Make fairy follow mouse/touch slightly (reduced movement on mobile)
        const isMobile = window.innerWidth <= 768;
        const multiplier = isMobile ? 10 : 20;
        const moveX = (mouseX - 0.5) * multiplier;
        const moveY = (mouseY - 0.5) * multiplier;
        
        fairy.style.transform = `translate(${moveX}px, ${moveY}px)`;
        
        // Add magical trail effect
        if (!isMobile) {
            createFairyTrail(clientX, clientY);
        }
    }
    
    // Mouse events
    document.addEventListener('mousemove', handleFairyMove);
    
    // Touch events for mobile
    document.addEventListener('touchmove', handleFairyMove, { passive: true });
    
    // Add magical trail effect when fairy moves (desktop only)
    let lastX = 0;
    let lastY = 0;
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return; // Skip on mobile
        
        const currentX = e.clientX;
        const currentY = e.clientY;
        
        if (Math.abs(currentX - lastX) > 10 || Math.abs(currentY - lastY) > 10) {
            createFairyTrail(currentX, currentY);
            lastX = currentX;
            lastY = currentY;
        }
    });
}

// Create fairy trail sparkles
function createFairyTrail(x, y) {
    const trail = document.createElement('div');
    trail.textContent = '✨';
    trail.style.position = 'fixed';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '100';
    trail.style.fontSize = '0.8rem';
    trail.style.opacity = '0.7';
    trail.style.animation = 'trailFade 1s ease-out forwards';
    document.body.appendChild(trail);
    
    setTimeout(() => trail.remove(), 1000);
}

// Add trail fade animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% {
            opacity: 0.7;
            transform: scale(1) translateY(0);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) translateY(-20px);
        }
    }
    
    @keyframes dressChange {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2) rotate(360deg);
        }
        100% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(trailStyle);

// Change fairy's dress function
function changeFairyDress(dressNumber) {
    const fairyDress = document.querySelector('.fairy-dress');
    if (!fairyDress) return;
    
    // Remove all dress classes
    fairyDress.classList.remove('dress-1', 'dress-2', 'dress-3', 'dress-4', 'dress-5', 'dress-6');
    
    // Add the new dress class
    fairyDress.classList.add(`dress-${dressNumber}`);
    
    // Add magical transformation animation
    fairyDress.style.animation = 'dressChange 0.8s ease-in-out';
    
    // Create sparkles around the fairy
    const fairy = document.getElementById('fairy');
    if (fairy) {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                createSparkle(fairy);
            }, i * 30);
        }
    }
    
    // Reset animation after it completes
    setTimeout(() => {
        fairyDress.style.animation = '';
    }, 800);
}

// Dress card interactions
const dressCards = document.querySelectorAll('.dress-card');

dressCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const sparkle = this.querySelector('.dress-sparkle');
        if (sparkle) {
            sparkle.style.animation = 'sparkle 0.5s ease-in-out infinite';
        }
        
        // Add more sparkles
        for (let i = 0; i < 5; i++) {
            createSparkle(this);
        }
    });
    
    card.addEventListener('click', function() {
        // Create a burst of sparkles
        for (let i = 0; i < 15; i++) {
            createSparkle(this);
        }
        
        // Add a magical sound effect (visual feedback)
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        // Change fairy's dress to match the clicked dress
        const dressNumber = this.getAttribute('data-dress');
        changeFairyDress(dressNumber);
    });
});

// Create sparkle effect
function createSparkle(element) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkleFloat 2s ease-out forwards';
    
    element.style.position = 'relative';
    element.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Add sparkle float animation to style
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Fairy house window glow effect
const windows = document.querySelectorAll('.window');
windows.forEach(window => {
    setInterval(() => {
        window.style.boxShadow = 'inset 0 0 20px rgba(255, 255, 255, 0.8), 0 0 15px rgba(255, 255, 255, 0.5)';
        setTimeout(() => {
            window.style.boxShadow = 'inset 0 0 10px rgba(0, 0, 0, 0.2)';
        }, 1000);
    }, 3000);
});

// Add floating animation to fairy wand star
const wandStar = document.querySelector('.wand-star');
if (wandStar) {
    setInterval(() => {
        wandStar.style.transform = 'translateX(-50%) rotate(360deg)';
        setTimeout(() => {
            wandStar.style.transform = 'translateX(-50%) rotate(0deg)';
        }, 1000);
    }, 2000);
}

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const stars = document.querySelector('.stars');
    const twinkling = document.querySelector('.twinkling');
    
    if (stars) {
        stars.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    if (twinkling) {
        twinkling.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Create floating sparkles
function createFloatingSparkles() {
    const sparklesContainer = document.getElementById('floatingSparkles');
    if (!sparklesContainer) return;
    
    const sparkleSymbols = ['✨', '⭐', '💫', '🌟', '✨'];
    
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 8 + 's';
        sparkle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        sparklesContainer.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 10000);
    }
    
    // Create initial sparkles
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createSparkle(), i * 500);
    }
    
    // Continuously create new sparkles
    setInterval(() => {
        createSparkle();
    }, 2000);
}

// Handle fairy face image loading
const fairyFaceImage = document.getElementById('fairyFaceImage');
if (fairyFaceImage) {
    // Hide the background color when image loads
    fairyFaceImage.addEventListener('load', function() {
        // Image loaded successfully - hide drawn face and background
        const fairyHead = this.closest('.fairy-head');
        if (fairyHead) {
            fairyHead.style.background = 'transparent';
        }
        const eyes = document.querySelectorAll('.eye');
        const mouth = document.querySelector('.fairy-mouth');
        eyes.forEach(eye => {
            eye.style.opacity = '0';
            eye.style.display = 'none';
        });
        if (mouth) {
            mouth.style.opacity = '0';
            mouth.style.display = 'none';
        }
        console.log('✅ Fairy face image loaded successfully!');
    });
    
    fairyFaceImage.addEventListener('error', function() {
        // If image fails to load, show the drawn face
        console.log('⚠️ Image not found. Make sure fairy-face.jpg is in the project folder.');
        const fairyHead = this.closest('.fairy-head');
        if (fairyHead) {
            fairyHead.style.background = '#FFDBAC';
        }
        this.style.display = 'none';
        const eyes = document.querySelectorAll('.eye');
        const mouth = document.querySelector('.fairy-mouth');
        eyes.forEach(eye => {
            eye.style.opacity = '1';
            eye.style.display = 'block';
            eye.style.pointerEvents = 'auto';
        });
        if (mouth) {
            mouth.style.opacity = '1';
            mouth.style.display = 'block';
            mouth.style.pointerEvents = 'auto';
        }
    });
    
    // Check if image source is set
    if (!fairyFaceImage.src || fairyFaceImage.src.includes('fairy-face.jpg')) {
        console.log('📸 Looking for image: fairy-face.jpg');
    }
}

// Flying Dinosaur Animation
function initFlyingDinosaur() {
    const dinosaur = document.getElementById('flyingDinosaur');
    if (!dinosaur) return;
    
    // Check if image is already loaded (cached images)
    if (dinosaur.complete && dinosaur.naturalHeight !== 0) {
        dinosaur.classList.add('loaded');
        console.log('🦕 Flying dinosaur loaded (cached)!');
    }
    
    // Handle image loading
    dinosaur.addEventListener('load', function() {
        this.classList.add('loaded');
        console.log('🦕 Flying dinosaur loaded!');
    });
    
    dinosaur.addEventListener('error', function() {
        console.log('⚠️ Dinosaur image not found. Make sure dinosaur.png is in the project folder.');
        this.style.display = 'none';
    });
    
    // Add dynamic movement variation
    let animationSpeed = 30;
    let currentSpeed = animationSpeed;
    
    // Randomize the path slightly on each cycle
    dinosaur.addEventListener('animationiteration', function() {
        // Slightly vary the animation duration for more natural movement
        currentSpeed = animationSpeed + (Math.random() * 10 - 5); // ±5 seconds variation
        this.style.animationDuration = currentSpeed + 's';
    });
    
    // Make it interactive - pause on hover (desktop only)
    if (window.innerWidth > 768) {
        dinosaur.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform += ' scale(1.2)';
        });
        
        dinosaur.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = this.style.transform.replace(' scale(1.2)', '');
        });
    }
}

// Welcome message
window.addEventListener('load', () => {
    console.log('✨ Welcome to Olivia\'s Fairy House! ✨');
    
    // Initialize flying dinosaur
    initFlyingDinosaur();
    
    // Create floating sparkles
    createFloatingSparkles();
    
    // Add entrance animation
    const elements = document.querySelectorAll('section, header, footer');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

