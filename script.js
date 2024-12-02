// Display the loader and hide it after 2 seconds
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.querySelector('.content');
    
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 1000);
});
