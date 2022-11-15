const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 4040

app.use(express.static('js'))
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');


app.get('/',(req, res)=>{
    res.render('index',{
        nombre: "formulario"
    })
})

app.listen(port,() =>{
    console.log(`escuchando por el puerto http://localhost:${port}`)
})


