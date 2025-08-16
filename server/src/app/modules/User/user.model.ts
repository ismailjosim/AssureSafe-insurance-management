import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      min: 5,
      max: 20,
      require: [true, 'User Name Is Required'],
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      validate: {
        validator: function (val: any) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        },
        message: (props: any) => `${props.value} is not valid`,
      },
    },
    password: {
      type: String,
      select: false,
    }, // Store hashed password, 'select: false' by default won't return password in queries
    role: {
      type: String,
      enum: {
        values: ['admin', 'agent', 'customer'],
        message: '{VALUE} is not a valid role',
      },
      default: 'customer',
      required: true,
    },
    photoUrl: {
      type: String,
      default: '',
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: Boolean,
      default: true,
    },
    registrationDate: {
      type: Date,
      default: Date.now,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  },
);

export const UserModel = model<IUser>('users', UserSchema);
