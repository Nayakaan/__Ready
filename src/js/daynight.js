$(document).ready(function(){
  // Get Time
  var today = new Date();
  // Get Hour
  var hour = today.getHours();
  // Catch Images Divs
  let hut1 = document.querySelector('.hut-1');
  let hut2 = document.querySelector('.hut-2');
  let hut3 = document.querySelector('.hut-3');
  let hut4 = document.querySelector('.hut-4');
  let homePageImage = document.querySelector('.home-page');

  // Daytime - Images
  if (hour > 6 && hour < 20) {
      hut1.src = "img/day/hut-1.png";
      hut2.src = "img/day/hut-2.png";
      hut3.src = "img/day/hut-3.png";
      hut4.src = "img/day/hut-4.png";
      homePageImage.style.backgroundImage = 'url(img/day/dummybrief-mainpage.jpg)';
      
  // Nightime - Images
  } else {
      hut1.src = "img/night/hut-night-1.png";
      hut2.src = "img/night/hut-night-2.png";
      hut3.src = "img/night/hut-night-3.png";
      hut4.src = "img/night/hut-night-4.png";
      homePageImage.style.backgroundImage = 'url(img/night/dummybrief-mainpage-night.jpg)';
  }

});



