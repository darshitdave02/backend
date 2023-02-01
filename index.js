var http = require('http');
const PORT = 6000;

let db = [];

const server = http.createServer(function (req, res) {

  if(req.method == 'GET' && req.url == '/tasks')
  {
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.write(JSON.stringify(db));
  }

  else if(req.method == 'POST' && req.url == '/tasks')
  {

    let data = '';
    req.on('data', res => {
      data += res;
    });

    req.on('end', () => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      db.push(parsedData);
    });

    
    //res.write('Task added!');

  }
  
  else if(req.method == 'PATCH' && req.url == '/task/0')
  {
    let data = '';
    req.on('data', res => {
      data += res;
    });

    req.on('end', () => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      db = db.map((item) => {
        if(item.name === parsedData.name)
        {
          item.isCompleted = parsedData.isCompleted;
        }
        return item;
      });
    });
    
  }
  else if(req.method == 'DELETE' && req.url == '/task/0')
  {
    let id = req.url.split('/')[2];

    db = db.filter((item,idx) => idx!==id );


    
  }

    
    
  
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);

});

// http.get('http://jsonplaceholder.typicode.com/todos/', (res) => {
 

//   let rawData = '';

//   res.on('data', chunk => {
//     rawData += chunk;
//   });
    
//   res.on('end', () => {
//     const parsedData = JSON.parse(rawData);
//     console.log(parsedData);
//   });

// });
