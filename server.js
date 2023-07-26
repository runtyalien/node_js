const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
  console.log(req.url, req.method, req.headers);
  /*res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>'); // Fixed the closing head tag
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');*/
  

  if(url === '/home'){
    res.setHeader('Content-Type', 'text/html');  
  res.write('<h1>Welcome Home</h1>');
  
    
  }
    else if(url === '/about'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Welcome to About Us page</h1>');
  }

  else if(url === '/node'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Welcome to my NodeJS Project</h1>');
    }

    res.end();
});

server.listen(4000);
