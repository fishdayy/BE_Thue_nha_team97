import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Homes {
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'varchar'})
    public name: string;
    @Column({type: 'int'})
    public price: number;
    @Column({type: 'varchar'})
    public address: string;
    @Column({type: 'varchar'})
    public description: string;
    @Column({type: 'int'})
    public categoryId: number;
    @Column({type: 'int'})
    public bedroom: number;
    @Column({type: 'int'})
    public bathroom: number;
    @Column({type: 'varchar', default: 'Available'})
    public status: string;
    @Column({type: 'int'})
    public userId: number;
    @Column({type: 'varchar', default: "https://a0.muscache.com/im/pictures/9eef66f8-2b2a-4be1-8e84-a7785a4b94c4.jpg?im_w=720"})
    public avatar: string;
}