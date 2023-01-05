import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Contracts {
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'int'})
    public userId: number;
    @Column({type: 'int'})
    public homeId: number;
    @Column({type: 'int'})
    public totalPrice: number;
    @Column({type: 'varchar'})
    public timeStart: string;
    @Column({type: 'varchar'})
    public timeEnd: string;
}