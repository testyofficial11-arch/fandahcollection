// 1. Efek Header Berubah Warna Saat Di-Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. Mobile Menu Toggle (Hamburger Menu)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// 3. Smooth Scrolling untuk Link Anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Tutup menu mobile jika sedang terbuka
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// 4. Interaksi Tombol Add to Cart (Simulasi)
const addButtons = document.querySelectorAll('.btn-add');
addButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Animasi kecil pada tombol
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
        
        alert('Produk berhasil ditambahkan ke keranjang!');
    });
});

// 5. Interaksi Form Contact (Simulasi)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Mengirim...';
        btn.style.opacity = '0.7';
        
        setTimeout(() => {
            alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
            contactForm.reset();
            btn.innerText = originalText;
            btn.style.opacity = '1';
        }, 1500);
    });
}

// 6. Animasi Fade In Saat Scroll (Opsional untuk kesan estetik)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Terapkan ke elemen produk atau section
document.querySelectorAll('.product-card, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});