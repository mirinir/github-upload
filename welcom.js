const express = require('express');
const app = express();
// const tokensRouter = require('./api/routes/tokens');
const bodyParser = require('body-parser');
const citiesAndDate = require('./Api/controller/getApi')
const cors = require('cors');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
    defer: true
}));
// app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));
app.use(cors());

// app.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     if(req.method==="OPTIONS"){
//         res.header("Access-Control-Allow-Methods","PUT, POST, PATCH, DELETE, GET");
//         return res.status(200).json({});
//     }
//     next();
// });

app.use('/',citiesAndDate)

// app.use((req, res, next)=>{
//     const error= new Error('Not Found');
//     error.status=404;
//     next(error);
// });

// app.use((error,req,res,next)=>{
//     res.status(error.status || 500);
//     res.json({
//         error:{
//             messa1ge: error.message
//         }
//     })
// })



app.listen(3005,()=>{console.log("success")})