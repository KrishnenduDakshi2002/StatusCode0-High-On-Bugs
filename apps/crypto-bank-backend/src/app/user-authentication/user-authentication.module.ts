import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserAuthenticationController } from './user-authentication.controller';
import { UserAuthenticationService } from './user-authentication.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserAuthenticationController],
  providers: [UserAuthenticationService],
})
export class UserAuthenticationModule {}
