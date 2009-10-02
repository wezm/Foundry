jQuery(function($)
{
  var container = $('.layout');

  function relayout() {
    container.layout({resize: false});
  }
  relayout();

  $(window).resize(relayout);


  $('h2').addClass('dontend');
  $('.body').columnize({
    width : 300,
    lastNeverTallest: true
    // height : 400
  });
});
