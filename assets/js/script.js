let follower = document.getElementById('follower');

document.onmousemove = function(event) {
    let x = event.clientX;
    let y = event.clientY;
    follower.style.left = x + 'px';
    follower.style.top = y + 'px';
};