import googleOAuth from "passport-google-oauth20";

import { UserModel } from "../database/allModels";

require("dotenv").config();

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/auth/google/callback",
      },

      //after authenticating with google you will get these values
      async (accessToken, refreshToken, profile, done) => {
        //creating a new user object

        const newUser = {
          fullName: profile.displayName,
          email: profile.emails[0].value,
          profilePic: profile.photos[0].value,
          verified: true,
        };

        try {
          // check if the user exists
          const user = await UserModel.findOne({
            email: newUser.email,
          });

          if (user) {
            // generate token
            const token = user.generateJwtToken();

            // return user
            done(null, { user, token });
          } else {
            // create new user
            const user = await UserModel.create(newUser);

            //generate token
            const token = user.generateJwtToken();

            //return user
            done(null, { user, token });
          }
        } catch (error) {
          done(error, null);
        }
      }
    )
  );

  passport.serializeUser((userData, done) => done(null, { ...userData }));
  passport.deserializeUser((id, done) => done(null, id));
};
