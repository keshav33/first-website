window.onload = function () {
	$("#header").load("/header.html", () => {
		const header = document.querySelector("header");
		const hamburgerBtn = document.querySelector("#hamburger-btn");
		const closeMenuBtn = document.querySelector("#close-menu-btn");
		// Toggle mobile menu on hamburger button click
		hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
		// Close mobile menu on close button click
		closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
		// highlight selected page
		document.querySelectorAll(".navbar a").forEach(link => {
			if (window.location.href.includes(link.href)) {
				link.setAttribute("aris-current", "page")
			}
		})
	})
	$("#footer").load("/footer.html");
}