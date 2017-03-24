var events = new Events();

var Main = function() {
    function init() {

        // THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {
        //     console.log( "loading: ", item, loaded, total );
        // };

        if (!Detector.webgl) {
            Detector.addGetWebGLMessage();
        }

        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('mousedown', onDocumentMouseDown, false);
        document.addEventListener('mouseup', onDocumentMouseUp, false);
        window.addEventListener('resize', onResize, false);


        //INIT HANDLERS
        VR.init();
        VrVideo.init();
        Intro.init();
        Video.init();
        Transition.init();
        TransVideo.init();

        onResize();

        update();
    }

    function update() {
        requestAnimationFrame(update);
        events.emit("update");
    }


    function onDocumentMouseDown(event) {
    }

    function onDocumentMouseUp(event) {
    }

    function onDocumentMouseMove(event) {
    }

    function onResize() {
        VR.onResize();
        Intro.onResize();
    }

    return {
        init: init,
        getIsMobile: function() {
            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
        }
    };

}();

$(document).ready(function () {
    setTimeout(Main.init, 1000);
});
