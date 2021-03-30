const userController =  {
    getAll : (req,res) => {
        return res
        .status(200)
        .json({success:true,message:"well done"})
    },

    getById : (req,res) => {
        const {id} = req.params;
        return res
        .status(200)
        .json({success:true,message:`well done ${id}`})
    },
    create : (req,res) => {
        const {id,firstName,lastName} = req.body;
        const userPayload = {
            id,
            firstName,
            lastName
        }
        return res
        .status(200)
        .json({success:true,message:`well done ${id}`,data:userPayload})
    }
}
module.exports = userController