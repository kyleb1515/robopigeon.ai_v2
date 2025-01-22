document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const logo = document.getElementById('menuToggle');
    
    if (!menu.contains(event.target) && event.target !== logo) {
        menu.classList.remove('active');
    }
});