jQuery(document).ready(function( $ ){
	$.getJSON('https://api.bedrockinfo.com/v2/status?server=smp.worldofsteelcraft.tk&port=49714', function(data) {      
		$('#hostname').text(data.HostName);
		$('#port').text(data.IPv4Port);
		$('#version').text(data.Version);
		$('#mapname').text(data.LevelName);
		$('#isonline').text(data.Online);
		$('#playeronline').text(data.Players);
		$('#playermax').text(data.MaxPlayers);
		$('#motd').text(data.ServerName);
	});
});
