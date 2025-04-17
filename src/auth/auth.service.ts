import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(){
    return "I am signed UP";
}

login() {
    return {
        ms : "Hello msg",
        age : 18 //this is the object which is going to displat if you followed the route localhost:3333/auth/login
    };
}
}