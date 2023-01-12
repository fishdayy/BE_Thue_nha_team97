import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Notification {
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'varchar'})
    public username: string;
    @Column({type: 'int'})
    public homeId: number;
    @Column({type: 'varchar'})
    public content: string;
    @Column({type: 'varchar'})
    public time: string;
}