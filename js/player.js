
$(document).ready(function(){


  var playlist = [{
      title:"Field",
      artist:"Siadic",
      mp3:"./images/Siadic-field.wav",
      poster: "./images/siadic-field-2016.jpeg"
    }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3, wav"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});
