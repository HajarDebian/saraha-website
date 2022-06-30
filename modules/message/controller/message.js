const messageModel = require('../../../DB/model/message');

const recieverMessagesList = async (req, res) => {
    try {
        const message = await messageModel.find({reciverId:req.user._id}).populate([{
            path: "reciverId",
            select: "name email"
        }, {
            path: "senderId",
            select: "name email"
        }]);;
        res.json({ message: "Done" ,message});
    } catch (error) {
        res.json({ message: "catch errr", error });
    }

}

const senderMessagesList = async (req, res) => {
    try {
        const message = await messageModel.find({senderId:req.user._id}).populate([{
            path: "reciverId",
            select: "name email"
        }, {
            path: "senderId",
            select: "name email"
        }]);
        res.json({ message: "Done", message });
    } catch (error) {
        console.log(error);
        res.json({ message: "catch errr", error });
    }

}

const sendMessage = async (req, res) => {
    const { id } = req.params;
    const { messageBody } = req.body;
    const { senderId } = req.query
    const user = await userModel.findById(id).select("name email");

    if (user) {
        if (senderId) {
            const senderUser = await userModel.findById(senderId);
            if (senderUser) {

                const message = await messageModel.insertMany({ messageBody, reciverId: user._id, senderId })
                res.json({ message: "Done", message })
            } else {
                res.json({ message: "invalid - login user" })
            }
        } else {

            const message = await messageModel.insertMany({ messageBody, reciverId: user._id })
            res.json({ message: "Done", message })
        }
    } else {
        res.json({ message: "in-valid user account" });
    }
}


const deletMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const message = await messageModel.deleteOne({ _id: id, reciverId: req.user._id });
        res.json({ message: "Done", message });
    } catch (error) {
        res.json({ message: "catch error", error });

    }
}

module.exports = {
    sendMessage,
    deletMessage,
    recieverMessagesList,
    senderMessagesList
}