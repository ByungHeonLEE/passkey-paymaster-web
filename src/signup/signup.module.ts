import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [SignupService],
  controllers: [SignupController],
  exports: [SignupService, TypeOrmModule]
})
export class SignupModule { }
