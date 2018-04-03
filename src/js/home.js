function scene_1(){
  $('.home-scene--one').addClass('active');
  setTimeout(function(){
    //$('.home-scene--one').remove();
  }, 1000);
}

function scene_2(){
  $('.home-scene--two').addClass('active');
  $('.home-scene-image').addClass('active');
  setTimeout(function(){
    $('.subscribe').addClass('active');
  }, 600);
}

function splash(){
  setTimeout(function(){
    scene_1(); 
  }, 2500);
  setTimeout(function(){
    scene_2();
  }, 2500);
}

splash()