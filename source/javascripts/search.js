$( document ).ready(function() {
	/**
	 * Enables search functionality (adds site:site_url to search request)
	 */
	$("body > nav > form").on("submit", function(event) {
		var $form = $(this);
		var site = $form.find("input[type=hidden]").val();
		var request = $form.find("input.search").val();
		$form.find("input.search").val(site + " " + request)
	});
});