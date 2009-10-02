jQuery(function($)
{
	var container = $('.layout');

	function relayout() {
		container.layout({resize: false});
	}
	relayout();

	$(window).resize(relayout);
});
