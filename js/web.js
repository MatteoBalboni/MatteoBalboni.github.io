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


	$('#single-block').click(function(){
		$.get( 'https://api.blockcypher.com/v1/btc/main/blocks/' +$('#input').val(), function(data) {
				var a = '';
			if(data.error != undefined){
				a += data.error;
			}
			else{
				a += '</p><h3> Details of the block</h3> <table class="table">' +
				'<tr><th>Hash</th><td> '+data.hash+'</td></tr> <tr><th>Height</th><td>'+data.height
				+'</td></tr> <tr><th>Date</th><td>'+data.time +'</td></tr> <tr><th>Size (bytes)</th><td>'
				 +data.size + '</td></tr> </table> ';
			}
			$('#result').html( a );
			});
	});


	$('#transaction').click(function(){
		$.get( 'https://api.blockcypher.com/v1/btc/main/txs/' +$('#input1').val(), function(data) {
				var b = '';
			if(data.error != undefined){
				b += data.error;
			}
			else{
				b +='</p><h3> Details of the transaction</h3> <table class="table">' +
				'<tr><th>Hash</th><td>'+data.hash+'</td></tr> <tr><th>Date</th><td>'+data.time +
				'</td></tr> <tr><th>Size (bytes)</th><td>' +data.size  
				+'</td></tr> <tr><th>Height (-1 if not validated)</th><td>' + data.block_height 
				+ '</td></tr> <tr><th>Hash of the black (bytes)</th><td>' + data.block_hash + '</td></tr> </table> ';

			}
			$('#result').html( b );
			});
	});


	$('#address').click(function(){
		$.get( 'https://api.blockcypher.com/v1/btc/main/addrs/' +$('#input2').val(), function(data) {
				var c = '';
			if(data.error != undefined){
				c += data.error;
			}
			else{
				c +="</p><h3> Details of the address</h3> <table class='table'>" 
				+'<tr><th>Adress</th><td>'+data.address +'</td></tr> <tr><th>Number of satoshis received</th><td>'
				+data.total_received +'</td></tr> <tr><th>Number of satoshis sent</th><td>'+ data.total_sent  
				+'</td></tr> <tr><th>Balance</th><td>'+data.balance +'</td></tr> <tr><th>Number of associated transactions</th><td>'
				+ data.n_tx + '</td></tr> </table> ';

			}
			$('#result').html( c );
			});
	});
});