var net = require('net');
var host = 'localhost';
var port = 1337 ;


var client = new net.Socket();
client.connect(port, host, function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});