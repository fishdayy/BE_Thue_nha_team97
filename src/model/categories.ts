import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Categories {
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'varchar'})
    public name: string;
}