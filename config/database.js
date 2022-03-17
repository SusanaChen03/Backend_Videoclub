

import mongoose from 'mongoose';


const connection = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/videoclub')
        { useNewUrlParser: true;
        useUnifiedTopology: true;
        console.log("Servidor de mongo escuchando")};
    } catch (error) {
        console.log(error)
    };
};
export default connection;









/*mongoose.connect('mongodb://localhost:27017/videoclub',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("Servidor de mongo escuchando")).catch((error)=>{console.log(error)});*/