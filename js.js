
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onload = function() {
    var rememberMe = document.getElementById("rememberCheckbox");
    var usernameCookie = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/, "$1");

    // Set the "Remember Me" checkbox based on the presence of the username cookie
    rememberMe.checked = usernameCookie !== "";

    // If "Remember Me" is checked, fill in the username field with the saved username
    if (rememberMe.checked) {
      document.getElementsByName("uname")[0].value = usernameCookie;
    }
  };


  document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('video-feed');
    const canvas = document.getElementById('qr-canvas');
    const ctx = canvas.getContext('2d');
  
    // Check if the browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
          video.play();
  
          // Initialize the QR code scanner
          const qrScanner = new QrScanner(video, result => {
            // Handle the QR code result
            console.log(result);
            // You can perform further actions with the scanned QR code data here
          });
  
          // Start scanning
          qrScanner.start();
  
          // Optional: Stop scanning when the video feed is clicked
          video.addEventListener('click', () => {
            qrScanner.stop();
          });
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    } else {
      console.error('getUserMedia not supported on your browser!');
    }
  });
  