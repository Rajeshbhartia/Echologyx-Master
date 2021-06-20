var clientPagePopup = {
	init: function () {
		this.mainCss();
		this.mainJS();
		this.goalJS();
	},
	mainCss: function () {
		var s = document.createElement('style');
		s.setAttribute('type', 'text/css');
		document.head.appendChild(s).textContent =
			'#cus-modal-wrap { ' +
			'   display: block;' +
			'   height: 100vh;' +
			'   width: 100vw; ' +
			'   background: rgba(0, 0, 0, 0.4);' +
			'   position: absolute;top: 0; z-index: 1000;' +
			'}' +
			'.cus-modal-body{' +
			'   background-color: #fefefe;' +
			'   position: fixed;' +
			'   left: 50%;' +
			'   top: 50%;' +
			'   transform: translate(-50%, -50%);' +
			'   z-index: 1000;' +
			'   padding: 30px;' +
			'   text-align: center;' +
			'   width: 320px;' +
			'   height: 240px;' +
			"   display: flex;" +
			"   flex-direction: column;" +
			"   align-items: center;" +
			"   justify-content: center;" +
			'   border-radius: 8px;' +
			'}' +
			'.cus-modal-body input{' +
			'	padding:4px 8px;' +
			'	margin:8px;' +
			'}' +
			'.cus-modal-body button{' +
			'   margin-top: 20px;' +
			'	width: 150px;' +
			'	border-radius: 4px;' +
			'}';
	},

	mainJS: function () {
		//For JS
		var $ = window.jQuery;
		$('body').append(
			'<section id="cus-modal-wrap">' +
			'   <div class="cus-modal-body">' +
			'  		<input type="text" id="name" name="name" placeholder="enter your name"/>' +
			'  		<input type="email" id="email" name="email" placeholder="enter your email"/>' +
			'  		<button type="button" id ="modal-submit-btn">Submit</button>' +
			'   </div>' +
			'</section>'
		);
		$('#modal-submit-btn').click(function () {
			window.localStorage.setItem('name', $('#name').val());
			window.localStorage.setItem('email', $('#email').val());
		});
	},
	goalJS: function () {
		//For JS
	}
};

(function pollForClientPopup() {
	if (document.querySelector('body') && window.jQuery !== undefined) {
		try {
			clientPagePopup.init();
		} catch (error) { }
	} else {
		setTimeout(pollForClientPopup, 25);
	}
})();