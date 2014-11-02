(function($) {
$(document).ready(function () {

// Contact pull down panel
	$(".filter-btn").click(function(){
		$(".panel").slideToggle("slow");
		$(this).toggleClass("active");
		return false;
	});
	if (self.location.hash.match(/hfilter/)) {
		$(".filter-btn").trigger('click');
	}
	$('#gform_2').attr('action', $('#gform_2').attr('action') + '#hfilter');
	
});
})(jQuery);