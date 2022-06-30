const { auth } = require('../../midlwear/auth');
const { validation } = require('../../midlwear/validation');
const { updateUser } = require('./controller/profile');
const { deleteUserAdmin } = require('./controller/profile');
const { getDeletedUsers } = require('./controller/profile');
const { deleteUserByOwner } = require('./controller/profile');
const { getUserById } = require('./controller/profile');
const { displayAllUsers } = require('./controller/profile');
const { displayProfile, messagesList } = require('./controller/profile');
const endPoint = require('./user.endPoint');
const { getUserValidator, updateUserValidator, deleteByAdminValidator } = require('./user.validation');
const router = require('express').Router();

router.get('/user' , auth(endPoint.profile) , displayProfile )

router.get('/user/:id' , validation(getUserValidator) ,getUserById)

router.get("/users" , auth(endPoint.allUsers) , displayAllUsers)

router.patch("/user" , validation(updateUserValidator) ,auth(endPoint.profile) , updateUser)

router.delete('/user/:id' ,validation(deleteByAdminValidator) ,auth(endPoint.delete) ,deleteUserAdmin)

router.delete('/user', auth(endPoint.profile) , deleteUserByOwner)

//router.get('/deletedusers' , auth(endPoint.allUsers) , getDeletedUsers)

module.exports = router;