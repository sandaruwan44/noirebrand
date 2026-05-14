const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.innerText = "ADDED TO CART";

    setTimeout(() => {
      button.innerText = "Add to Cart";
    }, 1800);
  });
});