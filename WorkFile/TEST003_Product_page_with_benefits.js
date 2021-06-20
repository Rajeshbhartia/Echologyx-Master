var productPageWithBenifits = {
    init: function () {
        this.mainCss();
        this.mainJS();
        this.goalJS();
    },
    mainCss: function () {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        document.head.appendChild(s).textContent = '' +
            '.insWrapper{' +
            '   padding: 6px 0px;' +
            '}' +
            '.ptext{' +
            '   font-weight: 600;' +
            '}' +
            '.stext{' +
            '   color: black;' +
            '}' +
            '.product-view .qty-addtocart-container{' +
            '   margin: 50px 0px;' +
            '}' +
            '.insWrapper svg{' +
            '   height:12px;' +
            '   display:none;' +
            '}' +
            '@media (max-width: 640px) {' +
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
            '   .product-view .qty-addtocart-container{' +
            '       margin: 30px 0px;' +
            '   }' +
            '}';
    },
    mainJS: function () {
        //For JS
        var insertableNode = document.createElement("div");
        insertableNode.innerHTML = '' +
            '<div class="insWrapper">' +
            '   <?xml version="1.0" encoding="UTF-8"?>\n' +
            '   <svg  enable-background="new 0 0 511.999 511.999" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n' +
            '        <path d="m510.11 108.45-17.531-17.531-344.89 292.84v52.045l17.531 17.531c2.513 2.513 6.587 2.513 9.101 0l335.79-335.79c2.511-2.512 2.511-6.586-2e-3 -9.099z" fill="#73b334"/>\n' +
            '        <path d="m451.23 58.665-281.45 281.45-109.01-109.01c-2.513-2.513-6.587-2.513-9.101 0l-49.781 49.783c-2.513 2.513-2.513 6.587 0 9.1l145.81 145.81 344.89-344.89-32.251-32.251c-2.513-2.514-6.587-2.514-9.1-1e-3z" fill="#73b334"/>\n' +
            '   </svg>\n' +
            '   <span class="ptext"> Kein Risiko:</span>' +
            '   <span class="stext"> Du hast 30 Tage Rückgaberecht</span>' +
            '</div>';

        document.querySelector(".product-shop").querySelector(".availability-container").appendChild(insertableNode)
    },
    goalJS: function () {
        //For JS
    }
};

(function pollForProductPage() {
    if (document.querySelector('body')) {
        productPageWithBenifits.init();
    } else {
        setTimeout(pollFor, 25);
    }
})();