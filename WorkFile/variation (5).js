var stickyGetQuoteCTA = {
    init: function() {
        this.mainCss();
        this.mainJs();
        this.goalsJs();
    },
    mainCss: function() {
        var styles = document.createElement('style');
        styles.setAttribute('type', 'text/css');
        document.head.appendChild(styles).textContent =
            '.sticky-quote-wrap {\n' +
            '    position: fixed;\n' +
            '    top: -80px;\n' +
            '    z-index: 9999;\n' +
            '    width: 100%;\n' +
            '    left: 0;\n' +
            '    background-color: #fff;\n' +
            '    -webkit-transition: all 0.35s ease-in;\n' +
            '    -o-transition: all 0.35s ease-in;\n' +
            '    transition: all 0.35s ease-in;\n' +
            '    -webkit-box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1);\n' +
            '    box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1);\n' +
            '}\n' +
            '.sticky-quote-wrap .top-header-content {\n' +
            '    max-width: 1180px;\n' +
            '    padding: 10px 15px;\n' +
            '    margin: 0 auto;\n' +
            '}\n' +
            '.sticky-quote-wrap .directline-logo {\n' +
            '    height: 36px;\n' +
            '}\n' +
            '.sticky-quote-wrap .small-only-wrap {\n' +
            '    display: none;\n' +
            '}\n' +
            '.sticky-quote-wrap .medium-up-wrap {\n' +
            '    display: -ms-flexbox;\n' +
            '    display: -webkit-box;\n' +
            '    display: flex;\n' +
            '    -ms-flex-wrap: wrap;\n' +
            '    flex-wrap: wrap;\n' +
            '    -ms-flex-align: center !important;\n' +
            '    -webkit-box-align: center !important;\n' +
            '    align-items: center !important;\n' +
            '    -ms-flex-pack: justify !important;\n' +
            '    -webkit-box-pack: justify !important;\n' +
            '    justify-content: space-between !important;\n' +
            '}\n' +
            '.sticky-quote-wrap .medium-up-wrap > * {\n' +
            '    -ms-flex: 0 0 auto;\n' +
            '    -webkit-box-flex: 0;\n' +
            '    flex: 0 0 auto;\n' +
            '    width: auto;\n' +
            '    max-width: 100%;\n' +
            '}\n' +
            '.sticky-quote-wrap .button {\n' +
            '    margin-bottom: 0 !important;\n' +
            '}\n' +
            'body.sticky-quote:not(.modal-open) .sticky-quote-wrap {\n' +
            '    top: 0;\n' +
            '}\n' +
            '@media (max-width: 700px) {\n' +
            '    .sticky-quote-wrap .small-only-wrap {\n' +
            '        display: block;\n' +
            '    }\n' +
            '    .sticky-quote-wrap .medium-up-wrap {\n' +
            '        display: none;\n' +
            '    }\n' +
            '    .sticky-quote-wrap .button {\n' +
            '        width: 100%;\n' +
            '    }\n' +
            '}';
    },
    mainJs: function() {
        var $ = window.jQuery;
        $('body').append('<div class="top-header sticky-quote-wrap">\n' +
            '    <div class="top-header-content">\n' +
            '        <div class="small-only-wrap">\n' +
            '            <a class="button primary" href="https://secure.directlineforbusiness.co.uk/DirectLine/servletcontroller" rel="noopener" target="_blank">Get a quote</a>\n' +
            '        </div>\n' +
            '        <div class="medium-up-wrap">\n' +
            '            <a href="/" data-analytics-link-name="Direct Line for Business"><img src="/lib/img/direct_line_logo.png" alt="Direct Line for Business" class="directline-logo"></a>\n' +
            '            <div class="quote-wrap">\n' +
            '                <div id="DL4B-OPR-middle-lpButtonDiv"></div>\n' +
            '                <span>Call us on <span class="boldest blue phone-disabled">0345 301 5066</span> or</span>\n' +
            '                <a class="button primary" href="https://secure.directlineforbusiness.co.uk/DirectLine/servletcontroller" rel="noopener" target="_blank">Get a quote</a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>'
        );
        stickyGetQuoteCTA.sticky();
    },
    sticky: function() {
        var $ = window.jQuery;
        window.onscroll = function() {
            checkSticky();
        };
        var navbar = document.querySelector('section.breadcrumb');
        var sticky = navbar.offsetTop - 30;
        function checkSticky() {
            if (window.pageYOffset >= sticky) {
                document.querySelector('body').classList.add('sticky-quote');
            } else {
                document.querySelector('body').classList.remove('sticky-quote');
            }
        }
        checkSticky();
        $(window).resize(function() {
            sticky = navbar.offsetTop - 30;
            checkSticky();
        });
    },
    goalsJs: function () {
        var customGoalsSGQ= {
            clicksOnLogo: 'header .top-header .top-header-content > div:first-child > a, .sticky-quote-wrap .medium-up-wrap > a',
            totalClicksOnNavigation: 'header .top-bar, .top-header  .menu-trigger',
            totalGetAQuoteCTA: 'a.button.primary',
            stickyGetAQuoteCTA: '.sticky-quote-wrap a.button.primary'
        };
        var $ = window.jQuery;
        $(function() {
            $.each(customGoalsSGQ, function(index, item) {
                $(item).click( function () {
                    adobe.target.trackEvent({
                        mbox: index
                    });
                    // console.log(index, item);
                });
            });
        });

    }
};
(function pollForStickyGetQuoteCTA() {
    if (document.querySelector('section.breadcrumb') && window.jQuery !== undefined) {
        stickyGetQuoteCTA.init();
    } else {
        setTimeout(pollForStickyGetQuoteCTA, 25);
    }
})();
