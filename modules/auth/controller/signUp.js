const userModel = require("../../../DB/model/user");

const  {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode
} = require('http-status-codes');
const signUp = async (req, res) => {
    try {
        const { name, email, age, phone, password } = req.body;
        const newUser = new userModel({name, email, age, phone, password});
        const savedUser = await newUser.save();
        res.status(StatusCodes.CREATED).json({message: "Done", savedUser});
    } catch (error) {
        if (error.keyValue) {
            if(error.keyValue.email){
                res.status(StatusCodes.FORBIDDEN).json({message: "email exist" , status:getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)});
            }
        } else {
            console.log(error);
            res.json({message: "catch err ", error})
        }

    }

}

module.exports = { signUp }