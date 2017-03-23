var VR = function() {
    var scene, camera, renderer;

    function init(){

        events.on("update", update);

        var container = document.getElementById('container');

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 10000);
        camera.layers.enable(1); // render left view when no stereo available

        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0x101010);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        container.appendChild(renderer.domElement);

        controls = new THREE.VRControls(camera);

        effect = new THREE.VREffect(renderer);
        effect.scale = 0; // video doesn't need eye separation
        effect.setSize(window.innerWidth, window.innerHeight);

        if ( WEBVR.isAvailable() === true ) {

            container.appendChild( WEBVR.getButton( effect ) );

        }

    }

    function update() {
        controls.update();
        effect.render(scene, camera);
    }

    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        effect.setSize(window.innerWidth, window.innerHeight);
    }

    return {
        init: init,
        getCamera: function () {
            return camera;
        },
        getScene: function () {
            return scene;
        },
        getLight: function () {
            return directionalLight;
        },
        getRenderer: function () {
            return renderer;
        },
        getCubeCameras: function () {
            return [cubeCameraRead, cubeCameraWrite]
        },
        getControls: function () {
            return controls;
        },
        onResize: onResize
    }

}();
