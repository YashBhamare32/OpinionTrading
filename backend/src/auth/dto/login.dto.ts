import { ApiProperty } from "@nestjs/swagger"

export class LoginDto{
    @ApiProperty({example:"User1" , description:"Username of the user"})
    username:string

    @ApiProperty({example:"password123" , description:"Password of the user"})
    password:string

}