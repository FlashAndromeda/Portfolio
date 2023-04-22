// This cursor code was heavily inspired by a wonderful CodePen by Clement Girault at https://codepen.io/clementGir/pen/RQqvQx
// Will have to remake this from scratch myself :)

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Adding some listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  gsap.to('.cursor__ball--big', .4, {
    x: e.clientX - 15,
    y: e.clientY - 15
  })
  gsap.to('.cursor__ball--small', .1, {
    x: e.clientX - 5,
    y: e.clientY - 10
  })
}

// Hover an element
function onMouseHover() {
  gsap.to('.cursor__ball--big', .3, {
    scale: 4
  })
  gsap.to('.cursor__ball--small', .3, {
    scale: 0.7
  })
}
function onMouseHoverOut() {
  gsap.to('.cursor__ball--big', .3, {
    scale: 1
  })
  gsap.to('.cursor__ball--small', .3, {
    scale: 1
  })
}