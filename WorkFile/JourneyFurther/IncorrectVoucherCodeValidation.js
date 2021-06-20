var incorrectVoucherCodeValidation = {
    init: function () {
        this.mainCss();
        this.mainJS();
    },
    mainCss: function () {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        document.head.appendChild(s).textContent = '';

    },
    mainJS: function () {
        //For JS
        var $ = window.jQuery;
        var url = 'https://www.celticandco.com/basket/applyoffercode';

        function onSuccess(data, textStatus, xhr) {
            console.log((data).search("Invalid offer code") > -1 ? "invalid" : "valid");
            
            if((data).search("Invalid offer code") > -1){
                $("form.offer-form").before("<div>Sorry, but the code you have entered was not valid or has expired.</div>" );
            }else{
                window.location.reload();
            }
        }

        $("form.offer-form").submit(function (e) {
            var data = {
                Code: $("form.offer-form :input")[0].value,
                ReturnUrl: "/basket"
            };
            $.ajax({
                type: "POST",
                url: url,
                data: data,
                success: onSuccess
            });
            return false;
        });


    }
};

(function pollForIVCV() {
    if (document.querySelector('form.offer-form')) {
        incorrectVoucherCodeValidation.init();
        console.log("Variation- A: 01");
    } else {
        setTimeout(pollForIVCV, 25);
    }
})();