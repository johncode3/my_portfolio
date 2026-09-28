// Hamburger Menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav = document.getElementById('mainNav');

if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    });

    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        });
    });
}

//Role word animation
document.addEventListener('DOMContentLoaded', () => {
    const roleWord = document.querySelector('.role-word');

    if (roleWord) {
        const roles = ['Graphic Designer', 'Junior Web Developer', 'Start Up Coding'];
        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeRole() {
            const current = roles[roleIndex];

            if (!deleting) {
                charIndex++;
                roleWord.textContent = current.slice(0, charIndex);

                if (charIndex === current.length) {
                    deleting = true;
                    setTimeout(typeRole, 1400);
                    return;
                }
            } else {
                charIndex--;
                roleWord.textContent = current.slice(0, charIndex);

                if (charIndex === 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                }
            }

            setTimeout(typeRole, deleting ? 60 : 120);
        }

        typeRole();
    }
});

// Active menu
const menuItems = document.querySelectorAll('.nav-item');

menuItems.forEach((item)=> {
    item.addEventListener('click', function() {
        document.querySelector('.nav-item.active').classList.remove('active');
        this.classList.add('active');
    });
});