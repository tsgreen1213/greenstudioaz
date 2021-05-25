let menu = document.getElementById("menu");
let menuOverlay = document.getElementById("menu-overlay");
function openMenu() {
	menu.style.left = "0px";
	menu.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, .5)";
	menuOverlay.style.opacity = "1";
	menuOverlay.style.pointerEvents = "auto";
}
function closeMenu() {
	menu.style.left = "-70%";
	menu.style.boxShadow = "none";
	menuOverlay.style.opacity = "0";
	menuOverlay.style.pointerEvents = "none";
}