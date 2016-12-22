window.onload = function() { 

	var scrollUp = document.getElementById('scrollup');

	scrollUp.onmouseover = function() {
		scrollUp.style.opacity = 1;
		scrollUp.style.filter  = 'alpha(opacity=100)';
	};

	scrollUp.onmouseout = function() {
		scrollUp.style.opacity = 0.5;
		scrollUp.style.filter  = 'alpha(opacity=50)';
	};

	scrollUp.onclick = function() {
		window.scrollTo(0,0);
		
	};

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		scrollUp.style.display = 'none';
	} else {
		window.onscroll = function () {
			if ( window.pageYOffset > 0 ) {
				scrollUp.style.display = 'block';
			} else {
				scrollUp.style.display = 'none';
			}
		};
	}
};