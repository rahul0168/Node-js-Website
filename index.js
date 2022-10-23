
const http = require('node:http');
const port = 8000;
const fs = require('fs');
const { request } = require('node:http');
function requestHandler(req, res)
{
    console.log(req.url);
     res.writeHead(200,{'content-type':'text/html'});
     
     let filePath;
     switch(req.url){
        case'/home':
        filePath = './index.html'
        break;
        case '/profile':
            filePath = './profile.html'
            break;
        default:
            filePath = './404.html'
            break;

     }

     fs.readFile(filePath, function(err, data){
        if(err){
                console.log('error',err);
             return  res.end('<h1 style="color:red;">error</h1>');
        }

        return res.end(data);

     });
    //  fs.readFile('./file.txt', (err, data)=>{
    //     if(err) {
    //         console.log("Inside gets printed.");
    //     }
    //     console.log("Outside gets printed.");
    //     });
    //  fs.readFile('index.html',function(err,data){
    //   if(err){
    //     console.log('error',err);
    //  return  res.end('<h1 style="color:red;">error</h1>');


    //   }
    //   return res.end(data);
    //  });
    //res.end('<h1 style="color:red;">gotcha</h1>');
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){

    if(err)
    {
        console.log(err);
        return;

    }

    console.log("serve is up and runing on port", port);
});

// const http = require('node:http'); const port = 3000; const server = http.createServer(); server.listen(port, function(err){ console.log("Server is up and running on port:", port); });