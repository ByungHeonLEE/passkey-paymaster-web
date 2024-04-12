import { Injectable } from '@nestjs/common';
import { SignupService } from '../signup/signup.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly signupService: SignupService,
        private jwtService: JwtService
    ) { }

    public async verifyUser(email: string, pw: string): Promise<any> {
        const user = await this.signupService.findUser(email);
        if (user && user.Pw === pw) {
            const { Pw, ...result } = user;
            return result;
        }
    }

    async login(user: any) {
        const payload = { username: user.Email, sub: user.Id };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
