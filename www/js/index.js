var app = {
    // Application Constructor
    initialize: function(){
        document.getElementById('btn').addEventListener('click', app.takephoto);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    takephoto: function() {

        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI });
        
        function onSuccess(imageURI) {
            var image = document.getElementById('myImage');
            image.src = imageURI;
        }
        
        function onFail(message) {
            alert('Failed because: ' + message);
        }
        let opts = {
            quality:80,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirection: Camera.Direction.BACK,
            targetWidth: 300,
            targetHeight:400,
         };
        navigator.camera.getPicture(app.ftw, app.wtf, opts);
    },
    ftw: function(imgURI) {
        document.getElementById('photo').src = imgURI;
    },
    wtf: function(msg) {
        document.getElementById('msg').textContent = msg;
    }
};

app.initialize();