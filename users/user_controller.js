import user from './user_model.js';
import jwt from 'jsonwebtoken';

export {postUser, getUser, findById, updateUser, deleteUser, loginUser}

//Añadir un usuario nuevo.
const postUser = async (req,res)=>{
    const newUser = await user.create(req.body);
    res.status(200).json(newUser);
}

//Búsqueda por nombre de usuario. si no toda la lista
const getUser = async (req,res)=>{

    if (req.query.name) {
        const list = await user.find({
            name:req.query.name
        });
        res.json(list);
    }else {
        const list = await user.find({});
        res.json(list);
    };
};

//Búsqueda por id
const findById = async (req,res)=>{

    let findId = await user.findById(req.params.id);
    res.json (findId);
};

//Actualizar usuario
const updateUser = async (req,res)=>{

    await user.updateOne({name: req.query.name},{name:req.body.name})
    res.status(200).json('User name changes');
};

//Borrar un usuario
const deleteUser = async (req,res)=>{

    if(req.params.id){
        res.json(await user.deleteOne({_id:req.params.id}));
    };
};
//hola

const loginUser = async (req,res)=>{

    const findLog = await user.findOne({
        name: req.headers.name,
        password: req.headers.password,
    });
    if(findLog){
        const token = jwt.sign(req.headers.name,'ababaa');
        res.json(token);
    }else {
        res.status(401).json('');
    };
};



//const token =  jwt.sign(req.headers.email+req.headers.password,'secretKey')
