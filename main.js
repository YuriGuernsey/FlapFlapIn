var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/phaser.min.js', function(req, res) {
    res.sendFile(__dirname + '/phaser.min.js');
});
app.get('/main.js', function(req, res) {
    res.sendFile(__dirname + '/main.js');
});

app.get('/assets/bird.png', function(req, res) {
    res.sendFile(__dirname + '/assets/bird.png');
});
app.get('/assets/pipe.png', function(req, res) {
    res.sendFile(__dirname + '/assets/pipe.png');
});
app.get('/assets/jump.wav', function(req, res) {
    res.sendFile(__dirname + '/assets/jump.wav');
});

io.on('connection', function(socket) {
    socket.emit('announcements', { message: 'A new user has joined!' });
});
server.listen(8080);