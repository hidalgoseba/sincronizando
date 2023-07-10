const mongoose = require('mongoose');
const app = require('./app');

app.set('Port', 4000);



const URI = ('mongodb://localhost/portafolio');
        
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
    .then(db=>console.log('BD conectada con exito'))
    .catch(error=>console.log(error))

app.listen(app.get('Port'),() => {
    console.log('escuchando por el puerto', app.get('Port'));
})    

module.exports = mongoose;