$(document).ready(function() {
	$.ajax({
		url : "https://bitcoin.mubiz.com/blocks",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#number_blocks').append(data.blocks);
		},

		error : function(xhr, status, err) {
			$('#number_blocks').append(err+" N/A");
		}
	});
});