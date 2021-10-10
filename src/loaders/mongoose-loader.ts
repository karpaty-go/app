import mongoose from 'mongoose';
import {DATABASE_URL} from '../config'

export default async (): Promise<any> => {
    mongoose.connect(DATABASE_URL, { useNewUrlParser: true,
        useFindAndModify:false,
        useUnifiedTopology: true 
      
      }, (err: any) => {
    if (err) {
    console.log(err, 'Error while connecting to MongoDB')
    } else {
    console.log('Connected to MongoDB')
    }
    })
}