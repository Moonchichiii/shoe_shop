const slider = document.querySelector(".slider"),
firstImg =  slider.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 2; // getting first img width & adding 1 margin value



arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // if clicke icon is left,reduce width from the slider scroll left else add to it.
        slider.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) => {
    // updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/slider to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    slider.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
    isDragStart = false;
    slider.classList.remove("dragging");
}

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
slider.addEventListener("mouseup", dragStop);












/*

let follower = document.getElementById('follower');

document.onmousemove = function(event) {
    let x = event.clientX;
    let y = event.clientY;
    follower.style.left = x + 'px';
    follower.style.top = y + 'px';
};*/