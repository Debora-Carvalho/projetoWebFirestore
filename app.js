const express = require('express')
const app = express()
const handlebars = require('express-handlebars').engine
const bodyParser = require('body-parser')
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const serviceAccount = require('./projetodsw-140ae-firebase-adminsdk-u6rbe-30cbb9c1f5.json');

initializeApp({
    credential: cert(serviceAccount)
})
  

const db = getFirestore()

app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req,res){
    res.render('primeira_pagina')
})

app.listen(8081, function(){
    console.log("Servidor ativo!")
})