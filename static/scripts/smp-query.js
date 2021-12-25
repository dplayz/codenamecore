jQuery(document).ready(function( $ ){
	$.getJSON('https://api.mcsrvstat.us/bedrock/2/smp.worldofsteelcraft.tk:25733', function(data) {      
		$('#hostname').text(data.hostname);
		$('#port').text(data.port);
		$('#version').text(data.version);
		$('#mapname').text(data.map);
		$('#isonline').text(data.online);
		$('#playeronline').text(data.players.online);
		$('#playermax').text(data.players.max);
		$('#motd').text(data.motd.html[0]);
	});
});