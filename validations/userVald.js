import joi from "joi";

module.exports={

    validation : (data) => {

        const schema=Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().email().required(),
        firstname:Joi.string().required(),
        lastname:Joi.string().required(),
        phonenumber:Joi.string().required()
        });
        return Joi.validate(data,schema);
    }
};