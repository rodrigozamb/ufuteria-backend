import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";


@Entity('badges')
export class Badge{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    foto_url: string;

    @ManyToMany(() => User, (user) => user.badges, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    users: User[];
}