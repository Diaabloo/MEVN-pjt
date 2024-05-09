const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, 'firstName required'],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, 'lastName required'],
    },
    email: {
      type: String,
      required: [true, 'email required'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password required'],
      minlength: [6, 'Too short password'],
    },
    role: {
      type: String,
      enum: ['Adjoint', 'Admin', 'Infirmier', 'Pharmacie','Ingenieur','Medcin','Technicien'],
    },
  });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  // Hashing user password
   this.password = await bcrypt.hash(this.password, 12);
   next();
});


const User = mongoose.model('User', userSchema);

module.exports = User;