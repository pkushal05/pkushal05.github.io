/*
    Name: Kushal Patel
    File: HomePage for assignments
    Date: 3 April, 2025
    Desc: This JS handles the click events of the lab boxes.
*/



const labBoxes = document.querySelectorAll(".lab-boxes");

labBoxes.forEach(labbox => {
    labbox.addEventListener("click", () => {
        labBoxes.forEach(activeState => activeState.classList.remove("active"));

        labbox.classList.add("active");
    });
});