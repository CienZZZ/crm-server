import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Contact } from '../models/contact';

@Entity({name: 'contact'})
export class ContactEntity implements Contact {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    company_id: number;

    @Column({
        nullable: false,
        unique: true
    })
    name: string;

    @Column()
    business_email: string;

    @Column()
    created_by: string;
}