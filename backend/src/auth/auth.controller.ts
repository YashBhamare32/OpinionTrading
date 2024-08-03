import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}

    @Post('/signup')
    createUser(@Body() signupDto : SignupDto){
        const user = this.authService.createUser(signupDto);
        return user;
    }

    @Post('login')
    login(@Body() loginDto : LoginDto){
        return this.authService.login(loginDto);
    } 

    @Get('/getUsers')
    findAll(){
        return this.authService.getUsers();
    }
}
