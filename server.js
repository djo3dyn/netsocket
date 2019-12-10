/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp 
server, but for some reason omit a client connecting to it.  I added an 
example at the bottom.
Save the following server in example.js:
*/

var net = require('net');
var host = 'localhost';
var port = 1337 ;

const server = net.createServer((c) => {
	// 'connection' listener
	console.log('client connected');
	console.log(c.address());
	c.on('end', () => {
	  console.log('client disconnected');
	});
	c.write('hello\r\n');
	//c.pipe(c);

	c.on('data', (data) => {
		console.log('data received : '+data);
	  });

  });
  server.on('error', (err) => {
	throw err;
  });
  server.listen(port, () => {
	console.log('server bound on :',server.address());
  });