import { Schema, models, model } from "mongoose";
import next from "next";
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {
    type: String, 
    required: true, 
    validate: pass => {
      if(!pass?.length || pass.length < 5) {
        new Error('Password must be at least 5 characters');
      }
    },
  },
}, {timestamps: true});

UserSchema.post('validate', function(user){
  const notHashedPassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(notHashedPassword, salt);
  user.password = hashedPassword;
})

//exportamos si existe el usuario y si no lo creamos
export const User = models?.User || model('User', UserSchema);