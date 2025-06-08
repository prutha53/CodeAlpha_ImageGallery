const cards = document.querySelectorAll('.card img');  
const lightbox = document.getElementById('lightbox');  
const lightboxImg = document.getElementById('lightbox-img');  
const closeBtn = document.querySelector('.close');  
const prevBtn = document.querySelector('.prev');  
const nextBtn = document.querySelector('.next');  
  
document.querySelectorAll('.categories button').forEach(btn => {  
  btn.addEventListener('click', () => {  
    btn.scrollIntoView({  
      behavior: 'smooth',  
      inline: 'center',  
      block: 'nearest'  
    });  
   
    document.querySelectorAll('.categories button').forEach(b => b.classList.remove('active'));  
    btn.classList.add('active');  
  });  
});  
  
document.addEventListener("DOMContentLoaded", () => {  
  const buttons = document.querySelectorAll(".categories button");  
  const cards = document.querySelectorAll(".gallery .card");  
  
  buttons.forEach(btn => {  
    btn.addEventListener("click", () => {  
     
      buttons.forEach(b => b.classList.remove("active"));  
      btn.classList.add("active");  
  
      const filter = btn.getAttribute("data-filter");  
  
      cards.forEach(card => {  
        const category = card.getAttribute("data-category");  
  
        if (filter === "All" || filter === category) {  
          card.style.display = "block";  
        } else {  
          card.style.display = "none";  
        }  
      });  
    });  
  });  
});  
  
let currentIndex = 0;  
let filteredImages = [];  
  
function updateFilteredImages() {  
  filteredImages = Array.from(document.querySelectorAll('.gallery .card'))  
    .filter(card => card.style.display !== 'none')  
    .map(card => card.querySelector('img'));  
}  
  
function showImage() {  
  lightbox.style.display = 'flex';  
  lightboxImg.src = filteredImages[currentIndex].src;  
}  
  
function attachImageClickEvents() {  
  updateFilteredImages();  
  
  filteredImages.forEach((img, index) => {  
    img.onclick = () => {  
      currentIndex = index;  
      showImage();  
    };  
  });  
}  
  
document.addEventListener("DOMContentLoaded", () => {  
  attachImageClickEvents();  
});  
  
closeBtn.onclick = () => {  
  lightbox.style.display = 'none';  
};  
  
nextBtn.onclick = () => {  
  currentIndex = (currentIndex + 1) % filteredImages.length;  
  showImage();  
};  
  
prevBtn.onclick = () => {  
  currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;  
  showImage();  
};  
  
document.querySelectorAll(".categories button").forEach(btn => {  
  btn.addEventListener("click", () => {  
    setTimeout(() => {  
      attachImageClickEvents();  
    }, 50); 
  });  
});  
