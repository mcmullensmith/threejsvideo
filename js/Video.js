var Video = function() {
    var video;

    function init() {

        // events.on("update", update);

        video = document.getElementById( 'video' );

        video.src ="textures/GearVR-Room-Loop_v2.mp4";
        // http://localhost:63342/threejsvideo/textures/CoorsLight_2.mp4?_ijt=ilikeb99i245gctm46bbe2uu00


        video.setAttribute('webkit-playsinline', 'webkit-playsinline');
        video.setAttribute('crossorigin', 'anonymous');

        video.loop = true;
        video.load(); // must call after setting/changing source
        video.play();
        video.autoplay = true;
        video.setAttribute('crossorigin', 'anonymous');

        texture = new THREE.VideoTexture( video );
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBFormat;

        var movieMaterial = new THREE.MeshBasicMaterial( { map: texture, overdraw: true, side:THREE.DoubleSide } );
        // the geometry on which the movie will be displayed;
        // 		movie image will be scaled to fit these dimensions.
        var movieGeometry = new THREE.PlaneGeometry( 1440, 900, 0, 0 );
        var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
        movieScreen.position.set(0,0,0);

        Intro.getScene().add(movieScreen);
        Intro.getCamera().lookAt(movieScreen.position);
    }

    return {
        init: init
    }
}();
