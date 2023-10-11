// function showDialog(square) {
//   // Your existing code to show the dialog text
//   // Add code here to handle individual square content
//   if (square === "Square 1") {
//     document.getElementById("bubble1").style.display = "block";
//     playPopSound();
//   } else if (square === "Square 2") {
//     document.getElementById("bubble2").style.display = "block";
//     playPopSound();
//   } else if (square === "Square 3") {
//     document.getElementById("bubble3").style.display = "block";
//     playPopSound();
//   } else if (square === "Square 4") {
//     document.getElementById("bubble4").style.display = "block";
//     playPopSound();
//   }
// }

const popSound = document.getElementById("popSound");

function playPopSound() {
  popSound.currentTime = 0; // Rewind the audio to the beginning
  popSound.play(); // Play the audio
}

function showBubble(bubbleId) {
  document.getElementById(bubbleId).style.display = "block";
}

function hideBubble(bubbleId) {
  document.getElementById(bubbleId).style.display = "none";
}

function navigateToPage(pageURL) {
  playPopSound();

  // Adding a delay of 1 second (1000 milliseconds) before navigating is only allowing to play the sound, otherwise we don't hear anything
  setTimeout(function () {
    window.location.href = pageURL;
  }, 1000);
}
