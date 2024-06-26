const prisma = require("../db/db.config.js");

const signUp = async(req,res)=>{
    try {
        const {name, email, password} = req.body;

        const newUser = await prisma.user.create({ data: { name, email,password } });
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "User not created due to internal server error"});   
    }
}

const AllUsers = async(req,res)=>{
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const findOneUser = async(req,res)=>{
    const { id } = req.params;
    try {
      const user = await prisma.user.findUnique({ where: { id: Number(id) } });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const updateUser = async(req,res)=>{
    const {id} = req.params;
    try {
        const {name, email, password} = req.body;
        const user = await prisma.user.update({where: {id:Number(id)},data:{name,email,password}});
        res.json(user);
    } catch (error) {
        res.json(error);
    }
}



const deleteUser = async(req,res)=>{
    const {id} = req.params;
    try {
        const deletedUser = await prisma.user.delete({where:{id:Number(id)}});
        res.json(deletedUser);
    } catch (error) {
        res.json(error);
    }
}

module.exports = {
    AllUsers,
    findOneUser,
    signUp,
    updateUser,
    deleteUser
};