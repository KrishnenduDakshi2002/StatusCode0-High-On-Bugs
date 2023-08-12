import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  email_verified: boolean;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  picture: string;

  @Prop({ required: true })
  sub: string;

  @Prop()
  wallet: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
