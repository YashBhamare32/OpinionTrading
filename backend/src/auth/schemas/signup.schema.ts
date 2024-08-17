import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Users extends Document {
  @Prop({ required: true , unique : true})
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true , unique:true })
  mobile: number;

  @Prop({ required: true , unique:true })
  email: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

}

export const UserSchema = SchemaFactory.createForClass(Users);