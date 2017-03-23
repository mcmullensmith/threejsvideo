var events = new Events();

var Main = function() {
    function init() {
        // if (!Detector.webgl) {
        //     Detector.addGetWebGLMessage();
        // }

        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('mousedown', onDocumentMouseDown, false);
        document.addEventListener('mouseup', onDocumentMouseUp, false);
        // document.addEventListener('touchstart', onDocumentTouchStart, false);
        // document.addEventListener('drop', onDocumentDrop, false);
        // document.addEventListener('dragover', onDocumentDragOver, false);
        window.addEventListener('resize', onResize, false);


        //INIT HANDLERS
        VR.init();
        VrVideo.init();
        Intro.init();
        Video.init();

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
        Vr.onResize();
        Intro.onResize();
    }

    return {
        init: init
    };

}();

$(document).ready(function () {
    setTimeout(Main.init, 1000);
});
