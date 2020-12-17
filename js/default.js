$(document).ready(function(){
	//code here...
	var editor = CodeMirror.getElementById("preview-comment", {
		value:"function",
		mode:"clike",
		lineNumbers : true,
		theme :"ambiance"
	});

	//when form submitted
	$("#preview-form").submit(function(e){
		var value = editor.getValue();
		if(value.length == 0) {
			alert("Missing comment!");
		}
	});
});