
 function ubicacion(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    } else {
        alert("no puedes obterner geolocalización");
    };

function success(geolocationPosition) {

        var coords = geolocationPosition.coords;
        document.getElementById("x").innerHTML = coords.latitude + ", " + coords.longitude;
        let ubi = coords.latitude + ", " + coords.longitude; 
        document.getElementById("x").value = ubi;
     }
 }

    (function() {
        var width = 220;   
        var height = 0;     
      
        var streaming = false;
        var video = null;
        var canvas = null;
        var photo = null;
        var startbutton = null;
      
        function startup() {
            video = document.getElementById('video');
            canvas = document.getElementById('canvas');
            photo = document.getElementById('photo');
            startbutton = document.getElementById('startbutton');
      
            navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function(err) {
                console.log("An error occurred: " + err);
            });
      
            video.addEventListener('canplay', function(ev){
                if (!streaming) {
                  height = video.videoHeight / (video.videoWidth/width);
                
                  video.setAttribute('width', width);
                  video.setAttribute('height', height);
                  canvas.setAttribute('width', width);
                  canvas.setAttribute('height', height);
                  streaming = true;
                }
              }, false);
      
              startbutton.addEventListener('click', function(ev){
                takepicture();
                ev.preventDefault();
              }, false);
          
          clearphoto();
        }
      
        function clearphoto() {
            var context = canvas.getContext('2d');
            context.fillStyle = "#AAA";
            context.fillRect(0, 0, canvas.width, canvas.height);
        
            var data = canvas.toDataURL('image/png');
            photo.setAttribute('src', data);
          }
        
          function takepicture() {
            var context = canvas.getContext('2d');
            if (width && height) {
              canvas.width = width;
              canvas.height = height;
              context.drawImage(video, 0, 0, width, height);
            
              var data = canvas.toDataURL('image/png');
              photo.setAttribute('src', data);
            } else {
              clearphoto();
            }
          }
        
        window.addEventListener('load', startup, false);
      })();
 

 