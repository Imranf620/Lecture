const User = require("./userModel")

exports.createUser = async  (req, res) => {
    const user = await User.create(req.body)
    
    return res.json({
        success:true,
        message:"User created successfully",
        user
    })
}


exports.getUsers = async (req, res) => {

    const users = await User.find()

    return res.json({

        succes:true,
        users
    }
    )
}

exports.getSingleUser = async (req, res) => {

    const singleUser = await User.findById(req.params.id)

     return res.json({

        succes:true,
        singleUser
    }
    )
}

exports.getSingleUser = async (req, res) => {

    const singleUser = await User.findById(req.params.id)

     return res.json({

        succes:true,
        singleUser
    }
    )
}

exports.deleteUser = async (req, res) => {

     await User.findByIdAndDelete(req.params.id)

     return res.json({

        succes:true,
        message:"User deleted successfully"
    }
    )
}

