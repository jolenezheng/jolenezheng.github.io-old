var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
})();

$('#youtubeId').keyup(function() {
    delay(function() {
        var videoID = $('#youtubeId').val();
        var videos = "https://www.googleapis.com/youtube/v3/videos";
        var apiKey = "AIzaSyAzYHm1iwMocB9pW2uZrz_6Sqte5t_bXGo"; // Insert here your api key
        var fieldsTitle = "fields=items(snippet(title))";
        var videosCap = "https://video.google.com/timedtext?lang=en&v="+ videoID;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == XMLHttpRequest.DONE){
                var parser = new DOMParser();
                var doc = parser.parseFromeString(xhr.responseText, "text/xml");
                $('#captionText').text(doc);
            }
         }
        xhr.open('GET',videosCap);
        xhr.send(null);
        var fieldsEmpty = "";
        var part = "part=snippet";
  
        function getUrl(fields) {
         var url = videos + "?" + "key=" + apiKey + "&" + "id=" + videoID + "&" + fields + "&" + part;
         return url;
        }
  
            $.get(getUrl(fieldsEmpty), function(response) {
            var status = response.pageInfo.totalResults;
            var title;
        if (status) {
            $.get(getUrl(fieldsTitle), function(response) {
             title = response.items[0].snippet.title;
             $('#info').text(title);
                var url = "https://www.youtube.com/embed/" + videoID;
                $('#myIframe').attr('src', url)
            })
            } else {
             title = "Video doesn't exist";
             $('#info').text(title);
             $('#myIframe').attr('src', "");
            }
        });
        }, 1000);
    });

    var myTimer;

    function onPlayerStateChange(event){
        if(event.data==1) { // playing
            myTimer = setInterval(function(){ 
                var time;
                time = player.getCurrentTime();
                $("#timeHolder").text(time);
            }, 100);
        }
        else { // not playing
            clearInterval(myTimer);
        }
    }