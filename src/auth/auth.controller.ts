import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
    constructor(private authService : AuthService){
        //this.authService.test();
    }

    @Post('signup')
    signup(@Body() dto : AuthDto){
        console.log({
            dto,
        });
        return this.authService.signup();
    }

    @Post('login')
    login(){
        return this.authService.login();
    }
}