var productPageWithBenifits = {
    init: function () {
        this.mainCss();
        this.mainJS();
    },
    mainCss: function () {
        var s = document.createElement("style");
        s.setAttribute("type", "text/css");
        document.head.appendChild(s).textContent =
            "" +
            ".insContainer{" +
            "    display: flex;\n" +
            "}" +
            ".insMapWrapper{" +
            "    display:flex;" +
            "    margin-top: 24px;" +
            "    padding: 20px;\n" +
            "    background: #F7F6F6;\n" +
            "    max-width: 500px;\n" +
            "    text-align: left !important;" +
            "    margin-bottom:10px;" +
            "    align-items: center;" +
            "}" +
            ".insWrapper{" +
            "   padding: 6px 0px;" +
            "   margin-top:8px;" +
            "   text-align: left;" +
            "}" +
            ".ptext{" +
            "   font-weight: 600;" +
            "}" +
            ".stext{" +
            "   color: #606060;" +
            "   line-height: 12px;" +
            "}" +
            ".insWrapper svg{" +
            "   height:12px;" +
            "   margin-right:12px;" +
            "}" +
            ".insContant{" +
            "   margin-bottom:6px;" +
            "}" +
            ".map-wrapper{" +
            "    flex: 1;" +
            "}" +
            ".map-wrapper img{" +
            "   margin-top:8px" +
            "}" +
            ".mobile-map-wrapper{" +
            "   display:none;" +
            "   margin-top:10px;" +
            "   text-align: center;" +
            "}" +
            ".line{" +
            "   width:1px;" +
            "   background: #EBEBEB;" +
            "   margin: 0px 20px;" +
            "   height: 85px;" +
            "}" +
            ".map-title{" +
            "   text-align:center" +
            "}" +
            ".insContant{" +
            "    display: flex;\n" +
            "    align-items: center;" +
            "}" +
            ".svgWrapper{" +
            "    height: 12px;" +
            "   width:16px" +
            "}" +
            "@media (max-width: 480px){" +
            "   .mobile-map-wrapper img{" +
            "       padding-top: 16px;\n" +
            "       padding-bottom: 28px;" +
            "       width:268px;" +
            "   }" +
            "   .insMapWrapper{" +
            "       justify-content: center;" +
            "       width: 268px;" +
            "       padding:12px 0px;" +
            "   }" +
            "}" +
            "@media (min-width: 480px) and (max-width: 767px){" +
            "   .mobile-map-wrapper img{" +
            "       padding-top: 16px;\n" +
            "       padding-bottom: 28px;" +
            "       width:292px;" +
            "   }" +
            "   .insMapWrapper{" +
            "       justify-content: center;" +
            "       width: 292px;" +
            "       padding:12px 0px;" +
            "   }" +
            "}" +
            "@media (max-width: 767px) {" +
            "   .map-wrapper," +
            "   .line{" +
            "       display: none;\n" +
            "   }" +
            "   .mobile-map-wrapper{" +
            "       display:block" +
            "   }" +
            "   .insContainer{" +
            "       justify-content: center;" +
            "   }" +
            "}";
    },

    mainJS: function () {
        //For JS
        var pNode = document.querySelector(".product-shop-info");
        var sNode = document.querySelector(".qty-addtocart-container");
        var c1Node = document.createElement("div");

        c1Node.innerHTML =
            '<div class="insContainer">' +
            '<div class="insMapWrapper">' +
            '<div class="insWrapper" id="insWrapper">' +
            '   <div class="insContant">' +
            '       <div class="svgWrapper">' +
            '           <svg width="12px" height="12px" enable-background="new 0 0 511.999 511.999" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n' +
            '               <path d="m510.11 108.45-17.531-17.531-344.89 292.84v52.045l17.531 17.531c2.513 2.513 6.587 2.513 9.101 0l335.79-335.79c2.511-2.512 2.511-6.586-2e-3 -9.099z" fill="#73b334"/>\n' +
            '               <path d="m451.23 58.665-281.45 281.45-109.01-109.01c-2.513-2.513-6.587-2.513-9.101 0l-49.781 49.783c-2.513 2.513-2.513 6.587 0 9.1l145.81 145.81 344.89-344.89-32.251-32.251c-2.513-2.514-6.587-2.514-9.1-1e-3z" fill="#73b334"/>\n' +
            "           </svg>\n" +
            "       </div>" +
            '       <span class="stext"> Du hast 30 Tage Rückgaberecht</span>' +
            "   </div>" +
            '   <div class="insContant">' +
            '       <div class="svgWrapper">' +
            '           <svg width="12px" height="12px" enable-background="new 0 0 511.999 511.999" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n' +
            '               <path d="m510.11 108.45-17.531-17.531-344.89 292.84v52.045l17.531 17.531c2.513 2.513 6.587 2.513 9.101 0l335.79-335.79c2.511-2.512 2.511-6.586-2e-3 -9.099z" fill="#73b334"/>\n' +
            '               <path d="m451.23 58.665-281.45 281.45-109.01-109.01c-2.513-2.513-6.587-2.513-9.101 0l-49.781 49.783c-2.513 2.513-2.513 6.587 0 9.1l145.81 145.81 344.89-344.89-32.251-32.251c-2.513-2.514-6.587-2.514-9.1-1e-3z" fill="#73b334"/>\n' +
            "           </svg>\n" +
            "       </div>" +
            '       <span class="stext"> Der Versand ist kostenfrei</span>' +
            "   </div>" +
            '   <div class="insContant">' +
            '       <div class="svgWrapper">' +
            '           <svg width="12px" height="12px" enable-background="new 0 0 511.999 511.999" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n' +
            '               <path d="m510.11 108.45-17.531-17.531-344.89 292.84v52.045l17.531 17.531c2.513 2.513 6.587 2.513 9.101 0l335.79-335.79c2.511-2.512 2.511-6.586-2e-3 -9.099z" fill="#73b334"/>\n' +
            '               <path d="m451.23 58.665-281.45 281.45-109.01-109.01c-2.513-2.513-6.587-2.513-9.101 0l-49.781 49.783c-2.513 2.513-2.513 6.587 0 9.1l145.81 145.81 344.89-344.89-32.251-32.251c-2.513-2.514-6.587-2.514-9.1-1e-3z" fill="#73b334"/>\n' +
            "           </svg>\n" +
            "       </div>" +
            '       <span class="stext"> Geprüfte Kompatibilität</span>' +
            "   </div>" +
            "</div>" +
            '<div class="line"></div>' +
            '<div class="map-wrapper">' +
            '   <div class="map-title">Online sicher bezahlen mit</div>' +
            '   <img src="https://sandbox.echologyx.com/wp-content/uploads/2021/05/payment_icons_de_4x2.png" alt="paymentOption"/> ' +
            "</div>" +
            "</div>" +
            "</div>";

        pNode.insertBefore(c1Node, sNode);

        function insertAfter(referenceNode, newNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }

        var c2Node = document.createElement("div");
        var sib2Node = document.querySelector(".qty-addtocart-container");

        c2Node.innerHTML =
            '<div class="mobile-map-wrapper">' +
            '   <img src="https://sandbox.echologyx.com/wp-content/uploads/2021/05/payment_icons_de_4x2.png" alt="paymentOption"/> ' +
            "</div>";

        insertAfter(sib2Node,c2Node);
    },
};

(function pollForProductPage() {
    if (document.querySelector(".qty-addtocart-container")) {
        if (!document.querySelector("#insWrapper")) {
            productPageWithBenifits.init();
        }
    } else {
        setTimeout(pollForProductPage, 25);
    }
})();

(function pollForHotjar() {
    if (window.hj !== undefined) {
        hj('trigger', 'split_test_c');
    }else {
        setTimeout(pollForHotjar, 50);
    }
})();

