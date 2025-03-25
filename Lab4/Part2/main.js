/*
    Name: Kushal Patel
    File: Assignment 4, Part 2
    Date: 25th March, 2025
    Desc: Image Gallery
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const obj = {
    "pic1.jpg": "Picture of Human eye",
    "pic2.jpg": "Picture of something wavy",
    "pic3.jpg": "Lavender flowers",
    "pic4.jpg": "Ancient Egypt painting",
    "pic5.jpg": "Butterfly image"
}

/* Looping through images */

for (let image of images) {
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", `images/${image}`);
    imgElement.setAttribute("alt", obj[image]);
    thumbBar.appendChild(imgElement);

    imgElement.addEventListener("click", imgEvent => {
        displayedImage.src = imgEvent.target.src;
        displayedImage.alt = imgEvent.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", btnEvent => {
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Dark";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";

    }
})
