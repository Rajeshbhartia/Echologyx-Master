var categoryPage = {
    init: function () {
        this.mainCss();
        this.mainJS();
    },
    mainCss: function () {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        document.head.appendChild(s).textContent = '' +

            '.insertedElemWrapper{' +
            '    background-color: #1689B7;' +
            '    margin-left: -15px;' +
            '    margin-right: -15px;' +
            '    padding-top: 1px;' +
            '    display: flex;' +
            '}' +
            '.insertedElemWrapper .line{' +
            '    height: auto;' +
            '    width: 2px;' +
            '    background: white;' +
            '}' +

            '.insertedElemWrapper span{' +
            '   color:white;' +
            '   padding:12px 20px' +
            '}' +
            '.insertedElemWrapper span:first-child{' +
            '   font-weight:600;' +
            '}' +

            '#product-list.singleProductBorder div.product-wrapper:nth-child(1){' +
            '    border-bottom: 5px solid #1689B7;' +
            '    border-left: 5px solid #1689B7; ' +
            '    border-right: 5px solid #1689B7;' +
            '}' +

            '#product-list.multipleProductBorder div.product-wrapper:nth-child(1){' +
            '    border-bottom: 5px solid #1689B7;' +
            '    border-left: 5px solid #1689B7; ' +
            '}' +
            '#product-list.multipleProductBorder div.product-wrapper:nth-child(2){' +
            '   border-bottom: 5px solid #1689B7;' +
            '}' +

            '@media (max-width: 1199px) {' +
            '   #product-list.multipleProductBorder div.product-wrapper:nth-child(2){' +
            '       border-right: 5px solid #1689B7;' +
            '   }' +
            '   .insertedElemWrapper{' +
            '       flex-direction: column;' +
            '       align-items: center;' +
            '       margin-left: -10px;' +
            '       margin-right: -10px;' +
            '       text-align: center;' +
            '   }' +
            '   .insertedElemWrapper span:first-child{' +
            '       padding: 12px 4px 4px 4px;' +
            '   }' +
            '   .insertedElemWrapper span:last-child{' +
            '       padding: 0px 24px 12px 24px;' +
            '   }' +
            '   div#product-list {' +
            '        margin-left: -10px;' +
            '        margin-right: -10px;' +
            '   }' +

            '}' +
            '@media (min-width: 1200px) {' +
            '   #product-list.multipleProductBorder div.product-wrapper:nth-child(3){' +
            '       border-bottom: 5px solid #1689B7;' +
            '       border-right: 5px solid #1689B7;' +
            '   }' +
            '}' +
            "@media (min-width: 400px) and (max-width: 600px){" +
            '   #product-list.singleProductBorder div.product-wrapper:nth-child(1),' +
            '   #product-list.multipleProductBorder div.product-wrapper:nth-child(1){' +
            '       border-left: 5px solid #1689B7; ' +
            '   }' +
            "}"
    },

    mainJS: function () {
        //For JS
        var $ = window.jQuery;
        var height = $("#product-list div.product-wrapper:first-child").outerHeight();
        $("#product-list div.product-wrapper:nth-child(-n+3)").css("height", height + 6);
        let noOfProducts = document.querySelectorAll('#product-list div.product-wrapper').length;
        if (noOfProducts > 1) {
            let element = document.querySelector('#product-list');
            if (noOfProducts > 3) {
                element.classList.add("multipleProductBorder");
            } else {
                element.classList.add("singleProductBorder");
            }

            if (window.innerWidth > 1199) {
                $('<div class="insertedElemWrapper" id="customInsertedElem">' +
                    '   <span> Am meisten gekauft</span> ' +
                    '   <div class="line"></div>' +
                    '   <span>Hier findest du die 3 Lieblingsprodukte unserer Kunden aus dieser Kategorie.</span> ' +
                    '</div>').insertBefore('#product-list');
            } else {
                $('<div class="insertedElemWrapper" id="customInsertedElem">' +
                    '   <span> Am meisten gekauft</span> ' +
                    '   <div class="line"></div>' +
                    '   <span>Hier findest du die beiden Lieblingsprodukte unserer Kunden aus dieser Kategorie.</span> ' +
                    '</div>').insertBefore('#product-list');
            }
        }
    }
};

(function pollForProductPage() {
    if (document.querySelector('#product-list') && window.jQuery !== undefined) {
        if(!document.querySelector('#customInsertedElem')){
            categoryPage.init();
        }
    } else {
        setTimeout(pollForProductPage, 25);
    }
})();