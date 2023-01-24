var http = require("http");
const PORT = 3000;

const server = http.createServer(function (req, res) {
    res.write("Hello World!"); 
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);

});