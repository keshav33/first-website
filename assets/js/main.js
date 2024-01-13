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
		document.querySelectorAll(".header a").forEach(link => {
			if (window.location.href === link.href) {
				link.setAttribute("aris-current", "page")
			}
		})
		window.addEventListener("hashchange", (event) => {
			if (window.location.href === event.newURL) {
				document.querySelectorAll(".header a").forEach(link => {
					if (event.newURL === link.href) {
						link.setAttribute("aris-current", "page")
					} else {
						link.removeAttribute("aris-current", "page")
					}
				})
			}
		})
	})
	$("#footer").load("/footer.html");

	const spaceWidth = window.innerWidth;
	const spaceHeight = window.innerHeight;
	const bubble = document.querySelector(".bubble");
	setInterval(() => {
		bubble.style.top = Math.round(Math.random() * spaceWidth) + "px";
		bubble.style.left = Math.round(Math.random() * spaceHeight) + "px";
	}, 2000);

	const cards = document.querySelectorAll('.our-services-card');

	[...cards].forEach((card) => {
		card.addEventListener('click', function () {
			card.classList.toggle('is-flipped');
		});
	});
}