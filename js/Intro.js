/**
 * Created by Mattsmith on 3/22/17.
 */
var Intro = function() {

    var scene, camera, renderer, light;

    function init() {
        events.on("update", update);

        container = document.getElementById( 'regular' );
        document.body.appendChild( container );


        camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();

        scene.add(camera);

        light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0.5, 1, 1 ).normalize();
        scene.add( light );

        var canvas = document.getElementById("canvasID");
        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false });
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

    }

    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

    function update() {
        renderer.render( scene, camera );
    }

    return{
        init: init,
        getCamera: function () {
            return camera;
        },
        getScene: function () {
            return scene;
        },
        getLight: function () {
            return light;
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
