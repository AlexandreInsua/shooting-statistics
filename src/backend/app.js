const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const routes = require("./src/routes/routes");
var mongoose = require('mongoose');
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use( (req, res, next) => {
	//permitimos que las peticiones se puedan hacer desde cualquier sitio
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
	// configuramos las cabeceras que pueden llegar
	res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' );
	// configuramos los métodos que nos pueden llegar
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next(); // para que se salga de esta función
})

// app.use(cors());

app.use(routes);
console.log("Starting web service shooting statistics...")
console.log("Connecting database... ");
mongoose.connect('mongodb://localhost/shootingStats', {useNewUrlParser:true, useUnifiedTopology:true}, (err, res)=>{
    if (err){
        throw err;
    } else {
        console.log("Database connected ... ");
        app.listen(port, ()=> console.log(`API LISTENING ON PORT ${port}`));
    }
});
