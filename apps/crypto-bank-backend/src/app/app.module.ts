import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://crypto-bank-db-user-std0:jKQjabZIHYBouDT6@testcluster.mcb49vu.mongodb.net/HighOnBugs?retryWrites=true&w=majority'
    ),
    UserAuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
