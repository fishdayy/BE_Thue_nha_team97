import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class HomesDays{
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'int'})
    public homeId: number;
    @Column({type: 'varchar'})
    public time: string;
}