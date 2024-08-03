import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/signup.schema';
import { AuthController } from './auth.controller';

@Module({
  imports:[
    MongooseModule.forRoot("mongodb+srv://bobbybhamare32:Bobby%402032@yash.wdjwqmp.mongodb.net/OpinionTrading"),
    MongooseModule.forFeature([{name : "Users" , schema : UserSchema}]),
  ],
  providers: [AuthService],
  controllers:[AuthController]
})
export class AuthModule {}
