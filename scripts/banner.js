let banner = document.getElementById("banner");
let images = [
	"banner.jpg",
	"banner2.jpg",
	"banner3.jpg"
];
let current = 0;
function swapImage() {
	banner.style.backgroundImage = "url('images/" + images[current] + "')";
	current = (current + 1) % images.length;
}
swapImage();
setInterval(swapImage, 5000);