var VrVideo = function() {

    function init() {

        events.on("update", update);

        video = document.getElementById('vr-video');
        video.loop = true;
        video.width = 1280;
        video.height = 720;
        video.muted = true;
        video.src = 'textures/CoorsLight_2.mp4?_ijt=ilikeb99i245gctm46bbe2uu00';

        video.setAttribute('webkit-playsinline', 'webkit-playsinline');
        video.play();
        video.autoplay = true;
        video.setAttribute('crossorigin', 'anonymous');

        texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.NearestFilter;
        texture.maxFilter = THREE.NearestFilter;


        texture.format = THREE.RGBFormat;
        texture.generateMipmaps = false;

        var geometry = new THREE.SphereGeometry(500, 60, 40);
        geometry.scale(-1, 1, 1);

        var material = new THREE.MeshBasicMaterial({map: texture});
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.y = -Math.PI / 2;
        mesh.layers.set(1); // display in left eye only
        VR.getScene().add(mesh);

        // right
        var geometry = new THREE.SphereGeometry(500, 60, 40);
        geometry.scale(-1, 1, 1);

        var material = new THREE.MeshBasicMaterial({map: texture});
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.y = -Math.PI / 2;
        mesh.layers.set(2);

        VR.getScene().add(mesh);
    }

    function update() {

    }


    return{
        init: init
    };

}();
