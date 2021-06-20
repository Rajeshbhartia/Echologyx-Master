var basicStructure = {
	init: function () {
		this.mainCss();
		this.mainJS();
		this.goalJS();
	},
	mainCss: function () {
		var s = document.createElement('style');
		s.setAttribute('type', 'text/css');
		document.head.appendChild(s).textContent = '.cnt-wrap{background-color: #EFEFEF;padding: 15px;}' +
			'.cnt-text { text-align: center; }' +
			'.cnt-wrap .listing .listing-image {' +
			'	padding: 16px 0px 16px 16px;' +
			'}' +
			'.cnt-wrap .listing [data-listing="promo"]{' +
			'	width: 30%;' +
			'}' +
			'.cnt-text-wrap{' +
			'   padding: 16px 16px 16px 0px;' +
			'	text-align: left;' +
			'}' +
			'.cnt-price{' +
			'   margin-top: 20px;' +
			'	font-weight: 600;' +
			'}'

	},
	mainJS: function () {
		//For JS
		var $ = window.jQuery;
		let html = '';
		let arr = [
			{
				base_img: {
					img_url: "/images/products/small/121.jpg"
					, data_url: "https://www.naturesbest.co.uk/herbs-spices/turmeric-curcumin/turmeric-fast-release-tablets-10000mg/"
					, alt: "Turmeric 10,000mg, Fast Release Formula"
				},
				offer_img: {
					data_listing: "promo"
					, alt: ""
					, src: "/images/icons/SAVE-2_00.png"
				},
				label: {
					label_url: "https://www.naturesbest.co.uk/herbs-spices/turmeric-curcumin/turmeric-fast-release-tablets-10000mg/"
					, data_listing: "name"
					, label_text: "Turmeric 10,000mg, Fast Release Formula"
				},
				price: "From £11.50"
			},
			{
				base_img: {
					img_url: "/images/products/small/151.jpg"
					, data_url: "https://www.naturesbest.co.uk/herbs-spices/turmeric-curcumin/curcusorb-high-tech-turmeric/"
					, alt: "Curcusorb™ Advanced Turmeric Formula With Curcumin"
				},
				offer_img: {
					data_listing: "promo"
					, alt: ""
					, src: "/images/icons/16PERCENT-OFF.png"
				},
				label: {
					label_url: "https://www.naturesbest.co.uk/herbs-spices/turmeric-curcumin/curcusorb-high-tech-turmeric/"
					, data_listing: "name"
					, label_text: "Curcusorb™ Advanced Turmeric Formula With Curcumin"
				},
				price: "£20.95"
			},
			{
				base_img: {
					img_url: "/images/products/small/129.jpg"
					, data_url: "https://www.naturesbest.co.uk/herbs-spices/turmeric-curcumin/curcumem/"
					, alt: "Curcumem TM, High Strength Turmeric With Lutein &amp; Zinc*"
				},
				label: {
					label_url: "https://www.naturesbest.co.uk/herbs-spices/turmeric-curcumin/curcumem/"
					, data_listing: "name"
					, label_text: "Curcumem<sup>TM</sup>, High Strength Turmeric With Lutein &amp; Zinc*"
				},
				price: "£16.95"
			},
			{
				base_img: {
					img_url: "/images/products/small/604.jpg?v=1"
					, data_url: "https://www.naturesbest.co.uk/multivitamins/multis-for-all-adults/multimax-complete/"
					, alt: "Multi-Max ®Complete, High Strength Over 50s Multivitamin"
				},
				offer_img: {
					data_listing: "promo"
					, alt: ""
					, src: "/images/icons/BUY-2-POTS-AND-SAVE.png"
				},
				label: {
					label_url: "https://www.naturesbest.co.uk/multivitamins/multis-for-all-adults/multimax-complete/"
					, data_listing: "name"
					, label_text: "Multi-Max<sup>®</sup> Complete, High Strength Over 50s Multivitamin"
				},
				price: "£20.95"
			},
		]

		for (let index = 0; index < arr.length; index++) {
			elem = arr[index];
			let offerImageSrc = elem.offer_img ? elem.offer_img.src : "";

			let c = ' <div class="nodecor" style="margin: 0px 10px">' +
				'	<span class="listing relative" style="display: flex;">' +
				'		<span class="relative block listing-image">' +
				'   		<img src=' + elem.base_img.img_url + ' ' + 'data-listing="image" data-url=' + elem.base_img.data_url + 'alt=' + elem.base_img.alt + '>' +
				'   	</span>' +
				'		<img data-listing="promo" alt="" src=' + offerImageSrc + '></img>' +

				'		<span class="cnt-text-wrap">' +
				'			<a data-listing="name" href=' + elem.label.label_url + '>' + elem.label.label_text +
				'			</a>' +
				'			<span data-listing="price" class="cnt-price"> ' + elem.price + ' </span>' +
				'		</span>' +
				'   </span>' +
				' </div>'
			html = html + c
		}

		$('#main').prepend(
			'<div class="cnt-wrap fullwidth  bg-color0">' +
			'	<div class="ptb0-25 fixedwidth">' +
			'		<div class="cnt-text">Similar items to consider</div>' +
			'		<div id="RVProducts" class="relative mtb plr multiple-items">' +
			// '			<div class="eliteSlider visible" data-slides-xs="2" data-slides-ms="2" data-slides-sm="3" data-slides-md="3" data-slides-lg="3">' +
			// '				<div class="eliteSlides" data-cols-xs="2" data-cols-ms="2" data-cols-sm="3" data-cols-md="3" data-cols-lg="3" style="width:display: flex; left: 0px;">' +
			html +
			// '				</div>' +
			// '				<div class="elitePrev pointer absolute top0 bottom0 left0  width1"><svg width="10" height="20" class="absolute tophalf left0"><path stroke-width="2" class="f-color1" d="M10,0 L1,10 L10,20"></path></svg></div>' +
			// '				<div class="eliteNext pointer absolute top0 bottom0 right0  width1"><svg width="10" height="20" class="absolute tophalf right0"><path stroke-width="2" class="f-color1" d="M0,0 L9,10 L0,20"></path></svg></div>' +
			// '			</div>' +
			'		</div>' +
			'	</div>' +
			'</div>'
		);

		$(document).ready(function () {
			$('.multiple-items').slick({
				dots: false,
				infinite: true,
				speed: 300,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		});
	},
	goalJS: function () {
		//For JS
	},
	slider: function () {
		//For JS
	}
};

(function pollFor() {
	if (document.querySelector('.eliteSlider') && window.jQuery !== undefined) {
		basicStructure.init();
	} else {
		setTimeout(pollFor, 25);
	}
})();