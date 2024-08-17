import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private jwtService : JwtService){}

    async canActivate(context : ExecutionContext) : Promise<boolean>{
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        console.log(token);
        if(!token){
            throw new UnauthorizedException("Token not found");
        }
        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {secret : "yash123"}
            )
            request.user = payload;
        } catch (error) {
            throw new UnauthorizedException(error);
        }

        return true;
    }

    private extractTokenFromHeader(req : Request):string | undefined{
        const authHeader = req.headers.authorization;
        if(!authHeader){
            return null;
        }
        const [type , token] = authHeader.split(' ');
        return type==="Bearer" ? token : null;
    }
}