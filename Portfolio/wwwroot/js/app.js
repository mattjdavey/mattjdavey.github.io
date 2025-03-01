const root = document.documentElement;

document.addEventListener("DOMContentLoaded", function() {
    let theme = localStorage.getItem("theme");
    console.log(theme);
    if (theme === "" || theme === null) {
        localStorage.setItem("theme", "light");
        root.className += " light";
    } else if (theme === "dark") {
        localStorage.setItem("theme", "dark");
        root.className += " dark";
    }
});

(function() {
    if (location.pathname !== "/" && !location.pathname.startsWith("/index.html")) {
        location.replace("/index.html" + location.search + location.hash);
    }
})();