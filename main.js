function toggleMenu () {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")

    // document.addEventListener("click", function (){
    //     menu.classList.remove("open")
    //     icon.classList.remove("open")
    // })
}

// Switch to Both Dark and Light Theme 

// Function to toggle between dark and light themes
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
} else {
    // Default to light theme if no preference is saved
    document.documentElement.setAttribute('data-theme', 'light');
}

// Bouncing Button
