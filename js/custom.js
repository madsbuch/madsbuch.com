/* ---------------------------------------------------------------------- */
/*	Analytics
/* ---------------------------------------------------------------------- */
window.analytics=window.analytics||[],window.analytics.methods=["identify","group","track","page","pageview","alias","ready","on","once","off","trackLink","trackForm","trackClick","trackSubmit"],window.analytics.factory=function(t){return function(){var a=Array.prototype.slice.call(arguments);return a.unshift(t),window.analytics.push(a),window.analytics}};for(var i=0;i<window.analytics.methods.length;i++){var key=window.analytics.methods[i];window.analytics[key]=window.analytics.factory(key)}window.analytics.load=function(t){if(!document.getElementById("analytics-js")){var a=document.createElement("script");a.type="text/javascript",a.id="analytics-js",a.async=!0,a.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.io/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n)}},window.analytics.SNIPPET_VERSION="2.0.9",
window.analytics.load("uyc1ueeeys");
window.analytics.page();

jQuery(document).ready(function(){
	
	
	
	/* ---------------------------------------------------------------------- */
	/*	Custom Functions
	/* ---------------------------------------------------------------------- */
	
	// Needed variables
	var $logo 	= $('#logo');
		
	// Show logo 
	$('.tab-resume,.tab-portfolio,.tab-contact').click(function(e) {
	  window.analytics.page(e.currentTarget.innerHTML);
	  $logo.fadeIn('slow');
	});
	// Hide logo
	$('.tab-profile').click(function(e) {
	  window.analytics.page(e.currentTarget.innerHTML);
	  $logo.fadeOut('slow');
	});	
	
	/* ---------------------------------------------------------------------- */
	/*	Menu
	/* ---------------------------------------------------------------------- */
	
	// Needed variables
	var $content 		= $("#content");
	
	// Run easytabs
  	$content.easytabs({
	  animate			: true,
	  updateHash		: false,
	  transitionIn		:'slideDown',
	  transitionOut		:'slideUp',
	  animationSpeed	:600,
	  tabs				:".tmenu",
	  tabActiveClass	:'active',
	});
	
	// Hover menu effect
	$content.find('.tabs li a').hover(
		function() {
			$(this).stop().animate({ marginTop: "-7px" }, 200);
		},function(){
			$(this).stop().animate({ marginTop: "0px" }, 300);
		}
	);
	/* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */ 
	
	// Needed variables
	var $container	 	= $('#portfolio-list');
	var $filter 		= $('#portfolio-filter');
		
	// Run Isotope  
	$container.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});	
	
	// Isotope Filter 
	$filter.find('a').click(function(){
	  var selector = $(this).attr('data-filter');
		$container.isotope({ 
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false,
	   }
	  });
	  return false;
	});	
	
	// Portfolio image animation 
	$container.find('img').adipoli({
		'startEffect' 	: 'transparent',
		'hoverEffect' 	: 'boxRandom',
		'imageOpacity' 	: 0.6,
		'animSpeed' 	: 100,
	});
	
	// Copy categories to item classes
	$filter.find('a').click(function() {
		var currentOption = $(this).attr('data-filter');
		$filter.find('a').removeClass('current');
		$(this).addClass('current');
	});	
	
	/* ---------------------------------------------------------------------- */
	/*	Fancybox 
	/* ---------------------------------------------------------------------- */
	$container.find('.folio').fancybox({
		'transitionIn'		:	'elastic',
		'transitionOut'		:	'elastic',
		'speedIn'			:	200, 
		'speedOut'			:	200, 
		'overlayOpacity'	:   0.6
	});

	/* ---------------------------------------------------------------------- */
	/*	Google Maps
	/* ---------------------------------------------------------------------- */
	
	// Needed variables
	var $map 				= $('#map'),
		$tabContactClass 	= ('tab-contact'),
		$address 			= 'Møllevangs Allé 142 8200 Aarhus N';
	
	$content.bind('easytabs:after', function(evt,tab,panel) {
		if ( tab.hasClass($tabContactClass) ) {
			$map.gMap({
				address: $address,
				zoom: 16,
				markers: [
					{ 'address' : $address }
				]
			});
		}
  	});
	

});	
