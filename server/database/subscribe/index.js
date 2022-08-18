import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SubscribeSchema = new mongoose.Schema(
  {
    email: {type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
  },
  {
    timestamps: true,
  }
);

export const SubscribeModel = mongoose.model("Subscribe", SubscribeSchema);