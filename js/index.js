const menubtn = document.querySelector(".btn");
const navbar = document.querySelector(".navbar");
// Keep track of whether the navbar is currently visible

menubtn.addEventListener("click", () => {
  navbar.classList.toggle("flex"); // Toggle 'none' class based on state
});
