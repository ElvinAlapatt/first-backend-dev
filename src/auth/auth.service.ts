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
        age : 18
    };
}
}