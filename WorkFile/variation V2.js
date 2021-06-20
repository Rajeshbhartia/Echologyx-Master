var entryRecommended = {
    init: function () {
        this.mainCss();
        this.mainJs();
    },
    mainCss: function () {
        var styles = document.createElement('style');
        styles.setAttribute('type', 'text/css');
        document.head.appendChild(styles).textContent =
            '' +
            '.entry-recommended {' +
            '  background-color: #EFEFEF;' +
            '  padding: 15px;' +
            '  text-align: center;' +
            '}' +
            '.entry-recommended .reco-title {' +
            '  text-align: center;' +
            '  display: block;' +
            '  color: #74963d;' +
            '}' +
            '.entry-recommended .reco-title > svg {' +
            '  margin-left: 10px;' +
            '  transform: rotate(90deg);' +
            '  vertical-align: middle;' +
            '}' +
            '.entry-recommended .reco-title > svg path.f-color1 {' +
            '  stroke: #74963d;' +
            '}' +
            '.entry-recommended .reco-title.sports {' +
            '  color: #ee6723;' +
            '}' +
            '.entry-recommended .reco-title.sports > svg path.f-color1 {' +
            '  stroke: #ee6723;' +
            '}' +
            '.entry-recommended .reco-title.pharmacy {' +
            '  color: #5298d2;' +
            '}' +
            '.entry-recommended .reco-title.pharmacy > svg path.f-color1 {' +
            '  stroke: #5298d2;' +
            '}' +
            '.entry-recommended .reco-title.open > svg {' +
            '  transform: rotate(270deg);' +
            '}' +
            '.entry-recommended-slider {\n' +
            '    max-width: 1090px;\n' +
            '    width: 100%;\n' +
            '    margin: 0 auto;\n' +
            '    padding: 0 15px;\n' +
            '    display: -ms-flexbox;\n' +
            '    display: flex;\n' +
            '    -ms-flex-wrap: wrap;\n' +
            '    flex-wrap: wrap;\n' +
            '    -ms-flex-pack: center!important;\n' +
            '    justify-content: center!important;\n' +
            '}' +
            '.entry-recommended-slider .slick-track {' +
            '  display: -ms-flexbox;' +
            '  display: flex;' +
            '}' +
            '.entry-recommended-slider .nodecor {' +
            '  width: 353px;' +
            '  padding: 0 5px;' +
            '  outline: none;' +
            '  height: initial;' +
            '  margin-top: 8px;' +
            '}' +
            '.entry-recommended-slider .nodecor .listing {' +
            '  overflow: hidden;' +
            '  border-radius: 8px;' +
            '  display: -ms-flexbox;' +
            '  display: flex;' +
            '  -ms-flex-wrap: wrap;' +
            '  flex-wrap: wrap;' +
            '  cursor: pointer;' +
            '  height: 100%;' +
            '  margin: 0;' +
            '}' +
            '.entry-recommended-slider .nodecor .listing .listing-image {' +
            '  padding: 10px 0 10px 10px;' +
            '  -ms-flex: 0 0 40%;' +
            '  flex: 0 0 40%;' +
            '  max-width: 40%;' +
            '}' +
            '.entry-recommended-slider .nodecor .listing .listing-details {' +
            '  height: initial;' +
            '  -ms-flex: 0 0 60%;' +
            '  flex: 0 0 60%;' +
            '  max-width: 60%;' +
            '}' +
            '.entry-recommended-slider .nodecor .listing .listing-details [data-listing="reviews"], .entry-recommended-slider .nodecor .listing .listing-details [data-listing="sort-desc"], .entry-recommended-slider .nodecor .listing .listing-details [data-listing="long-desc"], .entry-recommended-slider .nodecor .listing .listing-details [data-listing="addbasket"] {' +
            '  display: none !important;' +
            '}' +
            '.entry-recommended-slider .nodecor .listing .listing-details [data-listing="name"] {' +
            '  font-weight: 400;' +
            '  margin-top: 20px;' +
            '  font-size: 16px;' +
            '}' +
            '.entry-recommended-slider .nodecor .listing .listing-details [data-listing="price"] {' +
            '  font-size: 18px;' +
            '  position: relative;' +
            '  bottom: -30px;' +
            '  font-weight: bold;' +
            '}' +
            '.entry-recommended-slider .nodecor .listing .listing-details [data-listing="price"] > br + span {' +
            '  font-size: .65em;' +
            '  top: -3px;' +
            '  position: relative;' +
            '}' +
            '.entry-recommended-slider .nodecor .listing [data-listing="promo"] {' +
            '  left: 8px;' +
            '  width: 60px;' +
            '  top: 10px;' +
            '}' +
            '.entry-recommended-slider .slick-arrow.slick-disabled {' +
            '  display: none !important;' +
            '}' +
            '.entry-recommended-slider .slick-arrow > svg {' +
            '  top: 0 !important;' +
            '}' +
            '.entry-recommended-slider .slick-arrow:after {' +
            '  display: none !important;' +
            '}' +
            '@media (max-width: 767px) {' +
            '  .entry-recommended {' +
            '    padding-right: 0;' +
            '  }' +
            '  .entry-recommended .reco-title {' +
            '    margin-right: 15px;' +
            '  }' +
            '  #main.sticky {' +
            '    padding-top: 49px;' +
            '  }' +
            '  #main.sticky .entry-recommended {' +
            '    position: fixed;' +
            '    z-index: 999;' +
            '    width: 100%;' +
            '    top: 0;' +
            '    left: 0;' +
            '  }' +
            '  .entry-recommended-slider {' +
            '    padding: 0;' +
            '  }' +
            '  .entry-recommended-slider .nodecor {' +
            '    width: 150px;' +
            '    padding: 0 4px;' +
            '  }' +
            '  .entry-recommended-slider .nodecor .listing .listing-image, .entry-recommended-slider .nodecor .listing .listing-details {' +
            '    -ms-flex: 0 0 100%;' +
            '    flex: 0 0 100%;' +
            '    max-width: 100%;' +
            '    text-align: center;' +
            '  }' +
            '  .entry-recommended-slider .nodecor .listing .listing-image {' +
            '    padding-left: 0;' +
            '  }' +
            '  .entry-recommended-slider .nodecor .listing .listing-image > img {' +
            '    width: 55%;' +
            '    display: inline-block;' +
            '  }' +
            '  .entry-recommended-slider .nodecor .listing .listing-details [data-listing="name"] {' +
            '    margin-top: 0;' +
            '    font-size: 14px;' +
            '    height: 2.4em;' +
            '    overflow: hidden;' +
            '    position: relative;' +
            '    display: -webkit-box;\n' +
            '    -webkit-line-clamp: 2;\n' +
            '    -webkit-box-orient: vertical;' +
            'text-overflow: ellipsis;\n' +
            '  white-space: normal;' +
            '  }' +
            '  .entry-recommended-slider .nodecor .listing .listing-details [data-listing="price"] {' +
            '    font-size: 14px;' +
            '    bottom: 0;' +
            '    margin-top: 5px;' +
            '  }' +
            '  .entry-recommended-slider .nodecor .listing [data-listing="promo"] {' +
            '    width: 45px;' +
            '  }' +
            '' +
            '#main {\n' +
            '    position: relative;\n' +
            '    z-index: 2;\n' +
            '}' +
            '.grayscale0-75 {\n' +
            '    position: relative;\n' +
            '    z-index: 0;\n' +
            '}' +
            'html, body {' +
            '  overflow-x: hidden;' +
            '}' +
            '}';
    },
    mainJs: function () {
        var $ = window.jQuery, brand = '';

        function adjustPosition() {
            if (window.innerWidth > 767) {
                $('.entry-recommended').appendTo('#inav');
            } else {
                $('.entry-recommended').prependTo('#main');
            }
        }

        if (window.location.pathname.split('/')[1] == 'sports') brand = 'sports';
        if (window.location.pathname.split('/')[1] == 'pharmacy') brand = 'pharmacy';
        $('#inav').append('<div class="entry-recommended">\n' +
            '    <a class="reco-title ' + brand + '" href="javascript:;">See more like this <svg width="6" height="12"><path stroke-width="1.5" class="f-color1" d="M0,0 L5,6 L0,12"></path></svg></a>\n' +
            '    <div class="entry-recommended-slider" style="display: none"></div>\n' +
            '</div>');
        adjustPosition();
        $('#OtherProductsInThisCategory .nodecor').each(function () {
            var link = $(this).find('a[data-listing="name"]').attr('href');
            $(this).find('.listing').attr('href', link);
            $(this).clone().css('display', 'block').appendTo('.entry-recommended-slider');
        });

        function slickInit() {
            $('.entry-recommended-slider').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                mobileFirst: true,
                arrows: false,
                variableWidth: true,
                touchThreshold: 100,
                swipeToSlide: true,
                prevArrow: '<button class="slick-prev"><svg width="10" height="20" class="absolute tophalf left0"><path stroke-width="2" class="f-color1" d="M10,0 L1,10 L10,20"></path></svg></button>',
                nextArrow: '<button class="slick-next"><svg width="10" height="20" class="absolute tophalf right0"><path stroke-width="2" class="f-color1" d="M0,0 L9,10 L0,20"></path></svg></button>',
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        arrows: true,
                    }
                }]
            });
        }

        function slickDoubleInit() {
            if (window.innerWidth > 1090) {
                if ($('#OtherProductsInThisCategory .nodecor').length > 3) {
                    if(!($('.entry-recommended-slider').hasClass('slick-initialized'))){
                        slickInit();
                    }
                }else {
                    if($('.entry-recommended-slider').hasClass('slick-initialized')){
                        $('.entry-recommended-slider').slick('unslick');
                    }
                }
            } else {
                if ($('#OtherProductsInThisCategory .nodecor').length > 2) {
                    if(!($('.entry-recommended-slider').hasClass('slick-initialized'))){
                        slickInit();
                    }
                }else {
                    if($('.entry-recommended-slider').hasClass('slick-initialized')){
                        $('.entry-recommended-slider').slick('unslick');
                    }
                }
            }
        }
        slickDoubleInit();
        $(document).on('click', '.entry-recommended > .reco-title', function () {
            var that = $(this);
            $(this).toggleClass('open');
            setTimeout(function () {
                if ((that.hasClass('open'))) {
                    $('.entry-recommended-slider.slick-initialized').slick('slickGoTo', 0);
                }
                setTimeout(function () {
                    that.siblings('.entry-recommended-slider').slideToggle();
                }, 200);
            }, 400);
        });
        var startS = $('#header-main').height();

        function stickyEnable() {
            if (window.pageYOffset >= startS) {
                $('#main').addClass("sticky")
            } else {
                $('#main').removeClass("sticky")
            }
        }

        $(document).bind('scroll', function () {
            console.log('Event worked');
            stickyEnable();
        });
        $(window).resize(function () {
            adjustPosition();
            slickDoubleInit();
            setTimeout(function () {
                startS = $('#header-main').height();
            }, 300);
        });
    }
};
(function pollForEntryRecommended() {
    if ((document.querySelector('#OtherProductsInThisCategory .nodecor a[data-listing="name"]') && window.jQuery !== undefined && window.$.fn.slick !== undefined) || document.readyState == 'complete') {
        setTimeout(function () {
            if (document.querySelector('#OtherProductsInThisCategory .nodecor a[data-listing="name"]')) {
                entryRecommended.init();
            }
        }, 1000);
        console.log('PDP: All Devices: Entry on PDP Recommended Products #V2 : 12:04:2021  v0.0.1');
    } else {
        setTimeout(pollForEntryRecommended, 25);
    }
})();
