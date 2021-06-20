var productPageWithBenifits = {
    init: function () {
        this.mainCss();
        this.mainJS();
    },
    mainCss: function () {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        document.head.appendChild(s).textContent = '' +
            '.insContainer{' +
            '    display: flex;\n' +
            '}' +
            '.insWrapper{' +
            '   padding: 6px 0px;' +
            '}' +
            '.ptext{' +
            '   padding-right: 2px;' +
            '    font-weight: 600;' +
            '}' +
            '.stext{' +
            '   color: #606060;' +
            '}' +

            '.insWrapper svg{' +
            '   height:12px;' +
            '   display:none;' +
            '   width: 12px;' +
            '}' +
            '.product-shop-info .clear{' +
            '   height:40px' +
            '}' +
            '@media (max-width: 480px) {' +
            '   .insWrapper{' +
            '       width: 268px;' +
            '       font-size:11px' +
            '   }' +
            '}' +


            '@media (min-width: 480px) and (max-width: 767px){' +
            '   .insWrapper{' +
            '       width: 292px;' +
            '   }' +
            '}' +

            '@media (max-width: 767px) {' +
            '   .insWrapper{' +
            '       background-color:#F7F6F6;' +
            '       display: flex;\n' +
            '       align-items: center;\n' +
            '       justify-content: center;\n' +
            '       padding: 16px 0px;' +
            '       margin-top:16px' +
            '   }' +
            '   .insWrapper svg{' +
            '       display:block;' +
            '       margin-right:4px;' +
            '   }' +
            '   .insContainer{' +
            '       justify-content: center;' +
            '   }' +
            '   .product-shop-info .clear{' +
            '       height:0px' +
            '    }' +
            '}';
    },
    mainJS: function () {
        //For JS
        var pNode = document.querySelector('.availability-container')
        var cNode = document.createElement("div");

        cNode.innerHTML = '<div class="insContainer">' +
            '<div class="insWrapper" id="appendedText">' +
            '   <?xml version="1.0" encoding="UTF-8"?>\n' +
            '   <svg  enable-background="new 0 0 511.999 511.999" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n' +
            '        <path d="m510.11 108.45-17.531-17.531-344.89 292.84v52.045l17.531 17.531c2.513 2.513 6.587 2.513 9.101 0l335.79-335.79c2.511-2.512 2.511-6.586-2e-3 -9.099z" fill="#73b334"/>\n' +
            '        <path d="m451.23 58.665-281.45 281.45-109.01-109.01c-2.513-2.513-6.587-2.513-9.101 0l-49.781 49.783c-2.513 2.513-2.513 6.587 0 9.1l145.81 145.81 344.89-344.89-32.251-32.251c-2.513-2.514-6.587-2.514-9.1-1e-3z" fill="#73b334"/>\n' +
            '   </svg>\n' +
            '   <span class="ptext"> Kein Risiko:</span>' +
            '   <span class="stext"> Du hast 30 Tage Rückgaberecht</span>' +
            '</div>' +
            '</div>';
        pNode.appendChild(cNode);
    }
};

(function pollForProductPage() {
    if (document.querySelector('.availability-container')) {
        if (!document.querySelector('#appendedText')) {
            productPageWithBenifits.init();
        }
    } else {
        setTimeout(pollForProductPage, 25);
    }
})();

(function pollForHotjar() {
    if (window.hj !== undefined) {
        hj('trigger', 'split_test_b');
    }else {
        setTimeout(pollForHotjar, 50);
    }
})();