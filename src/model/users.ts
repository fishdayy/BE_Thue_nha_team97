import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'varchar'})
    public username: string;
    @Column({type: 'varchar'})
    public password: string;
    @Column({type: 'varchar', default: "Your Name"})
    public fullName: string;
    @Column({type: 'varchar', default: "Your Address"})
    public address: string;
    @Column({type: 'varchar', default: "Your Phone"})
    public phone: string;
    @Column({type: 'varchar', default: "Your Job"})
    public job: string;
    @Column({type: 'varchar', default: "Your Email"})
    public email: string;
    @Column({type: 'varchar', default: "https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"})
    public avatar: string;
}