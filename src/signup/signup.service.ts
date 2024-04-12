import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entity/user.entity';

@Injectable()
export class SignupService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) { }

    public async createUser(user: UserEntity): Promise<UserEntity> {
        const newUser = this.userRepository.create(user);
        return await this.userRepository.save(newUser);
    }

    public async deleteUser(id: string): Promise<string> {
        await this.userRepository.delete(id);
        return id;
    }

    public async findUser(email: string): Promise<UserEntity> {
        return await this.userRepository.findOne({
            where: {
                Email: email
            }
        });
    }

    public async findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    public async updateUser(id: string, user: UserEntity): Promise<string> {
        await this.userRepository.update(id, user);
        return id;
    }

    public async verifyUser(email: string, pw: string): Promise<any> {
        const user = await this.findUser(email);
        if (user && user.Pw === pw) {
            const { Pw, ...result } = user;
            return result;
        }
    }
}

