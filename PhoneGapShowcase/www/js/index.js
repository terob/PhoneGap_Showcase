document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady(){

var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );


// Home
function home(){
	let div = document.querySelector('.home');
	let p = document.createElement('p');
	p.textContent = 'App is ready to go';
	div.appendChild(p);
	console.log('App is ready to go')
}

// Battery status
function battery(){
	navigator.getBattery().then(function(battery) {

	document.getElementById('charging').textContent = battery.charging;
	document.getElementById('chargingTime').textContent = battery.chargingTime;
	document.getElementById('dischargingTime').textContent = battery.dischargingTime;
	document.getElementById('level').textContent = battery.level;

	    });
}

// Camera
function camera(){

	var camera_number = Camera.Direction.BACK;

	document.getElementById('frontCamera').addEventListener('click',frontCamera);
	document.getElementById('backCamera').addEventListener('click', backCamera);
	document.getElementById('picture').addEventListener('click', picture);

	function frontCamera(){camera_number = Camera.Direction.FRONT;}
	function backCamera(){camera_number = Camera.Direction.BACK;}

	function picture(){
	    let opts = {
	        quality: 80,
	        destinationType: Camera.DestinationType.FILE_URI,
	        sourceType: Camera.PictureSourceType.CAMERA,
	        mediaType: Camera.MediaType.PICTURE,
	        encodingType: Camera.EncodingType.JPEG,
	        cameraDirection: camera_number,
	        targetWidth: 300,
	        targetHeight: 400
	    };
	    
	    navigator.camera.getPicture(pictureSucess, pictureFailure, opts);

        function pictureSucess(imgURI){
            document.getElementById('msg').textContent = imgURI;
            document.getElementById('photo').src = imgURI;     
        }

        function pictureFailure(msg){
            document.getElementById('msg').textContent = msg;
        }

	}
}

// Device Info
function device_info(){

	document.getElementById('device_cordova').textContent = device.cordova;
	document.getElementById('model').textContent = device.model;
	document.getElementById('platform').textContent = device.platform;
	document.getElementById('uuid').textContent = device.uuid;
	document.getElementById('version').textContent = device.version;
	document.getElementById('manufacturer').textContent = device.manufacturer;
	document.getElementById('isVirtual').textContent = device.isVirtual;
	document.getElementById('serial').textContent = device.serial;

}

// Dialogs
function dialogs(){

	function alertDismissed(value) {
	    document.getElementById('msg_dialogs').innerHTML = "alertDismissed";
	}

	function onConfirm(value) {
	    document.getElementById('msg_dialogs').innerHTML = "onConfirm:<br>" + value;
	}

	function onPrompt(value) {
	    document.getElementById('msg_dialogs').innerHTML = "onPrompt:<br>" + "You selected button number " + value.buttonIndex + "<br> Entered " + value.input1;
	}

	function button_alert() {

	    navigator.notification.alert(
	        'You are the winner!',  // message
	        alertDismissed,         // callback
	        'Game Over',            // title
	        'Done'                  // buttonName
	    );

	}

	function button_confirm() {

	navigator.notification.confirm(
	    'You are the winner!', // message
	     onConfirm,            // callback to invoke with index of button pressed
	    'Game Over',           // title
	    ['Restart','Exit']     // buttonLabels
	);

	}

	function button_prompt() {

	navigator.notification.prompt(
	    'Please enter your name',  // message
	    onPrompt,                  // callback to invoke
	    'Registration',            // title
	    ['Ok','Exit'],             // buttonLabels
	    'Jane Doe'                 // defaultText
	);

	}

	function button_beep() {

	// Beep twice!
	navigator.notification.beep(2);

	}

	document.getElementById('btn_alert').addEventListener('click', button_alert);
	document.getElementById('btn_confirm').addEventListener('click', button_confirm);
	document.getElementById('btn_prompt').addEventListener('click', button_prompt);
	document.getElementById('btn_beep').addEventListener('click', button_beep);

}

// Device Info
function geolocation(){

    var onSuccess = function(position) {
    		document.getElementById('latitude').textContent = position.coords.latitude;
    		document.getElementById('longitude').textContent = position.coords.longitude;
    		document.getElementById('altitude').textContent = position.coords.altitude;
    		document.getElementById('accuracy').textContent = position.coords.accuracy;
    		document.getElementById('altitudeAccuracy').textContent = position.coords.altitudeAccuracy;
    		document.getElementById('heading').textContent = position.coords.heading;
    		document.getElementById('speed').textContent = position.coords.speed;
    		document.getElementById('timestamp').textContent = position.timestamp;
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
    	document.getElementById('error_code').textContent = error.code;
    	document.getElementById('error_message').textContent = error.message;
    }

	navigator.geolocation.getCurrentPosition(onSuccess, onError);

}

// InAppBrowser
function in_app_browser(){

	var inAppBrowserRef;
	inAppBrowserRef = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=no');

}

// Media
function media(){

  document.getElementById('up_btn').addEventListener('click', up_btn);
  document.getElementById('down_btn').addEventListener('click', down_btn);
  document.getElementById('play_btn').addEventListener('click', play_btn);
  document.getElementById('pause_btn').addEventListener('click', pause_btn);

  var vid = new Audio('./media/fight-club.mp3');

  function up_btn() { 
    vid.volume = vid.volume + 0.2;
    document.getElementById('msg_media').textContent = vid.volume.toFixed(2);
  }  

  function down_btn() { 
    vid.volume = vid.volume - 0.2;
    document.getElementById('msg_media').textContent = vid.volume.toFixed(2);
  } 

  function play_btn() { 
    vid.play();
  } 

  function pause_btn() { 
    vid.pause();
  } 

}

// Network Information
function network_information(){

	document.getElementById("btn_online_offnline").addEventListener("click", online_offnline);
	document.getElementById("btn_check_connection").addEventListener("click", checkConnection);

	function online_offnline() {
	    if(navigator.onLine){
	        document.getElementById('online_offnline').textContent = "Online";
	    } else {
	        document.getElementById('online_offnline').textContent = "Offline";
	    }
	}

	function checkConnection() {
	    var networkState = navigator.connection.type;

	    var states = {};
	    states[Connection.UNKNOWN]  = 'Unknown connection';
	    states[Connection.ETHERNET] = 'Ethernet connection';
	    states[Connection.WIFI]     = 'WiFi connection';
	    states[Connection.CELL_2G]  = 'Cell 2G connection';
	    states[Connection.CELL_3G]  = 'Cell 3G connection';
	    states[Connection.CELL_4G]  = 'Cell 4G connection';
	    states[Connection.CELL]     = 'Cell generic connection';
	    states[Connection.NONE]     = 'No network connection';

	    document.getElementById('checkConnection').textContent = states[networkState];
	}	

}

// Vibration
function vibration(){
	
	document.getElementById("btn_vibration").addEventListener("click", vibrate);
	function vibrate(){navigator.vibrate(5000);}

}

// Device Motion
function device_motion(){

function onSuccess(acceleration) {
    document.getElementById('acceleration_x').textContent = acceleration.x;
    document.getElementById('acceleration_y').textContent = acceleration.y;
    document.getElementById('acceleration_z').textContent = acceleration.z;
    document.getElementById('acceleration_timestamp').textContent = acceleration.timestamp;
}

function onError() {
    document.getElementById('error_message').textContent = "Error";
}
	
navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

}

// File
function file_cordova(){
	function storeage_create(){
		window.localStorage.setItem("key", "value");
		document.getElementById('msg_file').textContent = "Local Storage Created";
	}
	function storeage_read(){
		var value = window.localStorage.getItem("key");
		document.getElementById('msg_file').textContent = value;
	}
	function storeage_clear(){
		window.localStorage.clear();
		document.getElementById('msg_file').textContent = "Local Storage Cleared";
	}

	document.getElementById("btn_create").addEventListener("click", storeage_create);
	document.getElementById("btn_read").addEventListener("click", storeage_read);
	document.getElementById("btn_clear").addEventListener("click", storeage_clear);
	
    document.getElementById('applicationDirectory').textContent = cordova.file.applicationDirectory;
    document.getElementById('applicationStorageDirectory').textContent = cordova.file.applicationStorageDirectory;
    document.getElementById('dataDirectory').textContent = cordova.file.dataDirectory;
    document.getElementById('cacheDirectory').textContent = cordova.file.cacheDirectory;

}

// File Transfer
function file_transfer(){

        $(document).ready(function(){

            // take picture from camera
            $('#but_take').click(function(){      
                navigator.camera.getPicture(onSuccess, onFail, { quality: 20,
                    destinationType: Camera.DestinationType.FILE_URL 
                });
            });

            // upload select 
            $("#but_select").click(function(){
                navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY, 
                    allowEdit: true,
                    destinationType: Camera.DestinationType.FILE_URI
                });
            });

            // Change image source and upload photo to server
            function onSuccess(imageURI) {
                // Set image source
                var image = document.getElementById('img');
                image.src = imageURI  + '?' + Math.random();

                var options = new FileUploadOptions();
                options.fileKey = "file";
                options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
                options.mimeType = "image/jpeg";

                var params = {};
                params.value1 = "test";
                params.value2 = "param";

                options.params = params;
                options.chunkedMode = false;

                var ft = new FileTransfer();
                ft.upload(imageURI, "http://python-nauka.cba.pl/upload.php", function(result){
                    alert('successfully uploaded ' + result.response);
                    image.src = result.response;
                }, function(error){
                    alert('error : ' + JSON.stringify(error));
                }, options);
            }
            function onFail(message) {
                alert('Failed because: ' + message);
            }
        });

}

// Json
function json_info(){
console.log("a")
document.getElementById("jsonInfo_1").addEventListener("click", jsonInfo_1);

function jsonInfo_1(){
const Http = new XMLHttpRequest();
const url='http://gerobss.pythonanywhere.com';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  var obj = JSON.parse(Http.responseText);

  document.getElementById('msg_1').textContent = obj.name + " " + obj.myList;
}
}

}

if (page == "camera.html"){camera();}
else if (page == "battery.html"){battery();}
else if (page == "device_info.html"){device_info();}
else if (page == "dialogs.html"){dialogs();}
else if (page == "geolocation.html"){geolocation();}
else if (page == "in_app_browser.html"){in_app_browser();}
else if (page == "media.html"){media();}
else if (page == "network_information.html"){network_information();}
else if (page == "vibration.html"){vibration();}
else if (page == "device_motion.html"){device_motion();}
else if (page == "file.html"){file_cordova();}
else if (page == "file_transfer.html"){file_transfer();}
else if (page == "json.html"){json_info();}
else {home();}
}
