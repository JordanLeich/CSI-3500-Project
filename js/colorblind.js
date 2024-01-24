// Function to toggle colorblind options
function toggleColorblind() {
    const habitList = document.querySelector(".habit-list");
    const habitForm = document.querySelector(".habit-form");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    if (colorblindFriendly) {
        habitList.classList.toggle("colorblind-friendly-protanopia", true);
        habitForm.classList.toggle("colorblind-friendly-protanopia", true);
        header.classList.toggle("colorblind-friendly-protanopia", true);
        main.classList.toggle("colorblind-friendly-protanopia", true);
        footer.classList.toggle("colorblind-friendly-protanopia", true);
    } else {
        // Remove the colorblind-friendly-protanopia class if it was added
        habitList.classList.remove("colorblind-friendly-protanopia");
        habitForm.classList.remove("colorblind-friendly-protanopia");
        header.classList.remove("colorblind-friendly-protanopia");
        main.classList.remove("colorblind-friendly-protanopia");
        footer.classList.remove("colorblind-friendly-protanopia");
    }

    colorblindFriendly = !colorblindFriendly;
}
