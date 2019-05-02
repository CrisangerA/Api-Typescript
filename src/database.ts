import mongoose from 'mongoose';

export async function connect() {
     await mongoose.connect('mongodb+srv://pruebas:pruebas123456@bdpruebas-mnne7.mongodb.net/test?retryWrites=true', 
        {useNewUrlParser: true})
        .then(res => console.log('DB is coneced'))
        .catch(err => console.error(err));
}