import MongoClient from 'mongodb';

//create database
export async function connect() {
    try {
        const client= await MongoClient.connect('mongodb://localhost:27017', {
            useUnifiedTopology : true
        })
        const db = client.db('node-usuarios');
        console.log('DB is connected');
        return db;
    } catch(e){
        console.log(e);
    }
    
}
