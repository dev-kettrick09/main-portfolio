document.querySelector('.contact__form').addEventListener('submit', function(e) {
setTimeout(() => {
    e.target.reset();
}, 100); 
});