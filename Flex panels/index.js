const panels = document.querySelectorAll(".panel");
function toggleOpen() {
    this.classList.toggle("open");
}
function toggleActive(e) {
    // console.log(e.propertyName);
    //for my device font-size is coming last so i tried with font-size too
    if (e.propertyName === "flex-grow") {
        this.classList.toggle("open-active");
    }
    // if (e.propertyName === "font-size") {
    //     this.classList.toggle("open-active");
    // }
}
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive));
