const [currentImage, allImage] = [document.querySelector('#currentImage'), 
document.querySelectorAll('.other-imgs img')];

allImage.forEach(img => img.addEventListener("click", event =>(currentImage.src = event.target.src) ));
