const express =require('express')
const bodyParser =require('body-parser')
const cors =require('cors')
const env = require("dotenv").config()
const mongoose =require('mongoose')
const postRoutes = require('./routes/postRoutes.js')
mongoose.set('strictQuery', false)
const port = process.env.PORT || 5000;

const app =express();

app.use(express.json())
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());


app.use("/api/v1/posts",postRoutes )

const CONNECTION_URL = process.env.MONGO_URL;


//console.log(CONNECTION_URL);
app.listen(port,()=>console.log(`Server running on port :${port}`))
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log('Database connected Succesfully'))
.catch((error)=> console.log(error.message));
