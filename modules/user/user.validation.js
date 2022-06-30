const Joi = require('joi');

const getUserValidator = {
    params:Joi.object().required().keys({
        id: Joi.string().min(20).max(30).required()
    })
}

const deleteByAdminValidator = {
    params:Joi.object().required().keys({
        id: Joi.string().min(20).max(30).required()
    })
}

const updateUserValidator = {
    body: Joi.object().required().keys({ 
        name: Joi.string().required().pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/)).messages({
            'string.empty': 'plz fill in u name',
            'any.required': 'plz send  u name',
            'string.pattern.base': 'plz enter valid name char'
        }),
        phone: Joi.string().required()
        
    })
}

module.exports={
    getUserValidator,
    updateUserValidator,
    deleteByAdminValidator
}