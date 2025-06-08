// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;
    
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    

    if (currentTheme === 'dark') {
        html.classList.add('dark');
    }
    

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            
        
            const theme = html.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });
    }
}); 