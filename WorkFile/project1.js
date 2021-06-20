var basicStructure = {
    init: function () {
        this.mainCss();
        this.mainJS();
        this.goalJS();
    },
    mainCss: function () {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        document.head.appendChild(s).textContent = '.top-bar.pushmenu { display: none;}' +
            '.text-content-wrap { height: 68px ;' + 'display: flex;' + 'justify-content: space-between;' + 'padding: 10px 36px 8px 36px; background: white}' +
            '.top-header.sticky{display:none}'+
            '@media screen and (max-width: 1180px) { .disable-mobile { display:none; } '+
            '.text-content-wrap { justify-content: center; }}'


    },
    mainJS: function () {
        //For JS
        var pNode = document.getElementsByClassName("nav-wrapper")
        var cNode = document.createElement("div");
        cNode.innerHTML = '<div class="text-content-wrap">' +
            '<a href="/" data-analytics-link-name="Direct Line for Business" class="disable-mobile"><img src="/lib/img/direct_line_logo.png" alt="Direct Line for Business" class="directline-logo" style="height:36px"/></a>' +
            '<div class="quote-wrap">' +
            '<div id="DL4B-OPR-middle-lpButtonDiv"></div>' +
            ' <span class="disable-mobile">Call us on <span class="boldest blue phone-disabled">0345 301 5066</span> or</span>' +
            '<a class="button primary" href="https://secure.directlineforbusiness.co.uk/DirectLine/servletcontroller" rel="noopener" target="_blank">Get a quote</a>' +
            '</div>' +
            '</div>'
        pNode[0].appendChild(cNode);
    },
    goalJS: function () {
        //For JS
    },
    slider: function () {
        //For JS
    }
};

(function pollFor() {
    if (document.getElementById('navbar')) {
        basicStructure.init();
        console.log("Variation- A: 01");
    } else {
        setTimeout(pollFor, 25);
    }
})();


//test code
// document.querySelector("#customInsertedElem")