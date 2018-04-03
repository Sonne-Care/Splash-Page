// @codekit-prepend "home.js"

function formstone(){
  $('.background').background({
    lazy: true
  });
  $('.carousel').carousel();
  $('.swap').swap();  
  $("select:not(#productSelect, .dropdown-disable)").dropdown({
    theme: 'fs-light'
  });
  $(".sticky").sticky();
  $(".lightbox").lightbox();
}

function infinite(){
  if ($($('#collection-items')).length) {
    var infScroll = new InfiniteScroll( '#collection-items', {
      path: '.pagination .next a',
      append: '.product-item',
      checkLastPage: true,
      prefill: false,
      responseType: 'document',
      outlayer: false,
      scrollThreshold: 400,
      elementScroll: false,
      loadOnScroll: true,
      history: 'replace',
      historyTitle: true,
      hideNav: undefined,
      status: undefined,
      button: undefined,
      onInit: undefined,
      debug: false,
    });
  }
}

function init(){
  formstone();
  infinite();
  feather.replace({
    'stroke-width': 1,
  });
}

init();