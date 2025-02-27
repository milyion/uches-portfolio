document.getElementById('nav-toggle').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    } else {
        navLinks.classList.add('show');
    }
});

var bookBtns = document.querySelectorAll('.book-btn');
bookBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        alert('Enter your details!');
    });
});