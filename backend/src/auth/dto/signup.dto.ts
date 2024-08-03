import { ApiProperty } from "@nestjs/swagger"

export class SignupDto{
    @ApiProperty({example:"User1" , description:"Username of the user"})
    username:string

    @ApiProperty({example:"password123" , description:"Password of the user"})
    password:string

    @ApiProperty({example:"1234567890" , description:"Mobile no of the user"})
    mobile : number

    @ApiProperty({example:"user@gmail.com" , description:"Email Id of the user"})
    email : string

    @ApiProperty({example:"User" , description:"First Name of the user"})
    firstName : string

    @ApiProperty({example:"User" , description:"Last Name of the user"})
    lastName : string
}