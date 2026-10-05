// hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// panel gambar sekolah
const panel = document.getElementById('panel');
const closeBtn = document.getElementById('close');
const title = document.getElementById('title');
const img = document.getElementById('img');
const desc = document.getElementById('desc');

document.querySelectorAll('ul li.school').forEach(li => {
    li.onclick = () => {
        title.textContent = li.dataset.nama;
        img.src = li.dataset.gambar;
        img.alt = ' Foto Sekolah ' + li.dataset.nama;
        desc.textContent = 'Foto Halaman Sekolah ' + li.dataset.nama + '.';
        panel.classList.add('show');
    };
});

function hidePanel() { panel.classList.remove('show'); }
closeBtn.onclick = hidePanel;
document.onkeydown = e => { if (e.key === 'Escape') hidePanel(); };

//animasi fade in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
});

// animasi slide
const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-left');
        }
    });
}, { threshold: 0.1 });

const rightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-right');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.kiri').forEach(el => {
    leftObserver.observe(el);
});

document.querySelectorAll('.kanan').forEach(el => {
    rightObserver.observe(el);
});

const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('li');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.kiri ul, .kanan ul').forEach(el => {
    staggerObserver.observe(el);
    const children = el.querySelectorAll('li');
    children.forEach(child => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(20px)';
        child.style.transition = 'all 0.5s ease';
    });
});
