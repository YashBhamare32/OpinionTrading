import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './Guards/auth.guard';

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

    @UseGuards(AuthGuard)
    @Get('/getUsers')
    findAll(){
        return this.authService.getUsers();
    }
}
