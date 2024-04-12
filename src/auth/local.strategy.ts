import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'email',
            passwordField: 'pw'
        }
        );
    }

    async validate(email: string, pw: string): Promise<any> {
        const user = await this.authService.verifyUser(email, pw);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}