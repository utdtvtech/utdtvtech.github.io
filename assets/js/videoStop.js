
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {
            height: '293',
            width: '520',
            videoId: 'zXV8GMSc5Vg',
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
        player2 = new YT.Player('player2', {
            height: '293',
            width: '520',
            videoId: 'LTy0TzA_4DQ',
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }
    
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            stopVideo(event.target.a.id);
        }
    }
    
    function stopVideo(player_id) {
        if (player_id == "player1") {
            player2.stopVideo();
        } else if (player_id == "player2") {
            player1.stopVideo();
        }
    }
