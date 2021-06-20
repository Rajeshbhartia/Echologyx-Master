let arrList = ["kostenloser Rückversand - ohne Risiko",
    "keine versteckten Gebühren oder Abzüge",
    "Transparente und schnelle Abwicklung",
    "Hohe börsenaktuelle Ankaufspreise",
    "Über 100.000 zufriedene Kunden"
];
let checkmarkSvg = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<svg width="14px" height="14px" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">' +
    '\t\t<path d="m504.5 75.496c-9.997-9.998-26.205-9.998-36.204 0l-306.7 306.71-117.89-117.89c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.99 135.99c9.994 9.997 26.214 9.99 36.204 0l324.81-324.81c9.998-9.997 9.997-26.206 0-36.204z"/>' +
    '</svg>';

let mgGlobalForm = {
    init: function () {
        this.mainCss();
        this.mainJS();
    },
    mainCss: function () {
        let s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        document.head.appendChild(s).textContent = '' +
            '#bag-form.hideDisplay,' +
            '#bag-form-2.hideDisplay{' +
            '    height: 0;' +
            '    border: 0;' +
            '    padding: 0;' +
            '    margin: 0;' +
            '    width: 0;' +
            '    opacity: 0;' +
            '    min-height: 0;' +
            '    overflow: hidden;' +
            '}' +
            '.bag-form-2-warapper{' +
            '    min-height: 400px;' +
            '    padding: 15px 20px;' +
            '    background: #d9c26c;' +
            '    border-radius: 5px;' +
            '    margin-bottom: 15px;' +
            '    border: 4px solid;' +
            '}' +
            '.bag-form-2-warapper .bag-form-headline2,' +
            '.bag-form .container2 #bag-form .bag-form-headline3{' +
            '    font-weight: bold;' +
            '    text-align: center;' +
            '    padding-bottom: 16px;' +
            '    font-size:20px' +
            '}' +
            '.formBannerImgDiv{' +
            '   text-align: center;' +
            '}' +
            '.formBannerImgDiv img{' +
            '   width: 270px;' +
            '    padding: 10px 0px;' +
            '}' +
            '.bannerList {' +
            '    list-style-type: none;' +
            '    padding-left: 0px;' +
            '}' +
            '.bannerList li{' +
            '    font-size: 16px;' +
            '    padding: 8px 0px;' +
            '    display: flex;' +
            '    align-items: center;' +
            '    line-height: 14px;' +
            '}' +
            '.bannerList li svg {' +
            '    margin-right: 8px;' +
            '}' +
            '.bag_next button{' +
            '    background: #2180d1;' +
            '    border: 1px solid #2180d1;' +
            '    width: 100%;' +
            '    color: #fff;' +
            '    text-align: center;' +
            '    border-radius: 4px;' +
            '    font-size: 18px;' +
            '    padding: 8px 4px;' +
            '}' +
            '.bag_next button:hover{' +
            '    background: #fff;' +
            '    color: #2180d1;' +
            '}' +
            '.bag_next{' +
            '   padding-bottom:10px' +
            '}' +
            '.benefit-lest-wrapper{' +
            '    display: flex;' +
            '    align-items: center;' +
            '    justify-content: center;' +
            '}' +
            '#bag-form input.street,' +
            '#bag-form input.street_number,' +
            '#bag-form input.zip,' +
            '#bag-form input.city{' +
            '   width: 49%;' +
            '}' +

            '#bag-form {' +
            '    background: #d9c26c;' +
            '    border: 4px solid;' +
            '    border-radius: 5px;' +
            '    padding: 10px 25px;' +
            '}' +
            '.ins_body_img_wrapper{' +
            '   display: flex; ' +
            '   justify-content: center; ' +
            '   align-items: center;' +
            '   margin-bottom:5px' +
            '}' +
            '.ins_body_img_wrapper .image1{' +
            '   width:30% ' +
            '}' +
            '.ins_body_img_wrapper .image2{' +
            '   width:70% ' +
            '}' +
            '.ins_body_text{' +
            '    text-align: center;' +
            '    font-weight: bold;' +
            '    font-size: 14px;' +
            '}' +
            '.ins_footer_wrapper{' +
            '   font-size: 10px;' +
            '}' +
            '.accept_text,' +
            '   .bag-form .container2 select[name="country"],' +
            '   .bag-form .container2 input[name="phone"],' +
            '   .bag-form .container2 .bag-form-headline{' +
            '       display:none' +
            '   }' +
            '#bag-form .submit{' +
            '    height: auto;' +
            '    padding: 8px 4px;' +
            '    white-space: normal;' +
            '}' +

            "@media (min-width: 550px) and (max-width: 991px){" +
            '   .ins_body_img_wrapper .image1{' +
            '       width:15% ' +
            '   }' +
            '   .ins_body_img_wrapper .image2{' +
            '       width:40% ' +
            '   }' +
            '}' +

            "@media (min-width: 992px) and (max-width: 1199px){" +
            '   .bag-form-2-warapper .bag-form-headline2,' +
            '   .bag-form .container2 #bag-form .bag-form-headline3{' +
            '       font-size:16px' +
            '   }' +
            '   .bannerList li{' +
            '       font-size:13px;' +
            '       line-height: 1.5;' +
            '       padding: 6px 0px;' +
            '   }' +
            '   .formBannerImgDiv img {' +
            '       width: 260px;' +
            '   }' +
            '   .bag_next button{' +
            '       font-size: 14px;' +
            '   }' +
            '   .bag-form-2-warapper{' +
            '       padding: 15px 18px;' +
            '   }' +
            '   #bag-form .submit {' +
            '       font-size: 14px;' +
            '   }' +
            '   .bannerList li svg {' +
            '        margin-right: 5px;' +
            '   }' +
            "}" +
            "@media (max-width: 600px){" +
            '   .bag-form-2-warapper .bag-form-headline2,' +
            '   .bag-form .container2 #bag-form .bag-form-headline3{' +
            '       font-size:18px' +
            '   }' +
            '   .bannerList li{' +
            '       font-size:14px;' +
            '       line-height: 1.5;' +
            '       padding: 6px 0px;' +
            '   }' +
            '   .bag-form-2-warapper{' +
            '        border: 3px solid;' +
            '   }' +
            '   #bag-form {' +
            '       border: 3px solid;' +
            '   }' +
            '   .bag_next button{' +
            '    font-size: 16px;' +
            '   }' +
            '   #bag-form .submit {' +
            '       font-size: 16px;' +
            '   }' +
            "}" +
            "@media (min-width: 550px) and (max-width: 767px){" +
            "   .container2.add-more-margin-tab{" +
            "       margin-top:35px;" +
            "   }" +
            "}"
    },
    mainJS: function () {
        document.getElementById("top").classList.add("variationLoaded");
        let bgf = document.querySelectorAll("#bag-form");
        let errorLoaded = document.querySelectorAll(".alert");

        if (!document.querySelector(".slideshow-box")) {
            document.querySelector(".container2").classList.add("add-more-margin-tab")
        }

        if (errorLoaded[0]) {
            let counter = 0;
            errorLoaded.forEach((item) => {
                if (item.innerHTML === "Bitte tragen Sie Ihre Telefonnummer oder E-Mail-Adresse ein") {
                    if (counter % 2 === 0)
                        item.innerHTML = "Bitte tragen Sie Ihre E-Mail-Adresse ein";
                    else
                        item.style.display = "none";
                    counter++;
                }
            })
        }

        if (!errorLoaded[0]) {
            bgf.forEach((elem) => {
                elem.classList.add("hideDisplay");
            });

            let liHtml = '';
            for (let index = 0; index < arrList.length; index++) {
                const element = arrList[index];
                liHtml = liHtml + `<li>${checkmarkSvg} ${element}</li>`
            }

            let bagForm2 = document.createElement("div");
            bagForm2.innerHTML = '<div class="bag-form-2-warapper" id="bag-form-2">' +
                '   <div class="bag-form-headline2">' +
                '       Versicherte Versandtasche kostenlos &amp; unverbindlich anfordern' +
                '   </div>' +
                '   <div class="benefit-lest-wrapper">' +
                '       <ul class="bannerList">' +
                liHtml +
                '       </ul>' +
                '   </div>' +

                '   <div class="formBannerImgDiv">' +
                '       <img src="https://sandbox.echologyx.com/versandtasche_bestellen_transparent-1/" />' +
                '   </div>' +
                '   <div class="bag_next bag_form_fpb" >' +
                '       <button id="bagForm2Button">' +
                '           Versandtasche kostenlos anfordern' +
                '       </button>' +
                '   </div>' +
                '</div>';

            document.querySelectorAll(".bag-form .container2").forEach(elem => {
                elem.appendChild(bagForm2.cloneNode(true));
                console.log(elem)
            })
        }

        document.querySelectorAll(".accept_text input").forEach(elem => {
            elem.setAttribute('checked', true);
        });

        document.querySelectorAll('.bag-form .container2 input[name="street_number"]').forEach(elem => {
            elem.setAttribute("placeholder", "Hausnummer*");
        })

        let headerHtml = document.createElement("div");
        headerHtml.innerHTML = '' +
            '<div class="bag-form-headline3">' +
            '   <span> Versicherte Versandtasche mit Versandunterlagen kostenlos und unverbindlich anfordern. </span>' +
            '</div>';

        let bodyTextHtml = document.createElement("div");
        bodyTextHtml.innerHTML = '' +
            '<div class="ins_body_text">' +
            '   <span>Über 100.000 zufriedene Kunden</span>' +
            '</div>';

        let bodyImageHtml = document.createElement("div");
        bodyImageHtml.innerHTML = '' +
            '<div class="ins_body_img_wrapper">' +
            '   <img src="/media/auszeichnungen-ekomi.png" class="image1" />' +
            '   <img src="https://sandbox.echologyx.com/ts_trustbadge_im_querformat_sehr-gut_4-5-5-0_ohneschlagschatten/" class="image2" />' +
            '</div>';

        let footerTextHtml = document.createElement("div");
        footerTextHtml.innerHTML = '' +
            '<div class="ins_footer_wrapper">' +
            '   Mit Klick auf "Versandtasche kostenlos anfordern" stimme ich den ' +
            '   <u>AGB</u> ' +
            '   zu und habe die ' +
            '   <u>Datenschutzerklärung</u> ' +
            '   zur Kenntnis genommen.' +
            '</div>'

        document.querySelectorAll(".bag-form .container2 #bag-form").forEach(elem => {
            elem.insertBefore(headerHtml.cloneNode(true), elem.querySelector("form"));
        })

        document.querySelectorAll(".bag-form .container2 form").forEach(elem => {
            elem.insertBefore(bodyTextHtml.cloneNode(true), elem.querySelector(".bag_submit"));
            elem.insertBefore(bodyImageHtml.cloneNode(true), elem.querySelector(".bag_submit"));
            elem.querySelector(".bag_submit input").setAttribute('value', "Versandtasche kostenlos anfordern");
        });

        document.querySelectorAll(".bag-form .container2 #bag-form").forEach(elem => {
            elem.appendChild(footerTextHtml.cloneNode(true))
        })

        document.querySelectorAll(".bag_form_fpb button").forEach(elem => {
            elem.addEventListener("click", function () {
                console.log("hello")
                let bgf2 = document.querySelectorAll("#bag-form-2");
                bgf.forEach((elem) => {
                    elem.classList.remove("hideDisplay");
                });
                bgf2.forEach((elem) => {
                    elem.classList.add("hideDisplay");
                });
                if (window.innerWidth > 767) {
                    var element = document.getElementById("top");
                    element.scrollIntoView({ behavior: "smooth" });
                } else {
                    let elempos = document.getElementById("top").offsetTop;
                    let offsetVal = 0;
                    if (window.innerWidth > 550 && window.innerWidth <= 767) {
                        offsetVal = 150
                    } else {
                        offsetVal = 115
                    }
                    window.scrollTo({
                        top: elempos - offsetVal,
                        behavior: "smooth"
                    });
                }
            });
        })
    }
};
(function pollForGlobalForm() {
    if (document.getElementById('bag-form')) {
        if (!document.querySelector('.variationLoaded')) {
            mgGlobalForm.init();
            console.log("Variation- A: 01");
        }
    } else {
        setTimeout(pollForGlobalForm, 25);
    }
})();