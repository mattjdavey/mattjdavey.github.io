export function toggleTheme() {
    let oldTheme = localStorage.getItem("theme");
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

export function getTheme() {
    return localStorage.getItem("theme");
}