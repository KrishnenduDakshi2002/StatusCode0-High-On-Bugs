import { Body, Controller, Get, Patch, Post, UsePipes } from '@nestjs/common';
import { MessageType, message } from '../../utility/message';
import { UserData } from './interface/user.interface';
import {
  userValidationSchema,
  walletValidationSchema,
} from './pipe/user.validation.schema';
import { JoiValidationPipe } from './pipe/validation.pipe';
import { UserAuthenticationService } from './user-authentication.service';

@Controller('auth')
export class UserAuthenticationController {
  constructor(private readonly userAuthService: UserAuthenticationService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(userValidationSchema))
  async registerUser(
    @Body() userData: Omit<UserData, '_id'>
  ): Promise<MessageType> {
    const existingUser = await this.userAuthService.getUser(
      userData.email,
      userData.sub
    );
    if (existingUser) {
      return message(200, 'User already exists', existingUser);
    }
    const response = await this.userAuthService.createUser(
      userData.email,
      userData.email_verified,
      userData.name,
      userData.picture,
      userData.sub
    );
    return message(201, 'User created successfully', response);
  }

  @Patch('update/wallet')
  @UsePipes(new JoiValidationPipe(walletValidationSchema))
  async updateWalletAddress(
    @Body() walletData: { wallet: string; email: string; sub: string }
  ) {
    try {
      const existingUser = await this.userAuthService.getUser(
        walletData.email,
        walletData.sub
      );
      if (!existingUser) {
        return message(404, 'User not found');
      }
      const updatedUser = await this.userAuthService.updateWalletAddress(
        walletData.email,
        walletData.sub,
        walletData.wallet
      );
      return message(200, 'Wallet address updated successfully', updatedUser);
    } catch (error) {
      return message(500, 'Internal server error', error);
    }
  }
}
