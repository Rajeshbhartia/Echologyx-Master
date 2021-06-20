function mainCss () {
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    document.head.appendChild(s).textContent = '' +
        "@media (max-width: 600px){" +
        '   .survey-inline .ui-grid .ui-grid-col.is-12-mobile {' +
        '       width: 50%;' +
        '   }'+
        '  #main-content .ui-grid-container button.ui-btn--lg.ui-btn--round{' +
        '       visibility: hidden;' +
        '   }'+
        '  #main-content .ui-grid-container button.ui-btn--lg.ui-btn--round:after{' +
        '       content: \'Get Started\';' +
        '       visibility: visible;' +
        '       border-radius: 0;' +
        '       padding: 26px 100px;' +
        '       height: auto;' +
        '       width: calc(90% - 20px);' +
        '       color: white;' +
        '       display: block;' +
        '       position: absolute;' +
        '       bottom: 0;' +
        '       left: calc(5% + 10px);' +
        '       background: #001233;' +
        '       font-size: 12px;' +
        '   }' +
        '   #main-content .ui-grid-col.ui-text--center.quiz-page__hero {' +
        '       position: relative;' +
        '   }'+

        '  .survey-inline button.ui-btn.ui-btn--xl.ui-btn--round.ui-mt--4.ui-btn__primary,' +
        '  .survey-inline button.ui-btn.ui-btn--xl.ui-btn--round.ui-mt--4.ui-btn__secondary--light{' +
        '       visibility: hidden;' +
        '   }'+

        '  .survey-inline button.ui-btn.ui-btn--xl.ui-btn--round.ui-mt--4.ui-btn__primary:after,' +
        '  .survey-inline button.ui-btn.ui-btn--xl.ui-btn--round.ui-mt--4.ui-btn__secondary--light:after{' +
        '    content: \'Continue\';\n' +
        '    visibility: visible;\n' +
        '    border-radius: 0;\n' +
        '    padding: 26px 100px;\n' +
        '    height: auto;\n' +
        '    width: calc(100% - 40px);\n' +
        '    display: block;\n' +
        '    position: absolute;\n' +
        '    bottom: 0;\n' +
        '    left: 20px;\n' +
        '    font-size: 12px;' +
        '   }' +
        '   .ui-grid.is-mobile {\n' +
        '       padding: 0px 20px;\n' +
        '   }' +

        '  .survey-inline button.ui-btn.ui-btn--xl.ui-btn--round.ui-mt--4.ui-btn__primary:after{' +
        '       background: #001233;' +
        '       color: white;' +
        '   }' +

        '  .survey-inline button.ui-btn.ui-btn--xl.ui-btn--round.ui-mt--4.ui-btn__secondary--light:after{' +
        '       color: #525e75;' +
        '       background: #d6d9de;' +
        '   }' +
        '   .survey-inline .survey-question {' +
        '       position: relative;' +
        '   }'+
        "}";
}
mainCss();