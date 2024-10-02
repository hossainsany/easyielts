import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI not defined');
}

export async function connect() {
    try {
        await mongoose.connect(MONGODB_URI);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB Connected Successfully');
        });

        connection.on('error', (err) => {
            console.log('MongoDB Connection Error.' + err);
            process.exit;
        });
    } catch (err) {
        console.log('Something went wrong.' + err.message);
    }
}
