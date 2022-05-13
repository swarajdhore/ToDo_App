import joi from "joi";


export const ValidateSignup = (userData) => {
    const Schema = joi.object({
        fullName: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(5),
        phoneNumber: joi.number()
    });

    return Schema.validateAsync(userData);
};

export const ValidateLogin = (userData) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(5).required(),
    });

    return Schema.validateAsync(userData);
};