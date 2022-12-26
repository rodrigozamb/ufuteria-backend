import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('captains')
export class Captain {


    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar'
    })
    email: string;


    @Column({
        type: 'varchar'
    })
    password: string;

}