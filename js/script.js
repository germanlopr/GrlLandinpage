// window.addEventListener('load', function() {
//     const profilePicture = document.querySelector('.profile-picture img');
//     profilePicture.style.transform = 'scale(1.1)';

//     const navLinks = document.querySelectorAll('.nav-links a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', smoothScroll);
//     });
// });

// function smoothScroll(event) {
//     event.preventDefault();
//     const targetId = event.currentTarget.getAttribute('href');
//     const targetElement = document.querySelector(targetId);
//     const offsetTop = targetElement.offsetTop - 80; // Ajusta el valor según sea necesario

//     window.scrollTo({
//         top: offsetTop,
//         behavior: 'smooth'
//     });
// }