const http = require('http')

const server = http.createServer((req,res)=>{
  if(req.url === '/') {
    res.end('Hello World broooWWW');
  } 
  if(req.url === '/about'){
    res.end('here is about page');
  }
  res.end(`
    <h1>OOPS<h1>
    <p>We can't seem to find the page</p>
    <a href="/">back to home</a>
   `)
})

server.listen(5000)