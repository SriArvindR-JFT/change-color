const colors = document.getElementsByName("colors");

const labels = document.querySelectorAll(".labels");

const button = document.getElementById("submit");
button.addEventListener("click", changeColor);

function changeColor() {

    let selectedColor;

    for (let color of colors) {
        if (color.checked) {
            selectedColor = color.value;
            break;
        };
    };

    for (let label of labels) {
        label.style.backgroundColor = selectedColor;
    };

};