var cover;
var winWidth = window.innerWidth;
var htmlBody;
var aspectRatio = 618/980;

window.onload = function(){
  cover = document.getElementById('background-image');
  resize();
};

window.onresize = function(){
  winWidth = window.innerWidth;
  resize();
};


function resize(){
  if(winWidth <= 980){
    cover.style.height = (winWidth * aspectRatio) + 'px';
  } else {
    cover.style.height = 618 + 'px';
  }
  
  if(winWidth <= 460){
    goTo = "footer-text";
  } else {
    goTo = "article-container";
  }
}

var isWebkit = (window.webkitURL !== null);
var goTo = "article-container";

function jumpTo(){
  if (isWebkit) {
      window.location.hash = goTo;
  } else {
      window.location.href = goTo;
      window.location.href = goTo;
  }
}