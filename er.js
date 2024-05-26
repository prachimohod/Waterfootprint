document.querySelector('nav ul').classList.add('show');

document.querySelector('nav > ul > li:first-child').addEventListener('click', function() {
	document.querySelector('nav ul').classList.toggle('show');
});

window.addEventListener('resize', function() {
	if (window.innerWidth > 768) {
		document.querySelector('nav ul').classList.add('show');
	} else {
		document.querySelector('nav ul').classList.remove('show');
	}
});