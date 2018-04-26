$(document).ready(function() {
	var imgUrl = "";
	var galleryID = " ";
	var $this = null;
	var count = 1;

	const viewModal = (img) => {
		$('.modal').css('visibility','visible');
		console.log("click");
		imgUrl = $(img).css('background-image');
		$('.modal .image').css('background-image', imgUrl);
		$('.modal .image').css('opacity', '1');
	};

	$('.image').click(function() {
		viewModal(this);
	});

	$('.gallery .item').click(function() {
		viewModal(this);
	});

	$('.modal').click(function() {
		$('.modal').css('visibility','hidden');
		$('.modal .image').css('opacity', '0');
	});

	var headerContent = '' +
	'<div class="left-align">' +
		'<h2><a href="index.html">Misha Naiman</a></h2>' +
		'<h3>Majorelle Arts</h3>' +
	'</div>' +
	'<div class="right-align">' +
		'<a href="30w.html">30th and West Live/Work</a>' +
		'<a href="art.html">Art</a>' +
		'<a href="science.html">Science</a>' +
		'<a href="personal.html">Personal Projects</a>' +
		'<a href="about.html">About</a>' +
	'</div>';

	var footerContent = '' +
	'<div class="left-align">&copy; 2017 Majorelle Arts, Misha Naiman</div>' +
	'<div class="right-align">' +
		'<a href="credits.html">Credits</a> <a href="mailto:msnaiman12@gmail.com">Contact</a>' +
	'</div>';

	$('header').append(headerContent);
	$('footer').append(footerContent);	
	
	$('.gallery').each(function(){
		$this = $(this);
		galleryID = $this.attr('id');
		$this.find($('.image')).each(function(){
			console.log($(this));
			imgUrl = 'url("images/'+galleryID+'-'+count+'.JPG")';
			$(this).css('background-image', imgUrl);
			count++;
		});
		count=1;
	});
});	