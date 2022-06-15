import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
    fullName: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String},
    phoneNumber: [{type:Number}],
},{
    timestamps:true,
});

//Statics and Methods

UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({user: this._id.toString()}, "ToDo_App"); //secret key
}

UserSchema.statics.findByEmailAndPassword = async({email, password}) => {
    //check whether email exists
    const user = await UserModel.findOne({email});
    if(!user) throw new Error("User does not exist!");

    //compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if(!doesPasswordMatch) throw new Error("Invalid Password!");

    return user;
}

UserSchema.statics.findByEmailAndPhone = async ({email, phoneNumber}) => {
    const checkUserByEmail = await UserModel.findOne({email});
    const checkUserByPhone = await UserModel.findOne({phoneNumber});
    

    //check if mail already exists
    if(checkUserByEmail || checkUserByPhone){
        throw new Error("User already exists!");
    }
    return false;
}

//inside pre we cannot use arrow function
UserSchema.pre("save", function (next){
    const user = this;
    // password is modified
    if(!user.isModified("password")) return next();

    // password bcrypt salt
    //hash password
    bcrypt.genSalt(8, (error, salt)=> {
        if(error) return next(error);

        //hash the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);

            //assigning hashed password
            user.password = hash;
            return next();
        });
    });
});

export const UserModel = mongoose.model('Users', UserSchema);