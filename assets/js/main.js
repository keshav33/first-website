window.onload = function () {
	$("#header").load("/header.html");
	$("#footer").load("/footer.html");
	const header = document.querySelector("header");
	const hamburgerBtn = document.querySelector("#hamburger-btn");
	const closeMenuBtn = document.querySelector("#close-menu-btn");
	// Toggle mobile menu on hamburger button click
	hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
	// Close mobile menu on close button click
	closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}