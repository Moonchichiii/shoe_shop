const slider = document.querySelector(".slider");

let isDragStart = false;
let prevPageX, prevScrollLeft;

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
    let positionDiff = e.pageX - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
    isDragStart = false;
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