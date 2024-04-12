import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';
import { BlockchainModule } from './blockchain/blockchain.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from '../typeorm.config';
import { DataSource } from 'typeorm';

@Module({
  imports: [SignupModule, BlockchainModule, AuthModule, TypeOrmModule.forRoot(typeORMConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
