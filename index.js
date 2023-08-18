let myhttp = require("http");
let myserver = myhttp.createServer(
  function(myrequest, myresponse) {
    console.log(myrequest.url);
    let mytext;
    myresponse.writeHead(200, {"Content-Type": "text/plain"});
    if(myrequest.url === "/home") mytext="Welcome home!";
    else mytext="Hello world!";
    myresponse.end(mytext);
  }
);
myserver.listen(8080, "0.0.0.0");
console.log("server has started");
