const { Roles } = require("../../midlwear/auth");

const endPoint =  {
    deleteMessage :[Roles.Admin , Roles.User],
    profileMessages : [ Roles.User , Roles.Admin]
}

module.exports = endPoint;