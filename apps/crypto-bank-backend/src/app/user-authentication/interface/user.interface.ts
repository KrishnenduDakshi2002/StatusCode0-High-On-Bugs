import mongoose from 'mongoose';

export interface UserData {
  _id: mongoose.Types.ObjectId;
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
  sub: string;
}

export enum UserDataType {
  EMAIL = 'email',
  EMAIL_VERIFIED = 'email_verified',
  NAME = 'name',
  PICTURE = 'picture',
  SUB = 'sub',
}
