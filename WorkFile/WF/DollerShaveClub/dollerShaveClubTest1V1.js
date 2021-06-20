function mainCss () {
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    document.head.appendChild(s).textContent = '' +
        "@media (max-width: 600px){" +
        '   .survey-inline .ui-grid .ui-grid-col.is-12-mobile {' +
        '       width: 50%;' +
        '   }' +
        '   .ui-grid.is-mobile {\n' +
        '       padding: 0px 20px;\n' +
        '   }'+
        "}";
}
mainCss();