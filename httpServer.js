const http = require('http');
const fs = require('fs');

const port = 8090;
const server = http.createServer((req , res)=>{
    if(req.url==='/'){
        res.write('welcome page');
        res.end()
    }
    else if(req.url ==='/about'){
        res.write(`<html>
                <head></head>
                <body>
                        <h1>this is heading 1</h1>
                        <h2>this is heading 2 </h2>
                </body>
            </html>`)
            res.end()


    }
    else if(req.url ==='/contact'){
        let ans = fs.readFileSync('pages/trial.html', 'utf-8');
        res.write(ans);
        res.end()
    }

    else if(req.url === '/products'){
        let arr = [
            {name:"iphone", price:80000, rating:5},
            {name:"MI", price:30000, rating:4},
            {name:"Real me", price:40000, rating:3},
            {name:"Oppo", price:50000, rating:2},
        ]

        res.write(JSON.stringify(arr))
        res.end()
    }
})


server.listen(port , ()=>{
    console.log('server is running')
})

