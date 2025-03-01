const root = document.documentElement;

document.addEventListener("DOMContentLoaded", function() {
    const theme = localStorage.getItem("theme");
    console.log(theme);
    if (theme === "" || theme === null) {
        localStorage.setItem("theme", "light");
        root.className += " light";
    } else if (theme === "dark") {
        localStorage.setItem("theme", "dark");
        root.className += " dark";
    }
    console.log("loading js")
})

function toggleTheme() {
    var oldTheme = localStorage.getItem("theme");
    console.log(oldTheme)
    if (oldTheme === "dark") {
        localStorage.setItem("theme", "light");
        root.classList.remove(oldTheme);
        root.classList.add("light")
    } else if (oldTheme === "light") {
        localStorage.setItem("theme", "dark");
        root.classList.remove(oldTheme);
        root.classList.add("dark")
    }
}

function getTheme() {
    return localStorage.getItem("theme");
}