import Joi from "joi";

const validation = {
        user:Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        firstname:Joi.string().required(),
        lastname:Joi.string().required(),
        phonenumber:Joi.string().required()
        }),
        meetup: Joi.object().keys({
                topic: Joi.string().min(3).max(100).required(),
                location: Joi.string().min(3).max(100).required(),
                happeningOn: Joi.string().required(),
                tags: Joi.required()
                  }),
        question:Joi.object().keys({
                        title: Joi.string().min(3).required(),
                        body: Joi.string().min(3).required()
                        
                          })
       
};
export default validation;