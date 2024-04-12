import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'UserInfo' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    Email!: string;

    @Column()
    PublicKey: string = 'not yet';

    @Column()
    Pw!: string;

    @Column()
    Credential: string = 'not yet';
}