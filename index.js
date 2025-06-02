import express from 'express'
const app = express()
app.listen(8080,() => {
    console.log("Server Started");
});

app.get("/",(req, res)=> {
    return res.send("Hello World");
});

app.get("/greet",(req,res)=>(res.send("greetings")))

app.get("/name",(req,res)=>(res.send("varshitha")))

app.get("/wheather",(req,res)=>(res.send("30degree")))