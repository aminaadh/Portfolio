document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.circle').forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        // Assurez-vous que la valeur est un nombre entre 0 et 100
        circle.style.setProperty('--percent', `${percent}%`);
    });
});
