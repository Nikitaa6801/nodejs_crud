const express =require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')

const homeRouter = require('./src/router/homeRouter')



mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://ravimude:ajay7777@cluster0.thi8yzl.mongodb.net/studentrecord?retryWrites=true&w=majority')
.then(()=>{ console.log('connected with db')})
.catch(()=>{ console.log( 'not connected with db')})

const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/', homeRouter)
app.listen(PORT, ()=>{ console.log('server is runnig ')})