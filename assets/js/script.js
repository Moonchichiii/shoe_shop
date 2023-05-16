const slider = document.querySelector(".slider");

let isDragStart = false;

const DragStart = () => {
    isDragStart = true;
   
}


const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    slider.scrollLeft = e.pageX;
};

const dragStop = () => {
    isDragStart = false;
}

slider.addEventListener("mousedown", DragStart);

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