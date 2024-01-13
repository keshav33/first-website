window.onload = function () {
	$("#loader").fadeOut(500, function () {
		$("#loader").remove();
	});
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
			header.classList.remove("show-mobile-menu");
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

	var isAlreadyRun = false;
	$(window).scroll(function () {
		$('#why-us-stats').each(function (i) {
			var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > (bottom_of_object + 20)) {
				if (!isAlreadyRun) {
					$('.why-us-counter').each(function () {
						$(this).prop('Counter', 0).animate({
							Counter: $(this).text()
						}, {
							duration: 3500,
							easing: 'swing',
							step: function (now) {
								$(this).text(Math.ceil(now));
							}
						});
					});
				}
				isAlreadyRun = true;
			}
		});
	});

}