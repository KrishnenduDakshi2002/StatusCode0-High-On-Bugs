import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserData } from './interface/user.interface';
import { User } from './schemas/user.schema';

@Injectable()
export class UserAuthenticationService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async getUser(email: string, sub: string) {
    const existingUser: UserData[] = await this.UserModel.aggregate([
      {
        $match: {
          email,
          sub,
        },
      },
    ]);
    return existingUser[0];
  }

  async createUser(
    email: string,
    emailVerified: boolean,
    name: string,
    picture: string,
    sub: string
  ): Promise<UserData> {
    const newUser = new this.UserModel({
      email,
      email_verified: emailVerified,
      name,
      picture,
      sub,
    });
    const result = await newUser.save();
    return result;
  }

  async updateWalletAddress(
    email: string,
    sub: string,
    walletId: string
  ): Promise<UserData> {
    const updatedUser: UserData[] = await this.UserModel.aggregate([
      {
        $set: {
          wallet: walletId,
        },
      },
    ]);
    return updatedUser[0];
  }
}
