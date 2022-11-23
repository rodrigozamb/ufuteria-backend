import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import DbAwareType from '../../../utils/DbAwareType.decorator';
import { Badge } from '../../badges/entities/badge.entity';


export enum UserStatuses {
    INACTIVE = 'inactive',
    ACTIVE = 'active'
}


@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type:"varchar"
    })
    nome: string;

    @Column({
        type: DbAwareType('timestamp'),
        transformer: {
          from: (value: Date) => value?.toISOString(),
          to: (value) => value,
        },
    })
    data_nasc: Date;

    @Column({
        type:"varchar"
    })
    curso: string;

    @Column({
        type:"varchar"
    })
    fone: string;

    @Column({
        type:"varchar"
    })
    apelido: string;

    @Column({
        type:"varchar",
        unique: true
    })
    cpf: string;

    @Column({
        type:"varchar"
    })
    plan: string;

    @Column({
        type: DbAwareType('timestamp'),
        transformer: {
          from: (value: Date) => value?.toISOString(),
          to: (value) => value,
        },
    })
    data_associacao: Date;

    @Column({
        type: DbAwareType('enum'),
        enum: UserStatuses,
        default: UserStatuses.INACTIVE,
      })
    status: string;

    @Column({
        type:"varchar"
    })
    foto_url: string;

    @ManyToMany(() => Badge, (badge) => badge.users, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinTable({
        name: 'user_badges'
    })
    badges: Badge[];

}