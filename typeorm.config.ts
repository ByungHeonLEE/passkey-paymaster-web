import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { UserEntity } from "src/entity/user.entity";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: "127.0.0.1",
    port: 3333,
    username: "root",
    database: "testdb",
    entities: [UserEntity],
    synchronize: true,
}