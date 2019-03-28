// TweenMax.staggerTo(".ball", 1.5, { y: 300, ease: Bounce.easeOut }, 0.25);
// TweenMax.staggerTo(".ball", 1.5, { y: 0, scale: 0.1, opcaity: 0, ease: Bounce.easeOut }, 0.25);

// document.querySelector(".ball").addEventListener("click", evt => {
//   TweenMax.staggerTo(".ball", 5, { y: 200, scale: 0.1, ease: Bounce.easeOut });
// });

document.querySelectorAll(".ball").forEach(ball => {
  ball.addEventListener("click", function() {
    TweenMax.to(this, 1.5, { y: 0, scale: 0.1, opcaity: 0, ease: Bounce.easeOut });
  });
});
