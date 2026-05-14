const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if(top < window.innerHeight - 80){
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function goCart(name, price){
  localStorage.setItem("productName", name);
  localStorage.setItem("productPrice", price);
  window.location.href = "cart.html";
}

const cartName = document.getElementById("cartName");
const cartPrice = document.getElementById("cartPrice");

if(cartName && cartPrice){
  cartName.innerText = localStorage.getItem("productName") || "NOIRÉ Perfume";
  cartPrice.innerText = localStorage.getItem("productPrice") || "¥12,900";
}