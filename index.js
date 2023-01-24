var http = require('http');
const PORT = 3000;

const server = http.createServer(function (req, res) {
  res.write('Hello World!'); 
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);

});

http.get('http://jsonplaceholder.typicode.com/todos/', (res) => {
 

  let rawData = '';

  res.on('data', chunk => {
    rawData += chunk;
  });
    
  res.on('end', () => {
    const parsedData = JSON.parse(rawData);
    console.log(parsedData);
  });

});
