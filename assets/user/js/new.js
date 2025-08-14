<script>
    // 3D Parallax Effect on Scroll
    document.addEventListener('DOMContentLoaded', function() {
        const cubes = document.querySelectorAll('.cube');
        const spheres = document.querySelectorAll('.sphere');
        const rings = document.querySelectorAll('.ring');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            cubes.forEach((cube, index) => {
                const speed = parallaxSpeed * (index + 1) * 0.5;
                cube.style.transform = `translateY(${scrolled * speed}px) rotateX(${scrolled * 0.1}deg) rotateY(${scrolled * 0.1}deg)`;
            });
            
            spheres.forEach((sphere, index) => {
                const speed = parallaxSpeed * (index + 1) * 0.3;
                sphere.style.transform = `translateY(${scrolled * -speed}px) scale(${1 + scrolled * 0.0001})`;
            });
            
            rings.forEach((ring, index) => {
                const speed = parallaxSpeed * (index + 1) * 0.4;
                ring.style.transform = `rotate(${scrolled * speed * 0.1}deg)`;
            });
        });
        
        // Mouse Move 3D Effect
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            cubes.forEach((cube, index) => {
                const speed = (index + 1) * 5;
                cube.style.transform += ` translateX(${mouseX * speed}px) translateY(${mouseY * speed}px)`;
            });
        });
    });
</script>

