// Navigasyon menüsü için toggle fonksiyonu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Menü öğelerine tıklandığında menüyü kapat
    document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    // Skill barlarını animasyonla doldur
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function fillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
    
    // Sayfa yüklendiğinde animasyonu tetikle
    setTimeout(fillBars, 500);
    
    // Scroll animasyonu
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 2rem';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 2rem';
            navbar.style.boxShadow = 'none';
        }
        
        // Scroll ile section'ları animasyonla gösterme
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Form gönderimi
    // Form gönderimi
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form verilerini al
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const message = document.querySelector('textarea').value;
        
        // Mailto linki oluştur (basit çözüm)
        const subject = `${name} kişisinden portfolyo mesajı`;
        const body = `Gönderen: ${name} (${email})%0D%0A%0D%0A${message}`;
        
        // Mail uygulamasını aç
        window.location.href = `mailto:sardoganmerve21@gmail.com?subject=${subject}&body=${body}`;
        
        // Kullanıcıyı bilgilendir
        alert('E-posta uygulamanız açılıyor. Lütfen mesajınızı gönderin!');
        contactForm.reset();
    });
}
    
    // Sayfa yüklendiğinde section'ları hazırla
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Sayfa yüklendiğinde ilk section'ı göster
    setTimeout(() => {
        if (sections.length > 0) {
            sections[0].style.opacity = 1;
            sections[0].style.transform = 'translateY(0)';
        }
    }, 300);
});