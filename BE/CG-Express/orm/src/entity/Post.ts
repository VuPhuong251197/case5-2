import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'longtext'})
    content: string;

    @Column({ type: 'varchar', length: 255 })
    description: string;

    @Column({ type: 'varchar', length: 255 })
    images: string;

    @Column({type: 'bool', name: 'is_private'})
    isPrivate: boolean;

    @Column({ type: 'timestamp', name: 'created_date', update: false })
    createdDate: string;

    @Column({ type: 'timestamp', name: 'updated_date' })
    updatedDate: string;

    @ManyToOne(() => User,(user) => user.id)
    user: User
}