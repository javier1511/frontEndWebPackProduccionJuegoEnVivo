import { ROLES } from "../models/Role"
import User from "../models/User"


export const checkDuplicateUsername = async(req, res, next) => {
    const user = await User.findOne({username:req.body.username})

    if(user) return res.status(400).json({message:'The user already exists'})

        next()
     
}

export const checkRolesExisted = (req, res, next) => {


    if(req.body.roles){
        for(let i = 0; i < req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({message:`Role ${req.body.roles[i]} doesnt not exits`})
            }

        }
    }
    next()
}


