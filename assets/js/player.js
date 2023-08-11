$(document).ready(function() {
    $(".play-btn").click(function() {
      var videoId = $(this).data("video-id");
      var video = document.getElementById(videoId);

      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
});