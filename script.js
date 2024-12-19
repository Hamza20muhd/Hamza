// Progress Bar Animation (Skills)
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('html').children[0].style.width = '80%';
    document.getElementById('css').children[0].style.width = '70%';
    document.getElementById('js').children[0].style.width = '60%';
});

// Scroll to top button visibility and function
window.onscroll = function() {
    const button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Fun animation when the "Hire Me" button is clicked
document.querySelector('.contact-btn').addEventListener('click', function(event) {
    event.preventDefault();
    alert("Thank you for hiring me! 🚀 Let's build something awesome... and maybe a little crazy!");
});

// Easter egg that appears if the user clicks on the profile image
document.querySelector('.profile-image').addEventListener('click', function() {
    alert("You found my secret... It's just me, being awesome! 😜");
});
