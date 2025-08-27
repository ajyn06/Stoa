let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}

const scrollElements = document.querySelectorAll(".animate-on-scroll, .collection-item");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

scrollElements.forEach(el => observer.observe(el));
window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax").forEach(el => {
    let speed = 0.4;
    let yPos = window.scrollY * speed;
    el.style.backgroundPosition = `center ${yPos}px`;
  });
});

// Collection Overlay Functionality
const collectionItems = document.querySelectorAll(".collection-item img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const closeBtn = document.getElementById("close-btn");

collectionItems.forEach(item => {
  item.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = item.src;
  });
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) { 
    overlay.style.display = "none"; 
  }
});
