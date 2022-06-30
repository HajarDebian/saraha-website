const { Roles } = require("../../midlwear/auth");

const endPoint ={
    profile : [Roles.Admin , Roles.User],
    delete : [Roles.Admin],
    allUsers:[Roles.Admin]
}

module.exports = endPoint;