import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SignupService } from './signup.service';
import { UserEntity } from 'src/entity/user.entity';

@Controller('signup')
export class SignupController {
    constructor(private readonly signUpService: SignupService) { }

    // Post 요청으로 회원가입하는 것
    // 단순하게 이메일이랑 비밀번호만 받아서 저장하고
    @Post('/create-user')
    async signUp(@Body() user: UserEntity): Promise<UserEntity> {
        return await this.signUpService.createUser(user);
    }

    @Get()
    async findAll(): Promise<UserEntity[]> {
        return this.signUpService.findAll();
    }

    // Post 요청으로 회원가입한 애 중에 패스키를 등록할 수 있게 해주는 것
    @Post()
    registerPasskey(): Promise<any> {
        return;
    }

    //Signin 하는 로직도 만들어주자. 
    @Post('/verify-user')
    async signIn(@Body() data: { email: string, pw: string }): Promise<any> {
        //response -> server에 요청 -> 
        return;
    }
}
