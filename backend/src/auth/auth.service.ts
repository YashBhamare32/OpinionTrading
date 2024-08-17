import { BadRequestException, Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Model } from 'mongoose';
import { Users } from './schemas/signup.schema';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './Guards/auth.guard';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Users.name) private userModel: Model<Users>,
        private readonly jwtService : JwtService
    ){}

    async createUser(signupBody){
        const {username , password , mobile ,email , firstName , lastName} = signupBody;
        try {
            const prevUser = await this.userModel.findOne({username:username});
    
            if(prevUser){
                throw new BadRequestException("User already exists");
            }

            const newUser = new this.userModel({
                username,
                password,
                mobile,
                email,
                firstName,
                lastName
            })
            return await newUser.save();
            
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async login(loginDto){
        const {username , password} = loginDto;
        const tokenObj = {username , password};
        console.log(tokenObj);
        try {
            const user = await this.userModel.findOne({username});
            const firstName = user.firstName;
            if(user && user.password === password){
                const token = await this.jwtService.sign(tokenObj);
                return {firstName , token};
            }else{
                throw new UnauthorizedException("Username or password is invalid");
            }
        } catch (error) {
            throw new UnauthorizedException(error);
        }
    }
  
    async getUsers(){
        const users = this.userModel.find();
        return users;
    }
}
