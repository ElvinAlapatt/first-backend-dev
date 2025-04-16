import { Injectable } from "@nestjs/common";
import { Post } from "@nestjs/common";

@Injectable({})
export class AuthService{

    signup(){
        return "I am signed UP";
    }

    login() {
        return {
            ms : "Hello msg",
            age : 18
        };
    }
}