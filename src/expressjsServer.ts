import  express  from "express";

const app = express();
const port = process.env.PORT || 3000 ;

app.get('/get',(req,res)=>{
    res.send("Hello from express Server ")
})

app.listen(port,()=>{
    console.log('Server listing on port 3000')
});