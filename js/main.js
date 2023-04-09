// add active class to navbar
const list = document.querySelectorAll(".navbar-nav li");
list.forEach((li) => {
    li.addEventListener("click", (e) => {
        removeActive("navbar-nav");
        e.target.classList.add("active");
    });
});
// add active class while scrolling
let sections = document.querySelectorAll(".content section");
window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");
        if (top >= offset && top < offset + height) {
            removeActive("navbar-nav");
            document
                .querySelector(".navbar-nav li a[href *=" + id + "]")
                .classList.add("active");
        }
    });
});
// scroll to top arrow
let arrow = document.querySelector(".arrow");
function scrollToTop() {
    if (scrollY > 100) {
        // show arrow
        arrow.classList.add("active");
    } else {
        arrow.classList.remove("active");
    }
}
window.onscroll = scrollToTop;
arrow.onclick = function () {
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};
// filter projects
const projectItems = document.querySelectorAll(".project-list li");
const projects = document.querySelectorAll(".project-row .project");
projectItems.forEach((li) => {
    li.addEventListener("click", () => {
        removeActive("project-list");
        addActiveToProject(li);
    });
});
// when page load add show all item
window.onload = function () {
    removeActive("project-list");
    addActiveToProject(projectItems[0]);
};
function addActiveToProject(li) {
    li.classList.add("active");
    projects.forEach((project) => {
        if (project.classList.contains(li.dataset.project)) {
            project.classList.add("active");
        } else {
            project.classList.remove("active");
        }
    });
}
// remove active class
function removeActive(parent) {
    document.querySelectorAll(`.${parent} .active`).forEach((active) => {
        active.classList.remove("active");
    });
}
