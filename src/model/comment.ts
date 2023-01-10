import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'int'})
    public homeId: number;
    @Column({type: 'int'})
    public userId: number;
    @Column({type: 'varchar'})
    public comment: string;
}