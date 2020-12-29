
function load_home(page) {
	document.getElementById("Inhalt"+page).innerHTML='<object class="object-fit_container" type="text/html" data="Level'+page+'.html" ></object>';
}

function download(file){
	var url="LevelHTMLDokumente.zip";
	window.open(url, '_blank');
};

function toggleDiv(divNum) {
	$("#close").hide();
	$(".slide").animate({
		right: '-100%'
		}, 350);
	$(".slide1").animate({
		right: '-100%'
		}, 350);
	if ($("#div" + divNum)) {
		$("#div" + divNum).animate({
			right: '0'
			}, 350, function() {
				$("#close").show();
			});
	}
}

$(document).ready(function() {
	$("#close").on("click", function(e) {
		$(".slide").animate({
			right: '-200'
		}, 350);
		$(this).hide()
	})
});
