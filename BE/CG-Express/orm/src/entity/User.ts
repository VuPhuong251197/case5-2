import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, name: 'first_name' })
    firstName: string;

    @Column({ type: 'varchar', length: 255, name: 'last_name' })
    lastName: string;

    @Column({ type: 'varchar', length: 255, name: 'phone_number'})
    phoneNumber: string;

    @Column({type: 'varchar', length: 255, unique:true})
    email: string;

    @Column({type: 'varchar', length: 255})
    password: string;

    @Column({ type: 'timestamp', name: 'created_date', update: false })
    createdDate: string;

    @Column({ type: 'timestamp', name: 'updated_date' })
    updatedDate: string;

    @Column()
    role: string;


}
