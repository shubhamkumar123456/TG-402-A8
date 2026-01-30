import express from 'express';
const app = express();
const port = 8090;


// middleware --> middlware are functions that have the access of requesting to an object , responding to an object. they can also modify the request and response 


// custom middleware
app.use((req, res , next)=>{
    console.log("this is middleware")
    next()
})

app.use(express.json()) // middleware (used to parse Data)
app.get('/', (req, res)=>{
    res.send('welcome page')
})

app.get('/products', (req,res)=>{
     let arr = [
            {name:"iphone", price:80000, rating:5},
            {name:"MI", price:30000, rating:4},
            {name:"Real me", price:40000, rating:3},
            {name:"Oppo", price:50000, rating:2},
        ]

        res.json({products:arr})
})

app.post('/register', (req, res)=>{
    console.log(req.body)
    res.send("all good")
})



app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})