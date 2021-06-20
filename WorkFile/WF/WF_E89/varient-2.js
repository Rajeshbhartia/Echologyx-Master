var advertorialVideo = {
    init: function () {
        var EXPERIMENT_NUMBER = 'MOT_E89';
        var VARIATION_NAME = 'VAR_B';    
        this.mainCss();
        this.mainJS();
        window.WF = window.WF || {};
        window.WF[EXPERIMENT_NUMBER] = VARIATION_NAME;
    },
    mainCss: function () {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        document.head.appendChild(s).textContent = '';
    },
    mainJS: function () {
        var $ = window.jQuery;
        var sa_30s_video = '<div class="video-wrapper">' +
            '   <video width="100%" height="auto" controls class="wf-track-clicks-to-video-89">' +
            '    <source src="https://sandbox.echologyx.com/wp-content/uploads/2021/06/SA_60Sec_Landing.mp4" type="video/mp4">' +
            '  </video>' +
            '</div>'
        $("p:contains('monthly stock recommendations to individual investors')").after(sa_30s_video);
    }
};

(function pollForE89() {
    if (document.getElementById('author') && window.jQuery !== undefined) {
        advertorialVideo.init();
    } else {
        setTimeout(pollForE89, 25);
    }
})();