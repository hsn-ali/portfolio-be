import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Mongo DB Connected !');
        });
        connection.on('error', (err) => {
            console.log('Mongo DB Connection Failed ! ' + err);
            process.exit();
        });
    } catch (error) {
        console.log('Something went wrong while connecting to db');
        console.log(error)
    }
}