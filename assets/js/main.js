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

	class countUp {
		constructor(el) {
			this.el = el;
			this.setVars();
			this.init();
		}

		setVars() {
			this.number = this.el.querySelectorAll("[data-countup-number]");
			this.observerOptions = { root: null, rootMargin: "0px 0px", threshold: 0 };
			this.observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					const end = parseFloat(
						entry.target.dataset.countupNumber.replace(/,/g, "")
					);
					const decimals = this.countDecimals(end);
					if (entry.isIntersecting) {
						this.iterateValue(entry.target, end, decimals);
					}
				});
			}, this.observerOptions);
		}

		init() {
			if (this.number.length > 0) {
				this.number.forEach((el) => {
					this.observer.observe(el);
				});
			}
		}

		iterateValue(el, end, decimals) {
			const start = 0;
			const duration = 2500;
			let startTimestamp = null;

			const step = (timestamp) => {
				if (!startTimestamp) startTimestamp = timestamp;
				const elapsedPercent = (timestamp - startTimestamp) / duration;
				const easedProgress = Math.min(this.easeOutQuint(elapsedPercent), 1);
				let interimNumber = Math.abs(easedProgress * (end - start) + start);
				el.innerHTML = this.formatNumber(interimNumber, decimals);
				if (easedProgress < 1) {
					window.requestAnimationFrame(step);
				}
			};

			// requestAnimationFrame returns DOMHighResTimeStamp as a callback (used as timestamp)
			window.requestAnimationFrame(step);
		}

		easeOutQuad(x) {
			return 1 - Math.pow(1 - x, 3);
		}

		easeOutQuint(x) {
			return 1 - Math.pow(1 - x, 5);
		}

		countDecimals(val) {
			if (Math.floor(val) === val) return 0;
			return val.toString().split(".")[1].length || 0;
		}

		formatNumber(val, decimals) {
			return val.toLocaleString("en-US", {
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals
			});
		}
	}

	const dataModules = [...document.querySelectorAll('[data-module="countup"]')];

	dataModules.forEach((element) => {
		element.dataset.module.split(" ").forEach(function () {
			new countUp(element);
		});
	});

}