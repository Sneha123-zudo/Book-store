document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const body = document.body;

    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeIcon.classList.replace('bi-brightness-high', 'bi-moon');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        
        // Update icon
        if (isDark) {
            darkModeIcon.classList.replace('bi-brightness-high', 'bi-moon');
        } else {
            darkModeIcon.classList.replace('bi-moon', 'bi-brightness-high');
        }

        // Save preference
        localStorage.setItem('darkMode', isDark);
    });
});
