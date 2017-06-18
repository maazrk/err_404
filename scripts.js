$(document).ready( function () {
	// initializing side nav
	$(".button-collapse").sideNav();

	$(".scrollspy").scrollSpy({
		scrollOffset:60
	});

	$('.collapsible-header').click(function(){
		
		$(".rotating-span").removeClass('open');
		$(".rotating-span").removeClass('open');
		if (!($(this).hasClass("active")))
			$(".rotating-span", this).toggleClass('open');
		else
			$(".rotating-span", this).removeClass('open');

	});
	$('.modal').modal();

	// autocomplete for college names
	$('input.autocomplete').autocomplete({
		data: {
			"M.H. Saboo Siddik": null,
			"D.J Sanghvi": null,
			"Don Bosco Institute": null,
			"V.J.T.I": null,
		},
		minLength: 0,
	});


	// animations

	var side_gfx = document.querySelectorAll(".side-gfx");

	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function handleScroll(){
		var badge = document.querySelector(".trophy-badge");
		if (isElementInViewport(badge)){
			badge.classList.add('badge-visible');
		}
		for (var i = 0; i < side_gfx.length; i++) {
			if (isElementInViewport(side_gfx[i])) {
				side_gfx[i].classList.add("side-gfx-visible");
			}
		}
	}
	

	// event listeners
	window.addEventListener("scroll", handleScroll);
	
})




function loadProgress() {

	document.getElementById('loader').style.display = "none";
	document.getElementById('main').style.display = "block";
}