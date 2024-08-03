import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Users } from './schemas/signup.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Users.name) private userModel: Model<Users>,
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
        try {
            const user = await this.userModel.findOne({username});

            if(user && user.password === password){
                return user;
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
