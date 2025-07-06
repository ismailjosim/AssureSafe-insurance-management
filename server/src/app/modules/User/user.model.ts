import { Schema } from 'mongoose';

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      require: [true, 'User Name Is Required'],
      email: { type: String, required: true, unique: true },
      password: { type: String, select: false }, // Store hashed password, 'select: false' by default won't return password in queries
      role: {
        type: String,
        enum: ['admin', 'agent', 'customer'],
        default: 'customer',
        required: true,
      },
      photoUrl: { type: String, default: '' },
      lastLogin: { type: Date, default: Date.now },
      status: { type: Boolean, default: true },
      registrationDate: { type: Date, default: Date.now },
      isDeleted: { type: Boolean, default: false },
    },
  },
  {
    timestamps: true,
  },
);
