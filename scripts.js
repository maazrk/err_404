document.addEventListener("DOMContentLoaded", function () {
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
	}
	

	window.addEventListener("scroll", handleScroll);
	
})